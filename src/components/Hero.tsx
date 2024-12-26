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
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Santhosh Sachin
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Innovating at the intersection of backend systems,
                            AI, and data-driven solutions
                        </p>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            I am only believe on Jassi Bhaii , Bcoz . . ,
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {keywords.map((keyword, index) => (
                            <span
                                key={keyword}
                                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700"
                            >
                                {keyword}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex justify-center space-x-8"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Brain className="w-8 h-8 text-blue-600" />
                            </div>
                            <p className="text-sm text-gray-600">AI Research</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Database className="w-8 h-8 text-purple-600" />
                            </div>
                            <p className="text-sm text-gray-600">
                                Backend Systems
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Code className="w-8 h-8 text-green-600" />
                            </div>
                            <p className="text-sm text-gray-600">Development</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
