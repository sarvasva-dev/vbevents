import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import AuthoritySection from '@/components/AuthoritySection';

export const metadata: Metadata = {
  title: "About Us â€” Vision Beyond Events | Best Event Planner India",
  description: "Meet the team behind Vision Beyond Events â€” India's trusted luxury event management company. We specialize in destination weddings, corporate events, and private celebrations with a personal touch.",
  keywords: ["about Vision Beyond Events", "best event planner India", "luxury wedding planner team", "event management company India"],
  alternates: { canonical: "https://www.vbevents.co.in/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <div className="pt-32">
        {/* Reusing existing components for rapid deployment */}
        <AboutSection />
        
        <div className="bg-transparent border-y border-[#d4af37]/20">
          <AuthoritySection />
        </div>
      </div>
      
      <section className="py-24 px-6 text-center">
        <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to architect your vision?</h2>
        <Link className="inline-block gold-gradient-bg text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]" href="/contact">
          Inquire Now
        </Link>
      </section>
    	  <Footer />
    </main>
  );
}




