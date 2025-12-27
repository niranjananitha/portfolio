"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'AI-Powered Plant Disease Detection System',
    slug: 'ai-powered-plant-disease-detection',
    technologies: ['TensorFlow.js', 'Next.js', 'Computer Vision'],
    description: 'Built a web-based app for real-time plant disease detection using TensorFlow.js with 92.4% accuracy.',
    stats: [
      { label: 'Accuracy', value: '92.4%' },
      { label: 'Images', value: '2400+' }
    ],
    icon: '🌿'
  },
  {
    title: 'AI-Powered Automation Agent',
    slug: 'ai-powered-automation-agent',
    technologies: ['DeepSeek-R1', 'Gemini', 'Google API'],
    description: 'Developed an AI agent to automate web tasks like online shopping with 97.45% confidence rate.',
    stats: [
      { label: 'Confidence', value: '97.45%' },
      { label: 'Processing', value: 'Real-time' }
    ],
    icon: '🤖'
  },
  {
    title: 'Speech to ISL Translator',
    slug: 'isl',
    technologies: ['Python', 'Google Translate API', 'NLP'],
    description: 'Developed an AI tool to convert spoken language into Indian Sign Language gesture videos.',
    stats: [
      { label: 'Translation', value: 'Real-time' },
      { label: 'Gestures', value: 'ISL' }
    ],
    icon: '🤟'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-6">
      <h1 className="text-4xl font-bold text-[#64ffda] mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            passHref
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#112240] rounded-lg p-6 flex flex-col h-full relative group cursor-pointer hover:ring-2 hover:ring-[#64ffda]"
            >
              <span className="text-4xl absolute right-6 top-6">{project.icon}</span>
              <h2 className="text-xl font-bold text-gray-200 mb-4 pr-12">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-sm px-3 py-1 rounded bg-[#1d4ed8] bg-opacity-20 text-[#64ffda]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#64ffda] text-xl font-bold">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
