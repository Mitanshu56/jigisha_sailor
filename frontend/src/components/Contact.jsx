import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      info: "+91-XXXXX-XXXXX",
      description: "Available 24/7 for emergencies",
      link: "tel:+91XXXXXXXXX",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      info: "jigisha.sailor@gmail.com",
      description: "Preferred for non-urgent matters",
      link: "mailto:jigisha.sailor@gmail.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPinIcon,
      title: "Office",
      info: "123 Legal Complex, City Center",
      description: "By appointment only",
      link: "#",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ClockIcon,
      title: "Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Saturday consultations available",
      link: "#",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const legalAreas = [
    "Family Law",
    "Civil Matters", 
    "Women Rights",
    "Property Law",
    "Legal Consultation",
    "Other"
  ];

  const urgencyLevels = [
    { value: "Low", label: "Low - General inquiry" },
    { value: "Medium", label: "Medium - Need guidance" },
    { value: "High", label: "High - Urgent consultation needed" },
    { value: "Urgent", label: "Urgent - Emergency legal support" }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', {
        ...data,
        subject: data.subject || `${data.legalArea} Consultation Request`
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 seconds timeout
      });

      if (response.data.success) {
        setSubmitStatus('success');
        reset();
        toast.success(
          response.data.message || 
          'Your message has been sent successfully! Adv. Jigisha T. Sailor will get back to you soon.',
          {
            duration: 6000,
            icon: '✨'
          }
        );
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      
      let errorMessage = 'Failed to send your message. Please try again later.';
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.errors) {
        errorMessage = error.response.data.errors.join(', ');
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (error.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your internet connection.';
      }

      toast.error(errorMessage, {
        duration: 8000,
        icon: '⚠️'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-black text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gold-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-gold-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                Get Legal Support
              </h2>
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-gold-400 ml-4" />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to take the first step? I'm here to listen, understand, and provide 
              the legal guidance you need. Your consultation is completely confidential.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-4`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-gold-300 font-medium mb-1">{info.info}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-gold-300">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                          },
                          maxLength: {
                            value: 100,
                            message: "Name cannot exceed 100 characters"
                          },
                          pattern: {
                            value: /^[a-zA-Z\s\.]+$/,
                            message: "Name can only contain letters, spaces, and dots"
                          }
                        })}
                        className="form-input bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400 flex items-center"
                        >
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address"
                          }
                        })}
                        className="form-input bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400 flex items-center"
                        >
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Legal Area Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[\+]?[\d\s\-\(\)]{10,15}$/,
                            message: "Please enter a valid phone number"
                          }
                        })}
                        className="form-input bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                        placeholder="+91-XXXXX-XXXXX"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400 flex items-center"
                        >
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          {errors.phone.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="legalArea" className="block text-sm font-medium mb-2 text-gray-300">
                        Legal Area
                      </label>
                      <select
                        id="legalArea"
                        {...register("legalArea")}
                        className="form-input bg-white/10 border-white/20 text-white focus:border-gold-500"
                      >
                        {legalAreas.map((area) => (
                          <option key={area} value={area} className="bg-charcoal-900 text-white">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject and Urgency */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register("subject", {
                          maxLength: {
                            value: 200,
                            message: "Subject cannot exceed 200 characters"
                          }
                        })}
                        className="form-input bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                        placeholder="Brief subject of your inquiry"
                      />
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400 flex items-center"
                        >
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          {errors.subject.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium mb-2 text-gray-300">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        {...register("urgency")}
                        className="form-input bg-white/10 border-white/20 text-white focus:border-gold-500"
                      >
                        {urgencyLevels.map((level) => (
                          <option key={level.value} value={level.value} className="bg-charcoal-900 text-white">
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        },
                        maxLength: {
                          value: 2000,
                          message: "Message cannot exceed 2000 characters"
                        }
                      })}
                      className="form-textarea bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500 resize-none"
                      placeholder="Please describe your legal situation or question in detail. The more information you provide, the better I can assist you."
                    />
                    <div className="flex justify-between items-center mt-2">
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 flex items-center"
                        >
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          {errors.message.message}
                        </motion.p>
                      )}
                      <span className="text-xs text-gray-400 ml-auto">
                        {watch('message')?.length || 0}/2000
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary text-lg py-4 ${
                      isSubmitting 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:shadow-2xl hover:shadow-gold-500/25'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending Message...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <PaperAirplaneIcon className="w-5 h-5 mr-3" />
                          Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Success/Error Messages */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-4 rounded-lg flex items-center space-x-3 ${
                          submitStatus === 'success' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
                        )}
                        <span className="text-sm">
                          {submitStatus === 'success' 
                            ? 'Your message has been sent successfully! I will get back to you within 24 hours.'
                            : 'There was an error sending your message. Please try again or contact me directly.'
                          }
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & Additional Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Why Choose Me */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-gold-300">
                  Why Choose My Legal Services?
                </h3>
                <ul className="space-y-4">
                  {[
                    "15+ years of specialized experience in family law and women's rights",
                    "Confidential and compassionate consultation approach",
                    "95% success rate in cases handled",
                    "Free initial consultation for women in distress",
                    "24/7 emergency legal support availability",
                    "Multilingual support (English, Hindi, Gujarati)"
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30">
                <h3 className="text-xl font-playfair font-bold mb-4 text-red-300 flex items-center">
                  <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
                  Emergency Legal Support
                </h3>
                <p className="text-gray-300 mb-4">
                  If you're facing an immediate legal emergency, especially related to domestic violence 
                  or urgent women's rights issues, don't hesitate to contact me directly.
                </p>
                <div className="space-y-2">
                  <p className="text-red-300 font-medium">Emergency Hotline: +91-XXXXX-XXXXX</p>
                  <p className="text-sm text-gray-400">Available 24/7 for urgent legal matters</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <blockquote className="text-lg italic text-gray-300 leading-relaxed mb-4">
                  "Adv. Jigisha Sailor not only provided excellent legal representation but also gave me 
                  the emotional support I needed during my divorce proceedings. Her expertise and compassion 
                  made all the difference."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A.S.</span>
                  </div>
                  <div>
                    <cite className="text-gold-300 font-medium not-italic">Anonymous Client</cite>
                    <p className="text-sm text-gray-400">Family Law Case, 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;