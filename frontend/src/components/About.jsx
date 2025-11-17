import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon,
  CalendarIcon,
  TrophyIcon,
  ScaleIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const About = () => {
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

  const achievements = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Dedicated legal practice"
    },
    {
      number: "500+",
      label: "Cases Handled",
      description: "Successful resolutions"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Proven track record"
    },
    {
      number: "100+",
      label: "Women Empowered",
      description: "Free legal aid provided"
    }
  ];

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
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card text-center p-6 card-hover"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {achievement.number}
                  </div>
                  <h4 className="font-semibold text-charcoal-900 dark:text-white mb-1">
                    {achievement.label}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
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
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-start space-x-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-white dark:bg-charcoal-900 border-4 border-gold-500 rounded-full flex items-center justify-center shadow-lg">
                        <item.icon className="w-8 h-8 text-gold-600" />
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-gold text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <motion.div
                      className={`flex-1 ${
                        index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                      }`}
                      whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`card p-6 max-w-md ${
                        index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                      }`}>
                        <div className={`flex items-center space-x-2 mb-3 ${
                          index % 2 === 0 ? '' : 'md:justify-end'
                        }`}>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            item.type === 'education' 
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              : item.type === 'career'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                              : 'bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-300'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-charcoal-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-charcoal-600 dark:text-charcoal-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
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