"use client";
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 40px 10px #00ffea', filter: 'blur(2px)' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="px-10 py-5 text-2xl font-bold rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500"
      >
        Contact / Hire Me
      </motion.button>
    </div>
  );
}
