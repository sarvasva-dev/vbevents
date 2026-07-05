import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import AuthoritySection from '@/components/AuthoritySection';

export const metadata: Metadata = {
  title: "The Atelier | Vision Beyond Events",
  description: "Learn about the philosophy, leadership, and institutional-grade execution behind Vision Beyond Events.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32">
        {/* Reusing existing components for rapid deployment */}
        <AboutSection />
        
        <div className="bg-[#121212] border-y border-[#d4af37]/10">
          <AuthoritySection />
        </div>
      </div>
      
      <section className="py-24 px-6 text-center">
        <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to architect your vision?</h2>
        <Link className="inline-block gold-gradient-bg text-[#121212] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]" href="/contact">
          Inquire Now
        </Link>
      </section>
    </main>
  );
}
