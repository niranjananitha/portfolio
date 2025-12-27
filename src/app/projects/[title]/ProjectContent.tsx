"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectDetail } from '@/data/projects';

export default function ProjectContent({ project }: { project: ProjectDetail }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 md:px-10 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full border border-white/10"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-white/10 gap-4">
                    <div className="flex items-center gap-4">
                        {project.icon && <span className="text-5xl">{project.icon}</span>}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                {project.title}
                            </h1>
                            {project.subtitle && <p className="text-xl text-gray-400">{project.subtitle}</p>}
                        </div>
                    </div>
                    {project.year && <span className="px-4 py-2 bg-white/5 rounded-full text-gray-300 font-mono border border-white/10">{project.year}</span>}
                </div>

                {/* Stats Grid */}
                {project.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                                <div className="text-primary font-bold text-xl mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech Stack */}
                {project.technologies && (
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Dynamic Full Content */}
                {project.fullContent && (
                    <div className="space-y-12">
                        {project.fullContent.sections.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4">{section.title}</h2>

                                {section.type === 'list' && Array.isArray(section.content) ? (
                                    <ul className="grid gap-3">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : section.type === 'ordered-list' && Array.isArray(section.content) ? (
                                    <ol className="grid gap-3 list-decimal pl-5 text-gray-300">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="pl-2">
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line bg-white/5 p-6 rounded-xl border border-white/5">
                                        {section.content}
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>
                )}

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
                    <Link href="/#projects" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-medium flex items-center gap-2">
                        ← Back to All Projects
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
