# 👩‍⚖️ Adv. Jigisha T. Sailor - Portfolio Website

A fully functional, modern portfolio website for **Advocate Jigisha T. Sailor**, built with the complete **MERN stack** (MongoDB, Express.js, React.js, Node.js). Designed with a luxurious black-and-white aesthetic, soft gold highlights, and powerful women-empowerment visual identity.

## ✨ Features

### 🎨 Design & UI/UX
- **Modern Luxurious Design**: Black-and-white aesthetic with elegant gold highlights
- **Responsive Design**: Perfect display across all devices (mobile, tablet, desktop)
- **Premium Typography**: Playfair Display for headings, Poppins/Inter for body text
- **Dark Mode**: Smooth toggle with Context API-based theme management
- **Accessibility**: ARIA labels, proper contrast ratios, keyboard navigation

### 🚀 Animations & Interactions
- **Framer Motion**: Smooth animations throughout the website
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive buttons, cards, and elements
- **Loading Animations**: Custom advocate-themed loader
- **Staggered Animations**: Beautiful timing for multiple elements
- **Page Transitions**: Smooth navigation between sections

### 📱 Sections & Components
- **Hero Section**: Split premium layout with professional photo and impactful text
- **About Section**: Biography, education, timeline, achievements
- **Practice Areas**: Animated cards for different legal specializations
- **Women Empowerment**: Dedicated section with quotes, stats, and highlights
- **Contact Form**: Full-featured form with validation and email notifications
- **Footer**: Comprehensive footer with social links and emergency contact

### ⚙️ Technical Features
- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Form Handling**: React Hook Form with validation
- **Email Service**: Nodemailer for contact form notifications
- **Database**: MongoDB with Mongoose schemas
- **Security**: CORS setup, input validation, rate limiting
- **SEO Optimized**: Meta tags, OG tags, structured data
- **Production Ready**: Optimized for deployment on Vercel/Render

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server  
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router Dom** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful notifications
- **React CountUp** - Animated counters
- **React Helmet Async** - SEO and meta tag management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending functionality
- **Express Validator** - Input validation middleware
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Rate Limiting** - Request rate limiting
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
jigisha_sailor/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── PracticeAreas.jsx
│   │   │   ├── WomenEmpowerment.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Loader.jsx
│   │   ├── context/          # React Context providers
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/            # Page components
│   │   │   └── Home.jsx
│   │   ├── assets/           # Static assets
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Public assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/                  # Node.js/Express backend
│   ├── models/               # Mongoose models
│   │   └── Contact.js
│   ├── routes/               # Express routes
│   │   └── contact.js
│   ├── middleware/           # Custom middleware
│   ├── server.js             # Main server file
│   ├── package.json
│   └── .env.example          # Environment variables template
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/jigisha_sailor.git
cd jigisha_sailor
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your configurations:
# - MongoDB connection string
# - Email credentials (Gmail SMTP)
# - Frontend URL for CORS

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (new terminal)
cd frontend

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env

# Start development server
npm run dev
```

### 4. Environment Configuration

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/jigisha-sailor
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=jigisha.sailor@gmail.com
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env) - Optional
```env
VITE_API_URL=http://localhost:5000
VITE_CONTACT_EMAIL=jigisha.sailor@gmail.com
VITE_CONTACT_PHONE=+91-XXXXX-XXXXX
```

## 📧 Email Setup

The contact form uses **Gmail SMTP** for sending emails. Setup required:

1. **Enable 2FA** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update .env** with your email and app password

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Build the frontend
cd frontend
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Backend Deployment (Render/Railway)
1. Create account on Render or Railway
2. Connect your GitHub repository
3. Set environment variables in dashboard
4. Deploy with automatic builds

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Get connection string
4. Update MONGODB_URI in production environment

## 🎨 Customization

### Colors & Branding
Update colors in `tailwind.config.js`:
```javascript
colors: {
  gold: {
    500: '#d4af37',  // Primary gold color
    // ... other shades
  },
  charcoal: {
    950: '#1a1a1a',  // Dark background
    // ... other shades
  }
}
```

### Content Updates
- **Personal Information**: Update in components and SEO meta tags
- **Practice Areas**: Modify in `PracticeAreas.jsx`
- **Contact Information**: Update in multiple components and environment variables
- **Social Links**: Update in `Footer.jsx`

## 🔒 Security Features

- **Input Validation**: Express Validator for all form inputs
- **Rate Limiting**: Prevents spam and abuse
- **CORS Protection**: Configured for specific origins
- **Helmet Security**: Security headers and protections
- **Email Sanitization**: Safe handling of contact form data

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1600px+

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap Ready**: Easy to generate sitemap
- **Performance Optimized**: Fast loading times

## 📊 Performance

- **Lazy Loading**: Components and images
- **Code Splitting**: Automatic chunking with Vite
- **Image Optimization**: Optimized images and formats
- **Caching**: Proper cache headers
- **Bundle Analysis**: Optimized bundle sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: jigisha.sailor@gmail.com
- **Phone**: +91-XXXXX-XXXXX
- **Issues**: GitHub Issues page

## 🙏 Acknowledgments

- **Heroicons** - Beautiful icon set
- **Tailwind CSS** - Excellent utility-first CSS framework  
- **Framer Motion** - Smooth animations
- **Unsplash** - Professional photography inspiration

---

**"Designed with Strength & Justice"** - Built with ❤️ for empowering women through legal advocacy.
