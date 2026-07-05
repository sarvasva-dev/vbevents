import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: "Case Studies | Vision Beyond Events",
  description: "Anonymized case studies demonstrating our institutional-grade execution of luxury events and legacy celebrations.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Execution</p>
          <h1 className="font-headline-lg text-5xl md:text-7xl text-white mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Case Studies
          </h1>
          <p className="font-body-md text-on-surface-variant text-lg max-w-2xl mx-auto">
            Due to strict NDAs, client identities are anonymized. These case studies demonstrate our logistical capability, venue procurement, and operational shielding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link href="/contact" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
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
            <Link href="/contact" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
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
            <Link href="/contact" className="group block border border-[#d4af37]/10 bg-[#121212] overflow-hidden hover:border-[#d4af37]/40 transition-colors">
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
      </div>
    </main>
  );
}
