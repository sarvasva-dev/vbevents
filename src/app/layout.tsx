import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visionbeyondevents.com'),
  title: "Vision Beyond Events | Luxury Wedding Planners & Corporate Event Management India",
  description: "Vision Beyond Events operates at the intersection of design, logistics, and discretion. The premier luxury destination wedding planner and corporate offsite organizers in India.",
  keywords: ["Luxury Wedding Planner India", "Corporate Event Organizers", "Destination Wedding Udaipur", "Premium Event Management", "Experiential Marketing Agency", "Event Production India"],
  authors: [{ name: "Vision Beyond Events" }],
  creator: "Vision Beyond Events",
  openGraph: {
    title: "Vision Beyond Events | Luxury Wedding Planners India",
    description: "Private Celebrations. Global Experiences. Executed Beyond Expectation.",
    url: "https://visionbeyondevents.com",
    siteName: "Vision Beyond Events",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Beyond Events | Luxury Wedding Planners India",
    description: "Private Celebrations. Global Experiences. Executed Beyond Expectation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vision Beyond Events",
    "url": "https://visionbeyondevents.com",
    "logo": "https://visionbeyondevents.com/images/vb_logo.png",
    "description": "Luxury destination wedding planner and corporate event management agency in India.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Udaipur"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Delhi"
      }
    ],
    "telephone": "+91-80818-08902",
    "priceRange": "$$$$",
    "sameAs": [
      "https://instagram.com/visionbeyondevents"
    ]
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable} h-full antialiased smooth-scroll`}
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
