import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Vision Beyond Events | Premium Event Management",
  description: "Crafting Experiences. Creating Memories. Vision Beyond Events specializes in luxury marriages, haldi ceremonies, birthday parties, and corporate events across India.",
  keywords: ["Event Planner", "Indian Weddings", "Luxury Events", "Birthday Organizers", "Event Management", "Haldi Ceremony", "Dandiya Nights"],
  authors: [{ name: "Vision Beyond Events" }],
  creator: "Vision Beyond Events",
  openGraph: {
    title: "Vision Beyond Events | Premium Event Management",
    description: "Crafting Experiences. Creating Memories. Book us for your next luxury event.",
    url: "https://visionbeyondevents.com",
    siteName: "Vision Beyond Events",
    images: [
      {
        url: "/images/vb_logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Beyond Events | Premium Event Management",
    description: "Crafting Experiences. Creating Memories. Book us for your next luxury event.",
    images: ["/images/vb_logo.png"],
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
    "@type": "EventOrganization",
    "name": "Vision Beyond Events",
    "url": "https://visionbeyondevents.com",
    "logo": "https://visionbeyondevents.com/images/vb_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80818-08902",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://instagram.com/visionbeyondevents"
    ]
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
