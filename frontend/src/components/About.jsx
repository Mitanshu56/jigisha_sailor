import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon,
  CalendarIcon,
  TrophyIcon,
  ScaleIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const About = () => {
  // Timeline data
  const timeline = [
    {
      year: "2008",
      title: "Law Degree Completion",
      description: "Graduated with honors from prestigious law school, specializing in civil and family law.",
      icon: AcademicCapIcon,
      type: "education"
    },
    {
      year: "2009",
      title: "Started Legal Practice",
      description: "Began practicing law with focus on women rights and family matters.",
      icon: ScaleIcon,
      type: "career"
    },
    {
      year: "2012",
      title: "Women Rights Advocacy",
      description: "Founded initiative for providing free legal consultation to underprivileged women.",
      icon: HeartIcon,
      type: "achievement"
    },
    {
      year: "2015",
      title: "Notable Case Victory",
      description: "Won landmark case in Supreme Court regarding women's property rights.",
      icon: TrophyIcon,
      type: "achievement"
    },
    {
      year: "2018",
      title: "Legal Consultant",
      description: "Expanded practice to include corporate legal consulting and property law.",
      icon: SparklesIcon,
      type: "career"
    },
    {
      year: "Present",
      title: "Continuing Excellence",
      description: "Over 500 successful cases with 95% success rate in family and civil matters.",
      icon: TrophyIcon,
      type: "achievement"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    cases: 0,
    successRate: 0,
    womenEmpowered: 0
  });

  const achievements = [
    {
      key: 'experience',
      target: 15,
      label: "Years of Experience",
      description: "Dedicated legal practice",
      icon: CalendarIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      key: 'cases',
      target: 500,
      label: "Cases Handled",
      description: "Successful resolutions",
      icon: ChartBarIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      textColor: "text-green-600 dark:text-green-400"
    },
    {
      key: 'successRate',
      target: 95,
      label: "Success Rate",
      description: "Proven track record",
      icon: TrophyIcon,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
      textColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      key: 'womenEmpowered',
      target: 150,
      label: "Women Empowered",
      description: "Free legal aid provided",
      icon: UserGroupIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      textColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  useEffect(() => {
    if (statsInView) {
      achievements.forEach((achievement, index) => {
        const duration = 800; // Reduced from 2000ms to 800ms
        const steps = 40; // Reduced from 60 to 40 steps
        const stepValue = achievement.target / steps;
        const stepDuration = duration / steps;

        let currentValue = 0;
        const timer = setInterval(() => {
          currentValue += stepValue;
          if (currentValue >= achievement.target) {
            currentValue = achievement.target;
            clearInterval(timer);
          }

          setAnimatedStats(prev => ({
            ...prev,
            [achievement.key]: Math.floor(currentValue)
          }));
        }, stepDuration + (index * 50)); // Reduced stagger from 100ms to 50ms

        return () => clearInterval(timer);
      });
    }
  }, [statsInView]);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Timeline Item Component with individual scroll trigger
  const TimelineItem = ({ item, index }) => {
    const [timelineRef, timelineInView] = useInView({
      triggerOnce: true,
      threshold: 0.6
    });

    return (
      <motion.div
        ref={timelineRef}
        className={`flex items-start space-x-8 ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
        animate={timelineInView ? { 
          opacity: 1, 
          x: 0, 
          scale: 1 
        } : { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100, 
          scale: 0.8 
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Timeline Dot */}
        <div className="relative flex-shrink-0">
          <motion.div 
            className="w-16 h-16 bg-white dark:bg-charcoal-900 border-4 border-gold-500 rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={timelineInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <item.icon className="w-8 h-8 text-gold-600" />
            </motion.div>
          </motion.div>
          
          {/* Year Badge */}
          <motion.div 
            className="absolute -top-2 -right-2 bg-gradient-gold text-white text-xs font-bold px-2 py-1 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={timelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            {item.year}
          </motion.div>
        </div>
        
        {/* Content */}
        <motion.div
          className={`flex-1 ${
            index % 2 === 0 ? 'md:text-left' : 'md:text-right'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={`card p-6 max-w-md ${
            index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
          } hover:shadow-xl transition-all duration-300`}>
            <motion.div 
              className={`flex items-center space-x-2 mb-3 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                item.type === 'education' 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  : item.type === 'career'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                  : 'bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-300'
              }`}>
                {item.type}
              </span>
            </motion.div>
            <motion.h4 
              className="text-lg font-semibold text-charcoal-900 dark:text-white mb-2"
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {item.title}
            </motion.h4>
            <motion.p 
              className="text-charcoal-600 dark:text-charcoal-400 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-charcoal-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-gradient-gold rounded-full mr-4"></div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-white">
                About Me
              </h2>
              <div className="w-12 h-1 bg-gradient-gold rounded-full ml-4"></div>
            </div>
            <p className="text-lg text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
              Dedicated to providing exceptional legal services with compassion, integrity, and unwavering commitment to justice.
            </p>
          </motion.div>

          {/* Personal Story & Philosophy */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-semibold text-charcoal-900 dark:text-white">
                My Legal Journey
              </h3>
              <div className="space-y-4 text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                <p>
                  My passion for law began with a simple belief: everyone deserves access to justice, 
                  regardless of their background or circumstances. This conviction has driven my career 
                  for over 15 years, specializing in family law, women's rights, and civil matters.
                </p>
                <p>
                  Throughout my practice, I've witnessed the transformative power of legal advocacy, 
                  particularly in empowering women to understand and exercise their rights. Every case 
                  I handle is approached with the same dedication and attention to detail, ensuring 
                  my clients receive the representation they deserve.
                </p>
                <p>
                  My approach combines legal expertise with genuine empathy, creating a supportive 
                  environment where clients feel heard, understood, and confident in their legal journey.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-900 dark:text-white">Core Philosophy</h4>
                  <p className="text-charcoal-600 dark:text-charcoal-400">
                    "Justice with compassion, strength with grace"
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6" ref={statsRef}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className={`text-4xl font-bold ${achievement.textColor} mb-2`}
                    key={animatedStats[achievement.key]}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {animatedStats[achievement.key]}{achievement.key === 'successRate' ? '%' : '+'}
                  </motion.div>
                  
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-lg">
                    {achievement.label}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Qualifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-charcoal-900 dark:text-white text-center">
              Education & Qualifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-gold-600" />
                </div>
                <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">
                  Bachelor of Laws (LLB)
                </h4>
                <p className="text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                  Graduated with first-class honors from [University Name], 
                  specializing in Constitutional Law and Civil Procedure.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ScaleIcon className="w-8 h-8 text-gold-600" />
                </div>
                <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">
                  Bar Council Registration
                </h4>
                <p className="text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                  Enrolled with the Bar Council of [State] in 2008, 
                  licensed to practice in all subordinate courts and High Court.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrophyIcon className="w-8 h-8 text-gold-600" />
                </div>
                <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">
                  Specialized Certifications
                </h4>
                <p className="text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                  Advanced certifications in Family Law, Women Rights Advocacy, 
                  and Alternative Dispute Resolution (ADR).
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-charcoal-900 dark:text-white text-center">
              Professional Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 to-gold-600 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Quote */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl font-playfair font-medium text-charcoal-900 dark:text-white leading-relaxed italic mb-6">
              "In the pursuit of justice, we must never forget that behind every case is a human being seeking hope, dignity, and the promise of a better tomorrow."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-1 bg-gradient-gold rounded-full mr-4"></div>
              <cite className="text-gold-600 dark:text-gold-400 font-medium not-italic">
                Adv. Jigisha T. Sailor
              </cite>
              <div className="w-16 h-1 bg-gradient-gold rounded-full ml-4"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;