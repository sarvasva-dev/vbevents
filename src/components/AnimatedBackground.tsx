"use client";

// Module-level constant â€” Math.random() runs once at module load, never during render.
const ORBS = Array.from({ length: 45 }).map((_, i) => {
  const isSmall = Math.random() > 0.6;
  const size = isSmall ? (Math.random() * 15 + 5) : (Math.random() * 100 + 40);
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 25 + 20;
  const animationDelay = Math.random() * -30;
  const opacity = isSmall ? (Math.random() * 0.5 + 0.3) : (Math.random() * 0.3 + 0.05);
  const blur = isSmall ? Math.random() * 2 : (Math.random() * 12 + 4);
  return { id: i, size, left, animationDuration, animationDelay, opacity, blur };
});

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function AnimatedBackground() {
  const mounted = useIsClient();

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#ffffff] z-0 pointer-events-none">
      {mounted && ORBS.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bokeh-orb mix-blend-multiply"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            bottom: `-20%`,
            opacity: orb.opacity * 0.7, // slightly lower opacity for light bg
            animationDuration: `${orb.animationDuration}s`,
            animationDelay: `${orb.animationDelay}s`,
            background: `radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(245,240,230,0.3) 30%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
        />
      ))}
      {/* A static base glow to ensure the center always looks rich but not muddy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#d4af37]/8 rounded-full blur-[120px] mix-blend-multiply"></div>
      {/* Light vignette to focus center and keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)]"></div>
    </div>
  );
}

