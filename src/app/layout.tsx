import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadyne African Hair Braiding Salon | Braids in Duncanville, TX",
  description:
    "Visit Nadyne African Hair Braiding Salon in Duncanville, Texas for professional African braiding, protective styles and a welcoming salon experience. Call (682) 313-1465.",
  keywords: [
    "African hair braiding",
    "box braids Duncanville",
    "knotless braids Duncanville",
    "hair braiding salon Duncanville TX",
    "protective styles Dallas Fort Worth",
  ],
  openGraph: {
    title: "Nadyne African Hair Braiding Salon | Braids in Duncanville, TX",
    description:
      "Professional African braiding in a clean, welcoming Duncanville salon. Call (682) 313-1465.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: business.name,
  telephone: "+16823131465",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: business.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.dayOfWeek,
    opens: spec.opens,
    closes: spec.closes,
  })),
  areaServed: {
    "@type": "Place",
    name: business.areaServed,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
