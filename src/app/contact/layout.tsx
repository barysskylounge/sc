import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Couple Socials. Have questions, feedback, or need support? We're here to help! Reach out to us via email and we'll get back to you as soon as possible.",
  keywords: [
    "contact couple socials",
    "customer support",
    "help center",
    "couple socials support",
    "get in touch",
  ],
  openGraph: {
    title: "Contact Us | Couple Socials",
    description: "Get in touch with Couple Socials. Have questions, feedback, or need support? We're here to help!",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Couple Socials",
    description: "Get in touch with Couple Socials. Have questions, feedback, or need support? We're here to help!",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

