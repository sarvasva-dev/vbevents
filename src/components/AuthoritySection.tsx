"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const stats = [
  { value: "15+", label: "Years of Heritage" },
  { value: "500+", label: "Legacy Celebrations" },
  { value: "Pan-India", label: "Operational Reach" },
  { value: "100%", label: "Discretion Assured" }
];

export default function AuthoritySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dim to-background pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <h4 className="font-label-lg text-primary uppercase tracking-[0.3em] mb-6">Operational Shielding</h4>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tight">
              We do not plan events. We architect experiences at a scale most cannot execute.
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
              Navigating multi-jurisdiction permits, heritage venue regulations, and high-profile security protocols requires precision. We provide absolute operational shielding, allowing distinguished families and corporate leaders to focus entirely on the celebration.
            </p>
          </FadeIn>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border-y border-primary/20 py-16 bg-surface-container-low/30 backdrop-blur-sm rounded-3xl">
          {stats.map((stat, index) => (
            <FadeIn key={index} className="flex flex-col gap-2">
              <span className="font-display-md text-4xl md:text-5xl text-primary font-serif italic drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                {stat.value}
              </span>
              <span className="font-label-md text-on-surface-variant uppercase tracking-widest text-sm md:text-base">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* Trust Logos (Placeholder for Fortune 500 / Hotel Partners) */}
        <FadeIn className="mt-20 text-center">
          <p className="font-label-md text-on-surface-variant/70 uppercase tracking-[0.3em] mb-10">Curated Partnerships</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* These would be actual logos of luxury hotel chains or corporate clients */}
            <span className="font-serif text-2xl font-bold tracking-widest">TAJ</span>
            <span className="font-serif text-2xl font-bold tracking-widest">OBEROI</span>
            <span className="font-serif text-2xl font-bold tracking-widest">ITC</span>
            <span className="font-serif text-2xl font-bold tracking-widest">LEELA</span>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}
