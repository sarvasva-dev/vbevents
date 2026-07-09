import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Request a Private Consultation â€” Luxury Event Organizer India | Vision Beyond Events",
  description: "Begin a confidential dialogue with India's most discreet luxury event organizer. We handle destination weddings, corporate events & private UHNWI celebrations. NDA signed before your first call.",
  keywords: ["contact luxury event organizer India", "hire event planner India", "private event consultation", "destination wedding planner inquiry"],
  alternates: { canonical: "https://www.vbevents.co.in/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Inquire</p>
          <h1 className="font-headline-lg text-5xl md:text-7xl text-[#0f172a] mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get in Touch
          </h1>
          <p className="font-body-md text-[#475569] text-lg max-w-2xl mx-auto">
            Tell us about your event and we will get back to you within 24 hours to plan something beautiful together.
          </p>
        </div>
        
        <div className="bg-[#faf9f6] border border-[#d4af37]/30 p-8 md:p-12 shadow-2xl">
          <ContactSection />
        </div>
      </div>
    	  <Footer />
    </main>
  );
}



