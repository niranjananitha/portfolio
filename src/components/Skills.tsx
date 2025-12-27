"use client";
import { motion } from "framer-motion";

const skills = [
    { category: "Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Keras"] },
    { category: "Web Dev", items: ["React", "Next.js", "Tailwind CSS", "Node.js"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Jupyter"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
                Technical <span className="text-secondary">Skills</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skillGroup, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-secondary/30 transition-all"
                    >
                        <h3 className="text-xl font-bold text-secondary mb-6">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-[#112240] rounded-lg text-gray-300 font-medium shadow-sm border border-white/5 hover:text-white hover:border-secondary transition-all cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
