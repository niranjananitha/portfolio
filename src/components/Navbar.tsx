"use client";
import { motion } from "framer-motion";

export default function Navbar() {
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
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-panel px-8 py-4 rounded-full flex items-center gap-8 shadow-2xl border border-white/10">
        <div className="text-primary font-bold text-xl tracking-tighter">NA</div>
        <ul className="flex gap-6">
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
      </div>
    </motion.nav>
  );
}
