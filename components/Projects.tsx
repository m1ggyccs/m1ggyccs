"use client";

import React from 'react';
import { motion, Variants } from "framer-motion"; 
import Tilt from 'react-parallax-tilt';
import dynamic from 'next/dynamic';
import SpotlightCard from './SpotlightCard'; 

// FIXED: Explicitly typing the dynamic import so TypeScript knows what props to expect!
const GitHubCalendar = dynamic<{ username: string; colorScheme?: string; theme?: any }>(
  () => import('react-github-calendar').then((mod: any) => mod.default || mod.GitHubCalendar), 
  { ssr: false, loading: () => <div className="h-72 w-full animate-pulse bg-slate-800/50 rounded-3xl" /> }
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Projects() {
  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-slate-900/50 py-24 border-b border-slate-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-teal-500">#</span> Featured Projects
          </h3>
          <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors font-medium">
            Full Repository &rarr;
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Smart Budget Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl border border-slate-700">💰</div>
                <h4 className="text-xl font-bold text-slate-100 font-mono">Budget Tracker</h4>
              </div>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed flex-grow">
                <p><strong className="text-teal-400/80">S:</strong> Needed to analyze cross-cultural spending behaviors using limited datasets where transactions were vaguely categorized as &quot;Others&quot;.</p>
                <p><strong className="text-teal-400/80">T:</strong> Clean unstructured data by mapping descriptions to categories, and identify the best forecasting model for small-scale data.</p>
                <p><strong className="text-teal-400/80">A:</strong> Built a comparative engine evaluating Moving Average, Holt-Winters, and LSTM models side-by-side.</p>
                <p><strong className="text-teal-400/80">R:</strong> Successfully categorized the data and identified the highest-performing model, proving the viability of cross-cultural predictive budgeting.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Python</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">LSTM</span>
                </div>
                <a href="https://github.com/m1ggyccs/Smart-Budget-Tracking" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 text-sm font-bold">View Code →</a>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* 2. Volleyball Gesture System */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl border border-slate-700">🏐</div>
                <h4 className="text-xl font-bold text-slate-100 font-mono">Gesture Scoring</h4>
              </div>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed flex-grow">
                <p><strong className="text-teal-400/80">S:</strong> Casual volleyball viewers struggle to keep up with complex referee hand signals during fast-paced matches.</p>
                <p><strong className="text-teal-400/80">T:</strong> Develop a web-based computer vision tool to automatically interpret and track gestures in real-time.</p>
                <p><strong className="text-teal-400/80">A:</strong> Trained a custom model using a proprietary dataset and integrated it with a Next.js web app for API communication and SEO.</p>
                <p><strong className="text-teal-400/80">R:</strong> Achieved high accuracy in capturing signals despite a strict timeframe, successfully delivering a functional web prototype.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">OpenCV</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Next.js</span>
                </div>
                <a href="https://github.com/m1ggyccs/Volleyball-Gesture-System" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 text-sm font-bold">View Code →</a>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* 3. M1G Laundry Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl border border-slate-700">🧺</div>
                <h4 className="text-xl font-bold text-slate-100 font-mono">Laundry Tracker</h4>
              </div>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed flex-grow">
                <p><strong className="text-teal-400/80">S:</strong> A real laundry business was upgrading machinery but still relying on manual tracking for orders, backjobs, and revenue.</p>
                <p><strong className="text-teal-400/80">T:</strong> Architect a modernized, full-stack tracking application to handle complex order lifecycles and business analytics.</p>
                <p><strong className="text-teal-400/80">A:</strong> Designed a robust relational database schema using Postgres and Prisma to efficiently manage customer queues and financial data.</p>
                <p><strong className="text-teal-400/80">R:</strong> Delivered a system that simplified order tracking, resolved backjob confusion, and provided clear visibility into profitability.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Next.js</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Prisma</span>
                </div>
                <a href="https://github.com/m1ggyccs/M1G-Laundry-Tracker" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 text-sm font-bold">View Code →</a>
              </div>
            </SpotlightCard>
          </Tilt>

        </div>
        
        {/* GitHub Calendar */}
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