import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Lam Research',
    role: 'AI Research Intern',
    period: 'Jun 2023 - Present',
    description: 'Developing graph-based analytics solutions for supply chain management using advanced AI techniques.',
    highlights: [
      'Implemented graph neural networks for pattern recognition',
      'Optimized supply chain processes using predictive analytics',
      'Collaborated with cross-functional teams to deliver solutions'
    ]
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineering Intern',
    period: 'Jan 2023 - May 2023',
    description: 'Developed OpenAI-powered assistants and backend systems for improved customer service.',
    highlights: [
      'Built scalable backend services using Python and FastAPI',
      'Integrated OpenAI APIs for natural language processing',
      'Improved system efficiency by 40% through optimization'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <Briefcase size={16} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;