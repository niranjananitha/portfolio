"use client";
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Core ML & AI',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Object Detection', level: 80 },
      { name: 'OpenCV', level: 85 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 90 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Google Colab', level: 85 },
      { name: 'Tableau', level: 75 },
      { name: 'System Design', level: 70 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
      <h1 className="text-4xl font-bold text-teal-300 mb-10 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillGroups.slice(0, 3).map((group) => (
          <div key={group.title} className="bg-[#181f2a] rounded-xl shadow-lg p-8 flex-1">
            <h2 className="text-2xl font-bold text-teal-300 mb-6 text-center">{group.title}</h2>
            {group.skills.map((skill, i) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-100 font-semibold">{skill.name}</span>
                  <span className="text-teal-300 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                    className="h-3 rounded-full bg-teal-400"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto mt-8">
        {skillGroups.slice(3).map((group) => (
          <div key={group.title} className="bg-[#181f2a] rounded-xl shadow-lg p-8 flex-1">
            <h2 className="text-2xl font-bold text-teal-300 mb-6 text-center">{group.title}</h2>
            {group.skills.map((skill, i) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-100 font-semibold">{skill.name}</span>
                  <span className="text-teal-300 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                    className="h-3 rounded-full bg-teal-400"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
