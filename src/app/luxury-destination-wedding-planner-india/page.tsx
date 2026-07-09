import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Luxury Destination Wedding Planner in India | Vision Beyond Events',
  description: 'Ultra-luxury, NDA-protected destination wedding planning across Udaipur, Jaipur, Goa & beyond. Palace weddings, global guest logistics, discreet execution. Vision Beyond Events.',
  keywords: [
    'luxury destination wedding planner India',
    'ultra luxury wedding planner India',
    'bespoke destination wedding India',
    'palace wedding planner India',
    'destination wedding planner Udaipur',
    'NRI wedding planner India',
    'royal wedding planner Rajasthan',
    'discreet wedding planner India',
    'UHNWI wedding planner India',
    'high security destination wedding India',
  ],
  alternates: { canonical: 'https://www.vbevents.co.in/luxury-destination-wedding-planner-india' },
  openGraph: {
    title: 'Luxury Destination Wedding Planner in India | Vision Beyond Events',
    description: 'Ultra-luxury, NDA-protected destination wedding planning across Udaipur, Jaipur, Goa & beyond.',
    url: 'https://www.vbevents.co.in/luxury-destination-wedding-planner-india',
    siteName: 'Vision Beyond Events',
    locale: 'en_IN',
    type: 'website',
  },
};

// Service + FAQPage schema â€” matches visible FAQ section below
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Destination Wedding Planning in India',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Vision Beyond Events',
    url: 'https://www.vbevents.co.in',
  },
  areaServed: [
    { '@type': 'City', name: 'Udaipur' },
    { '@type': 'City', name: 'Jaipur' },
    { '@type': 'City', name: 'Goa' },
    { '@type': 'Country', name: 'India' },
  ],
  description: 'End-to-end luxury destination wedding planning across palace venues in Udaipur, Jaipur, Goa, and internationally â€” with NDA-by-default discretion protocols.',
  serviceType: 'Luxury Destination Wedding Planning',
  url: 'https://www.vbevents.co.in/luxury-destination-wedding-planner-india',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should we book a destination wedding planner in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For luxury destination weddings â€” especially those involving exclusive palace or fort venue buyouts â€” we recommend engaging at least 9â€“12 months in advance. This allows adequate time for venue procurement, international guest logistics, vendor curation, and our NDA-based discovery process. For smaller intimate events, 4â€“6 months may suffice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle international guest logistics including visas and chartered transport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our guest logistics capability covers visa assistance, private aviation coordination, ground transport with dedicated guest liaisons, and hyper-personalized arrival protocols for VIP guests. We treat every attendee\u2019s experience as an extension of the celebration itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an NDA signed before the first consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes â€” always. Every engagement with Vision Beyond Events begins with a mutual non-disclosure agreement before any logistical detail, budget range, venue preference, or family information is discussed. This is our standard protocol, not an optional add-on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you execute destination weddings outside India for Indian-origin clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We plan destination weddings internationally for Indian-origin and NRI clients. Our vendor and logistics network extends to select international destinations. Please request a confidential consultation to discuss your specific location requirements.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vbevents.co.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.vbevents.co.in/services/weddings' },
    { '@type': 'ListItem', position: 3, name: 'Luxury Destination Wedding Planner India', item: 'https://www.vbevents.co.in/luxury-destination-wedding-planner-india' },
  ],
};

export default function LuxuryDestinationWeddingPlannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="min-h-screen bg-[#0d1526]">

        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-20 border-b border-[#d4af37]/20 bg-gradient-to-b from-[#0d1526] to-[#111c38]">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb â€” semantic + visible */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 font-body-md text-xs uppercase tracking-widest text-on-surface-variant">
                <li><Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
                <li className="text-[#d4af37]/40">â€º</li>
                <li><Link href="/services/weddings" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
                <li className="text-[#d4af37]/40">â€º</li>
                <li className="text-[#d4af37]">Destination Wedding Planner</li>
              </ol>
            </nav>

            <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">India&apos;s Discreet Luxury House</p>
            <h1 className="font-headline-lg text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Luxury Destination Wedding Planner, India
            </h1>
            <p className="font-body-md text-on-surface-variant text-xl leading-relaxed max-w-3xl mb-12">
              Vision Beyond Events is India&apos;s discreet luxury destination wedding planner â€” architecting palace weddings, fort celebrations, and lakeside estate ceremonies for UHNWI families and global clients. Every engagement begins with an NDA. Every detail is executed with military precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block gold-gradient-bg text-[#111c38] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                Request a Confidential Consultation
              </Link>
              <Link href="/discretion" className="inline-block border border-[#d4af37]/60 text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300">
                Our Privacy Protocols
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="py-16 px-6 md:px-20 bg-[#111c38] border-b border-[#d4af37]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/20">
            {[
              { stat: '22+', label: 'Legacy Weddings Executed' },
              { stat: '3', label: 'Continents of Execution' },
              { stat: '500+', label: 'VIP Guests Managed' },
              { stat: '0', label: 'NDA Breaches. Ever.' },
            ].map(({ stat, label }) => (
              <div key={label} className="py-6 md:py-0 px-4">
                <p className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{stat}</p>
                <p className="font-body-md text-on-surface-variant text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 bg-[#0d1526]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-on-surface-variant mb-4">How We Work</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The VBE Planning Process
                </h2>
                <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mt-6" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {[
                  { step: '01', title: 'Discovery & NDA', desc: 'A mutual NDA is executed before a single logistical detail is discussed. We learn your vision, scale, and requirements under full confidentiality.' },
                  { step: '02', title: 'Concept & Design', desc: 'We translate your vision into a multi-day event architecture â€” thematic design language, venue categories, dÃ©cor tone, and guest experience flow.' },
                  { step: '03', title: 'Vendor Curation', desc: 'We source from a pre-vetted network of artisans, chefs, performers, and production specialists â€” all contracted under NDA on a need-to-know basis.' },
                  { step: '04', title: 'Execution Command', desc: 'On-ground event command center. Power redundancy. Medical standby. Weather contingency. Your family celebrates; our team manages everything.' },
                  { step: '05', title: 'Post-Event Protocol', desc: 'Systematic data purge of guest manifests and unapproved media from all vendor databases. Your celebration remains yours, permanently.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="border border-[#d4af37]/10 p-8 bg-[#111c38] hover:bg-[#1a1a1a] transition-colors">
                    <span className="font-headline-lg text-4xl text-[#d4af37]/20 block mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{step}</span>
                    <h3 className="font-headline-sm text-lg text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Venue Types */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 bg-[#111c38] border-y border-[#d4af37]/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-on-surface-variant mb-4">Venue Expertise</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Properties We Work With
                </h2>
                <p className="font-body-md text-on-surface-variant text-lg mt-4 max-w-2xl">
                  We work across India&apos;s most exceptional heritage properties â€” all accessed through long-standing relationships and handled with the discretion their owners demand.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'fort', title: 'Royal Palaces', desc: 'Full palace buyouts for multi-day wedding weekends. Exclusive access. No shared public spaces. Complete perimeter control.' },
                  { icon: 'landscape', title: 'Heritage Forts', desc: 'Rajputana fort celebrations with dramatic rampart settings, moat lighting, and fort-to-fort guest processions.' },
                  { icon: 'water', title: 'Lakeside Estates', desc: 'Private lakefront estates with boat arrival sequences, floating stage setups, and dawn-lit ceremonies.' },
                  { icon: 'villa', title: 'Private Havelis', desc: 'Intimate heritage havelis for 50â€“150 guest celebrations. Boutique, bespoke, and completely private.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="border border-[#d4af37]/10 p-8 hover:border-[#d4af37]/40 transition-colors">
                    <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-4 block">{icon}</span>
                    <h3 className="font-headline-sm text-xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/udaipur-destination-wedding-planner" className="inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors text-sm">
                  Udaipur Weddings <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ â€” Visible content matching schema */}
        <section className="py-24 px-6 md:px-20 bg-[#0d1526]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-on-surface-variant mb-4">Common Questions</p>
              <h2 className="font-headline-lg text-4xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                Destination Wedding Planning â€” FAQs
              </h2>
            </div>
            <div className="space-y-0">
              {[
                {
                  q: 'How far in advance should we book a destination wedding planner in India?',
                  a: 'For luxury destination weddings â€” especially those involving exclusive palace or fort venue buyouts â€” we recommend engaging at least 9â€“12 months in advance. This allows adequate time for venue procurement, international guest logistics, vendor curation, and our NDA-based discovery process. For smaller intimate events, 4â€“6 months may suffice.',
                },
                {
                  q: 'Do you handle international guest logistics including visas and chartered transport?',
                  a: 'Yes. Our guest logistics capability covers visa assistance, private aviation coordination, ground transport with dedicated guest liaisons, and hyper-personalized arrival protocols for VIP guests. We treat every attendee\'s experience as an extension of the celebration itself.',
                },
                {
                  q: 'Is an NDA signed before the first consultation?',
                  a: 'Yes â€” always. Every engagement with Vision Beyond Events begins with a mutual non-disclosure agreement before any logistical detail, budget range, venue preference, or family information is discussed. This is our standard protocol, not an optional add-on.',
                },
                {
                  q: 'Can you execute destination weddings outside India for Indian-origin clients?',
                  a: 'Yes. We plan destination weddings internationally for Indian-origin and NRI clients. Our vendor and logistics network extends to select international destinations. Please request a confidential consultation to discuss your specific location requirements.',
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="group border-b border-[#d4af37]/10 py-6">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                    <h3 className="font-body-md text-on-surface text-lg font-medium leading-snug">{q}</h3>
                    <span className="material-symbols-outlined text-[#d4af37] shrink-0 group-open:rotate-45 transition-transform duration-300">add</span>
                  </summary>
                  <p className="font-body-md text-on-surface-variant leading-relaxed mt-4 pr-8">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-[#111c38] border-t border-[#d4af37]/20">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Begin Here</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your celebration. Your rules. Our execution.
          </h2>
          <p className="font-body-md text-on-surface-variant text-lg max-w-xl mx-auto mb-10">
            Every inquiry is held in complete confidence. An NDA is signed before your first call.
          </p>
          <Link href="/contact" className="inline-block gold-gradient-bg text-[#111c38] font-body-md text-label-lg uppercase tracking-widest px-12 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
            Request a Confidential Consultation
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-[#0d1526] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-headline-md text-2xl text-[#d4af37] tracking-tighter mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Vision Beyond Events</div>
            <div className="font-body-md text-on-surface-variant text-sm tracking-widest uppercase">Luxury Destination Wedding Planner, India</div>
          </div>
          <div className="flex gap-8">
            <Link className="font-body-md text-sm text-on-surface-variant hover:text-[#d4af37] transition-colors uppercase tracking-widest" href="/discretion">Privacy Protocols</Link>
            <Link className="font-body-md text-sm text-on-surface-variant hover:text-[#d4af37] transition-colors uppercase tracking-widest" href="/contact">Inquire</Link>
            <Link className="font-body-md text-sm text-on-surface-variant hover:text-[#d4af37] transition-colors uppercase tracking-widest" href="/">Home</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

