"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

    const pricingTiers = [
        {
            name: "Basic",
            icon: Rocket,
            monthlyPrice: 9.99,
            annualPrice: 99.90,
            description: "Perfect for couples just getting started",
            gradient: "from-blue-500 to-cyan-500",
            features: [
                "Create couple profile",
                "Browse verified couples",
                "Basic search filters",
                "Send & receive messages",
                "Join public events",
                "View public profiles",
                "Mobile app access",
                "Email support",
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Premium",
            icon: Sparkles,
            monthlyPrice: 19.99,
            annualPrice: 199.90,
            description: "Most popular for active couples",
            gradient: "from-pink-500 to-purple-600",
            features: [
                "Everything in Basic",
                "Unlimited browsing",
                "Advanced search filters",
                "Host small events (up to 10 couples)",
                "Priority support",
                "Enhanced profile visibility",
                "Photo verification badge",
                "Activity feed updates",
                "Custom profile themes",
            ],
            cta: "Start Premium",
            popular: true,
        },
        {
            name: "Elite",
            icon: Crown,
            monthlyPrice: 99.99,
            annualPrice: 999.90,
            description: "Ultimate experience for serious networkers",
            gradient: "from-purple-500 to-indigo-600",
            features: [
                "Everything in Premium",
                "Verified VIP badge",
                "Host unlimited events",
                "HD video & voice calls",
                "Advanced analytics dashboard",
                "Featured profile placement",
                "Early access to new features",
                "Dedicated account manager",
                "Priority event listings",
                "Custom URL for profile",
            ],
            cta: "Go Elite",
            popular: false,
        },
    ];

    const faqs = [
        {
            question: "Can I switch plans at any time?",
            answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your new rate will apply at the next billing cycle.",
        },
        {
            question: "What's the difference between monthly and annual billing?",
            answer: "Annual billing gives you 2 months free - you pay for only 10 months but get 12 months of access. For example, Basic annual is $99.90 instead of $119.88 if paid monthly.",
        },
        {
            question: "Is there a free trial?",
            answer: "We offer a 7-day money-back guarantee on all plans. If you're not satisfied within the first 7 days, we'll provide a full refund, no questions asked.",
        },
        {
            question: "How do I cancel my subscription?",
            answer: "You can cancel anytime from your account settings. Your access will continue until the end of your billing period, and you won't be charged again.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay for your convenience.",
        },
        {
            question: "Can I get a refund?",
            answer: "Yes, we offer a 7-day money-back guarantee for new subscriptions. After 7 days, refunds are evaluated on a case-by-case basis.",
        },
    ];

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 min-h-[600px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/2149370718.jpg"
                        alt="Pricing"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-white/20 shadow-lg">
                            <span className="text-2xl">💰</span>
                            <span className="text-sm font-semibold text-gray-900">Simple, Transparent Pricing</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                            Choose Your Perfect
                            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                Membership Plan
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                            Start connecting with like-minded couples today. Choose the plan that fits your lifestyle and upgrade anytime as your network grows.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                            <div className="flex items-center gap-2 text-white/90">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>7-Day Money Back Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Cancel Anytime</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>No Hidden Fees</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Billing Toggle */}
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <span className={`text-lg font-semibold ${billingPeriod === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                            className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${billingPeriod === "annual" ? "translate-x-9" : "translate-x-1"}`}
                            />
                        </button>
                        <span className={`text-lg font-semibold ${billingPeriod === "annual" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                            Annual
                        </span>
                        {billingPeriod === "annual" && (
                            <span className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full">
                                Save 2 Months! 🎉
                            </span>
                        )}
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
                        {pricingTiers.map((tier, index) => {
                            const Icon = tier.icon;
                            const price = billingPeriod === "monthly" ? tier.monthlyPrice : tier.annualPrice;

                            return (
                                <div
                                    key={index}
                                    className={`relative p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${tier.popular
                                            ? "border-pink-500 shadow-xl scale-105"
                                            : "border-gray-200 dark:border-gray-700 shadow-lg"
                                        }`}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                                                MOST POPULAR
                                            </span>
                                        </div>
                                    )}

                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {tier.description}
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-gray-900 dark:text-white">
                                                ${price}
                                            </span>
                                            <span className="text-gray-600 dark:text-gray-400">
                                                /{billingPeriod === "monthly" ? "mo" : "yr"}
                                            </span>
                                        </div>
                                        {billingPeriod === "annual" && (
                                            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                                                ${tier.monthlyPrice.toFixed(2)}/mo billed annually
                                            </p>
                                        )}
                                    </div>

                                    <a
                                        href="/dashboard"
                                        className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition-all duration-200 mb-6 ${tier.popular
                                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-md hover:shadow-lg"
                                                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        {tier.cta}
                                    </a>

                                    <ul className="space-y-3">
                                        {tier.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Everything you need to know about our pricing
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaqIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaqIndex === index && (
                                    <div className="px-6 py-4 bg-white dark:bg-gray-900">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start Connecting?
                    </h2>
                    <p className="text-xl text-pink-100 mb-8">
                        Join thousands of couples who have found meaningful connections through Couple Socials.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/dashboard"
                            className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get Started Now
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
                        >
                            Contact Sales
                        </a>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-white/90">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm">7-Day Money-Back Guarantee • Secure Payment • Cancel Anytime</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
