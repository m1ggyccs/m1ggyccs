"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Experience() {
  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 border-b border-slate-800/50 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-100 font-mono"><span className="text-teal-500">#</span> Professional Experience</h3>
        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-6 ring-4 ring-slate-950"></div>
            <div className="md:ml-8 bg-slate-900/40 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-xl p-1.5 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                    <Image src="/mustard-seed.jpg" alt="Mustard Seed Logo" width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-100">Technical Consultant Intern</h4>
                    <p className="text-lg text-teal-400 font-medium mt-1"><a href="https://www.mseedsystems.com/" target="_blank" rel="noreferrer" className="hover:text-teal-300 hover:underline">Mustard Seed Systems Corporation</a></p>
                  </div>
                </div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/80 text-slate-400 text-sm border border-slate-700 whitespace-nowrap font-mono mt-2 md:mt-0">January 2026 - Present</div>
              </div>
              <ul className="space-y-4 text-slate-400 leading-relaxed pl-2 md:pl-20">
                <li className="flex gap-3"><span className="text-teal-500 mt-1 text-lg">▹</span><span>Customize and enhance Microsoft Dynamics 365 Business Central solutions using AL language, including page extensions, table extensions, and RDLC reports.</span></li>
                <li className="flex gap-3"><span className="text-teal-500 mt-1 text-lg">▹</span><span>Diagnose and resolve functional and technical issues within purchasing, finance, and reporting modules to maintain system performance and reliability.</span></li>
                <li className="flex gap-3"><span className="text-teal-500 mt-1 text-lg">▹</span><span>Assist in requirements gathering, business process analysis, and solution design.</span></li>
                <li className="flex gap-3"><span className="text-teal-500 mt-1 text-lg">▹</span><span>Provide basic support and technical assistance using SAP Business One and Microsoft SQL Server (MSSQL).</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}