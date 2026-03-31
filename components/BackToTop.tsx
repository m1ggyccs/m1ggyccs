"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function BackToTop() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[120] rounded-full border border-slate-700/60 bg-slate-900/80 backdrop-blur-md shadow-xl transition-all ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      } hover:border-teal-400/50 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
    >
      <span className="flex h-12 w-12 items-center justify-center text-slate-200">
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l6 6a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L4.707 10.707A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="sr-only">Back to top</span>
    </button>
  );
}

