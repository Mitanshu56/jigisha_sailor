import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ScaleIcon, 
  ShieldCheckIcon, 
  HeartIcon,
  ArrowDownIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fullText = 'Advocate';

  useEffect(() => {
    if (inView) {
      const startTyping = () => {
        setIsTyping(true);
        let currentIndex = 0;
        
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayedText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            
            // Wait 2 seconds before restarting
            setTimeout(() => {
              setDisplayedText('');
              startTyping();
            }, 2000);
          }
        }, 200); // Typing speed - 200ms per character
      };
      
      startTyping();
    }
  }, [inView]);

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

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const questions = [
    { icon: ScaleIcon, text: "Need legal guidance?" },
    { icon: ShieldCheckIcon, text: "Confused about your rights?" },
    { icon: HeartIcon, text: "Seeking justice for women's issues?" }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      ref={ref}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 empowerment-triangle opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-20 empowerment-diamond opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [45, 50, 45]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-6 h-6 bg-gold-500 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start min-h-screen py-12 lg:py-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:pr-12 xl:pr-16 mt-12 lg:mt-20"
            variants={leftVariants}
          >
            {/* Main Heading */}
            <motion.div variants={textVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight hero-text-shadow">
                <span className="block">
                  {displayedText}
                  <motion.span
                    className="inline-block w-1 h-12 md:h-14 lg:h-16 bg-gold-400 ml-2"
                    animate={{
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </span>
                <span className="block text-gradient">Jigisha T. Sailor</span>
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-gold rounded-full"></div>
                <p className="text-xl text-white/90 font-medium">
                  Advocate | Legal Consultant | Women Rights Supporter
                </p>
              </div>
            </motion.div>

            {/* Empowering Questions */}
            <motion.div variants={textVariants} className="space-y-4">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-500/30">
                    <question.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-lg font-medium">{question.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-lg text-white/80 leading-relaxed max-w-lg"
            >
              With years of dedicated experience in Family Law, Women Rights, and Civil Matters, 
              I provide compassionate and effective legal representation for those who need it most.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary text-lg px-10 py-5 shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                Book a Consultation
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary text-lg px-10 py-5 border-white/30 text-white hover:bg-white hover:text-charcoal-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                Learn More About Me
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={textVariants}
              className="flex items-center space-x-8 text-white/70 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-sm">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Photo */}
          <motion.div
            className="relative flex justify-center lg:justify-start items-start lg:mt-32"
            variants={rightVariants}
          >
            {/* Photo Container with Elegant Frame */}
            <div className="relative">
              {/* Decorative Background */}
              <motion.div
                className="absolute -inset-6 bg-gradient-gold rounded-3xl opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Main Photo Frame */}
              <motion.div
                className="relative w-80 h-96 md:w-96 md:h-112 lg:w-96 lg:h-112 xl:w-112 xl:h-128 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Professional Photo - Replace with your image */}
                <img 
                  src="/images/jigisha.jpg" 
                  alt="Adv. Jigisha T. Sailor - Professional Portrait"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', e.target.src);
                    e.target.nextElementSibling.style.display = 'none';
                  }}
                />
                
                {/* Fallback placeholder (shown when image fails) */}
                <div className="w-full h-full bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center" style={{display: 'flex'}}>
                  <div className="text-center text-white/80">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gold-500/20 rounded-full flex items-center justify-center">
                      <ScaleIcon className="w-12 h-12 text-gold-400" />
                    </div>
                    <p className="text-lg font-playfair">Professional Photo</p>
                    <p className="text-sm opacity-75">Adv. Jigisha T. Sailor</p>
                    <p className="text-xs opacity-50 mt-2">Image: /images/jigisha.jpg</p>
                  </div>
                </div>
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold-400"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold-400"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold-400"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/70 hover:text-gold-400 transition-colors duration-300"
            whileHover={{ y: -5 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium mb-2">Discover More</span>
            <ArrowDownIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;