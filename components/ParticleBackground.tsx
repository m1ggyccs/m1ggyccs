"use client";

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from "framer-motion";

export default function ParticleBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [init, setInit] = useState(false);
  const [ParticlesComponent, setParticlesComponent] = useState<React.ComponentType<{ id: string; options: object }> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let cancelled = false;

    const setupParticles = async () => {
      const [{ default: Particles, initParticlesEngine }, { loadSlim }] = await Promise.all([
        import("@tsparticles/react"),
        import("@tsparticles/slim"),
      ]);

      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      if (!cancelled) {
        setParticlesComponent(() => Particles);
        setInit(true);
      }
    };

    const scheduleSetup = () => {
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => number }).requestIdleCallback(
          () => {
            void setupParticles();
          },
          { timeout: 1000 }
        );
        return;
      }

      void setupParticles();
    };

    const timeoutId = window.setTimeout(scheduleSetup, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || !init || !ParticlesComponent) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed">
      <ParticlesComponent
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#2dd4bf" },
            links: { color: "#2dd4bf", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.8, direction: "none", outModes: { default: "bounce" } },
            number: { density: { enable: true, width: 1000 }, value: 26 },
            opacity: { value: 0.35 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}