import React from 'react';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Imported Modular Components
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-teal-500/30 relative">
      
      {/* Background & Nav */}
      <ParticleBackground />
      <Navbar />

      {/* Page Content */}
      <Hero />
      <About />
      <Experience />
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