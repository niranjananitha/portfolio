"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLeaf, FaRobot, FaSignLanguage } from "react-icons/fa";

const projects = [
    {
        title: "AI-Powered Plant Disease Detection System",
        slug: "ai-powered-plant-disease-detection-system",
        desc: "Detect plant diseases in seconds using computer vision and machine learning!",
        tags: ["TensorFlow.js", "Next.js", "CV"],
        icon: <FaLeaf size={30} />,
        color: "from-green-400 to-emerald-600",
        hoverColor: "group-hover:text-green-400"
    },
    {
        title: "AI-Powered Automation Agent",
        slug: "ai-powered-automation-agent",
        desc: "Automate web tasks with 97.45% confidence rate through a simple, no-code interface.",
        tags: ["DeepSeek-R1", "Gemini", "Automation"],
        icon: <FaRobot size={30} />,
        color: "from-blue-400 to-indigo-600",
        hoverColor: "group-hover:text-blue-400"
    },
    {
        title: "AI-Powered Speech to ISL Translation",
        slug: "ai-powered-speech-to-isl-translation-project",
        desc: "Real-time speech-to-sign language translation to bridge communication gaps.",
        tags: ["Python", "NLP", "Google Translate API"],
        icon: <FaSignLanguage size={30} />,
        color: "from-purple-400 to-pink-600",
        hoverColor: "group-hover:text-purple-400"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
            >
                Featured <span className="text-primary">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <Link key={i} href={`/projects/${project.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative bg-[#112240] rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-lg text-white mb-4 group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </div>
                                </div>

                                <h3 className={`text-2xl font-bold text-white mb-3 ${project.hoverColor} transition-colors`}>{project.title}</h3>

                                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-primary text-sm font-bold uppercase tracking-wider gap-2 group-hover:gap-4 transition-all">
                                    View Details <span>&rarr;</span>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
