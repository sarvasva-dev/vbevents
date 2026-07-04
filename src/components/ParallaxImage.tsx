"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "",
  containerClassName = "",
  speed = 1,
  priority = false
}: { 
  src: string; 
  alt: string; 
  className?: string;
  containerClassName?: string;
  speed?: number;
  priority?: boolean;
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform the scroll progress into a Y offset for the image.
  // Using -20% to 20% by default creates a subtle, elegant parallax.
  const y = useTransform(scrollYProgress, [0, 1], [`-${15 * speed}%`, `${15 * speed}%`]);

  return (
    <div ref={ref} className={`overflow-hidden relative w-full h-full ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`absolute inset-0 w-full h-[130%] object-cover object-center ${className}`}
        {...(priority ? { loading: "eager" } : { loading: "lazy" })}
      />
    </div>
  );
}
