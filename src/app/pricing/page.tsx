import type { Metadata } from "next";
import PricingPageClient from "./page-client";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
    title: "Pricing Plans | Couple Socials",
    description: "Choose the perfect membership plan for your couple social journey. Basic at $9.99/mo, Premium at $19.99/mo, or Elite at $99.99/mo. Save 2 months with annual billing. 7-day money-back guarantee.",
    keywords: [
        "couple social pricing",
        "membership plans",
        "couple subscription",
        "couple social cost",
        "premium couple network",
        "couple social membership",
    ],
    openGraph: {
        title: "Pricing Plans | Couple Socials",
        description: "Choose your perfect plan. Basic $9.99/mo, Premium $19.99/mo, or Elite $99.99/mo. Save 2 months with annual billing.",
        url: `${siteUrl}/pricing`,
        type: "website",
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Couple Socials Pricing Plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing Plans | Couple Socials",
        description: "Choose your perfect plan. Basic $9.99/mo, Premium $19.99/mo, or Elite $99.99/mo.",
        images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/pricing`,
    },
};

export default function PricingPage() {
    // Product Schema for each pricing tier
    const basicProductSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Couple Socials Basic Plan",
        "description": "Perfect for couples just getting started with couple social networking",
        "brand": {
            "@type": "Brand",
            "name": "Couple Socials"
        },
        "offers": [
            {
                "@type": "Offer",
                "price": "9.99",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "9.99",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            },
            {
                "@type": "Offer",
                "price": "99.90",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "99.90",
                    "priceCurrency": "USD",
                    "billingDuration": "P1Y"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            }
        ]
    };

    const premiumProductSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Couple Socials Premium Plan",
        "description": "Most popular plan for active couples seeking meaningful connections",
        "brand": {
            "@type": "Brand",
            "name": "Couple Socials"
        },
        "offers": [
            {
                "@type": "Offer",
                "price": "19.99",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "19.99",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            },
            {
                "@type": "Offer",
                "price": "199.90",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "199.90",
                    "priceCurrency": "USD",
                    "billingDuration": "P1Y"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            }
        ]
    };

    const eliteProductSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Couple Socials Elite Plan",
        "description": "Ultimate experience for serious couple networkers with premium features",
        "brand": {
            "@type": "Brand",
            "name": "Couple Socials"
        },
        "offers": [
            {
                "@type": "Offer",
                "price": "99.99",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "99.99",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            },
            {
                "@type": "Offer",
                "price": "999.90",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "999.90",
                    "priceCurrency": "USD",
                    "billingDuration": "P1Y"
                },
                "availability": "https://schema.org/InStock",
                "url": `${siteUrl}/pricing`
            }
        ]
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I switch plans at any time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your new rate will apply at the next billing cycle."
                }
            },
            {
                "@type": "Question",
                "name": "What's the difference between monthly and annual billing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Annual billing gives you 2 months free - you pay for only 10 months but get 12 months of access. For example, Basic annual is $99.90 instead of $119.88 if paid monthly."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a free trial?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a 7-day money-back guarantee on all plans. If you're not satisfied within the first 7 days, we'll provide a full refund, no questions asked."
                }
            },
            {
                "@type": "Question",
                "name": "How do I cancel my subscription?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can cancel anytime from your account settings. Your access will continue until the end of your billing period, and you won't be charged again."
                }
            },
            {
                "@type": "Question",
                "name": "What payment methods do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay for your convenience."
                }
            },
            {
                "@type": "Question",
                "name": "Can I get a refund?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a 7-day money-back guarantee for new subscriptions. After 7 days, refunds are evaluated on a case-by-case basis."
                }
            }
        ]
    };

    return (
        <>
            {/* Product Schema - Basic Plan */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(basicProductSchema) }}
            />
            {/* Product Schema - Premium Plan */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(premiumProductSchema) }}
            />
            {/* Product Schema - Elite Plan */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eliteProductSchema) }}
            />
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PricingPageClient />
        </>
    );
}
