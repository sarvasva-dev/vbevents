"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const stats = [
  { value: "2024", label: "Year Established" },
  { value: "22+", label: "Bespoke Celebrations" },
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
              From intimate traditional weddings to grand corporate galas, we curate bespoke experiences of every type and scale across India.
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
              Whether it is a deeply private cultural ceremony, a vibrant traditional function, or a large-scale brand event, navigating logistics requires precision. We provide end-to-end operational shielding anywhere in India, allowing you to focus entirely on the celebration.
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

        {/* Trust (Removed fake logos, added honest premium copy) */}
        <FadeIn className="mt-20 text-center">
          <p className="font-label-md text-on-surface-variant/70 uppercase tracking-[0.3em] mb-4">Venue Network</p>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
            Executing seamlessly across India&apos;s finest hospitality destinations and private heritage properties.
          </p>
        </FadeIn>
        
      </div>
    </section>
  );
}
