"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQ[] = [
    {
      category: "Getting Started",
      question: "How do I create an account?",
      answer: "Both partners need to sign up together to create a couple profile. You'll need to provide basic information, complete the verification process, and set up your individual and couple profiles. The verification process helps ensure a safe and authentic community.",
    },
    {
      category: "Getting Started",
      question: "What is the verification process?",
      answer: "Our verification process includes identity verification for both partners, profile completion, and account review. This typically takes 24-48 hours. Verified couples receive a verification badge on their profile, which helps build trust within the community.",
    },
    {
      category: "Getting Started",
      question: "Is there a membership fee?",
      answer: "Profile creation is completely free! However, to view other couples' profiles, send messages, chat, and host events, you'll need an active subscription. We offer three subscription plans: Monthly at $9.99/month, Yearly at $99.99/year (save 17%), or Lifetime at $999.99 (one-time payment). All subscriptions are non-refundable once activated. Create your free profile today and subscribe when you're ready to connect!",
    },
    {
      category: "Getting Started",
      question: "What can I do with a free profile?",
      answer: "With a free profile, you can create and customize your couple profile, upload photos, set your preferences, and browse the platform. However, to view other couples' full profiles, send messages, participate in chats, or host events, you'll need an active subscription. Think of it as creating your profile for free, then subscribing to unlock all the exciting connection features!",
    },
    {
      category: "Getting Started",
      question: "What's included with a subscription?",
      answer: "With any subscription (Monthly, Yearly, or Lifetime), you get full access to: view all couple profiles, send unlimited messages, participate in group chats, host and organize events, use advanced filtering tools, and access all premium features. The only difference between plans is the billing frequency and total cost - all features are the same!",
    },
    {
      category: "Safety & Privacy",
      question: "How do you protect my privacy?",
      answer: "We take privacy seriously. Your personal information is encrypted and stored securely. You have complete control over what information is visible to other couples through your privacy settings. We never share your information with third parties without your explicit consent.",
    },
    {
      category: "Safety & Privacy",
      question: "What safety measures are in place?",
      answer: "We have multiple safety measures including verified profiles, reporting and blocking features, privacy controls, and 24/7 safety support. We also have strict community guidelines that all members must follow. If you encounter any issues, you can report them immediately through our platform.",
    },
    {
      category: "Safety & Privacy",
      question: "Can I block or report someone?",
      answer: "Yes, you can block or report any couple at any time. Blocked couples cannot contact you or see your profile. Reports are reviewed by our safety team, and appropriate action is taken. Your safety and comfort are our top priorities.",
    },
    {
      category: "Matching & Connections",
      question: "How do I find compatible couples?",
      answer: "You have complete control! Use our powerful filtering system to search for couples based on location, age, lifestyle preferences, interests, fantasies, sexual orientation, and more. There's no algorithm or automated matching - you decide exactly who you see and connect with. Filter by what matters to you and discover couples who match your desires perfectly.",
    },
    {
      category: "Matching & Connections",
      question: "Is there an algorithm that matches couples?",
      answer: "No, we don't use any matching algorithms or automated suggestions. You have full control over your search experience. Use our comprehensive filtering tools to find couples based on your specific criteria - location, lifestyle preferences, interests, fantasies, and more. You're in complete control of who you discover and connect with.",
    },
    {
      category: "Matching & Connections",
      question: "What if I don't find couples I'm interested in?",
      answer: "Try adjusting your filters! Expand your location radius, broaden your lifestyle preferences, or refine your search criteria. You can also update your profile to better reflect what you're seeking. Additionally, joining exclusive events and house parties is a great way to meet adventurous couples in a more social, exciting setting.",
    },
    {
      category: "Events & Activities",
      question: "How do I join an event?",
      answer: "Browse available events in your area, read the event details and requirements, then click 'RSVP' if you're interested. Some events may require approval from the host. Once approved, you'll receive event details and can communicate with other attendees through the event chat.",
    },
    {
      category: "Events & Activities",
      question: "Can I host my own event?",
      answer: "Absolutely! With an active subscription, verified couples can create and host exclusive events. Set event details, location, date, maximum attendees, and requirements. You'll be able to manage RSVPs, communicate with attendees through event chats, and curate unforgettable experiences for like-minded couples. Hosting events is a great way to bring adventurous couples together!",
    },
    {
      category: "Events & Activities",
      question: "What types of events can I host?",
      answer: "The possibilities are endless! Host intimate dinner parties, sophisticated wine tastings, weekend retreats, private house parties, adventurous getaways, or any gathering that brings couples together. All events must comply with our community guidelines and be designed for couples. Create experiences that spark excitement and forge meaningful connections in a discreet, respectful atmosphere.",
    },
    {
      category: "Messaging & Communication",
      question: "How do I message other couples?",
      answer: "With an active subscription, you can send messages to any couple you're interested in. Send interest, initiate conversations, and build chemistry through our secure messaging platform. You can also join group chats for events or create your own group conversations. All messaging is encrypted and secure, ensuring your privacy and discretion.",
    },
    {
      category: "Messaging & Communication",
      question: "Can I have video calls with other couples?",
      answer: "Yes, our platform supports video and voice calls. This is a great way to get to know couples better before meeting in person. Video calls are conducted through our secure platform, and you can schedule them at your convenience.",
    },
    {
      category: "Profile & Settings",
      question: "Can I edit my profile?",
      answer: "Yes, you can edit your individual profile at any time. However, you can only edit your own information, not your partner's. Your partner must edit their own profile. You can also update couple-level information like preferences, boundaries, and what you're looking for.",
    },
    {
      category: "Profile & Settings",
      question: "What information should I include in my profile?",
      answer: "Include information about your interests, lifestyle preferences, what you're looking for, and your boundaries. Be honest and transparent - this helps you find better matches. You can also add photos, fun facts, and other details that help other couples get to know you.",
    },
    {
      category: "Profile & Settings",
      question: "How do I delete my account?",
      answer: "You can delete your account at any time through your account settings. This will permanently remove your profile, messages, and all associated data. If you're part of a couple account, both partners need to agree to delete the account. Please note that account deletion does not entitle you to any refunds for active subscriptions. We recommend contacting support if you have any concerns before deleting.",
    },
    {
      category: "Billing & Subscriptions",
      question: "Can I get a refund if I'm not satisfied?",
      answer: "All subscriptions are final and non-refundable once payment is processed and the subscription is activated. This applies to Monthly ($9.99), Yearly ($99.99), and Lifetime ($999.99) subscriptions. We encourage you to create a free profile first to explore the platform before subscribing. Please review our Refund Policy for complete details.",
    },
    {
      category: "Billing & Subscriptions",
      question: "What happens if my account is banned?",
      answer: "If your account receives three verified reports of fraud or policy violations, it will be automatically banned regardless of subscription status. Banned accounts are not eligible for any refunds, prorated or otherwise, regardless of subscription type or remaining time. Please review our Terms of Service and community guidelines to ensure compliance.",
    },
  ];

  const categories = ["all", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = selectedCategory === "all"
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

  // FAQPage Schema for structured data
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about Couple Socials and how to make the most of your experience.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  {category === "all" ? "All Questions" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const actualIndex = faqs.indexOf(faq);
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={actualIndex}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(actualIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-1">
                          {faq.category}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-6 h-6 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 border-t border-gray-200 dark:border-gray-700">
                        <p className="pt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
              <a
                href="/how-it-works"
                className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

