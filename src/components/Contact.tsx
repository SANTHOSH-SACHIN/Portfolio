import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, opportunities, and collaborations.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/SANTHOSH-SACHIN"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/santhosh-sachin"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="mailto:santhosh.sachin@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
          
          <a
            href="assets/Resume/SanthoshS_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"  
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;