import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ScaleIcon,
  HeartIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jigisha-sailor",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com/jigisha.sailor",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jigisha_sailor",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/jigisha_sailor",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.814.107 4.086.278 3.45.525a5.566 5.566 0 00-2.011 1.308 5.566 5.566 0 00-1.308 2.011C.032 4.48-.139 5.208-.092 6.271-.044 7.338-.032 7.678-.032 10.396s.012 3.057.06 4.123c.047 1.064.218 1.791.465 2.427a5.566 5.566 0 001.308 2.011 5.566 5.566 0 002.011 1.308c.636.247 1.363.418 2.427.465 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c1.064-.047 1.791-.218 2.427-.465a5.566 5.566 0 002.011-1.308 5.566 5.566 0 001.308-2.011c.247-.636.418-1.363.465-2.427.048-1.066.06-1.406.06-4.123s-.012-3.057-.06-4.123C19.851 5.208 19.68 4.481 19.433 3.845a5.566 5.566 0 00-1.308-2.011A5.566 5.566 0 0016.114.526C15.478.279 14.751.108 13.687.06 12.62.012 12.28 0 9.604 0H10zm-.03 1.8c2.675 0 2.99.01 4.042.059.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.041 0 2.672-.01 2.988-.058 4.042-.045.975-.207 1.504-.344 1.857a3.097 3.097 0 01-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C7.014 1.81 7.33 1.8 10.001 1.8zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Women Empowerment", href: "#empowerment" },
    { name: "Contact", href: "#contact" }
  ];

  const legalServices = [
    "Family Law",
    "Women Rights Cases",
    "Civil Matters",
    "Property Law",
    "Legal Consultation",
    "Emergency Support"
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-charcoal-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-gold-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-600/10 rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="pt-8 pb-4"
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <ScaleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold">Jigisha T. Sailor</h3>
                  <p className="text-gold-400 text-sm font-medium">Legal Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Committed to providing exceptional legal services with integrity, compassion, 
                and unwavering dedication to justice, especially for women's rights and family law matters.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow on ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-playfair font-semibold text-gold-300 flex items-center">
                <span className="w-6 h-0.5 bg-gold-500 mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Services */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-playfair font-semibold text-gold-300 flex items-center">
                <span className="w-6 h-0.5 bg-gold-500 mr-3"></span>
                Legal Services
              </h4>
              <ul className="space-y-3">
                {legalServices.map((service) => (
                  <li key={service} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-playfair font-semibold text-gold-300 flex items-center">
                <span className="w-6 h-0.5 bg-gold-500 mr-3"></span>
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      123 Legal Complex, City Center<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-gold-400" />
                  <a 
                    href="tel:+91XXXXXXXXX" 
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    +91-8238544576
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-gold-400" />
                  <a 
                    href="mailto:jigisha.sailor@gmail.com" 
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    jigisha.sailor@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-gold-400" />
                  <div className="text-gray-300">
                    <p>Mon-Fri: 9AM-6PM</p>
                    <p className="text-sm opacity-75">Saturday: By appointment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4 border-t border-gray-800"
          >
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Adv. Jigisha T. Sailor. All rights reserved.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Top</span>
              <ArrowUpIcon className="w-4 h-4" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;