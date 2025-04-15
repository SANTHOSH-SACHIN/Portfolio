import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Rust', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Javascript', level: 75 },
      { name: 'TypeScript', level: 75 }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React + Vite', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Express.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'FastAPI', level: 85 },
      { name: 'Tailwind CSS', level: 80 }
    ]
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'DGL', level: 80 },
      { name: 'OpenCV', level: 75 },
      { name: 'Numpy', level: 95 },
      { name: 'Pandas', level: 90 }
    ]
  },
  {
    title: 'AI & LLMs',
    skills: [
      { name: 'Langchain', level: 95 },
      { name: 'LLMs', level: 90 },
      { name: 'OpenAI', level: 85 },
      { name: 'Anthropic', level: 80 },
      { name: 'HuggingFace', level: 80 },
      { name: 'Gemini', level: 75 },
      { name: 'LlamaIndex', level: 75 }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Kubernetes', level: 90 },
      { name: 'Docker', level: 95 },
      { name: 'AWS EKS', level: 85 },
      { name: 'AWS EC2', level: 80 },
      { name: 'AWS S3', level: 85 },
      { name: 'AWS SageMaker', level: 80 },
      { name: 'Azure ML', level: 75 }
    ]
  },
  {
    title: 'Tools & Databases',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 90 },
      { name: 'OpenSearch', level: 75 },
      { name: 'IBM WatsonX', level: 70 },
      { name: 'Firebase', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Postgres', level: 80 },
      { name: 'MongoDB', level: 75 }
    ]
  }
];

const Skills = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const progressBarVariant = (level: number) => ({
    hidden: { width: 0 },
    visible: { width: `${level}%`, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }, // Smoother ease
  });

  return (
    // Updated section background and padding
    <section id="skills" className="py-20 md:py-28 bg-light-bg/50 dark:bg-dark-bg/50"> {/* Slightly different bg */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text relative pb-2"
          variants={cardVariant} // Use cardVariant for title animation consistency
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Skills
          {/* Subtle underline effect */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8" // Increased gap
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg border border-light-border dark:border-dark-border p-6 transition-all duration-300 hover:shadow-xl hover:border-light-primary/30 dark:hover:border-dark-primary/30"
              variants={cardVariant}
              whileHover={{ y: -5 }} // Lift effect
            >
              <h3 className="text-xl font-semibold mb-5 text-light-text dark:text-dark-text border-b border-light-border dark:border-dark-border pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-light-text dark:text-dark-text">{skill.name}</span>
                      <span className="text-xs font-medium text-light-text/70 dark:text-dark-text/70">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2.5 overflow-hidden">
                      {/* Animated Progress Bar with Gradient */}
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary"
                        variants={progressBarVariant(skill.level)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }} // Trigger when mostly visible
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
