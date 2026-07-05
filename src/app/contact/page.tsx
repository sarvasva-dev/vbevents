import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Request a Private Consultation — Luxury Event Organizer India | Vision Beyond Events",
  description: "Begin a confidential dialogue with India's most discreet luxury event organizer. We handle destination weddings, corporate events & private UHNWI celebrations. NDA signed before your first call.",
  keywords: ["contact luxury event organizer India", "hire event planner India", "private event consultation", "destination wedding planner inquiry"],
  alternates: { canonical: "https://www.vbevents.co.in/contact" },
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
