import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Lam Research",
        role: "AI Research Intern",
        period: "Jun 2023 - Present",
        description:
            "Developing graph-based analytics solutions for supply chain management using advanced AI techniques.",
        highlights: [
            "Implemented graph neural networks for Supply chain Optimization",
            "Optimized supply chain processes using predictive analytics",
            "Collaborated with cross-functional teams to deliver solutions",
        ],
    },
    {
        company: "Fidelity Investments",
        role: "Software Engineering Intern",
        period: "Jan 2023 - May 2023",
        description:
            "Developed OpenAI-powered assistants and backend architecture for improved customer service.",
        highlights: [
            "Built scalable backend services using Python and FastAPI",
            "Piloted the migration of Spring Microservices from AWS EKS via an In house tool",
            "Improved system efficiency by 40% through optimization",
        ],
    },
];

const Experience = () => {
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
        <section id="experience" className="py-20 md:py-28 bg-light-bg/50 dark:bg-dark-bg/50"> {/* Slightly different bg */}
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text relative pb-2"
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Experience
                    {/* Subtle underline effect */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"></span>
                </motion.h2>

                <motion.div
                    className="max-w-4xl mx-auto space-y-10" // Increased spacing
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg border border-light-border dark:border-dark-border p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-light-primary/30 dark:hover:border-dark-primary/30"
                            variants={itemVariant}
                            whileHover={{ y: -5 }} // Lift effect on hover
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="mb-3 md:mb-0">
                                    <h3 className="text-xl md:text-2xl font-semibold text-light-text dark:text-dark-text mb-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-light-primary dark:text-dark-primary font-medium text-lg">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="flex items-center text-light-text/70 dark:text-dark-text/70 text-sm font-medium bg-light-bg dark:bg-dark-bg px-3 py-1 rounded-full border border-light-border dark:border-dark-border whitespace-nowrap">
                                    <Calendar size={14} className="mr-2 flex-shrink-0" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-light-text/80 dark:text-dark-text/80 mb-5 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="space-y-2 list-inside">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start text-light-text/90 dark:text-dark-text/90">
                                        <Briefcase
                                            size={16}
                                            className="mr-3 mt-1 text-light-secondary dark:text-dark-secondary flex-shrink-0" // Use secondary color
                                        />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
