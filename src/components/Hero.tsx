"use client";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-20 max-w-7xl mx-auto pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <div className="flex flex-col justify-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent text-lg md:text-xl font-medium mb-4 tracking-wide font-mono">
                            Hi, my name is
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                            Niranjan P N
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8 leading-tight">
                            I build intelligence.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
                    >
                        I&apos;m a pre-final year <span className="text-primary font-semibold">AI/ML Engineer</span> specializing in
                        <span className="text-accent"> Computer Vision</span> and <span className="text-accent">Deep Learning</span>.
                        I design efficient, scalable AI solutions that solve real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-lg bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all duration-300"
                        >
                            Check out my work
                        </a>
                        <a
                            href="/Niranjan_P_N.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <HiDownload size={20} /> Resume
                        </a>
                    </motion.div>
                </div>

                {/* Visual / 3D Placeholder */}
                {/* Ideally this would be a 3D model, but we'll use a stylized code block or graphic for now */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden md:flex justify-center items-center relative"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <Image
                                src="/me.jpg"
                                alt="Niranjan P N"
                                fill
                                className="object-cover transition-all duration-500"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
