"use client";

import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [init, setInit] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize the particle engine once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Reusable animation configuration for scroll reveals
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // Changed to a dark slate background to match the reference's navy hue
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-teal-500/30 relative">
      
      {/* Background Particles Network - Only renders after initialization */}
      {init && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              particles: {
                color: { value: "#2dd4bf" }, // Teal particles
                links: {
                  color: "#2dd4bf",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  outModes: { default: "bounce" },
                },
                number: { density: { enable: true, width: 800 }, value: 40 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* 1. STICKY MOBILE-RESPONSIVE NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 transition-all">
        <div className="flex justify-between items-center p-5 max-w-6xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-slate-100 font-mono">
            &lt;m1ggyccs/&gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
              GitHub
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-teal-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl py-4 flex flex-col items-center space-y-4">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-teal-400 font-medium">About</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-teal-400 font-medium">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-teal-400 font-medium">Projects</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-teal-400 font-medium">Skills</a>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 font-medium">GitHub</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[75vh] text-center">
        
        {/* Centered Avatar Image */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 ring-4 ring-teal-500/20 shadow-2xl shadow-teal-500/10 bg-slate-800">
            <img 
              src="/avatar.jpg" 
              alt="Andrei Miguel A. David" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-teal-400 rounded-full border-4 border-slate-900"></div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }} className="max-w-4xl space-y-6 flex flex-col items-center">
          {/* Monospace, perfectly centered header */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 font-mono leading-tight">
            Hi! I'm <span className="text-teal-400">Andrei Miguel<br />A. David.</span>
          </h1>
          
          {/* Typing Animation block */}
          <div className="text-xl md:text-2xl text-slate-400 font-medium font-mono h-12 mt-4">
            A{' '}
            <TypeAnimation
              sequence={[
                'Technical Consultant Intern',
                2000,
                'Software Engineer',
                2000,
                'Business Central Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-teal-400 font-bold"
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 italic mt-8 max-w-2xl font-serif opacity-80">
            "Building scalable ERP solutions, full-stack web applications, and intelligent systems."
          </p>
          
          {/* 2. ADDED DOWNLOAD RESUME BUTTON */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="#projects" className="bg-teal-600 hover:bg-teal-500 text-white px-7 py-3 rounded-md font-semibold transition-all shadow-lg shadow-teal-500/20">
              View My Work
            </a>
            <a href="/resume.pdf" download="Andrei_David_Resume.pdf" className="bg-slate-800 hover:bg-slate-700 text-slate-100 px-7 py-3 rounded-md font-semibold transition-all border border-slate-600 hover:border-teal-500/50 flex items-center gap-2">
              <span>📄</span> Download Resume
            </a>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-slate-100 px-7 py-3 rounded-md font-semibold transition-all border border-slate-700 hover:border-teal-500/50">
              Explore GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. SCROLL REVEAL ANIMATIONS APPLIED TO ALL SECTIONS */}
      {/* About Section */}
      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-zinc-900/50 py-24 border-y border-zinc-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-zinc-100">
            <span className="text-blue-500">#</span> About Me
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed">
            <div className="space-y-6">
              <p>
                I am a Software Engineer and Computer Science student graduating in June 2026 from the Technological Institute of the Philippines. I possess a solid foundation in software engineering principles, full-stack development, and machine learning, strengthened through prior academic training at iACADEMY and hands-on experience in technical consulting environments.
              </p>
              <p>
                Currently, I am a Technical Consultant Intern at Mustard Seeds Systems Corporation focusing on Microsoft 365 Business Central.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-xl">
              <h4 className="text-xl font-semibold text-zinc-100 mb-6">Core Engineering Focus</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span><strong className="text-zinc-200">ERP Customization:</strong> Customizing Microsoft Dynamics 365 Business Central using AL language.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span><strong className="text-zinc-200">Full-Stack Systems:</strong> Building robust applications using React, Node.js / Express, Next.js, and MongoDB.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span><strong className="text-zinc-200">AI & Machine Learning:</strong> Implementing object detection models and gesture recognition systems using Python.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Professional Experience Section */}
      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 border-b border-slate-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-100 font-mono">
            <span className="text-blue-500">#</span> Professional Experience
          </h3>
          
          <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
            
            {/* Mustard Seed Internship */}
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-6 ring-4 ring-slate-950"></div>
              
              <div className="md:ml-8 bg-slate-900/40 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                  
                  {/* Flex Container for Logo + Text */}
                  <div className="flex items-center gap-5">
                    {/* Logo Box */}
                    <div className="w-16 h-16 shrink-0 bg-white rounded-xl p-1.5 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                      <img 
                        src="/mustard-seed.jpg" 
                        alt="Mustard Seed Systems Corporation Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Title & Company */}
                    <div>
                      <h4 className="text-2xl font-bold text-slate-100">Technical Consultant Intern</h4>
                      <p className="text-lg text-blue-500 font-medium mt-1">
                        <a href="https://www.mseedsystems.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:underline transition-all">
                          Mustard Seed Systems Corporation
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/80 text-slate-400 text-sm border border-slate-700 whitespace-nowrap font-mono mt-2 md:mt-0">
                    January 2026 - Present
                  </div>
                </div>
                
                {/* Responsibilities List */}
                <ul className="space-y-4 text-slate-400 leading-relaxed pl-2 md:pl-20">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 text-lg">▹</span>
                    <span>Customize and enhance Microsoft Dynamics 365 Business Central solutions using AL language, including page extensions, table extensions, and RDLC reports based on client requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 text-lg">▹</span>
                    <span>Diagnose and resolve functional and technical issues within purchasing, finance, and reporting modules to maintain system performance and reliability.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 text-lg">▹</span>
                    <span>Assist in requirements gathering, business process analysis, and solution design, ensuring accurate translation of client needs into system configurations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 text-lg">▹</span>
                    <span>Provide basic support and technical assistance using SAP Business One and Microsoft SQL Server (MSSQL) for data queries, report validation, and database-level checks.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Education & Certifications Section */}
      <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 border-b border-slate-800/50 relative z-10 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-100 font-mono">
              <span className="text-blue-500">#</span> Education
            </h3>
            
            <div className="space-y-8">
              {/* College Degree */}
              <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden hover:border-slate-700 transition-colors">
                {/* Left Highlight Bar */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                
                {/* Flex Container for Logo + Text */}
                <div className="flex items-center gap-5 mb-8 mt-1 pl-2">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-lg p-1 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                    <img 
                      src="/tip-logo.png" 
                      alt="Technological Institute of the Philippines Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 leading-tight mb-1">Bachelor of Science in Computer Science</h4>
                    <p className="text-md text-blue-500 font-medium">
                      <a href="https://www.tip.edu.ph/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:underline transition-all">
                        Technological Institute of the Philippines, Manila
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Details List */}
                <div className="space-y-4 text-slate-400 pl-2">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>Graduating: June 2026</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    <span>Vice President Lister (VPAA) and consistent Dean's Lister</span>
                  </p>
                  
                  <div className="pt-6 mt-4 border-t border-slate-800/50">
                    <p className="text-sm font-semibold text-slate-300 mb-3 font-mono">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                      <span className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">Data Structures</span>
                      <span className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">Machine Learning</span>
                      <span className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">Artificial Intelligence</span>
                      <span className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">Database Systems</span>
                      <span className="bg-slate-800/50 border border-slate-700/50 px-2.5 py-1.5 rounded-md">Project Management</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Senior High School */}
              <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden hover:border-slate-700 transition-colors">
                {/* Left Highlight Bar (Muted color to show hierarchy) */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-700"></div>
                
                {/* Flex Container for Logo + Text */}
                <div className="flex items-center gap-5 mb-8 mt-1 pl-2">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-lg p-1 border border-slate-700 shadow-md flex items-center justify-center overflow-hidden">
                    <img 
                      src="/iacademy-logo.png" 
                      alt="iACADEMY Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 leading-tight mb-1">Senior High School - Software Development</h4>
                    <p className="text-md text-blue-500 font-medium">
                      <a href="https://iacademy.edu.ph/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:underline transition-all">
                        iACADEMY
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Details List */}
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
                    <span>1st Runner-up, iACADEMY Expo (Avalon Dawnbreak 2D Platformer) </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-100 font-mono">
              <span className="text-blue-500">#</span> Certifications
            </h3>
            
            <ul className="space-y-4">
              <li className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">Responsive Web Design</h5>
                  <p className="text-sm text-slate-500 mt-0.5">freeCodeCamp</p>
                </div>
                <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Feb 2026</span>
              </li>
              <li className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">Python Data Associate</h5>
                  <p className="text-sm text-slate-500 mt-0.5">DataCamp</p>
                </div>
                <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Sep 2025</span>
              </li>
              <li className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">Microsoft Azure AI Fundamentals</h5>
                  <p className="text-sm text-slate-500 mt-0.5">TESDA</p>
                </div>
                <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Jun 2025</span>
              </li>
              <li className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">Web Development Fundamentals</h5>
                  <p className="text-sm text-slate-500 mt-0.5">IBM</p>
                </div>
                <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Jun 2025</span>
              </li>
              <li className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex justify-between items-center hover:border-slate-700 hover:bg-slate-800/40 transition-all shadow-md">
                <div>
                  <h5 className="font-bold text-slate-200">Business Analysis & Process Mgmt.</h5>
                  <p className="text-sm text-slate-500 mt-0.5">Coursera</p>
                </div>
                <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Jun 2025</span>
              </li>
            </ul>
          </div>

        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="bg-slate-900/50 py-24 border-b border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h3 className="text-3xl font-bold flex items-center gap-3 text-slate-100 font-mono">
              <span className="text-teal-500">#</span> Code Repositories
            </h3>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors font-medium">
              View full GitHub Profile 
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project Card: Smart Budget Tracking */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                  💰
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">Smart Budget Tracker</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                AI-powered budget forecasting dashboard with multi-model analysis (Moving Average, Holt-Winters, LSTM).
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Python</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Computer Vision</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Machine Learning</span>
                </div>
                <a href="https://github.com/m1ggyccs/Smart-Budget-Tracking" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2">
                  View Repository <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Project Card: Volleyball System */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                  🏐
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">Volleyball Gesture System</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                AI-powered gesture recognition application for automated volleyball match scoring, improving real-time game tracking accuracy.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Python</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">MongoDB</span>
                </div>
                <a href="https://github.com/m1ggyccs/Volleyball-Gesture-System" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2">
                  View Repository <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Project Card: Laundry Tracker */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
               <div className="flex justify-between items-start mb-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                  🧺
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">M1G Laundry Tracker</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                Full-stack application for tracking laundry orders and optimizing staff scheduling, enhancing operational visibility.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Prisma</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">MongoDB</span>
                </div>
                <a href="https://github.com/m1ggyccs/M1G-Laundry-Tracker" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2">
                  View Repository <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

             {/* Project Card: University Hub */}
             <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:bg-slate-800/60 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
               <div className="flex justify-between items-start mb-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                  🎓
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 font-mono">University Hub</h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                Event management and collaboration platform successfully built to streamline campus and student event coordination.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Node.js</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">MongoDB</span>
                  <span className="bg-slate-900/50 border border-slate-700/50 px-2 py-1 rounded">Express</span>
                </div>
                <a href="https://github.com/m1ggyccs/UniversityHub" target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2">
                  View Repository <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 relative z-10 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          
          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-100 font-mono">
            Technical Stack
          </h3>

          {/* 3-Column Grid Container */}
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700/50 bg-slate-900/40 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            
            {/* Column 1: Languages */}
            <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
              {/* Header Icon */}
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Languages</h4>
              <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
              
              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'JavaScript', icon: '⚡' },
                  { name: 'Java', icon: '☕' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'SQL', icon: '💾' },
                  { name: 'AL', icon: '🏗️' }
                ].map((skill) => (
                  <div key={skill.name} className="bg-slate-800/80 hover:bg-slate-700 hover:-translate-y-1 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Frameworks & Web */}
            <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Frameworks & Web</h4>
              <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Express', icon: '🚂' },
                  { name: 'REST APIs', icon: '🔌' },
                  { name: '.NET (Basic)', icon: '🟣' }
                ].map((skill) => (
                  <div key={skill.name} className="bg-slate-800/80 hover:bg-slate-700 hover:-translate-y-1 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Platforms & Tools */}
            <div className="flex flex-col items-center px-6 py-10 hover:bg-slate-800/30 transition-colors duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-black/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-teal-400 font-mono mb-2">Platforms & Tools</h4>
              <div className="w-12 h-1 bg-teal-500/30 rounded-full mb-10"></div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { name: 'Business Central', icon: '🏢' },
                  { name: 'SAP B1', icon: '💼' },
                  { name: 'MS-SQL', icon: '🗄️' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'Azure', icon: '☁️' },
                  { name: 'GitHub', icon: '🐙' }
                ].map((skill) => (
                  <div key={skill.name} className="bg-slate-800/80 hover:bg-slate-700 hover:-translate-y-1 transition-all py-5 px-2 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-700/50 shadow-md cursor-default">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Core Competencies (Horizontal Row at the bottom) */}
          <div className="pt-8">
            <h4 className="text-lg font-bold text-slate-400 font-mono mb-6 text-center">Core Competencies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'ERP Customization',
                'Full-Stack Web Development',
                'Machine Learning Fundamentals',
                'Software Engineering',
                'System Troubleshooting',
                'Database Querying'
              ].map((competency) => (
                <div key={competency} className="bg-slate-800/50 border border-slate-700/50 px-5 py-2.5 rounded-full text-sm font-medium text-teal-300 hover:bg-slate-700 hover:text-teal-200 transition-colors cursor-default">
                  {competency}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* Let's Connect / Contact Section */}
      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 relative z-10 border-t border-slate-800/50 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 font-mono">
            <span className="text-teal-500">Let's</span> Connect
          </h3>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            {/* Added a strong call to action text here */}
            I am actively seeking an <strong className="text-teal-400 font-semibold">IT/CS Intern role</strong> to complete my 500-hour internship requirement. Whether you are looking for an eager developer, want to discuss Business Central AL, or chat about AI projects, my inbox is open!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:amigsdavid@email.com" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-3">
              <span className="text-xl">✉️</span>
              amigsdavid@email.com
            </a>
            <a href="https://linkedin.com/in/amigsdavid/" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 px-8 py-4 rounded-xl font-semibold transition-all border border-slate-700 hover:border-teal-500/50 flex items-center justify-center gap-3">
              <span className="text-xl">💼</span>
              LinkedIn Profile
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-mono text-sm">
            <p className="flex items-center gap-2">
              <span>📱</span> +6396-9643-8031
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> Makati, Metro Manila
            </p>
            <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <span>🐙</span> github.com/m1ggyccs
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50 bg-slate-950 relative z-10">
        <p>&copy; {new Date().getFullYear()} Andrei Miguel A. David. All rights reserved.</p>
        <p className="mt-2 font-mono text-xs">Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}