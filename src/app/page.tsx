import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { FadeIn } from '@/components/FadeIn';
import AnimatedBackground from '@/components/AnimatedBackground';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: "Ultra-Luxury Wedding Planner India | Vision Beyond Events",
  description: "Experience Architecture for India's Most Consequential Celebrations. We are a luxury event management company specializing in high-security, ultra-luxury weddings and corporate events.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Hero Section */}
      <main className="relative h-[100dvh] w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <AnimatedBackground />
        
        {/* Placeholder for Cinematic Video Loop */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-full h-full bg-[#121212] object-cover absolute inset-0"></div>
          {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[30%]"><source src="/video/hero-cinematic.mp4" type="video/mp4" /></video> */}
        </div>

        <FadeIn className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto pt-20">
          <div className="w-12 h-[1px] bg-[#d4af37]/60 mb-8"></div>
          <TextReveal 
            text="Experience Architecture for India's Most Consequential Celebrations." 
            className="font-headline-lg text-4xl md:text-6xl lg:text-7xl text-white mb-12 drop-shadow-2xl max-w-4xl leading-tight"
            el="h1"
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link className="inline-block gold-gradient-bg text-[#121212] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]" href="/contact">
              Request a Private Consultation
            </Link>
            <Link className="inline-block border border-[#d4af37] text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:bg-[#d4af37] hover:text-[#121212] transition-colors duration-300 backdrop-blur-sm" href="/gallery?v=1">
              View Vision Boards
            </Link>
          </div>
        </FadeIn>
      </main>

      {/* Press / Editorial Mentions Strip */}
      <div className="w-full border-y border-[#d4af37]/10 bg-[#121212] py-8 overflow-hidden">
        <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale flex-wrap px-6">
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>VOGUE</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>HARPER'S BAZAAR</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>GQ</span>
          <span className="font-headline-md text-xl font-bold tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>FORBES</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/20">
          <div className="py-8 md:py-0">
            <h3 className="font-headline-lg text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>500+</h3>
            <p className="font-body-md text-on-surface-variant text-sm uppercase tracking-widest">Guests Coordinated Across 3 Continents</p>
          </div>
          <div className="py-8 md:py-0">
            <h3 className="font-headline-lg text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>22+</h3>
            <p className="font-body-md text-on-surface-variant text-sm uppercase tracking-widest">Legacy Celebrations Executed</p>
          </div>
          <div className="py-8 md:py-0">
            <h3 className="font-headline-lg text-6xl text-[#d4af37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>0</h3>
            <p className="font-body-md text-on-surface-variant text-sm uppercase tracking-widest">Execution Incidents</p>
          </div>
        </div>
      </section>

      {/* Discretion Teaser */}
      <section className="py-24 px-6 md:px-20 bg-[#121212] border-y border-[#d4af37]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Operational Shielding.</h2>
            <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-8">
              We operate under strict NDA-by-default protocols. Your identity, investment, and celebration are compartmentalized and protected. We do not design events; we architect secure, insulated experiences for UHNWIs and corporate leadership.
            </p>
            <Link className="inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors" href="/discretion">
              View Our Privacy Protocols <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          <div className="md:w-1/2 relative aspect-square w-full max-w-md mx-auto border border-[#d4af37]/20 p-4">
            <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="material-symbols-outlined text-[80px] text-[#d4af37]/50" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-[120px] md:py-[160px] px-6 md:px-20 w-full max-w-[1440px] mx-auto bg-[#0a0a0a]" id="services">
        <FadeIn className="text-center mb-20">
          <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-on-surface-variant mb-4">Our Expertise</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-4 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>Capabilities & Curation</h2>
          <div className="w-24 h-px bg-[#d4af37]/30 mx-auto"></div>
        </FadeIn>
        
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/gallery?v=1#birthdays" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="Luxury Birthday Party Planning by Vision Beyond Events" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/birthday_IMG_20250710_182149.jpg.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Birthdays</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#marriages" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:row-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[3/4] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Luxury Indian Wedding and Marriage Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_marriages.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Marriages</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#haldi-ceremonies" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40">
            <div className="aspect-square w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Vibrant Haldi Ceremony Setup" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Haldi</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#dandiya-nights" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40">
            <div className="aspect-square w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Dandiya Nights Event Organizer" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/ai_dandiya.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Dandiya</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#house-warming-griha-pravesh" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-2 hover:border-[#d4af37]/40">
            <div className="aspect-[21/9] w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 66vw" alt="House Warming and Griha Pravesh Event Decor" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%] object-center" src="/images/housewarming.jpeg"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>House Warming</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#corporate-school-events" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/40">
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] h-full w-full overflow-hidden relative">
              <Image fill sizes="(max-width: 768px) 100vw, 33vw" alt="Corporate and School Event Organizer" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/corporate_event.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Corporate & School Events</h3>
            </div>
          </Link>
          
          <Link href="/gallery?v=1#festival-devotional-events" className="block group relative bg-[#121212] border border-[#d4af37]/10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 lg:col-span-3 hover:border-[#d4af37]/40">
            <div className="aspect-[16/9] lg:aspect-[21/9] h-full w-full overflow-hidden relative">
              <Image fill sizes="100vw" alt="Festival and Devotional Event Planning" className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[20%]" src="/images/festival_devotional.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-2xl text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Festival & Devotional Events</h3>
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* The Atelier Teaser */}
      <section className="py-24 px-6 md:px-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#d4af37] mb-6">The Atelier</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-primary mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            A boutique design studio backed by institutional-grade execution.
          </h2>
          <p className="font-body-md text-on-surface-variant text-lg leading-relaxed mb-10">
            We operate at the intersection of artisanal design and relentless logistics. Discover our philosophy, leadership credentials, and the meticulous process behind every legacy celebration.
          </p>
          <Link className="inline-block border border-on-surface/20 text-on-surface font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300" href="/about">
            Discover The Atelier
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 bg-[#0a0a0a] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-headline-md text-2xl text-[#d4af37] tracking-tighter mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Vision Beyond Events</div>
            <div className="font-body-md text-on-surface-variant text-sm tracking-widest uppercase">Experience Architecture</div>
          </div>
          <div className="flex gap-8">
            <Link className="font-body-md text-sm text-on-surface-variant hover:text-[#d4af37] transition-colors uppercase tracking-widest" href="/discretion">Client Access</Link>
            <Link className="font-body-md text-sm text-on-surface-variant hover:text-[#d4af37] transition-colors uppercase tracking-widest" href="/contact">Inquire</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
