import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Code } from "lucide-react";

const Hero = () => {
    const keywords = [
        "Generative AI",
        "Neural Networks",
        "Machine Learning",
        "Data Science",
        "Software Development",
        "Backend Development",
    ];

    return (
        // Use base background, add padding top to account for fixed header
        <section className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg pt-24 md:pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Use fadeInUp animation from config */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                            },
                        }}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-light-text dark:text-dark-text"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                        >
                            Hi, I'm{" "}
                            {/* Updated gradient */}
                            <span className="bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
                                Santhosh Sachin
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-light-text/80 dark:text-dark-text/80 mb-8"
                             variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                        >
                            Innovating at the intersection of backend systems,
                            AI, and data-driven solutions
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-2xl text-light-text/80 dark:text-dark-text/80 mb-12" // Increased margin bottom
                             variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                        >
                            I only believe in Jassi Bhaii, because...
                        </motion.p>
                    </motion.div>

                    {/* Stagger children animation for keywords */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-16" // Increased margin bottom
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 },
                            },
                        }}
                    >
                        {keywords.map((keyword) => (
                            <motion.span
                                key={keyword}
                                className="px-4 py-2 bg-light-card dark:bg-dark-card rounded-full border border-light-border dark:border-dark-border text-light-text/90 dark:text-dark-text/90 text-sm font-medium shadow-sm hover:shadow-md hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all duration-200 cursor-default"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ y: -2 }} // Subtle lift on hover
                            >
                                {keyword}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Stagger children animation for icons */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0"
                        initial="hidden"
                        animate="visible"
                         variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.5 }, // Delay after text/keywords
                            },
                        }}
                    >
                        {/* Icon Section 1: AI */}
                        <motion.div
                            className="text-center"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <div className="w-16 h-16 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-light-primary/30 dark:border-dark-primary/30">
                                <Brain className="w-8 h-8 text-light-primary dark:text-dark-primary" />
                            </div>
                            <p className="text-sm text-light-text dark:text-dark-text font-medium">AI Research</p>
                        </motion.div>

                        {/* Icon Section 2: Backend */}
                         <motion.div
                            className="text-center"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <div className="w-16 h-16 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-light-secondary/30 dark:border-dark-secondary/30">
                                <Database className="w-8 h-8 text-light-secondary dark:text-dark-secondary" />
                            </div>
                            <p className="text-sm text-light-text dark:text-dark-text font-medium">
                                Backend Systems
                            </p>
                        </motion.div>

                        {/* Icon Section 3: Development */}
                         <motion.div
                            className="text-center"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <div className="w-16 h-16 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-light-accent/30 dark:border-dark-accent/30">
                                <Code className="w-8 h-8 text-light-accent dark:text-dark-accent" />
                            </div>
                            <p className="text-sm text-light-text dark:text-dark-text font-medium">Development</p>
                        </motion.div>
                    </motion.div> {/* <-- Added missing closing tag here */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
