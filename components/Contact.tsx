"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  const isFormConfigured = Boolean(web3formsKey);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!isFormConfigured || !web3formsKey) {
      setErrorMessage("Contact form is temporarily unavailable. Please email me directly at amigsdavid@gmail.com.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", web3formsKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      if (data.success) {
        setIsSuccess(true);
        setErrorMessage(null);
        setSuccessMessage("Thanks for reaching out — I’ll get back to you as soon as I can.");
        e.currentTarget.reset();
        setTimeout(() => {
          setIsSuccess(false);
          setSuccessMessage(null);
        }, 5000);
      } else {
        setErrorMessage(data?.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 md:py-28 relative z-10 border-t border-slate-800/50 bg-slate-900/50 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 font-mono">
              <span className="text-teal-500">Let&apos;s</span> Connect
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Have a question, an opportunity, or want to collaborate? Send a message and I&apos;ll respond as soon as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="mailto:amigsdavid@gmail.com" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-teal-500/20 flex gap-3 justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                <Image src="/logo/gmail.svg" alt="Gmail" width={20} height={20} sizes="20px" className="w-5 h-5" /> amigsdavid@gmail.com
              </a>
              <a href="https://linkedin.com/in/amigsdavid/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 px-6 py-3 rounded-xl font-semibold border border-slate-700 flex gap-3 justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                <Image src="/logo/linkedin.svg" alt="LinkedIn" width={20} height={20} sizes="20px" className="w-5 h-5" /> LinkedIn ↗
              </a>
            </div>

<div className="space-y-4 text-slate-400 font-mono text-sm">
  <div className="flex items-center gap-4">
    <span className="text-xl w-6 text-center">📱</span>
    <a href="tel:+639696438031" className="hover:text-teal-400 transition-colors">+6396-9643-8031</a>
  </div>
  <div className="flex items-center gap-4">
    <Image src="/logo/googlemaps.svg" alt="Google Maps" width={20} height={20} sizes="20px" className="w-5 h-5" />
    <span>Makati, Metro Manila</span>
  </div>
  <div className="flex items-center gap-4">
    <Image src="/logo/github.svg" alt="GitHub" width={20} height={20} sizes="20px" className="w-5 h-5" />
    <a href="https://github.com/m1ggyccs" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)" className="hover:text-teal-400 transition-colors">
      github.com/m1ggyccs ↗
    </a>
  </div>
</div>
          </div>

          <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
            <h4 className="text-2xl font-bold text-slate-100 mb-6 font-mono">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
                  <input type="text" name="name" id="name" required minLength={2} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="Lewis Hamilton" autoComplete="name" />
                  <p className="text-xs text-slate-500">How should I address you?</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Your Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="LewisH@Ferrari.com" autoComplete="email" inputMode="email" />
                  <p className="text-xs text-slate-500">I’ll only use this to reply.</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea name="message" id="message" required minLength={20} rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none" placeholder="Hi Miggy, I'd like to chat about..."></textarea>
                <p className="text-xs text-slate-500">Share context, goals, and any timeline (at least 20 characters).</p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !isFormConfigured}
                className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${
                  isSuccess 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                    : "bg-slate-100 text-slate-900 hover:bg-teal-400 hover:text-slate-900 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
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
                ) : !isFormConfigured ? (
                  "Form Unavailable"
                ) : (
                  "Send Message 🚀"
                )}
              </button>
              <p className="text-center text-xs text-slate-500 -mt-1">
                Usually replies within 24-48 hours.
              </p>

              {(successMessage || errorMessage) && (
                <div
                  className={`text-sm px-4 py-3 rounded-lg border ${
                    successMessage
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                      : "bg-rose-500/10 text-rose-300 border-rose-500/20"
                  }`}
                  role={successMessage ? "status" : "alert"}
                  aria-live="polite"
                >
                  {successMessage || errorMessage}
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>

      <div className="md:hidden fixed bottom-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] left-1/2 -translate-x-1/2 z-[110]">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-700/70 bg-slate-900/90 backdrop-blur-md p-2 shadow-xl">
          <a
            href="mailto:amigsdavid@gmail.com"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 text-xs font-semibold transition-colors"
          >
            <Image src="/logo/gmail.svg" alt="Gmail" width={16} height={16} sizes="16px" className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/amigsdavid/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 px-4 py-2 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Image src="/logo/linkedin.svg" alt="LinkedIn" width={16} height={16} sizes="16px" className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}