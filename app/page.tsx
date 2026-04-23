"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
  loading: () => null,
});

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-teal-500/30 relative">
        {!prefersReducedMotion && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-[100] shadow-[0_0_10px_#2dd4bf]"
            style={{ scaleX }}
          />
        )}
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
        <BackToTop />

        <Analytics />
        <SpeedInsights />
      </main>
    </MotionConfig>
  );
}