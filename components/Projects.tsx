"use client";

import React from 'react';
// 1. Added Variants to the import here 👇
import { motion, Variants } from "framer-motion"; 
import Tilt from 'react-parallax-tilt';
import {GitHubCalendar} from 'react-github-calendar';
import dynamic from 'next/dynamic';

// 2. Added the : Variants type here 👇
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-slate-900/50 py-24 border-b border-slate-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-teal-500">#</span> Code Repositories
          </h3>
          <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors font-medium">
            View full GitHub Profile <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Smart Budget Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 shadow-lg group transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform mb-4">💰</div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">Smart Budget Tracker</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">AI-powered budget forecasting dashboard with multi-model analysis (Moving Average, Holt-Winters, LSTM).</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Python</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Analytics</span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <a href="https://github.com/m1ggyccs/Smart-Budget-Tracking" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5">View Code →</a>
                </div>
              </div>
            </div>
          </Tilt>

          {/* Volleyball Gesture System */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 shadow-lg group transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform mb-4">🏐</div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">Volleyball Gesture System</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">AI-powered gesture recognition application for automated volleyball match scoring.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Python</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Next.js</span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <a href="https://github.com/m1ggyccs/Volleyball-Gesture-System" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5">View Code →</a>
                </div>
              </div>
            </div>
          </Tilt>

          {/* Laundry Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 shadow-lg group transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform mb-4">🧺</div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">M1G Laundry Tracker</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">Full-stack application for tracking laundry orders and optimizing staff scheduling.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Prisma</span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <a href="https://github.com/m1ggyccs/M1G-Laundry-Tracker" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5">View Code →</a>
                </div>
              </div>
            </div>
          </Tilt>

        </div>

        {/* --- LIVE GITHUB CALENDAR --- */}
        <div className="mt-20 flex flex-col items-center justify-center bg-slate-900/40 p-8 rounded-3xl border border-slate-700/50 shadow-xl overflow-x-auto w-full max-w-full">
          <h4 className="text-2xl font-bold text-slate-100 mb-8 font-mono">
            <span className="text-teal-500">GitHub</span> Contributions
          </h4>
          <GitHubCalendar 
            username="m1ggyccs" 
            colorScheme="dark"
            theme={{
              light: ['#1e293b', '#115e59', '#0d9488', '#0f766e', '#2dd4bf'],
              dark: ['#1e293b', '#115e59', '#0d9488', '#0f766e', '#2dd4bf']
            }}
          />
        </div>
        
      </div>
    </motion.section>
  );
}