import type { Metadata } from "next";
import { Cormorant_Garamond, Italiana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig, contactInfo } from "@/lib/data/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mediterranes Restaurant in Leonberg`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Restaurant",
    "Italienisch",
    "Mediterran",
    "Pizza",
    "Pasta",
    "Leonberg",
    "Casa Eltinger Hof",
    "Deutsche Küche",
    "Veranstaltungen",
    "Hochzeit",
    "Firmenfeier",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Mediterranes Restaurant in Leonberg`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data for SEO
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/restaurant-exterior.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: contactInfo.phoneFormatted,
    priceRange: contactInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: "Leonberg",
      postalCode: "71229",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8011,
      longitude: 9.0152,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "17:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "17:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "14:30",
      },
    ],
    servesCuisine: ["Italian", "Mediterranean", "Pizza", "Pasta"],
    acceptsReservations: "True",
    menu: `${siteConfig.url}/speisekarten`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: contactInfo.reviewCount.toString(),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${cormorant.variable} ${italiana.variable} font-serif antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
