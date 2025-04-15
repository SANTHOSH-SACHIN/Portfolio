import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Implementing RAG Systems with Azure OpenAI',
    excerpt: 'A deep dive into building efficient retrieval-augmented generation systems...',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Graph Neural Networks in Supply Chain',
    excerpt: 'Exploring how GNNs can revolutionize supply chain management...',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Blog = () => {
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
    <section id="blog" className="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text relative pb-2"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Latest Blog Posts
          {/* Subtle underline effect */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12" // Increased gap
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg border border-light-border dark:border-dark-border overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-light-primary/30 dark:hover:border-dark-primary/30"
              variants={itemVariant}
              whileHover={{ y: -5 }} // Lift effect
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" // Zoom effect
                />
              </div>
              {/* Content container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Metadata */}
                <div className="flex items-center text-light-text/70 dark:text-dark-text/70 text-xs font-medium mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-light-text/80 dark:text-dark-text/80 mb-4 flex-grow">{post.excerpt}</p>

                {/* Read More Link */}
                <div className="mt-auto pt-4 border-t border-light-border/50 dark:border-dark-border/50">
                  <motion.a
                    href="#" // Replace with actual link later
                    className="inline-flex items-center text-sm font-medium text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors duration-200 group"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
