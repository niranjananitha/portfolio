"use client";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-dark text-text-primary overflow-x-hidden selection:bg-primary selection:text-bg-dark">
      <Background />
      <Navbar />

      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <Skills />
        <Projects />
        <CodingProfiles />
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10">
        <p>© 2025 Niranjan P N. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
