import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Rust', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'TypeScript', level: 85 }
    ]
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Langchain', level: 90 },
      { name: 'OpenAI APIs', level: 95 }
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Kubernetes', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Git', level: 95 },
      { name: 'AWS', level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;