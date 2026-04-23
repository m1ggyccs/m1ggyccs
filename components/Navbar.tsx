"use client";

import React, { useEffect, useRef, useState } from "react";

const SHOW_TEMP_PRESENTATION_TAB = true;

type NavLink = {
  name: string;
  href: string;
  id?: string;
  external?: boolean;
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const pendingNavTargetRef = useRef<string | null>(null);
  const pendingNavTimeoutRef = useRef<number | null>(null);

  // ScrollSpy Logic (IntersectionObserver)
  useEffect(() => {
    const sectionIds = ["about", "experience", "education", "projects", "skills", "contact"] as const;
    const navOffset = 140; // Approx. sticky header height (tuned for this layout)
    const sections = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((item): item is { id: (typeof sectionIds)[number]; el: HTMLElement } => item.el !== null);

    // Initial active section avoids an empty highlight on refresh/jump navigation.
    const initial = sections.reduce((current, item) => {
      return window.scrollY + navOffset >= item.el.offsetTop ? item.id : current;
    }, "" as (typeof sectionIds)[number] | "");
    // Avoid synchronous state updates inside the effect body (prevents lint + cascading renders).
    requestAnimationFrame(() => {
      setActiveSection(initial);
    });

    const observer = new IntersectionObserver(
      () => {
        // Keep clicked nav tab active while smooth-scrolling to its target.
        if (pendingNavTargetRef.current) {
          const pendingEl = document.getElementById(pendingNavTargetRef.current);
          if (pendingEl) {
            const pendingTop = pendingEl.getBoundingClientRect().top;
            // Release lock once target reaches navbar offset line.
            if (pendingTop <= navOffset + 8) {
              pendingNavTargetRef.current = null;
              if (pendingNavTimeoutRef.current) {
                window.clearTimeout(pendingNavTimeoutRef.current);
                pendingNavTimeoutRef.current = null;
              }
            } else {
              setActiveSection(pendingNavTargetRef.current);
              return;
            }
          } else {
            pendingNavTargetRef.current = null;
            if (pendingNavTimeoutRef.current) {
              window.clearTimeout(pendingNavTimeoutRef.current);
              pendingNavTimeoutRef.current = null;
            }
          }
        }

        // Determine which section is "active" by looking at which section crosses the navOffset line.
        // This is more stable than using intersection ratio when sections have uneven heights.
        let bestId = "";
        let bestTop = -Infinity;

        for (const item of sections) {
          const rect = item.el.getBoundingClientRect();

          // Consider sections that are currently around the nav's top boundary.
          if (rect.top <= navOffset && rect.bottom > navOffset) {
            if (rect.top > bestTop) {
              bestTop = rect.top;
              bestId = item.id;
            }
          }
        }

        if (bestId) {
          setActiveSection(bestId);
        } else {
          // When the user is in the hero/top area (before About), clear active tab.
          const firstSection = sections[0]?.el;
          const firstTop = firstSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
          if (firstTop > navOffset) {
            setActiveSection("");
          }
        }
      },
      {
        threshold: [0.01],
      }
    );

    for (const item of sections) {
      observer.observe(item.el);
    }

    return () => {
      observer.disconnect();
      if (pendingNavTimeoutRef.current) {
        window.clearTimeout(pendingNavTimeoutRef.current);
        pendingNavTimeoutRef.current = null;
      }
    };
  }, []);

  // Mobile menu UX: lock scroll + close on Escape + basic focus management.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileButtonRef.current?.focus();
        return;
      }

      // Simple focus trap for the mobile menu.
      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusables = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (!active || active === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // Focus the first menu item once opened.
    requestAnimationFrame(() => {
      const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>('a[href]');
      firstLink?.focus();
    });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
    ...(SHOW_TEMP_PRESENTATION_TAB
      ? [{ name: "OBTL Presentation", href: "/presentation" }]
      : []),
  ];

  const scrollToId = (id: string) => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const navOffset = 140;
    const target = document.getElementById(id);
    if (!target) return;

    const top = window.scrollY + target.getBoundingClientRect().top - navOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? "auto" : "smooth" });
    // Remove the hash from the URL after navigation.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const onNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.assign(`/#${id}`);
      return;
    }
    pendingNavTargetRef.current = id;
    if (pendingNavTimeoutRef.current) {
      window.clearTimeout(pendingNavTimeoutRef.current);
    }
    // Safety fallback so manual scrolling isn't blocked if smooth-scroll events are missed.
    pendingNavTimeoutRef.current = window.setTimeout(() => {
      pendingNavTargetRef.current = null;
      pendingNavTimeoutRef.current = null;
    }, 1200);
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    scrollToId(id);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 transition-all">
      <div className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        <button
          type="button"
          className="text-xl font-bold tracking-tighter text-slate-100 font-mono hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
          onClick={() => {
            setIsMobileMenuOpen(false);
            pendingNavTargetRef.current = null;
            if (pendingNavTimeoutRef.current) {
              window.clearTimeout(pendingNavTimeoutRef.current);
              pendingNavTimeoutRef.current = null;
            }
            setActiveSection("");
            const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
        >
          &lt;m1ggyccs/&gt;
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.id ? onNavClick(link.id) : undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className={`rounded-lg px-3 py-2 transition-all duration-200 hover:scale-[1.02] ${
                link.id && activeSection === link.id
                  ? "text-teal-300 bg-teal-500/10 border border-teal-500/20"
                  : "text-slate-300 hover:text-teal-300 hover:bg-slate-800/70 border border-transparent"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm`}
            >
              <span className="relative inline-block pb-0.5">
                {link.name}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 rounded-full bg-teal-300 transition-all duration-300 ${
                    link.id && activeSection === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          ref={mobileButtonRef}
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          className="md:hidden text-slate-300 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
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
        <div
          id="mobile-nav"
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl py-5 flex flex-col items-center space-y-2"
        >
          {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href} 
               onClick={link.id ? onNavClick(link.id) : () => setIsMobileMenuOpen(false)}
               target={link.external ? "_blank" : undefined}
               rel={link.external ? "noreferrer" : undefined}
               className={`font-medium min-h-11 w-[90%] max-w-xs inline-flex items-center justify-center rounded-xl px-4 py-2 transition-colors ${
                 link.id && activeSection === link.id
                   ? "text-teal-300 bg-teal-500/10 border border-teal-500/20"
                   : "text-slate-300 hover:bg-slate-800/70"
               } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
             >
               {link.name}
             </a>
          ))}
        </div>
      )}
    </nav>
  );
}