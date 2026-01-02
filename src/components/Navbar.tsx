"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "/education" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="glass-panel px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-between shadow-2xl border border-white/10 relative bg-bg-dark/80 backdrop-blur-md">
        <div className="text-primary font-bold text-xl tracking-tighter">NA</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <Image
            src="/image.jpg"
            alt="Menu"
            fill
            className="object-cover"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 glass-panel rounded-2xl md:hidden border border-white/10 bg-bg-dark/95 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-4"
          >
            <ul className="flex flex-col gap-4 text-center w-full">
              {links.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-all text-base font-medium tracking-wide py-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
