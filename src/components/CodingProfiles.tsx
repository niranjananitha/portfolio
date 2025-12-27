"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
    {
        name: "GitHub",
        icon: <FaGithub size={40} />,
        desc: "Open source contributions",
        url: "https://github.com/niranjananitha",
        color: "from-gray-700 to-black",
        border: "group-hover:border-white",
        text: "text-white"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={40} />,
        desc: "Professional network",
        url: "https://www.linkedin.com/in/niranjan-p-n-1545a2290",
        color: "from-blue-600 to-blue-900",
        border: "group-hover:border-blue-400",
        text: "text-blue-100"
    },
    {
        name: "LeetCode",
        icon: <SiLeetcode size={40} />,
        desc: "Algorithm mastery",
        url: "https://leetcode.com/u/Niranjananitha/",
        color: "from-yellow-600 to-orange-900",
        border: "group-hover:border-yellow-400",
        text: "text-yellow-100"
    }
];

export default function CodingProfiles() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
                <span className="text-gradient">Coding Profiles</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {profiles.map((profile, i) => (
                    <motion.a
                        key={profile.name}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-8 rounded-2xl bg-gradient-to-br ${profile.color} border border-white/5 overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-xl`}
                    >
                        <div className={`absolute inset-0 border-2 border-transparent ${profile.border} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="mb-4 text-white drop-shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                {profile.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
                            <p className={`text-sm ${profile.text} opacity-80`}>{profile.desc}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
