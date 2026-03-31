"use client";

import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "framer-motion";

export default function ParticleBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Skip particles on smaller screens to reduce initial render cost.
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let cancelled = false;

    const setupParticles = () => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        if (!cancelled) setInit(true);
      });
    };

    const timeoutId = window.setTimeout(setupParticles, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || !init) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed">
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: "#2dd4bf" },
            links: { color: "#2dd4bf", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
            number: { density: { enable: true, width: 800 }, value: 40 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}