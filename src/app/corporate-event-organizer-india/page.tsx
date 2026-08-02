import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Corporate Event Organizer India | Product Launches, Offsites & Brand Activations | Vision Beyond Events',
  description: 'Enterprise-grade corporate event management for product launches, leadership offsites, and brand activations â€” discreet execution for global companies and leadership teams operating in India.',
  keywords: [
    'corporate event organizer India',
    'best corporate event organizer',
    'corporate offsite planner India',
    'corporate event management company India',
    'corporate event organizer Mumbai',
    'corporate event organizer Delhi',
    'luxury corporate event planner India',
    'leadership retreat planner India',
    'MICE event company India',
    'CEO offsite organizer India',
    'NDA corporate event planner',
    'discreet corporate event management',
  ],
  alternates: { canonical: 'https://www.vbevents.co.in/corporate-event-organizer-india' },
  openGraph: {
    title: 'Corporate Event Organizer India | Vision Beyond Events',
    description: 'Enterprise-grade corporate event management â€” product launches, leadership offsites & brand activations. Discreet execution for global companies.',
    url: 'https://www.vbevents.co.in/corporate-event-organizer-india',
    siteName: 'Vision Beyond Events',
    locale: 'en_IN',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Event Organizer in India',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Vision Beyond Events',
    url: 'https://www.vbevents.co.in',
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Udaipur' },
    { '@type': 'Country', name: 'India' },
  ],
  description: 'Confidential corporate event organizer for product launches, leadership retreats, board offsites and investor summits across India â€” with NDA-by-default protocols.',
  serviceType: 'Corporate Event Management',
  url: 'https://www.vbevents.co.in/corporate-event-organizer-india',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you manage multi-country attendee logistics for corporate events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have coordinated corporate events with attendees from over 20 countries. Our logistics team manages international travel coordination, visa support where required, airport transfers, and dedicated attendee liaisons from arrival to departure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer NDAs for sensitive internal corporate events such as M&A announcements or leadership transitions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NDA-protected execution is our standard operating model â€” not an add-on. For sensitive announcements, leadership transitions, or board-level retreats, we implement additional compartmentalization protocols: vendors operate on a need-to-know basis, and all event staff sign individual confidentiality agreements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your minimum event scale for corporate engagements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with corporate events from intimate 20-person leadership retreats to large-scale 1,000+ attendee conferences. Our sweet spot â€” and where our UHNWI-grade attention to detail has maximum impact â€” is typically in the 50â€“500 attendee range for high-value, reputation-sensitive events.',
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
    { '@type': 'ListItem', position: 3, name: 'Corporate Event Organizer India', item: 'https://www.vbevents.co.in/corporate-event-organizer-india' },
  ],
};

const SERVICE_PILLARS = [
  {
    icon: 'rocket_launch',
    title: 'Product Launches',
    desc: 'Press-forward launch experiences engineered for impact. Controlled media access. High-production AV. Guest journey from invitation to post-event follow-through.',
  },
  {
    icon: 'groups',
    title: 'Leadership Offsites',
    desc: 'Confidential board retreats and C-suite offsites. Distraction-free environments for strategic alignment, culture-building, and high-stakes decision-making.',
  },
  {
    icon: 'campaign',
    title: 'Brand Activations',
    desc: 'Immersive brand environments for invite-only audiences. Where experiential storytelling meets luxury hospitality and measurable relationship outcomes.',
  },
  {
    icon: 'handshake',
    title: 'Investor Summits',
    desc: 'High-security, low-footprint investor gatherings. NDA-standard attendee lists, curated content formats, and white-glove hospitality throughout.',
  },
];

export default function CorporateEventOrganizerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                <li className="text-[#d4af37]/40">â€º</li>
                <li><Link href="/services/weddings" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
                <li className="text-[#d4af37]/40">â€º</li>
                <li className="text-[#d4af37]">Corporate Events</li>
              </ol>
            </nav>

            <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Enterprise-Grade. Boardroom-Discreet.</p>
            <h1 className="font-headline-lg text-5xl md:text-7xl text-[#0f172a] mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Corporate Event Organizer for Global & Enterprise Clients
            </h1>
            <p className="font-body-md text-[#475569] text-xl leading-relaxed max-w-3xl mb-12">
              We are not a MICE vendor competing on headcount and screens. We are a precision corporate event organizer for leadership teams, boards, and global brands who require flawless execution, zero leaks, and an experience that reflects the caliber of the organization hosting it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block gold-gradient-bg text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                Request a Confidential Consultation
              </Link>
              <Link href="/discretion" className="inline-block border border-[#d4af37]/60 text-[#d4af37] font-body-md text-label-lg uppercase tracking-widest px-10 py-4 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300">
                Our Discretion Protocols
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="py-16 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/20 backdrop-blur-md rounded-none shadow-none">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/30">
            {[
              { stat: '50+', label: 'Corporate Events Executed' },
              { stat: '20+', label: 'Countries Represented' },
              { stat: '1,000+', label: 'Attendees Coordinated' },
              { stat: '0', label: 'Information Incidents' },
            ].map(({ stat, label }) => (
              <div key={label} className="py-6 md:py-0 px-4">
                <p className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{stat}</p>
                <p className="font-body-md text-[#475569] text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Pillars */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Capabilities</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Corporate Event Management Verticals
                </h2>
                <div className="w-24 h-px bg-[#d4af37]/30 mx-auto mt-6" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICE_PILLARS.map(({ icon, title, desc }) => (
                  <div key={title} className="border border-[#d4af37]/20 p-10 glass-card rounded-2xl hover:border-[#d4af37]/40 transition-colors group">
                    <span className="material-symbols-outlined text-4xl text-[#d4af37] mb-6 block">{icon}</span>
                    <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-4 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                    <p className="font-body-md text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Anonymized Case Study Block */}
        <FadeIn>
          <section className="py-24 px-6 md:px-20 glass-card border-x-0 border-y border-[#d4af37]/20 backdrop-blur-md rounded-none shadow-none">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Proof of Execution</p>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                  What We&apos;ve Delivered
                </h2>
                <p className="font-body-md text-[#475569] text-lg mt-4">
                  Client names and organizations remain confidential per our NDA-first model. The numbers speak.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: 'Global Product Launch â€” Tier 1 City',
                    details: ['800+ attendees across 3 days', '15 international delegations', 'Zero media leaks pre-announcement', 'Coordinated press access protocol'],
                  },
                  {
                    label: 'Board Leadership Retreat â€” Heritage Property',
                    details: ['22 C-suite executives', 'Full property buyout, 4 days', 'NDA signed by all support staff', 'No device policy enforced on-site'],
                  },
                  {
                    label: 'Annual Investor Summit â€” Metro Convention',
                    details: ['400+ HNWI attendees', 'Multi-country guest logistics', 'Curated experiential dining program', 'Branded environment end-to-end'],
                  },
                ].map(({ label, details }) => (
                  <div key={label} className="border border-[#d4af37]/20 p-8 glass-card rounded-2xl hover:border-[#d4af37]/40 transition-colors">
                    <p className="font-body-md text-label-lg uppercase tracking-widest text-[#d4af37] mb-6 text-xs">Confidential Engagement</p>
                    <h3 className="font-headline-sm text-xl text-[#0f172a] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{label}</h3>
                    <ul className="space-y-3">
                      {details.map((d) => (
                        <li key={d} className="font-body-md text-[#475569] text-sm flex items-start gap-3">
                          <span className="text-[#d4af37] mt-0.5">â€”</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Discretion Link */}
        <section className="py-16 px-6 md:px-20 bg-transparent">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border border-[#d4af37]/20 p-10 glass-card backdrop-blur-md rounded-2xl shadow-none">
            <div>
              <h3 className="font-headline-sm text-2xl text-[#0f172a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Why enterprises choose discretion-first partners</h3>
              <p className="font-body-md text-[#475569] leading-relaxed">
                A single information leak before an M&A announcement, leadership transition, or strategic launch can cost more than the entire event budget. Our operational framework is built around this reality.
              </p>
            </div>
            <Link href="/discretion" className="shrink-0 inline-flex items-center gap-2 font-body-md text-label-lg uppercase tracking-widest text-[#d4af37] hover:text-[#0f172a] transition-colors whitespace-nowrap">
              Read Our Protocols <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-20 bg-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <p className="font-body-md text-label-lg uppercase tracking-[0.2em] text-[#475569] mb-4">Common Questions</p>
              <h2 className="font-headline-lg text-4xl text-[#d4af37] tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                Corporate Event Management â€” FAQs
              </h2>
            </div>
            <div className="space-y-0">
              {[
                {
                  q: 'Can you manage multi-country attendee logistics for corporate events?',
                  a: 'Yes. We have coordinated corporate events with attendees from over 20 countries. Our logistics team manages international travel coordination, visa support where required, airport transfers, and dedicated attendee liaisons from arrival to departure.',
                },
                {
                  q: 'Do you offer NDAs for sensitive internal corporate events such as M&A announcements or leadership transitions?',
                  a: 'Yes. NDA-protected execution is our standard operating model — not an add-on. For sensitive announcements, leadership transitions, or board-level retreats, we implement additional compartmentalization protocols: vendors operate on a need-to-know basis, and all event staff sign individual confidentiality agreements.',
                },
                {
                  q: 'What is your minimum event scale for corporate engagements?',
                  a: 'We work with corporate events from intimate 20-person leadership retreats to large-scale 1,000+ attendee conferences. Our sweet spot — and where our UHNWI-grade attention to detail has maximum impact — is typically in the 50–500 attendee range for high-value, reputation-sensitive events.',
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

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-transparent border-t border-[#d4af37]/25">
          <p className="font-body-md text-label-lg uppercase tracking-[0.3em] text-[#d4af37] mb-6">Begin Here</p>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-[#0f172a] mb-8 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            Precision execution. Boardroom-standard discretion.
          </h2>
          <p className="font-body-md text-[#475569] text-lg max-w-xl mx-auto mb-10">
            Every corporate inquiry is treated with the same confidentiality as a private family engagement. Your first call is protected.
          </p>
          <Link href="/contact" className="inline-block gold-gradient-bg text-[#0f172a] font-body-md text-label-lg uppercase tracking-widest px-12 py-4 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
            Request a Confidential Consultation
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}




