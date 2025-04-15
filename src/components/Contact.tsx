import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, and collaborations.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/SANTHOSH-SACHIN"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/santhosh-sachin"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="mailto:santhosh.s.sachin@gmail.com"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
          </div>

          <motion.a
            href="assets/Resume/SanthoshS_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
