import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Couple Socials. Learn about account creation, verification, safety measures, matching, events, messaging, and more. Get help making the most of your experience.",
  keywords: [
    "couple socials faq",
    "frequently asked questions",
    "couple socials help",
    "how to use couple socials",
    "couple socials guide",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Couple Socials",
    description: "Find answers to common questions about Couple Socials. Learn about account creation, verification, safety measures, matching, events, and more.",
    url: `${siteUrl}/faqs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions | Couple Socials",
    description: "Find answers to common questions about Couple Socials.",
  },
  alternates: {
    canonical: `${siteUrl}/faqs`,
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

