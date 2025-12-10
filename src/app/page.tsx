import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "Connect with Like-Minded Couples | Couple Socials",
  description: "Join Couple Socials, the premier online platform for couples to connect, build meaningful friendships, and create unforgettable experiences together. Discover verified couples, host exclusive events, and build a vibrant community.",
  keywords: [
    "couple social network",
    "couple matching",
    "couple events",
    "couple community",
    "lifestyle community",
    "couple friendships",
    "couple meetups",
    "verified couples",
    "couple social platform",
    "couple connections",
  ],
  openGraph: {
    title: "Connect with Like-Minded Couples | Couple Socials",
    description: "Join Couple Socials, the premier online platform for couples to connect, build meaningful friendships, and create unforgettable experiences together.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Couple Socials - Connect with Like-Minded Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Like-Minded Couples | Couple Socials",
    description: "Join Couple Socials, the premier online platform for couples to connect, build meaningful friendships, and create unforgettable experiences together.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  // Organization Schema (online-only service, no physical address)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Couple Socials",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    description: "Premier online platform for couples to connect, build meaningful friendships, and create unforgettable experiences together.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@couplesocials.com",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: "hello@couplesocials.com",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/couplesocials",
      // "https://twitter.com/couplesocials",
      // "https://www.instagram.com/couplesocials",
      // "https://www.linkedin.com/company/couplesocials",
    ],
    areaServed: "Worldwide",
    serviceType: "Online Social Platform",
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Couple Socials",
    url: siteUrl,
    description: "Premier online platform for couples to connect, build meaningful friendships, and create unforgettable experiences together.",
    publisher: {
      "@type": "Organization",
      name: "Couple Socials",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
