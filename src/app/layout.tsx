import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site-config";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Custom Websites for Small Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Anslio builds custom, hand-coded websites for small businesses and professionals. Lightning fast, beautifully designed, and yours to keep — starting at $500 with no monthly fees.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — Custom Websites for Small Businesses`,
    description:
      "Hand-coded websites that load instantly and look incredible. One-time pricing, no subscriptions. Built around your brand.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Custom Websites for Small Businesses`,
    description:
      "Hand-coded websites that load instantly and look incredible. One-time pricing, no subscriptions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              description:
                "Custom, hand-coded websites for small businesses and professionals. Lightning fast, beautifully designed, and fully owned by the client.",
              url: siteConfig.url,
              email: siteConfig.email,
              telephone: "",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jacksonville",
                addressRegion: "FL",
                addressCountry: "US",
              },
              priceRange: "$500–$2,000",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "Web Design",
                "Web Development",
                "Website Design for Small Business",
                "Custom Website Development",
              ],
              knowsAbout: [
                "Web design",
                "Small business websites",
                "Website performance optimization",
                "Responsive web design",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Website Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Starter Website",
                    description:
                      "A clean, professional 3-page website for freelancers and solo businesses.",
                    price: "500",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    name: "Professional Website",
                    description:
                      "A 7-page website built to rank on Google for growing small businesses.",
                    price: "1000",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    name: "Premium Website",
                    description:
                      "A full-featured 15-page website with blog and online booking for established businesses.",
                    price: "2000",
                    priceCurrency: "USD",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {siteConfig.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.gaId}');`}
            </Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
