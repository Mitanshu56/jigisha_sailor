import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon,
  ScaleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href, offset = 80) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 dark:bg-charcoal-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-none px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg shadow-lg ring-2 ring-gold-200 dark:ring-gold-800">
              <ScaleIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-xl font-playfair font-bold text-white leading-tight">
                Jigisha T. Sailor
              </h1>
              <p className="text-xs text-gold-600 dark:text-gold-400 font-medium tracking-wide">
                Advocate & Legal Consultant
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium py-1 px-1 text-white dark:text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
                variants={linkVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Quick Contact */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="tel:+91XXXXXXXXX"
                className="flex items-center space-x-1 text-xs font-medium text-white dark:text-charcoal-300 hover:text-gold-400 transition-colors duration-300 py-1 px-2 rounded-lg hover:bg-white/10 dark:hover:bg-charcoal-800"
                whileHover={{ scale: 1.05 }}
                aria-label="Call Advocate Jigisha T. Sailor"
              >
                <PhoneIcon className="w-3 h-3" />
                <span className="hidden xl:inline">+91-8238544576</span>
              </motion.a>
              
              <motion.a
                href="mailto:jigisha.sailor@gmail.com"
                className="flex items-center space-x-1 text-xs font-medium text-white dark:text-charcoal-300 hover:text-gold-400 transition-colors duration-300 py-1 px-2 rounded-lg hover:bg-white/10 dark:hover:bg-charcoal-800"
                whileHover={{ scale: 1.05 }}
                aria-label="Email Advocate Jigisha T. Sailor"
              >
                <EnvelopeIcon className="w-3 h-3" />
                <span className="hidden xl:inline">Email</span>
              </motion.a>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-charcoal-800 hover:bg-gray-300 dark:hover:bg-charcoal-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SunIcon className="w-4 h-4 text-gold-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MoonIcon className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Enhanced Consultation CTA */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg shadow-lg hover:shadow-xl hover:from-gold-600 hover:to-gold-700 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-500/50 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="relative z-10 flex items-center space-x-1">
                <ScaleIcon className="w-4 h-4" />
                <span>Book Consultant</span>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg blur-sm opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-charcoal-800 hover:bg-gray-300 dark:hover:bg-charcoal-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <SunIcon className="w-4 h-4 text-gold-500" />
              ) : (
                <MoonIcon className="w-4 h-4 text-white" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white dark:text-charcoal-300 hover:text-gold-400 hover:bg-white/10 dark:hover:bg-charcoal-800 transition-colors duration-300 border border-white/20 dark:border-charcoal-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-6 space-y-1 bg-white dark:bg-charcoal-900 rounded-lg shadow-xl border border-gray-100 dark:border-charcoal-800">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-white dark:text-charcoal-300 hover:text-gold-400 hover:bg-white/10 dark:hover:bg-charcoal-800 rounded-md transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="px-4 py-3 border-t border-gray-100 dark:border-charcoal-800">
                  <div className="space-y-2">
                    <a
                      href="tel:+91XXXXXXXXX"
                      className="flex items-center space-x-2 text-sm text-white dark:text-charcoal-300 hover:text-gold-400"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span>+91-XXXXX-XXXXX</span>
                    </a>
                    <a
                      href="mailto:jigisha.sailor@gmail.com"
                      className="flex items-center space-x-2 text-sm text-white dark:text-charcoal-300 hover:text-gold-400"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      <span>jigisha.sailor@gmail.com</span>
                    </a>
                  </div>
                  
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full mt-4 relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg shadow-lg hover:shadow-xl hover:from-gold-600 hover:to-gold-700 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-500/50 overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-1">
                      <ScaleIcon className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;