"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion, Variants } from "framer-motion";
import MagneticButton from './MagneticButton'; // Added Import!

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[75vh] text-center">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 ring-4 ring-teal-500/20 shadow-2xl shadow-teal-500/10 bg-slate-800">
          <Image src="/avatar.jpg" alt="Andrei Miguel A. David" width={160} height={160} className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-teal-400 rounded-full border-4 border-slate-900"></div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }} className="max-w-4xl space-y-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 font-mono leading-tight">
          Hi! I&apos;m <span className="text-teal-400">Andrei Miguel<br />A. David.</span>
        </h1>
        <div className="text-xl md:text-2xl text-slate-400 font-medium font-mono h-12 mt-4">
          A{' '}
          <TypeAnimation
            sequence={['Technical Consultant Intern', 2000, 'Software Engineer', 2000, 'Business Central Developer', 2000]}
            wrapper="span" speed={50} className="text-teal-400 font-bold" repeat={Infinity}
          />
        </div>
        <p className="text-lg md:text-xl text-slate-400 italic mt-8 max-w-2xl font-serif opacity-80">
          &quot;Building scalable ERP solutions, full-stack web applications, and intelligent systems.&quot;
        </p>
        
        {/* Applied Magnetic Buttons Here! */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <MagneticButton>
            <a href="#projects" className="block bg-teal-600 hover:bg-teal-500 text-white px-7 py-3 rounded-md font-semibold transition-all shadow-lg shadow-teal-500/20">View My Work</a>
          </MagneticButton>
          <MagneticButton>
            <a href="/resume.pdf" download="Andrei_David_Resume.pdf" className="block bg-slate-800 hover:bg-slate-700 text-slate-100 px-7 py-3 rounded-md font-semibold transition-all border border-slate-600 hover:border-teal-500/50 flex items-center gap-2"><span>📄</span> Download Resume</a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="block bg-slate-900 hover:bg-slate-800 text-slate-100 px-7 py-3 rounded-md font-semibold transition-all border border-slate-700 hover:border-teal-500/50">Explore GitHub</a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}