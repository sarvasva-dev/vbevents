import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Luxury Destination Wedding Planner India â€” Udaipur Palace Weddings | Vision Beyond Events",
  description: "India's top luxury destination wedding planner. We architect multi-day royal palace weddings in Udaipur, Rajasthan, Jaipur & Goa for UHNWI families. Complete discretion, NDA-by-default, white-glove execution.",
  keywords: ["destination wedding planner Udaipur", "palace wedding planner India", "luxury destination wedding India", "royal wedding planner Rajasthan", "NRI wedding planner India", "bespoke destination wedding planner"],
  alternates: { canonical: "https://www.vbevents.co.in/services/weddings" },
};

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-[#0d1526]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/ai_marriages.png" alt="Luxury Wedding Setup" fill sizes="100vw" className="object-cover grayscale-[40%] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Our Services</p>
          <h1 className="font-headline-lg text-6xl md:text-8xl text-white mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Legacy Marriages
          </h1>
          <p className="font-body-md text-on-surface-variant text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We do not just plan weddings. We architect multi-day, immersive experiences for the world&apos;s most discerning families, operating with absolute discretion and military-grade logistics.
          </p>
          <Link className="inline-block border border-[#d4af37] text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:bg-[#d4af37] hover:text-[#111c38] transition-colors duration-300 backdrop-blur-sm" href="/contact">
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-20 bg-[#111c38]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-4xl md:text-5xl text-[#d4af37] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Our Approach</h2>
            <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed text-lg">
              <p>
                Planning a multi-day destination wedding means managing hundreds of guests, cross-city logistics, beautiful decor, and multiple venues â€” all at once. It can feel overwhelming.
              </p>
              <p>
                That is exactly where we step in. Our team takes care of every single detail â€” from booking the venue and managing the guest list, to coordinating vendors and ensuring everything runs on time.
              </p>
              <p>
                You show up, enjoy every moment, and make memories. We handle everything else behind the scenes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] relative">
              <Image src="/gallery/haldi_ChatGPT Image Jun 22, 2026, 07_38_25 PM.png" alt="Haldi" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover border border-[#d4af37]/20" />
            </div>
            <div className="aspect-[3/4] relative translate-y-8">
              <Image src="/images/ai_dandiya.png" alt="Sangeet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover border border-[#d4af37]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-20 bg-[#0d1526] border-t border-[#d4af37]/10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="font-headline-md text-4xl md:text-5xl text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>How We Work</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-[#d4af37]/20 bg-[#111c38] hover:border-[#d4af37]/60 transition-colors">
            <span className="font-headline-lg text-4xl text-[#d4af37]/30 block mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>01</span>
            <h3 className="font-headline-sm text-2xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Venue Procurement</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Securing exclusive buyouts of royal palaces, private islands, and heritage properties, often accessing venues not publicly available for events.
            </p>
          </div>
          <div className="p-8 border border-[#d4af37]/20 bg-[#111c38] hover:border-[#d4af37]/60 transition-colors">
            <span className="font-headline-lg text-4xl text-[#d4af37]/30 block mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>02</span>
            <h3 className="font-headline-sm text-2xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Guest Logistics</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              White-glove concierge services managing private aviation, visa assistance, and hyper-personalized hospitality for every attendee.
            </p>
          </div>
          <div className="p-8 border border-[#d4af37]/20 bg-[#111c38] hover:border-[#d4af37]/60 transition-colors">
            <span className="font-headline-lg text-4xl text-[#d4af37]/30 block mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>03</span>
            <h3 className="font-headline-sm text-2xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Execution</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Shadow-planning, medical standby, power redundancy, and strict NDA enforcement to ensure zero disruptions to the celebration.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

