"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee({ 
  text, 
  className = "" 
}: { 
  text: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex py-6 bg-surface-dim border-y border-primary/10 ${className}`}>
      <motion.div
        className="flex space-x-8 font-label-lg text-label-lg tracking-[0.2em] uppercase text-on-surface-variant/60"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* We render the text multiple times to ensure seamless looping */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-8">
            <span>{text}</span>
            <span className="text-primary/40 text-sm">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
