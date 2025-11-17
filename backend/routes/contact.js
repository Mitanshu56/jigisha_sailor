const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter configuration
const createEmailTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Email credentials not configured');
    return null;
  }

  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s\.]+$/)
    .withMessage('Name can only contain letters, spaces, and dots'),
  
  body('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 255 })
    .withMessage('Email address is too long'),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\+]?[\d\s\-\(\)]{10,15}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters'),
  
  body('legalArea')
    .optional()
    .isIn(['Family Law', 'Civil Matters', 'Women Rights', 'Property Law', 'Legal Consultation', 'Other'])
    .withMessage('Invalid legal area selected'),
  
  body('urgency')
    .optional()
    .isIn(['Low', 'Medium', 'High', 'Urgent'])
    .withMessage('Invalid urgency level selected')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, phone, message, subject, legalArea, urgency } = req.body;

    // Get client IP and user agent for security logging
    const ipAddress = req.headers['x-forwarded-for'] || 
                     req.connection.remoteAddress || 
                     req.socket.remoteAddress ||
                     (req.connection.socket ? req.connection.socket.remoteAddress : null);
    const userAgent = req.headers['user-agent'];

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      phone,
      message,
      subject: subject || 'Legal Consultation Inquiry',
      legalArea: legalArea || 'Legal Consultation',
      urgency: urgency || 'Medium',
      ipAddress,
      userAgent
    });

    // Save to database
    const savedContact = await contact.save();

    // Send email notification
    await sendEmailNotification({
      name,
      email,
      phone,
      message,
      subject: subject || 'Legal Consultation Inquiry',
      legalArea: legalArea || 'Legal Consultation',
      urgency: urgency || 'Medium',
      contactId: savedContact._id
    });

    // Send auto-reply to client
    await sendAutoReply({
      clientEmail: email,
      clientName: name,
      legalArea: legalArea || 'Legal Consultation'
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully! Adv. Jigisha T. Sailor will get back to you soon.',
      data: {
        contactId: savedContact._id,
        submittedAt: savedContact.createdAt,
        urgency: savedContact.urgency
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'Unable to submit your message at this time. Please try again later or contact directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/contact/stats - Get contact statistics (for admin use)
router.get('/stats', async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: null,
          totalContacts: { $sum: 1 },
          unreadContacts: { $sum: { $cond: [{ $eq: ['$isRead', false] }, 1, 0] } },
          urgentContacts: { $sum: { $cond: [{ $eq: ['$urgency', 'Urgent'] }, 1, 0] } },
          thisMonth: {
            $sum: {
              $cond: [
                {
                  $gte: ['$createdAt', new Date(new Date().getFullYear(), new Date().getMonth(), 1)]
                },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    const legalAreaStats = await Contact.aggregate([
      {
        $group: {
          _id: '$legalArea',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || { totalContacts: 0, unreadContacts: 0, urgentContacts: 0, thisMonth: 0 },
        legalAreas: legalAreaStats
      }
    });

  } catch (error) {
    console.error('Stats retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Helper function to send email notification to advocate
async function sendEmailNotification({ name, email, phone, message, subject, legalArea, urgency, contactId }) {
  const transporter = createEmailTransporter();
  if (!transporter) {
    console.warn('⚠️  Skipping email notification - no transporter configured');
    return;
  }

  try {
    const urgencyEmoji = {
      'Low': '🟢',
      'Medium': '🟡',
      'High': '🟠',
      'Urgent': '🔴'
    };

    const mailOptions = {
      from: `"Jigisha Sailor Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'jigisha.sailor@gmail.com',
      subject: `${urgencyEmoji[urgency]} New ${urgency} Priority Contact: ${legalArea}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #d4af37;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px; color: #d4af37;">New Client Inquiry</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Portfolio Contact Form Submission</p>
          </div>
          
          <div style="padding: 20px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 8px 0; color: #1a1a1a;"><a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Legal Area:</td>
                  <td style="padding: 8px 0; color: #1a1a1a;">${legalArea}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Priority:</td>
                  <td style="padding: 8px 0; color: #1a1a1a;">${urgencyEmoji[urgency]} ${urgency}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1a1a1a; margin: 0 0 10px 0;">Subject:</h3>
              <p style="margin: 0; font-size: 16px; color: #333; font-style: italic;">"${subject}"</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1a1a1a; margin: 0 0 15px 0;">Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37;">
                <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 1px solid #ddd; margin-top: 30px;">
            <p style="margin: 0; color: #666; font-size: 14px;">Contact ID: <strong>${contactId}</strong></p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Received: ${new Date().toLocaleDateString('en-IN', { 
              year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
            })}</p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent:', info.messageId);

  } catch (error) {
    console.error('❌ Email notification failed:', error.message);
    // Don't throw error - form submission should succeed even if email fails
  }
}

// Helper function to send auto-reply to client
async function sendAutoReply({ clientEmail, clientName, legalArea }) {
  const transporter = createEmailTransporter();
  if (!transporter) {
    console.warn('⚠️  Skipping auto-reply - no transporter configured');
    return;
  }

  try {
    const mailOptions = {
      from: `"Adv. Jigisha T. Sailor" <${process.env.EMAIL_USER}>`,
      to: clientEmail,
      subject: 'Thank You for Contacting Adv. Jigisha T. Sailor - Your Inquiry Received',
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 40px; text-align: center;">
            <h1 style="margin: 0; font-size: 32px; color: #d4af37; font-family: 'Playfair Display', serif;">Adv. Jigisha T. Sailor</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Advocate | Legal Consultant | Women Rights Supporter</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 24px;">Dear ${clientName},</h2>
            
            <p style="margin: 0 0 20px 0; line-height: 1.6; color: #333; font-size: 16px;">
              Thank you for reaching out regarding <strong>${legalArea}</strong>. Your inquiry has been successfully received and is very important to us.
            </p>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #d4af37;">
              <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px;">What happens next:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #333; line-height: 1.8;">
                <li>I will personally review your case within <strong>24 hours</strong></li>
                <li>You will receive a detailed response with initial legal guidance</li>
                <li>If needed, we can schedule a consultation to discuss your case further</li>
                <li>All communications will be kept strictly confidential</li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 25px; border-radius: 8px; margin: 25px 0;">
              <h3 style="margin: 0 0 15px 0; color: #d4af37;">Emergency Legal Assistance</h3>
              <p style="margin: 0 0 10px 0; line-height: 1.6;">If your matter is urgent and requires immediate attention, please call:</p>
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: #d4af37;">📞 +91-XXXXX-XXXXX</p>
            </div>
            
            <blockquote style="background: #f8f9fa; margin: 25px 0; padding: 20px; border-left: 4px solid #d4af37; font-style: italic; color: #555; font-size: 16px;">
              "Justice delayed is justice denied. I am committed to providing timely, effective, and compassionate legal support for all my clients, especially in matters concerning women's rights and family law."
              <footer style="text-align: right; margin-top: 10px; font-weight: bold; color: #1a1a1a;">- Adv. Jigisha T. Sailor</footer>
            </blockquote>
            
            <p style="margin: 20px 0; line-height: 1.6; color: #333;">
              I look forward to assisting you with your legal needs and working together towards a positive resolution.
            </p>
            
            <p style="margin: 0; line-height: 1.6; color: #333;">
              With warm regards,<br>
              <strong style="color: #d4af37;">Adv. Jigisha T. Sailor</strong>
            </p>
          </div>
          
          <div style="border-top: 1px solid #ddd; padding: 20px; text-align: center; background: #f8f9fa;">
            <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
              <strong>Office Address:</strong> [Your Office Address Here]
            </p>
            <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
              <strong>Email:</strong> jigisha.sailor@gmail.com | <strong>Phone:</strong> +91-XXXXX-XXXXX
            </p>
            <p style="margin: 0; color: #999; font-size: 12px; font-style: italic;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent:', info.messageId);

  } catch (error) {
    console.error('❌ Auto-reply failed:', error.message);
    // Don't throw error - form submission should succeed even if auto-reply fails
  }
}

module.exports = router;