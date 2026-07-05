import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Discretion & Operational Shielding | Vision Beyond Events",
  description: "Confidential event planning for India's UHNWIs and corporate leaders. We operate under strict NDA-by-default protocols, providing absolute privacy and operational shielding for legacy celebrations.",
};

export default function DiscretionPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 py-24 border-b border-[#d4af37]/20 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Confidentiality as a Standard</p>
          <h1 className="font-headline-lg text-6xl md:text-8xl text-on-primary mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Operational Shielding.
          </h1>
          <p className="font-body-md text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            In the realm of ultra-high-net-worth individuals, family offices, and corporate leadership, privacy is not a luxury—it is an operational prerequisite. We do not design events; we architect secure, insulated experiences.
          </p>
        </div>
      </section>

      {/* NDA By Default Section */}
      <section className="px-6 md:px-20 py-24 border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-4xl md:text-5xl text-[#d4af37] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>The NDA-by-Default Framework</h2>
            <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed text-lg text-justify">
              <p>
                The event industry often relies on client visibility as its primary marketing engine. We fundamentally reject this model. Vision Beyond Events operates on a strict NDA-by-default protocol. Before a single logistical detail is discussed, our confidentiality infrastructure is legally bound and activated.
              </p>
              <p>
                From the moment of initial inquiry, your identity, the scale of your investment, and the nature of your celebration are compartmentalized. Our vendor partners are contracted under strict non-disclosure terms, often operating on a need-to-know basis regarding the principal host's identity. 
              </p>
              <p>
                Whether you are a global corporate executive or a legacy family hosting a multi-day palace wedding, our pledge is absolute: Your celebration remains yours. We do not leverage your family's name, your guest list, or your private moments for our public portfolio.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] bg-[#0a0a0a] border border-[#d4af37]/20 p-12 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-[100px] text-[#d4af37] mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            <h3 className="font-headline-sm text-2xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Absolute Anonymization</h3>
            <p className="font-body-md text-on-surface-variant text-lg">
              Our case studies and internal documentation refer to events exclusively by code names and logistical metrics (e.g., "The Jodhpur Royal Buyout: 400 Guests"). No client names, recognizable faces, or specific dates are ever published.
            </p>
          </div>
        </div>
      </section>

      {/* Contingency Planning */}
      <section className="px-6 md:px-20 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-md text-4xl md:text-5xl text-[#d4af37] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Uncompromising Contingency Infrastructure</h2>
            <p className="font-body-md text-on-surface-variant text-lg max-w-3xl mx-auto">
              A bespoke celebration of immense scale requires more than creative direction; it demands military-grade logistical redundancy. Our operational shielding guarantees that the primary experience remains undisturbed, regardless of external variables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Redundancy 1 */}
            <div className="border border-[#d4af37]/20 p-8 bg-[#121212] hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-6">electric_bolt</span>
              <h3 className="font-headline-sm text-xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Power Redundancy</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Primary, secondary, and tertiary silent generation systems deployed at all venues, ensuring zero-latency failover for lighting, sound, and critical HVAC infrastructure.
              </p>
            </div>
            
            {/* Redundancy 2 */}
            <div className="border border-[#d4af37]/20 p-8 bg-[#121212] hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-6">medical_services</span>
              <h3 className="font-headline-sm text-xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Medical Standby</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Discreet, on-site ICU-equipped ambulances and rapid-response medical personnel integrated seamlessly into the background of all large-scale destination events.
              </p>
            </div>

            {/* Redundancy 3 */}
            <div className="border border-[#d4af37]/20 p-8 bg-[#121212] hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-6">thunderstorm</span>
              <h3 className="font-headline-sm text-xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Weather Mitigation</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Comprehensive shadow-planning for all outdoor events. From rapid-deployment structural tenting to complete venue pivots executed within a 4-hour window.
              </p>
            </div>

            {/* Redundancy 4 */}
            <div className="border border-[#d4af37]/20 p-8 bg-[#121212] hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-6">shield_person</span>
              <h3 className="font-headline-sm text-xl text-on-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Security Coordination</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Liaising directly with your personal security details and local law enforcement. We manage perimeter access, anti-drone protocols, and secure transit corridors for VIP guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shielding Timeline */}
      <section className="px-6 md:px-20 py-24 border-t border-[#d4af37]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline-md text-4xl md:text-5xl text-[#d4af37] text-center mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>The Shielding Timeline</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#d4af37]/30 before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-[#121212] text-[#d4af37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10">
                <span className="font-body-md text-sm font-bold">01</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[#d4af37]/20 bg-[#0a0a0a]">
                <h3 className="font-headline-sm text-xl text-on-primary mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Discovery & NDA</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Execution of multi-party non-disclosure agreements before venue selection or concept design begins.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-[#121212] text-[#d4af37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10">
                <span className="font-body-md text-sm font-bold">02</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[#d4af37]/20 bg-[#0a0a0a]">
                <h3 className="font-headline-sm text-xl text-on-primary mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Compartmentalized Procurement</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Vendor contracting executed through insulated legal entities. The principal client's identity remains abstracted from tier-2 and tier-3 suppliers.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-[#121212] text-[#d4af37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10">
                <span className="font-body-md text-sm font-bold">03</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[#d4af37]/20 bg-[#0a0a0a]">
                <h3 className="font-headline-sm text-xl text-on-primary mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Perimeter Security & Digital Blackout</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Deployment of physical access control systems and optional enforcement of no-phone policies for guests and staff to prevent digital leaks.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-[#121212] text-[#d4af37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10">
                <span className="font-body-md text-sm font-bold">04</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[#d4af37]/20 bg-[#0a0a0a]">
                <h3 className="font-headline-sm text-xl text-on-primary mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Post-Event Data Purge</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Systematic deletion of logistical data, guest manifests, and unapproved media from all vendor and internal databases post-execution.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-primary mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Initiate a Secure Dialogue.</h2>
          <p className="font-body-md text-on-surface-variant text-lg mb-10">
            For inquiries regarding private family office engagements, high-security destination weddings, or corporate leadership summits, please request a consultation.
          </p>
          <Link href="/contact" className="inline-block border border-[#d4af37] text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:bg-[#d4af37] hover:text-[#121212] transition-colors duration-300">
            Request a Private Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
