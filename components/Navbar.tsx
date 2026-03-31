"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // ScrollSpy Logic (IntersectionObserver)
  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "skills", "contact"] as const;
    const navOffset = 140; // Approx. sticky header height (tuned for this layout)

    // Initial active section avoids an empty highlight on refresh/jump navigation.
    const initial = sectionIds.reduce((current, id) => {
      const el = document.getElementById(id);
      if (!el) return current;
      return window.scrollY + navOffset >= el.offsetTop ? id : current;
    }, "" as (typeof sectionIds)[number] | "");
    setActiveSection(initial);

    const ratioById = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (!target?.id) continue;
          ratioById.set(target.id, entry.intersectionRatio);
        }

        let bestId = "";
        let bestRatio = 0;
        for (const id of sectionIds) {
          const ratio = ratioById.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        // Only update once we have a meaningful intersection.
        if (bestId && bestRatio > 0) setActiveSection(bestId);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        // Focus the "active zone" near the top of the viewport, accounting for sticky nav.
        rootMargin: "-120px 0px -60% 0px",
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" }, 
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 transition-all">
      <div className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-slate-100 font-mono">
          &lt;m1ggyccs/&gt;
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                activeSection === link.id ? "text-teal-400 font-bold" : "text-slate-300 hover:text-teal-400"
              }`}
            >
              {link.name}
            </a>
          ))}
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
          {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href} 
               onClick={() => setIsMobileMenuOpen(false)} 
               className={`font-medium ${activeSection === link.id ? "text-teal-400" : "text-slate-300"}`}
             >
               {link.name}
             </a>
          ))}
        </div>
      )}
    </nav>
  );
}