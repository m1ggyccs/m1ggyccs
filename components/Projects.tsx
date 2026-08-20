"use client";

import React, { useRef } from 'react';
import { motion, Variants, useInView } from "framer-motion"; 
import Tilt from 'react-parallax-tilt';
import dynamic from 'next/dynamic';
import type { Props as GitHubCalendarProps } from 'react-github-calendar';
import SpotlightCard from './SpotlightCard'; 

const GitHubCalendar = dynamic<GitHubCalendarProps>(
  () =>
    import('react-github-calendar').then(
      (mod) => mod.GitHubCalendar as React.ComponentType<GitHubCalendarProps>
    ),
  { ssr: false, loading: () => <div className="h-72 w-full animate-pulse bg-slate-800/50 rounded-3xl" /> }
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Projects() {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const isCalendarInView = useInView(calendarRef, { once: true, margin: "200px 0px" });

  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-slate-900/50 py-24 md:py-28 border-b border-slate-800 relative z-10 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-teal-500">#</span> Featured Projects
          </h3>
          <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" aria-label="Full GitHub repository list (opens in a new tab)" className="text-slate-400 hover:text-teal-400 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm">
            Full Repository
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Smart Budget Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-bold text-slate-100 font-mono">Smart Budget Tracker</h4>
              </div>
              <div className="md:hidden text-sm text-slate-300 leading-relaxed flex-grow">
                Budget analytics tool using machine learning models for category mapping and demand forecasting.
              </div>
              <div className="hidden md:block text-xs text-slate-400 leading-relaxed flex-grow">
                <p>Built a comparative forecasting engine that categorizes messy spending data and evaluates Moving Average, Holt-Winters, and LSTM models for small-scale predictive budgeting.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Python</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">LSTM</span>
                </div>
                <a href="https://github.com/m1ggyccs/Smart-Budget-Tracking" target="_blank" rel="noreferrer" aria-label="Smart Budget Tracker code (opens in a new tab)" className="text-teal-400 hover:text-teal-300 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm px-1">View Code</a>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* 2. Volleyball Gesture System */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-bold text-slate-100 font-mono">VolleyVision</h4>
              </div>
              <div className="md:hidden text-sm text-slate-300 leading-relaxed flex-grow">
                Computer-vision web app that identifies volleyball referee gestures in real time.
              </div>
              <div className="hidden md:block text-xs text-slate-400 leading-relaxed flex-grow">
                <p>Trained a custom computer-vision model to recognize volleyball referee gestures and integrated it into a Next.js web prototype for real-time interpretation.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">OpenCV</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Next.js</span>
                </div>
                <a href="https://github.com/m1ggyccs/Volleyball-Gesture-System" target="_blank" rel="noreferrer" aria-label="VolleyVision code (opens in a new tab)" className="text-teal-400 hover:text-teal-300 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm px-1">View Code</a>
              </div>
            </SpotlightCard>
          </Tilt>

          {/* 3. M1G Laundry Tracker */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-bold text-slate-100 font-mono">M1G Laundry Tracker</h4>
              </div>
              <div className="md:hidden text-sm text-slate-300 leading-relaxed flex-grow">
                Laundry operations tracker with order lifecycle monitoring and profitability visibility.
              </div>
              <div className="hidden md:block text-xs text-slate-400 leading-relaxed flex-grow">
                <p>Designed a full-stack operations tracker with Postgres and Prisma to simplify order lifecycles, resolve backjob confusion, and surface profitability.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Next.js</span>
                  <span className="text-[10px] bg-slate-900/50 border border-slate-700 px-2 py-1 rounded font-mono">Prisma</span>
                </div>
                <a href="https://github.com/m1ggyccs/M1G-Laundry-Tracker" target="_blank" rel="noreferrer" aria-label="M1G Laundry Tracker code (opens in a new tab)" className="text-teal-400 hover:text-teal-300 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm px-1">View Code</a>
              </div>
            </SpotlightCard>
          </Tilt>

        </div>
        
        {/* GitHub Calendar */}
        <div ref={calendarRef} className="mt-20 flex flex-col items-center justify-center bg-slate-900/40 p-8 rounded-3xl border border-slate-700/50 shadow-xl overflow-x-auto w-full max-w-full">
          <h4 className="text-2xl font-bold text-slate-100 mb-8 font-mono">
            <span className="text-teal-500">GitHub</span> Contributions
          </h4>
          {isCalendarInView ? (
            <GitHubCalendar 
              username="m1ggyccs" 
              colorScheme="dark"
              theme={{
                light: ['#1e293b', '#115e59', '#0d9488', '#0f766e', '#2dd4bf'],
                dark: ['#1e293b', '#115e59', '#0d9488', '#0f766e', '#2dd4bf']
              }}
            />
          ) : (
            <div className="h-28 w-full max-w-3xl rounded-2xl bg-slate-800/40 animate-pulse" />
          )}
        </div>
      </div>
    </motion.section>
  );
}