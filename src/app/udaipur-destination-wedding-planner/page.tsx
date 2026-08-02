import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Udaipur Destination Wedding Planner | Palace Weddings by Vision Beyond Events',
  description: 'The definitive luxury wedding planner for Udaipur palace weddings — lake palaces, fort venues, heritage havelis and lakeside estates. NDA-by-default. Zero public exposure.',
  keywords: [
    'Udaipur destination wedding planner',
    'luxury wedding planner Udaipur',
    'palace wedding planner Udaipur',
    'best wedding planner for palace wedding in Udaipur',
    'royal wedding planner Udaipur',
    'destination wedding in Udaipur',
    'Rajasthan destination wedding planner',
    'fort wedding planner Udaipur',
    'lake palace wedding planner',
    'heritage wedding planner Udaipur',
  ],
  alternates: { canonical: 'https://www.vbevents.co.in/udaipur-destination-wedding-planner' },
  openGraph: {
    title: 'Udaipur Destination Wedding Planner | Palace Weddings | Vision Beyond Events',
    description: 'The definitive luxury wedding planner for Udaipur palace weddings — lake palaces, fort venues, and lakeside estates. NDA-by-default discretion.',
    url: 'https://www.vbevents.co.in/udaipur-destination-wedding-planner',
    siteName: 'Vision Beyond Events',
    locale: 'en_IN',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Udaipur Destination Wedding Planner',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Vision Beyond Events',
    url: 'https://www.vbevents.co.in',
  },
  areaServed: [
    { '@type': 'City', name: 'Udaipur' },
    { '@type': 'State', name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' },
  ],
  description: 'Ultra-luxury, NDA-protected destination wedding planning in Udaipur — palace buyouts, fort ceremonies, lakeside estates, and complete discreet guest management.',
  serviceType: 'Luxury Destination Wedding Planning',
  url: 'https://www.vbevents.co.in/udaipur-destination-wedding-planner',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vision Beyond Events — Udaipur Wedding Planner',
  url: 'https://www.vbevents.co.in/udaipur-destination-wedding-planner',
  telephone: '+91-80818-08902',
  areaServed: { '@type': 'City', name: 'Udaipur' },
  description: 'Luxury destination wedding planner specializing in palace and fort weddings in Udaipur, Rajasthan.',
  priceRange: '₹₹₹₹',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best season for a palace wedding in Udaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October through February is the peak season for palace weddings in Udaipur — mild temperatures (15°C–28°C), clear skies, and golden light make for ideal conditions. November and December are the most sought-after months. March and September offer shoulder-season advantages including venue availability and more competitive pricing, while still maintaining pleasant conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can Udaipur palace venues typically accommodate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Udaipur\'s heritage properties range significantly in capacity. Intimate heritage havelis comfortably host 50–150 guests for a truly private celebration. Mid-scale palace properties accommodate 200–500 guests across multiple event spaces. Grand palace and fort buyouts can manage 800+ guests across multiple event zones and days. We work across all scales.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle permits and permissions for palace and fort properties in Udaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Heritage property events in Udaipur require coordination with ASI (Archaeological Survey of India) for certain venues, state authority approvals, police permissions for large gatherings, and noise and lighting clearances. Our local operations team manages this entire permitting chain — including contingency plans if timelines shift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you handle monsoon contingency planning for outdoor Udaipur events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Udaipur\'s monsoon season (July–September) brings beautiful scenery but requires comprehensive weather contingency planning. We deploy rapid-deployment structural tenting, complete venue-pivot protocols executable within a 4-hour window, and weather monitoring teams. No outdoor event operates without a shadow plan.',
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
    { '@type': 'ListItem', position: 3, name: 'Udaipur Destination Wedding Planner', item: 'https://www.vbevents.co.in/udaipur-destination-wedding-planner' },
  ],
};

const VENUE_CATEGORIES = [
  {
    icon: 'water',
    title: 'Lake Palace Properties',
    desc: 'Island and lakefront palace properties offering iconic Udaipur imagery — boat arrival sequences, lake-lit ceremonies, and an exclusivity that simply cannot be replicated elsewhere in India.',
    tag: 'Intimate to Grand',
  },
  {
    icon: 'fort',
    title: 'Hilltop Forts',
    desc: 'Ancient hilltop fortresses commanding panoramic views of the city and Aravallis. Perfect for dusk ceremonies, fire processions, and multi-courtyard multi-day celebrations.',
    tag: 'Multi-Day Formats',
  },
  {
    icon: 'villa',
    title: 'Heritage Havelis',
    desc: 'Boutique 18th–19th century havelis within the old city walls. Intimate, atmospheric, and fiercely private — for families who value depth of experience over scale.',
    tag: '50–200 Guests',
  },
  {
    icon: 'landscape',
    title: 'Lakeside Estates',
    desc: 'Private residential estates on the Udaipur lakes with exclusive garden and terrace access — without the heritage restrictions that come with classified properties.',
    tag: 'Full Buyout',
  },
];

export default function UdaipurWeddingPlannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="min-h-screen bg-transparent">

        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-20 border-b border-[#d4af37]/20 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 font-body-md text-xs uppercase tracking-widest text-[#475569]">
                <li><Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
                <li className="text-[#d4af37]/40">›</li>
                <li><Link href="/services/weddings" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
                <li className="text-[#d4af37]/40">›</li>
                <li className="text-[#d4af37]">Udaipur</li>
              </ol>
            </nav>

            <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">The Venice of the East</p>
            <h1 className="font-headline-lg text-5xl md:text-7xl text-[#0f172a] mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Udaipur Destination Wedding Planner
            </h1>
            <p className="font-body-md text-[#475569] text-xl leading-relaxed max-w-3xl mb-12">
              Udaipur is India&apos;s most iconic destination for palace weddings — and also its most operationally complex. Permits, heritage restrictions, seasonal logistics, and VIP guest management across a lakeside city require a partner with deep local execution capability. That is what we provide, backed by our NDA-first discretion standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block gold-gradient-bg text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                Request a Confidential Consultation
              </Link>
              <Link href="/luxury-destination-wedding-planner-india" className="inline-block border border-[#d4af37]/60 text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300">
                All India Destinations
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="py-16 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/20 backdrop-blur-md rounded-none shadow-none">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/30">
            {[
              { stat: '15+', label: 'Udaipur Weddings Executed' },
              { stat: '4', label: 'Venue Category Types' },
              { stat: '300+', label: 'VIP Guests Managed in Udaipur' },
              { stat: 'Oct–Feb', label: 'Peak Season Window' },
            ].map(({ stat, label }) => (
              <div key={label} className="py-6 md:py-0 px-4">
                <p className="font-headline-lg text-3xl md:text-4xl text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{stat}</p>
                <p className="font-body-md text-[#475569] text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Categories */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Venue Expertise</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Property Categories We Work With in Udaipur
                </h2>
                <p className="font-body-md text-[#475569] text-lg mt-4 max-w-2xl mx-auto">
                  We do not name specific properties until after an NDA is signed. Below are the categories of venues we regularly execute across in and around Udaipur.
                </p>
                <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mt-6" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VENUE_CATEGORIES.map(({ icon, title, desc, tag }) => (
                  <div key={title} className="border border-[#d4af37]/20 p-10 glass-card rounded-2xl hover:border-[#d4af37]/40 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      <span className="material-symbols-outlined text-4xl text-[#d4af37]">{icon}</span>
                      <span className="font-body-md text-xs uppercase tracking-widest text-[#d4af37]/60 border border-[#d4af37]/30 px-3 py-1">{tag}</span>
                    </div>
                    <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                    <p className="font-body-md text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Local Logistics Expertise */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/20 backdrop-blur-md rounded-none shadow-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Ground-Level Capability</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Udaipur Requires Local Expertise. We Have It.
                </h2>
                <div className="space-y-6 font-body-md text-[#475569] leading-relaxed text-lg">
                  <p>
                    The Udaipur Lakes region presents logistical challenges that generic Delhi or Mumbai-based planners consistently underestimate: narrow heritage lanes that restrict convoy movement, ASI permits for protected monuments, mandatory liaison with Rajasthan Tourism Development Corporation for certain locations, and a local vendor market that requires years of relationship cultivation.
                  </p>
                  <p>
                    Our Udaipur operations capability includes on-ground logistics teams, pre-negotiated relationships with Maharaja-era property management offices, and an established local vendor ecosystem across décor, florals, catering, and entertainment.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: 'flight', title: 'Airport Transfer Management', desc: 'Maharana Pratap Airport to hotel — coordinated VIP fleet with guest name boards, lounge access for transit delays, and real-time tracking.' },
                  { icon: 'description', title: 'Permit & Heritage Clearances', desc: 'ASI approvals, police event permissions, local authority NOCs — all managed by our regulatory team so you don\'t encounter surprises on day one.' },
                  { icon: 'wb_sunny', title: 'Season & Weather Planning', desc: 'Monsoon contingency protocols, winter heating solutions for open-air venues, and micro-climate briefings for event-day logistics.' },
                  { icon: 'store', title: 'Curated Local Vendor Network', desc: 'Vetted Udaipur-based artisans, heritage caterers, folk performers, and floral studios — each under NDA, each selected for excellence.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-5 p-6 border border-[#d4af37]/20 glass-card rounded-2xl hover:border-[#d4af37]/40 transition-colors">
                    <span className="material-symbols-outlined text-2xl text-[#d4af37] shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <h3 className="font-headline-sm text-lg text-[#0f172a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                      <p className="font-body-md text-[#475569] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-20 bg-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Common Questions</p>
              <h2 className="font-headline-lg text-4xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                Udaipur Palace Weddings — FAQs
              </h2>
            </div>
            <div className="space-y-0">
              {[
                {
                  q: 'What is the best season for a palace wedding in Udaipur?',
                  a: 'October through February is the peak season — mild temperatures (15°C–28°C), clear skies, and golden light make for ideal conditions. November and December are most sought-after. March and September offer shoulder-season advantages including venue availability and more competitive pricing, while still maintaining pleasant conditions.',
                },
                {
                  q: 'How many guests can Udaipur palace venues typically accommodate?',
                  a: "Udaipur's heritage properties range significantly in capacity. Intimate heritage havelis comfortably host 50–150 guests for a truly private celebration. Mid-scale palace properties accommodate 200–500 guests across multiple event spaces. Grand palace and fort buyouts can manage 800+ guests across multiple event zones and days.",
                },
                {
                  q: 'Do you handle permits and permissions for palace and fort properties in Udaipur?',
                  a: 'Yes. Heritage property events in Udaipur require coordination with ASI for certain venues, state authority approvals, police permissions for large gatherings, and noise and lighting clearances. Our local operations team manages this entire permitting chain — including contingency plans if timelines shift.',
                },
                {
                  q: 'Can you handle monsoon contingency planning for outdoor Udaipur events?',
                  a: "Udaipur's monsoon season (July–September) brings beautiful scenery but requires comprehensive weather contingency planning. We deploy rapid-deployment structural tenting, complete venue-pivot protocols executable within a 4-hour window, and weather monitoring teams. No outdoor event operates without a shadow plan.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="group border-b border-[#d4af37]/30 py-6">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                    <h3 className="font-body-md text-[#0f172a] text-lg font-medium leading-snug">{q}</h3>
                    <span className="material-symbols-outlined text-[#d4af37] shrink-0 group-open:rotate-45 transition-transform duration-300">add</span>
                  </summary>
                  <p className="font-body-md text-[#475569] leading-relaxed mt-4 pr-8">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Link + CTA */}
        <section className="py-24 px-6 text-center bg-transparent border-t border-[#d4af37]/20">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Begin in Confidence</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Udaipur wedding. Flawlessly private.
          </h2>
          <p className="font-body-md text-[#475569] text-lg max-w-xl mx-auto mb-10">
            An NDA is signed before your first consultation. No names, no guest lists, no venue details leave our office without your written consent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block gold-gradient-bg text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-12 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
              Request a Confidential Consultation
            </Link>
            <Link href="/discretion" className="inline-block border border-[#d4af37]/60 text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] transition-colors">
              Our Privacy Protocols
            </Link>
          </div>
        </section>

      <Footer />
    </main>
    </>
  );
}




