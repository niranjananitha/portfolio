"use client";
import { motion } from "framer-motion";
import { FaCertificate, FaCrown } from "react-icons/fa";

const achievements = [
  {
    title: "Design Patent No. 421785-002: <i>Baby Chair with Airbag</i>",
    date: "Aug 2024",
    highlight: true,
    icon: <FaCrown className="text-yellow-400" />,
    type: "Patent"
  },
  {
    title: "Completed AWS Cloud Practitioner Essentials Certification",
    date: "Feb 2025",
    highlight: false,
    icon: <FaCertificate className="text-blue-400" />,
    type: "Certification"
  },
  {
    title: "Completed \"Introduction to Cloud Computing\" by IBM",
    date: "Jul 2024",
    highlight: false,
    icon: <FaCertificate className="text-blue-400" />,
    type: "Certification"
  },
  {
    title: "Earned Microsoft Azure Fundamentals Certification",
    date: "Jun 2025",
    highlight: false,
    icon: <FaCertificate className="text-blue-400" />,
    type: "Certification"
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#020c1b] text-slate-300 py-24 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
        >
          Awards & Certifications
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group 
                ${item.highlight
                  ? "bg-gradient-to-br from-[#112240] to-[#0a192f] border-blue-500/50 shadow-blue-900/20 shadow-lg"
                  : "bg-[#112240] border-white/5 hover:border-blue-400/30"
                }`}
            >
              <div className="flex items-start gap-4 z-10 relative">
                <div className={`p-3 rounded-lg ${item.highlight ? "bg-blue-500/20" : "bg-white/5"}`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 ${item.highlight ? "text-yellow-400" : "text-blue-300"}`}>
                      {item.type}
                    </span>
                    <span className="text-sm font-mono text-slate-400">{item.date}</span>
                  </div>

                  <h3
                    className={`text-lg font-semibold leading-snug ${item.highlight ? "text-white" : "text-slate-200"}`}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
