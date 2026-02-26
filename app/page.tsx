"use client";

import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Imported Modular Components
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  // Reading Progress Bar tracking logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-teal-500/30 relative">
      
      {/* 🥇 The Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-[100] shadow-[0_0_10px_#2dd4bf]"
        style={{ scaleX }}
      />
      
      {/* Background & Nav */}
      <ParticleBackground />
      <Navbar />

      {/* Page Content */}
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      {/* Vercel Metrics */}
      <Analytics />
      <SpeedInsights />
      
    </main>
  );
}