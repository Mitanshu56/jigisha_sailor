import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const WomenEmpowerment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const quotes = [
    {
      text: "Every woman deserves to know her rights and have access to justice.",
      author: "On Legal Empowerment"
    },
    {
      text: "Strength doesn't come from what you can do. It comes from overcoming the things you thought you couldn't do.",
      author: "On Women's Resilience"
    },
    {
      text: "In the pursuit of justice, we must ensure that no woman stands alone.",
      author: "On Support & Advocacy"
    }
  ];

  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Women Empowered",
      description: "Through free legal aid",
      icon: UserGroupIcon,
      color: "from-pink-500 to-rose-600"
    },
    {
      number: 85,
      suffix: "%",
      label: "Success Rate",
      description: "In women rights cases",
      icon: TrophyIcon,
      color: "from-purple-500 to-indigo-600"
    },
    {
      number: 50,
      suffix: "+",
      label: "Workshops Conducted",
      description: "Legal awareness programs",
      icon: AcademicCapIcon,
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Emergency legal helpline",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const achievements = [
    {
      icon: TrophyIcon,
      title: "Landmark Supreme Court Case",
      description: "Successfully argued a women's property rights case that set a precedent for future judgments.",
      year: "2015"
    },
    {
      icon: HandRaisedIcon,
      title: "Women's Legal Aid Initiative",
      description: "Founded free legal consultation program for underprivileged women in the community.",
      year: "2012"
    },
    {
      icon: AcademicCapIcon,
      title: "Legal Awareness Campaigns",
      description: "Conducted over 50 workshops on women's rights and legal literacy in rural areas.",
      year: "2018"
    },
    {
      icon: HeartIcon,
      title: "Domestic Violence Prevention",
      description: "Helped establish local support network for domestic violence survivors.",
      year: "2020"
    }
  ];

  return (
    <section 
      id="empowerment" 
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 empowerment-triangle opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-20 empowerment-diamond opacity-25"
          animate={{ 
            y: [0, 25, 0],
            rotate: [45, 55, 45]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-gold-500 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent transform -skew-y-1"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <HeartIcon className="w-10 h-10 text-rose-500 mr-4" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-white">
                Women Empowerment
              </h2>
              <SparklesIcon className="w-10 h-10 text-gold-500 ml-4" />
            </div>
            <p className="text-xl text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
              Dedicated to empowering women through legal advocacy, education, and unwavering support. 
              Together, we can build a world where every woman knows her worth and her rights.
            </p>
          </motion.div>

          {/* Inspirational Quotes Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/70 dark:bg-charcoal-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gold-200/50 dark:border-gold-800/50 relative overflow-hidden"
                >
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-4 right-4 text-6xl text-gold-500/20 font-serif">"</div>
                  
                  <blockquote className="text-lg text-charcoal-800 dark:text-charcoal-200 leading-relaxed italic mb-6 relative z-10">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <cite className="text-gold-600 dark:text-gold-400 font-medium not-italic block">
                        Adv. Jigisha T. Sailor
                      </cite>
                      <span className="text-sm text-charcoal-500 dark:text-charcoal-400">
                        {quote.author}
                      </span>
                    </div>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold-500/10 to-transparent rounded-tl-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gold-200/50 dark:border-gold-800/50"
            ref={statsRef}
          >
            <h3 className="text-3xl font-playfair font-bold text-center text-charcoal-900 dark:text-white mb-12">
              Impact in Numbers
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-charcoal-900 dark:text-white">
                      {statsInView ? (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          delay={index * 0.2}
                        />
                      ) : (
                        '0'
                      )}
                      <span className="text-gold-600">{stat.suffix}</span>
                    </div>
                    <h4 className="font-semibold text-charcoal-800 dark:text-charcoal-200">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-playfair font-bold text-center text-charcoal-900 dark:text-white">
              Key Achievements in Women Empowerment
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start space-x-6 bg-white/70 dark:bg-charcoal-900/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gold-200/30 dark:border-gold-800/30"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <span className="px-3 py-1 text-xs font-bold bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-300 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <HeartIcon className="w-16 h-16 mx-auto mb-6" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-playfair font-bold leading-tight">
                Ready to Know Your Rights?
              </h3>
              
              <p className="text-xl leading-relaxed opacity-95">
                Don't let uncertainty hold you back. Every woman deserves to understand her legal rights and have access to professional support. 
                Take the first step towards empowerment today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.button
                  className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 inline mr-2" />
                  Get Free Consultation
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HandRaisedIcon className="w-5 h-5 inline mr-2" />
                  Learn Your Rights
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WomenEmpowerment;