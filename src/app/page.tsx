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
            className="font-headline-lg text-4xl md:text-6xl lg:text-7xl text-on-primary mb-12 drop-shadow-2xl max-w-4xl leading-tight"
            el="h1"
          />
          <Link className="inline-block border border-[#d4af37] text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:bg-[#d4af37] hover:text-[#121212] transition-colors duration-300 backdrop-blur-sm" href="/contact">
            Request a Private Consultation
          </Link>
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

      {/* Case Studies Teaser */}
      <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-on-surface-variant mb-4">Case Studies</p>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>Precision at Scale</h2>
            </div>
            <Link className="hidden md:inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-on-surface hover:text-[#d4af37] transition-colors" href="/case-studies">
              View All <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link href="/case-studies/dubai-royal-engagement" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
              <div className="aspect-[4/3] bg-[#222] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png" alt="Royal Engagement" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              </div>
              <div className="p-8">
                <p className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mb-3">Destination: UAE</p>
                <h3 className="font-headline-sm text-2xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>The Dubai Royal Engagement</h3>
                <p className="font-body-md text-on-surface-variant text-sm">500 Guests. 3 Days. Zero Compromise in cross-border logistics.</p>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link href="/case-studies/jodhpur-palace-buyout" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
              <div className="aspect-[4/3] bg-[#222] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="/images/ai_marriages.png" alt="Palace Buyout" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              </div>
              <div className="p-8">
                <p className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mb-3">Destination: Rajasthan</p>
                <h3 className="font-headline-sm text-2xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>The Jodhpur Palace Buyout</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Architecting a bespoke 4-day celebration within heritage constraints.</p>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link href="/case-studies/corporate-leadership-summit" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
              <div className="aspect-[4/3] bg-[#222] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-transparent transition-colors z-10"></div>
                <Image src="/images/corporate_event.png" alt="Corporate Summit" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              </div>
              <div className="p-8">
                <p className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mb-3">Sector: Finance</p>
                <h3 className="font-headline-sm text-2xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Global Leadership Summit</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Orchestrating absolute confidentiality for a C-suite executive retreat.</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link className="inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-on-surface hover:text-[#d4af37] transition-colors" href="/case-studies">
              View All Case Studies <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
        </div>
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
