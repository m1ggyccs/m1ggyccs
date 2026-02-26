"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Contact() {
  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 relative z-10 border-t border-slate-800/50 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 font-mono"><span className="text-teal-500">Let&apos;s</span> Connect</h3>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you want to discuss Business Central AL, chat about AI projects, or just talk about software engineering, my inbox is always open!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a href="mailto:amigsdavid@email.com" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-teal-500/20 flex gap-3 justify-center"><span className="text-xl">✉️</span>amigsdavid@email.com</a>
          <a href="https://linkedin.com/in/amigsdavid/" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 px-8 py-4 rounded-xl font-semibold border border-slate-700 flex gap-3 justify-center"><span className="text-xl">💼</span>LinkedIn Profile</a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-mono text-sm">
          <p className="flex items-center gap-2"><span>📱</span> +6396-9643-8031</p>
          <p className="flex items-center gap-2"><span>📍</span> Makati, Metro Manila</p>
          <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-teal-400"><span>🐙</span> github.com/m1ggyccs</a>
        </div>
      </div>
    </motion.section>
  );
}