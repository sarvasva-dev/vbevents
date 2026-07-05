"use client";

import { FadeIn } from "./FadeIn";

const testimonials = [
  {
    quote: "Vision Beyond Events transformed our wedding into an absolute fairy tale. The attention to detail and the flawless execution left us and our guests completely mesmerized.",
    author: "Priya & Rahul",
    event: "Luxury Wedding",
  },
  {
    quote: "The corporate gala they organized for our firm was nothing short of spectacular. Their professionalism and premium aesthetic are unmatched in the industry.",
    author: "Amit Sharma",
    event: "Corporate Gala",
  },
  {
    quote: "From the traditional decor of our Haldi to the grand production of the Sangeet, every single moment was curated perfectly. Truly visionary!",
    author: "Neha Verma",
    event: "Pre-Wedding Ceremonies",
  }
];

export default function Testimonials() {
  return (
    <section className="py-[120px] md:py-[160px] w-full bg-surface-dim relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto text-center mb-16">
        <FadeIn>
          <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Words of Prestige</h2>
          <div className="w-24 h-px bg-primary/30 mx-auto"></div>
        </FadeIn>
      </div>

      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} className="bg-background border border-primary/10 p-10 hover:border-primary/40 transition-colors duration-500 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500"></div>
              <p className="font-body-md text-on-surface-variant leading-loose italic mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-primary/10 pt-6">
                <div className="font-label-lg uppercase tracking-widest text-primary mb-1">{t.author}</div>
                <div className="font-label-sm tracking-widest text-on-surface-variant/50">{t.event}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
