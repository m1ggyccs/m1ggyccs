"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import MagneticButton from './MagneticButton';
import { track } from '@vercel/analytics';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false, loading: () => <span className="text-teal-400 font-bold">Software Engineer</span> }
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const RESUME_PDF_PATH = "/David%2C%20Andrei%20Miguel_Resume.pdf";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center overflow-hidden px-6 py-20 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-[radial-gradient(ellipse_at_65%_42%,rgba(239,68,68,0.16),transparent_38%),linear-gradient(90deg,#0f172a_0%,transparent_42%,rgba(15,23,42,0.18)_100%)] lg:block" />

      <motion.div initial={false} animate="visible" variants={fadeInUp} className="relative z-20 max-w-3xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-teal-300/80">Technical Consultant / Software Engineer</p>
        <div className="relative">
          <p aria-hidden="true" className="pointer-events-none absolute -left-1 top-8 z-0 select-none font-mono text-[clamp(3.5rem,6vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-slate-800/70">
            <span className="block whitespace-nowrap">Andrei Miguel</span>
            <span className="block whitespace-nowrap">A. David</span>
          </p>
          <h1 className="relative z-10 max-w-2xl pt-16 text-5xl font-bold leading-[0.95] tracking-tight text-slate-100 sm:text-7xl md:text-8xl">
            Hi! I&apos;m <span className="text-teal-400">Miggy</span>
          </h1>
        </div>
        <div className="mt-10 min-h-12 max-w-xl font-mono text-xl font-medium leading-relaxed text-slate-400 md:text-2xl">
          A{' '}
          <TypeAnimation
            sequence={['Technical Consultant', 2000, 'Software Engineer', 2000, 'ERP & Systems-Focused Engineer', 2000]}
            wrapper="span" speed={50} className="inline text-teal-400 font-bold" repeat={Infinity}
          />
        </div>
        <p className="mt-8 max-w-xl font-serif text-lg italic text-slate-400 opacity-80 md:text-xl">
          &quot;Per aspera ad astra.&quot;
        </p>
        
        <div className="flex flex-wrap gap-4 pt-8">
          <MagneticButton>
            <a href="#projects" className="block bg-teal-600 hover:bg-teal-500 text-white px-7 py-3 rounded-md font-semibold transition-all shadow-lg shadow-teal-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">View My Work</a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Downloaded_Resume")}
              aria-label="Open resume PDF (opens in a new tab)"
              className="block bg-slate-900/70 hover:bg-slate-800 text-slate-100 px-7 py-3 rounded-md font-semibold transition-all border border-slate-700 hover:border-teal-500/40 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View Resume
            </a>
          </MagneticButton>
        </div>
        <a
          href="https://github.com/m1ggyccs"
          target="_blank"
          rel="noreferrer"
          aria-label="Explore GitHub (opens in a new tab)"
          className="mt-5 inline-block rounded-sm font-medium text-slate-400 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-teal-300 hover:decoration-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Explore GitHub
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-[calc(100%-1rem)] w-[56%] max-w-[46rem] lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
        <Image
          src="/hero-portrait.png"
          alt="Andrei Miguel A. David"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 0px"
          className="object-contain object-bottom mix-blend-lighten"
          onError={(event) => { event.currentTarget.src = "/avatar.jpg"; }}
        />
      </motion.div>
    </section>
  );
}