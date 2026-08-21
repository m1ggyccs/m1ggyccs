"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-slate-900/50 py-24 md:py-28 border-y border-slate-800 relative z-10 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start text-slate-300 text-lg leading-relaxed">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-100 font-mono"><span className="text-teal-500">#</span> About Me</h3>
            <p>I’m a Software Engineer and Computer Science graduate from the Technological Institute of the Philippines.</p>
            <p>I enjoy building scalable full-stack applications and working on AI-driven systems that solve real-world problems. My experience comes from both academic training at iACADEMY and hands-on work in technical consulting, where I’ve learned how systems are applied in real business environments.</p>
            <p>Currently a Technical Consultant at Mustard Seed Systems Corporation focusing on Netsuite and Microsoft 365 Business Central.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-xl self-start w-full">
            <h4 className="text-xl font-semibold text-slate-100 mb-6">Core Engineering Focus</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1 shrink-0">▹</span><span><strong className="text-slate-200">ERP &amp; Business Systems:</strong> Customize Business Central with AL, NetSuite with scripts and forms, and Odoo Online and Odoo.sh. I also troubleshoot SAP Business One issues.</span></li>
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1 shrink-0">▹</span><span><strong className="text-slate-200">Full-Stack Engineering:</strong> Build structured, performant applications with React, Next.js, Node.js, Express, and MongoDB.</span></li>
              <li className="flex items-start gap-4"><span className="text-teal-500 mt-1 shrink-0">▹</span><span><strong className="text-slate-200">AI &amp; Machine Learning:</strong> Develop Python projects for object detection and gesture recognition.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}