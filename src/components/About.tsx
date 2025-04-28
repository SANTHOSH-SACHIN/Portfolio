import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  // Animation variants for consistency
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textBlockVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 } },
  };

  return (
    // Updated section background and padding
    <section id="about" className="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text relative pb-2"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
          {/* Subtle underline effect */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center" // Increased max-width and gap
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div variants={imageVariant}>
            <img
              src="assets/profile.jpg" // Updated image path
              alt="Professional headshot"
              className="rounded-lg shadow-lg border-4 border-light-card dark:border-dark-card hover:shadow-xl transition-all duration-300 transform hover:scale-105" // Added border and hover effect
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div variants={textBlockVariant}>
            <div className="space-y-6">
              {/* Education Block */}
              <motion.div
                className="flex items-start space-x-4 p-5 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariant}
              >
                <div className="flex-shrink-0 p-2 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-light-text dark:text-dark-text">Education</h3>
                  <p className="text-light-text/80 dark:text-dark-text/80">
                    B.Tech in Computer Science and Engineering
                    <br />
                    Amrita Vishwa Vidyapeetham
                    <br />
                    CGPA: 8.41/10
                  </p>
                </div>
              </motion.div>

              {/* Interests Block */}
              <motion.div
                className="flex items-start space-x-4 p-5 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariant}
              >
                <div className="flex-shrink-0 p-2 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full">
                  <Award className="w-6 h-6 text-light-secondary dark:text-dark-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-light-text dark:text-dark-text">Interests</h3>
                  <p className="text-light-text/80 dark:text-dark-text/80">
                    Artificial Intelligence, Deep Learning, Data Science, Backend Systems and Web
                  </p>
                </div>
              </motion.div>

              {/* Leadership Block */}
              <motion.div
                className="flex items-start space-x-4 p-5 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariant}
              >
                <div className="flex-shrink-0 p-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full">
                  <Users className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-light-text dark:text-dark-text">Leadership</h3>
                  <p className="text-light-text/80 dark:text-dark-text/80">
                    AI-ML Lead at GDSC Amrita Chapter, mentoring students and organizing technical workshops
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Summary Paragraph */}
            <motion.div
              className="mt-8 p-5 rounded-lg bg-light-card/50 dark:bg-dark-card/50 border border-light-border/50 dark:border-dark-border/50" // Slightly different style for summary
              variants={itemVariant}
            >
              <p className="text-light-text/90 dark:text-dark-text/90 leading-relaxed">
                I'm passionate about leveraging AI and machine learning to solve complex problems.
                My journey in tech has been driven by curiosity and a desire to create impactful solutions
                that make a difference in how we interact with technology.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
