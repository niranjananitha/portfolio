"use client";
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';

export default function AboutPage() {
  // Particle config
  const particlesOptions = {
    background: { color: { value: '#111' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100 } },
    },
    particles: {
      color: { value: '#a855f7' },
      links: { enable: true, color: '#a855f7', distance: 150 },
      move: { enable: true, speed: 2 },
      number: { value: 80 },
      opacity: { value: 0.4 },
      shape: { type: 'circle' },
      size: { value: 2.5 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Particles Background */}
      <Particles id="tsparticles" options={particlesOptions} />

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20">
        <span className="text-purple-400 font-bold text-xl">Portfolio</span>
        <ul className="flex gap-8 text-gray-300 font-medium">
          <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">Resume</a></li>
          <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-10">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-purple-400 mb-2 text-center tracking-wide"
        >
          CREATIVE DEVELOPER & DESIGNER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 text-center mb-6 max-w-xl"
        >
          I build immersive digital experiences that combine design, animation, and cutting-edge web technologies.
        </motion.p>
        <div className="flex gap-4 mb-10">
          <motion.a
            whileHover={{ scale: 1.08 }}
            href="#"
            className="px-6 py-2 rounded-lg bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            href="#"
            className="px-6 py-2 rounded-lg bg-gray-800 text-purple-400 font-bold shadow-lg hover:bg-purple-900 transition"
          >
            Contact Me
          </motion.a>
        </div>
        {/* Floating Gradient Shape */}
        <motion.div
          initial={{ y: -40, scale: 0.8, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          className="w-32 h-32 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center mb-2"
          style={{ filter: 'blur(1px)', zIndex: 2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="w-20 h-20 bg-gradient-to-tr from-purple-400 via-blue-400 to-pink-400 rounded-xl opacity-80"
          />
        </motion.div>
      </div>

      {/* About Me Card Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl p-8 max-w-xl w-full"
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">About Me</h2>
          <p className="text-gray-200 text-base text-center">
            Hi there! I&apos;m a creative developer with a passion for building beautiful, interactive web experiences. With a background in both design and development, I bring a unique perspective to every project.<br /><br />
            I specialize in front-end development, creating responsive websites and applications with modern technologies like React, Three.js, and Framer Motion. My goal is to build digital products that are not only visually stunning but also highly functional and accessible.<br /><br />
            When I&apos;m not coding, you can find me exploring new design trends, experimenting with creative coding, or sharing my knowledge through articles and tutorials.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
