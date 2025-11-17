import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ size = 'default', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Justice Scale Animation */}
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${sizeClasses[size]} relative`}>
          {/* Scale Base */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 bg-gradient-gold rounded-full"
            style={{ height: '70%' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Scale Beam */}
          <motion.div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-gold rounded-full"
            style={{ width: '90%' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          
          {/* Left Pan */}
          <motion.div
            className="absolute top-0 left-1 w-4 h-4 border-2 border-gold-500 rounded-full bg-white dark:bg-charcoal-900"
            animate={{ 
              y: [0, -8, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Right Pan */}
          <motion.div
            className="absolute top-0 right-1 w-4 h-4 border-2 border-gold-500 rounded-full bg-white dark:bg-charcoal-900"
            animate={{ 
              y: [0, 8, 0],
              rotate: [5, -5, 5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Loading Dots */}
      <div className="flex space-x-2 mb-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-gold-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>

      {/* Loading Message */}
      <motion.p
        className="text-charcoal-700 dark:text-charcoal-300 font-medium text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {message}
      </motion.p>

      {/* Subtle Quote */}
      <motion.blockquote
        className="text-sm text-charcoal-500 dark:text-charcoal-400 text-center mt-4 max-w-xs italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        "Justice delayed is justice denied"
      </motion.blockquote>
    </div>
  );
};

export default Loader;