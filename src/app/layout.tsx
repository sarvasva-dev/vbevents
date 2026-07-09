import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vbevents.co.in'),
  title: "Vision Beyond Events | Luxury Event Organizer India — Destination Weddings & Corporate Events",
  description: "India's discreet luxury event organizer for destination weddings, private celebrations & corporate experiences. Serving UHNWIs, family offices & global corporations across Udaipur, Mumbai, Delhi and worldwide.",
  keywords: [
    // Tier 1 – Primary commercial
    "Luxury Event Organizer India",
    "Event Organizer India",
    "Luxury Event Management Company India",
    "Destination Wedding Planner India",
    "Luxury Wedding Planner Udaipur",
    "Corporate Event Organizer India",
    "Best Event Organizer Mumbai",
    "Best Event Organizer Delhi",
    // Tier 2 – Niche / UHNWI
    "UHNWI Private Event Planner India",
    "Ultra Luxury Wedding Planner India",
    "Confidential Event Management India",
    "Private Family Office Event Planning",
    "Palace Wedding Planner Udaipur",
    "Corporate Offsite Planner India",
    "High Net Worth Wedding Planner India",
    "Discreet Event Management Company",
    "Bespoke Destination Wedding India",
    "NDA Event Planning Services India",
    // Tier 3 – Long-tail
    "Best Wedding Planner for Palace Wedding Udaipur",
    "NDA Event Planner Celebrity Wedding India",
    "Private Event Planner India",
    "Destination Wedding Planner Udaipur",
    "Luxury Corporate Event Planner India",
    "Premium Event Planner India",
    "White Glove Event Management India",
  ],
  authors: [{ name: "Vision Beyond Events" }],
  creator: "Vision Beyond Events",
  openGraph: {
    title: "Vision Beyond Events | India's Discreet Luxury Event Organizer",
    description: "Ultra-luxury event organizer for destination weddings, private UHNWI celebrations & corporate experiences across India and the world.",
    url: "https://www.vbevents.co.in",
    siteName: "Vision Beyond Events",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Beyond Events | India's Discreet Luxury Event Organizer",
    description: "Ultra-luxury event organizer for destination weddings, private UHNWI celebrations & corporate experiences across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.vbevents.co.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EventVenue", "ProfessionalService", "LocalBusiness"],
    "name": "Vision Beyond Events",
    "url": "https://www.vbevents.co.in",
    "logo": "https://www.vbevents.co.in/images/vb_logo.png",
    "image": "https://www.vbevents.co.in/opengraph-image.jpg",
    "description": "India's discreet luxury event organizer specializing in destination weddings, private UHNWI celebrations, and corporate experiences for family offices, executives, and global brands.",
    "slogan": "Private Celebrations. Global Experiences. Executed Beyond Expectation.",
    "foundingDate": "2024",
    "priceRange": "₹₹₹₹",
    "telephone": "+91-80818-08902",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Goa" }
    ],
    "knowsAbout": [
      "Luxury Destination Wedding Planning",
      "Corporate Event Management",
      "UHNWI Private Celebrations",
      "NDA-based Event Planning",
      "Palace Wedding Planning Udaipur",
      "Corporate Offsite Planning India",
      "White Glove Event Management",
      "High Security Guest Management",
      "Family Office Event Planning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Event Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Destination Wedding Planning",
            "description": "End-to-end destination wedding planning across palace venues in Udaipur, Jaipur, Goa, and globally."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Management",
            "description": "Confidential corporate event organizer for product launches, leadership retreats, board offsites and investor summits across India."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private UHNWI Celebrations",
            "description": "Bespoke NDA-protected event planning for ultra-high-net-worth individuals, family offices, and private clients."
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/visionbeyondevents"
    ]
  };


  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable} h-full antialiased smooth-scroll`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          .smooth-scroll {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
