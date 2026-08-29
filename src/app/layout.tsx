import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Estate 24/7 — Off-Market Deals Up to 70% Below Market Value",
  description:
    "Real Estate 24/7 connects investors with off-market, distressed properties up to 70% below market value across DC, MD, VA, Baltimore, Tampa Bay, Atlanta & Memphis. Join the VIP Buyer's List — free.",
  keywords: [
    "off-market real estate",
    "distressed properties",
    "real estate investing",
    "wholesale deals",
    "cash buyer deals",
    "below market value properties",
    "DC Maryland Virginia real estate",
  ],
  authors: [{ name: "Real Estate 24/7" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Real Estate 24/7 — Off-Market Deals Up to 70% Below Market",
    description:
      "We find deeply discounted distressed properties so you save hours and thousands in marketing costs. Join the VIP Buyer's List — free.",
    siteName: "Real Estate 24/7",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate 24/7 — Off-Market Deals Up to 70% Below Market",
    description:
      "Join the VIP Buyer's List and get off-market deals delivered before anyone else.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Real Estate 24/7",
  description:
    "Connects real estate investors with off-market, distressed properties up to 70% below market value.",
  telephone: "+15713270741",
  email: "iamrealestate247@gmail.com",
  url: "https://realestate247.com",
  areaServed: [
    "Washington, DC",
    "Maryland",
    "Northern Virginia",
    "Baltimore, MD",
    "Tampa Bay, FL",
    "Atlanta, GA",
    "Memphis, TN",
  ],
  knowsAbout: [
    "Off-market real estate",
    "Distressed properties",
    "Wholesale real estate",
    "Real estate investing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
