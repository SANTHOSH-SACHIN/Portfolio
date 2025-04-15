import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'One-View',
    description: 'RAG-based Azure OpenAI chatbot for enterprise document analysis',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Azure OpenAI', 'RAG', 'Python', 'FastAPI'],
    links: {
      demo: 'https://example.com/one-view',
      github: 'https://github.com/yourusername/one-view'
    }
  },
  {
    title: 'Zephyr AI',
    description: 'Conversational agent powered by open-source LLMs',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['LLMs', 'Rust', 'Neural Networks'],
    links: {
      demo: 'https://example.com/zephyr-ai',
      github: 'https://github.com/yourusername/zephyr-ai'
    }
  }
];

const Projects = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Updated section background and padding
    <section id="projects" className="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text relative pb-2"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Projects
          {/* Subtle underline effect */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto" // Increased gap
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-lg border border-light-border dark:border-dark-border flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-light-primary/30 dark:hover:border-dark-primary/30"
              variants={itemVariant}
              whileHover={{ y: -5 }} // Lift effect
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" // Zoom effect on hover
                />
                {/* Overlay for links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end items-start p-4 space-x-3">
                  <motion.a
                    href={project.links.demo}
                    className="p-2 rounded-full bg-white/80 dark:bg-black/60 text-light-primary dark:text-dark-primary hover:bg-white dark:hover:bg-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="p-2 rounded-full bg-white/80 dark:bg-black/60 text-light-text dark:text-dark-text hover:bg-white dark:hover:bg-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    title="GitHub Repository"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Content container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-light-text dark:text-dark-text">{project.title}</h3>
                <p className="text-light-text/80 dark:text-dark-text/80 mb-4 flex-grow">{project.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-light-border/50 dark:border-dark-border/50">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary rounded-full text-xs font-medium border border-light-secondary/20 dark:border-dark-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
