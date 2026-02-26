"use client";

import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000); 
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 relative z-10 border-t border-slate-800/50 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & Links */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 font-mono">
              <span className="text-teal-500">Let&apos;s</span> Connect
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="mailto:amigsdavid@email.com" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-teal-500/20 flex gap-3 justify-center transition-all">
                <span className="text-xl">✉️</span> amigsdavid@email.com
              </a>
              <a href="https://linkedin.com/in/amigsdavid/" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 px-6 py-3 rounded-xl font-semibold border border-slate-700 flex gap-3 justify-center transition-all">
                <span className="text-xl">💼</span> LinkedIn
              </a>
            </div>

<div className="space-y-4 text-slate-400 font-mono text-sm">
  <div className="flex items-center gap-4">
    <span className="text-xl w-6 text-center">📱</span>
    <a href="tel:+639696438031" className="hover:text-teal-400 transition-colors">+6396-9643-8031</a>
  </div>
  <div className="flex items-center gap-4">
    <span className="text-xl w-6 text-center">📍</span>
    <span>Makati, Metro Manila</span>
  </div>
  <div className="flex items-center gap-4">
    <span className="text-xl w-6 text-center">🐙</span>
    <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
      github.com/m1ggyccs
    </a>
  </div>
</div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
            <h4 className="text-2xl font-bold text-slate-100 mb-6 font-mono">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {/* Requires Web3Forms anti-spam honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Your Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea name="message" id="message" required rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none" placeholder="Hi Andrei, I'd like to chat about..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${
                  isSuccess 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                    : "bg-slate-100 text-slate-900 hover:bg-teal-400 hover:text-slate-900 shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSuccess ? (
                  "✨ Message Sent Successfully!"
                ) : (
                  "Send Message 🚀"
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}