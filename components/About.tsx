"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-zinc-900/50 py-24 border-y border-zinc-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-zinc-100"><span className="text-teal-500">#</span> About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed">
          <div className="space-y-6">
            <p>I am a Software Engineer and Computer Science student graduating in June 2026 from the Technological Institute of the Philippines. I possess a solid foundation in software engineering principles, full-stack development, and machine learning, strengthened through prior academic training at iACADEMY and hands-on experience in technical consulting environments.</p>
            <p>Currently a Technical Consultant Intern at Mustard Seeds Systems Corporation focusing on Microsoft 365 Business Central.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-xl">
            <h4 className="text-xl font-semibold text-zinc-100 mb-6">Core Engineering Focus</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1">▹</span><span><strong className="text-zinc-200">ERP Customization:</strong> Customizing Microsoft Dynamics 365 Business Central using AL language.</span></li>
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1">▹</span><span><strong className="text-zinc-200">Full-Stack Systems:</strong> Building robust applications using React, Node.js / Express, Next.js, and MongoDB.</span></li>
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1">▹</span><span><strong className="text-zinc-200">AI & Machine Learning:</strong> Implementing object detection models and gesture recognition systems using Python.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}