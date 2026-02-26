"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Education() {
  return (
    <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 border-b border-slate-800/50 relative z-10 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-teal-500">#</span> Education
          </h3>
          
          <div className="space-y-8">
            {/* College Degree */}
            <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden hover:border-slate-700 transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
              
              <div className="flex items-center gap-5 mb-8 mt-1 pl-2">
                <div className="w-14 h-14 shrink-0 bg-white rounded-lg p-1 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                  <Image src="/tip-logo.png" alt="TIP Logo" width={56} height={56} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 leading-tight mb-1">Bachelor of Science in Computer Science</h4>
                  <p className="text-md text-teal-400 font-medium">
                    <a href="https://www.tip.edu.ph/" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:underline transition-all">
                      Technological Institute of the Philippines, Manila
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-400 pl-2">
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span>Graduating: June 2026</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <span>Vice President Lister (VPAA) and consistent Dean&apos;s Lister</span>
                </p>
                
                <div className="pt-6 mt-4 border-t border-slate-800/50">
                  <p className="text-sm font-semibold text-slate-300 mb-3 font-mono">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                    {['Data Structures', 'Machine Learning', 'Artificial Intelligence', 'Database Systems', 'Project Management'].map((course) => (
                      <span key={course} className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Senior High School */}
            <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden hover:border-slate-700 transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-700"></div>
              
              <div className="flex items-center gap-5 mb-8 mt-1 pl-2">
                <div className="w-14 h-14 shrink-0 bg-white rounded-lg p-1 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                  <Image src="/iacademy-logo.png" alt="iACADEMY Logo" width={56} height={56} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 leading-tight mb-1">Senior High School - Software Development</h4>
                  <p className="text-md text-teal-400 font-medium">
                    <a href="https://iacademy.edu.ph/" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:underline transition-all">
                      iACADEMY
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-400 pl-2">
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span>2019 - 2021</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Focused on software development and programming fundamentals.</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <span>1st Runner-up, iACADEMY Expo (Avalon Dawnbreak 2D Platformer)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-teal-500">#</span> Certifications
          </h3>
          
          <ul className="space-y-4">
            {[
              { name: 'Responsive Web Design', provider: 'freeCodeCamp', date: 'Feb 2026' },
              { name: 'Python Data Associate', provider: 'DataCamp', date: 'Sep 2025' },
              { name: 'Microsoft Azure AI Fundamentals', provider: 'TESDA', date: 'Jun 2025' },
              { name: 'Web Development Fundamentals', provider: 'IBM', date: 'Jun 2025' },
              { name: 'Business Analysis & Process Mgmt.', provider: 'Coursera', date: 'Jun 2025' },
            ].map((cert) => (
              <li key={cert.name} className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">{cert.name}</h5>
                  <p className="text-sm text-slate-500 mt-0.5">{cert.provider}</p>
                </div>
                <span className="text-sm font-mono text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}