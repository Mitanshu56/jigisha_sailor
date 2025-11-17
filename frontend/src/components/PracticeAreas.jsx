import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon,
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  ScaleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PracticeAreas = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const practiceAreas = [
    {
      icon: HeartIcon,
      title: "Family Law",
      description: "Comprehensive legal support for family matters including divorce, child custody, adoption, and domestic relations.",
      features: [
        "Divorce and separation proceedings",
        "Child custody and support",
        "Adoption and guardianship",
        "Domestic violence cases",
        "Marriage and property settlements"
      ],
      accent: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      darkBgGradient: "from-pink-900/10 to-rose-900/10"
    },
    {
      icon: ShieldCheckIcon,
      title: "Women Rights Cases",
      description: "Dedicated advocacy for women's rights, workplace harassment, and gender-based discrimination cases.",
      features: [
        "Workplace harassment and discrimination",
        "Domestic violence protection",
        "Property and inheritance rights",
        "Dowry-related cases",
        "Women's empowerment legal aid"
      ],
      accent: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      darkBgGradient: "from-purple-900/10 to-indigo-900/10"
    },
    {
      icon: UserGroupIcon,
      title: "Civil Matters",
      description: "Expert handling of civil disputes, contract issues, and general civil litigation matters.",
      features: [
        "Contract disputes and breaches",
        "Consumer protection cases",
        "Tort and personal injury claims",
        "Civil litigation representation",
        "Dispute resolution and mediation"
      ],
      accent: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/10 to-cyan-900/10"
    },
    {
      icon: HomeIcon,
      title: "Property Law",
      description: "Complete legal assistance for property transactions, disputes, and real estate matters.",
      features: [
        "Property buying and selling",
        "Title verification and documentation",
        "Property dispute resolution",
        "Landlord-tenant matters",
        "Real estate investment advice"
      ],
      accent: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/10 to-emerald-900/10"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Legal Consultation",
      description: "Professional legal advice and consultation for various legal matters and preventive legal care.",
      features: [
        "Legal document review",
        "Preventive legal advice",
        "Compliance consultation",
        "Legal strategy development",
        "Risk assessment and mitigation"
      ],
      accent: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      darkBgGradient: "from-amber-900/10 to-orange-900/10"
    }
  ];

  return (
    <section 
      id="practice-areas" 
      className="py-20 bg-white dark:bg-charcoal-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gold-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-gold-600/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <ScaleIcon className="w-8 h-8 text-gold-500 mr-4" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 dark:text-white">
                Practice Areas
              </h2>
              <ScaleIcon className="w-8 h-8 text-gold-500 ml-4" />
            </div>
            <p className="text-lg text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
              Comprehensive legal services across multiple practice areas, 
              providing expert representation and consultation with dedicated focus on women's rights and family law.
            </p>
          </motion.div>

          {/* Practice Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`card p-8 h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${area.bgGradient} dark:${area.darkBgGradient} dark:bg-charcoal-900 border-l-4 border-transparent group-hover:border-gold-500`}>
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${area.accent} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <area.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                      {area.title}
                    </h3>

                    <p className="text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start space-x-3 text-sm text-charcoal-600 dark:text-charcoal-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.div
                      className="pt-4 border-t border-gray-200 dark:border-charcoal-700"
                      whileHover={{ x: 5 }}
                    >
                      <button className="flex items-center space-x-2 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium transition-colors duration-300 group/cta">
                        <span>Learn More</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/10 to-transparent rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Focus Section */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-gold-50 to-amber-50 dark:from-gold-900/20 dark:to-amber-900/20 rounded-2xl p-8 md:p-12 border border-gold-200 dark:border-gold-800"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <HeartIcon className="w-10 h-10 text-gold-600" />
                  <h3 className="text-3xl font-playfair font-bold text-charcoal-900 dark:text-white">
                    Women Empowerment Focus
                  </h3>
                </div>
                
                <p className="text-lg text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                  Special dedication to empowering women through legal advocacy. 
                  I believe every woman should have access to justice and understand her rights completely.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-charcoal-700 dark:text-charcoal-300">Free initial consultation for women in distress</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-charcoal-700 dark:text-charcoal-300">24/7 emergency legal support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-charcoal-700 dark:text-charcoal-300">Confidential and compassionate approach</span>
                  </div>
                </div>

                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Legal Support
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.button>
              </div>

              <div className="relative">
                {/* Empowerment Visualization */}
                <div className="relative w-full h-64 bg-gradient-to-br from-gold-100 to-amber-100 dark:from-gold-900/30 dark:to-amber-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="text-center space-y-4"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <ScaleIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-charcoal-900 dark:text-white">
                        Justice for All
                      </h4>
                      <p className="text-charcoal-600 dark:text-charcoal-400">
                        Equal rights, dignified treatment
                      </p>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 left-4 w-6 h-6 bg-gold-500/30 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-8 right-8 w-4 h-4 bg-gold-600/40 rounded-full"
                    animate={{ 
                      y: [0, 8, 0],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-6 w-5 h-5 bg-gold-400/35 rounded-full"
                    animate={{ 
                      y: [0, -12, 0],
                      opacity: [0.35, 0.65, 0.35]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;