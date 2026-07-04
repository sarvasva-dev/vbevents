"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Generate an array of orbs with random properties
  const orbs = Array.from({ length: 25 }).map((_, i) => {
    const size = Math.random() * 150 + 50; // 50px to 200px
    const left = Math.random() * 100; // 0% to 100%
    const animationDuration = Math.random() * 20 + 15; // 15s to 35s
    const animationDelay = Math.random() * 10; // 0s to 10s
    const opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5
    
    return {
      id: i,
      size,
      left,
      animationDuration,
      animationDelay,
      opacity,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a] z-0 pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bokeh-orb"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            bottom: `-${orb.size}px`, // Start below the screen
            opacity: orb.opacity,
            animationDuration: `${orb.animationDuration}s`,
            animationDelay: `${orb.animationDelay}s`,
            background: `radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)`,
            filter: `blur(${Math.random() * 10 + 5}px)`,
          }}
        />
      ))}
      {/* A static base glow to ensure the center always looks rich */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#d4af37]/10 rounded-full blur-[100px]"></div>
    </div>
  );
}
