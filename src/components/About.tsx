import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Professional headshot"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-gray-600">
                    B.Tech in Computer Science and Engineering
                    <br />
                    Amrita Vishwa Vidyapeetham
                    <br />
                    CGPA: 8.41/10
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interests</h3>
                  <p className="text-gray-600">
                    Artificial Intelligence, Deep Learning, Data Science, and Backend Systems Architecture
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Leadership</h3>
                  <p className="text-gray-600">
                    AI-ML Lead at GDSC Amrita Chapter, mentoring students and organizing technical workshops
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about leveraging AI and machine learning to solve complex problems. 
                My journey in tech has been driven by curiosity and a desire to create impactful solutions 
                that make a difference in how we interact with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;