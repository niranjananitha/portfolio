"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function EducationPage() {
    const education = [
        {
            institution: "Sri Krishna College of Technology",
            period: "2023 - 2027",
            degree: "B.E. in Artificial Intelligence and Machine Learning",
            grade: "CGPA: 7",
            icon: <FaGraduationCap className="text-4xl text-blue-400" />
        },
        {
            institution: "Kamaraj Matric Hr. Sec School",
            period: "2022 - 2023",
            degree: "Higher Secondary Education",
            grade: "Grade: 75%",
            icon: <FaSchool className="text-4xl text-amber-400" />
        },
        {
            institution: "Kamaraj Matric Hr. Sec School",
            period: "2020 - 2021",
            degree: "Secondary Education",
            grade: "Grade: 70%",
            icon: <FaSchool className="text-4xl text-amber-400" />
        }
    ];

    return (
        <div className="min-h-screen bg-[#030014] text-slate-300 py-24 px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
                >
                    Education Journey
                </motion.h1>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#030014] border-2 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all" />

                            <div className="bg-[#112240] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 shadow-xl transition-all hover:shadow-blue-900/10 relative overflow-hidden">
                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        {edu.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                            <h3 className="text-xl font-bold text-white max-w-md">{edu.institution}</h3>
                                            <span className="px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-blue-300">{edu.period}</span>
                                        </div>
                                        <p className="text-lg text-slate-300 font-medium mb-1">{edu.degree}</p>
                                        <p className="text-sm text-slate-500">{edu.grade}</p>
                                    </div>
                                </div>

                                {/* Decorative Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
