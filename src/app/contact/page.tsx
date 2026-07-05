import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Private Consultation | Vision Beyond Events",
  description: "Request a private consultation with Vision Beyond Events for your legacy celebration or corporate summit.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Inquire</p>
          <h1 className="font-headline-lg text-5xl md:text-7xl text-white mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Initiate a Dialogue
          </h1>
          <p className="font-body-md text-on-surface-variant text-lg max-w-2xl mx-auto">
            Please share the preliminary details of your vision. Our advisory team will review your inquiry and schedule a secure consultation.
          </p>
        </div>
        
        <div className="bg-[#121212] border border-[#d4af37]/20 p-8 md:p-12 shadow-2xl">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
