"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Skills() {
  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 relative z-10 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-100 font-mono">Technical Stack</h3>
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700/50 bg-slate-900/40 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          
          <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div>
            <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Languages</h4>
            <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { name: "TypeScript", iconSrc: "/logo/typescript.svg" },
                { name: "JavaScript", iconSrc: "/logo/javascript.svg" },
                { name: "Java", iconSrc: "/logo/java.svg" },
                { name: "C++", iconSrc: "/logo/c++.svg" },
                { name: "Python", iconSrc: "/logo/python.svg" },
                { name: "SQL", iconSrc: "/logo/sql.svg" },
                { name: "AL", iconSrc: "/logo/AL.svg" },
              ].map((skill, idx, arr) => (
                <div
                  key={skill.name}
                  className={`bg-slate-800/80 hover:bg-slate-700 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default ${
                    idx === arr.length - 1 && arr.length % 2 !== 0
                      ? "col-span-2 justify-self-center w-[calc((100%-1rem)/2)]"
                      : ""
                  }`}
                >
                  <Image
                    src={skill.iconSrc}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div>
            <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Frameworks & Web</h4>
            <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { name: "React", iconSrc: "/logo/react.svg" },
                { name: "Next.js", iconSrc: "/logo/nextjs.svg" },
                { name: "Node.js", iconSrc: "/logo/nodejs.svg" },
                { name: "Express", iconSrc: "/logo/express.svg" },
                { name: ".NET", iconSrc: "/logo/dotnet.svg" },
              ].map((skill, idx, arr) => (
                <div
                  key={skill.name}
                  className={`bg-slate-800/80 hover:bg-slate-700 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default ${
                    idx === arr.length - 1 && arr.length % 2 !== 0
                      ? "col-span-2 justify-self-center w-[calc((100%-1rem)/2)]"
                      : ""
                  }`}
                >
                  <Image
                    src={skill.iconSrc}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg></div>
            <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Platforms & Tools</h4>
            <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { name: "Business Central", iconSrc: "/logo/businesscentral.svg" },
                { name: "SAP B1", iconSrc: "/logo/sap.svg" },
                { name: "MS-SQL", iconSrc: "/logo/ms-sql.svg" },
                { name: "MongoDB", iconSrc: "/logo/mongodb.svg" },
                { name: "Azure", iconSrc: "/logo/azure.svg" },
                { name: "NetSuite", iconSrc: "/logo/netsuite.svg" },
                { name: "GitHub", iconSrc: "/logo/github.svg" },
              ].map((skill, idx, arr) => (
                <div
                  key={skill.name}
                  className={`bg-slate-800/80 hover:bg-slate-700 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default ${
                    idx === arr.length - 1 && arr.length % 2 !== 0
                      ? "col-span-2 justify-self-center w-[calc((100%-1rem)/2)]"
                      : ""
                  }`}
                >
                  <Image
                    src={skill.iconSrc}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8">
          <h4 className="text-lg font-bold text-slate-400 font-mono mb-6 text-center">Core Competencies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'ERP Systems & Customization',
              'Full-Stack Web Development',
              'Software Development Practices',
              'System Troubleshooting & Debugging',
              'Database & Data Handling',
              'Applied Machine Learning',
            ].map((competency) => (
              <div key={competency} className="bg-slate-800/50 border border-slate-700/50 px-5 py-2.5 rounded-full text-sm font-medium text-teal-300 hover:bg-slate-700 cursor-default">{competency}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}