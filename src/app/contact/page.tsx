"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message sent!");
  }

  return (
    <div className="min-h-screen bg-[#020c1b] text-slate-300 py-24 px-4 overflow-hidden relative flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Connect</h1>
          <p className="text-lg text-slate-400 mb-10 max-w-md">
            I&apos;m currently looking for new opportunities in AI/ML. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="p-4 bg-[#112240] rounded-xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shadow-lg border border-white/5">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-slate-400">niranjanperumalsamy@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="p-4 bg-[#112240] rounded-xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shadow-lg border border-white/5">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-slate-400">+91 9344894574</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="p-4 bg-[#112240] rounded-xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all shadow-lg border border-white/5">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-slate-400">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#112240] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020c1b] border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020c1b] border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020c1b] border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#020c1b] border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
