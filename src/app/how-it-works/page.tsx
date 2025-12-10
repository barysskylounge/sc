import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Couple Socials works - a simple, safe, and respectful way to connect with like-minded couples. Get started in just a few easy steps: create your profile, discover compatible couples, connect and communicate, join or host events, and create memories.",
  keywords: [
    "how couple socials works",
    "couple social platform guide",
    "getting started with couple socials",
    "couple matching process",
    "couple event hosting",
  ],
  openGraph: {
    title: "How It Works | Couple Socials",
    description: "Learn how Couple Socials works - a simple, safe, and respectful way to connect with like-minded couples. Get started in just a few easy steps.",
    url: `${siteUrl}/how-it-works`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "How It Works | Couple Socials",
    description: "Learn how Couple Socials works - a simple, safe, and respectful way to connect with like-minded couples.",
  },
  alternates: {
    canonical: `${siteUrl}/how-it-works`,
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Create Your Couple Profile",
      description: "Sign up together as a couple and create your profile. Share your interests, lifestyle preferences, boundaries, and what you're looking for. Both partners can customize their individual profiles while maintaining a shared couple profile.",
      icon: "👫",
      details: [
        "Complete verification process",
        "Set your preferences and boundaries",
        "Upload photos and share your story",
        "Define what you're looking for",
      ],
    },
    {
      number: "02",
      title: "Filter & Discover",
      description: "Take complete control with our powerful filtering system. Search by location, lifestyle preferences, interests, fantasies, sexual orientation, and more. You decide exactly who you see and connect with - discover couples who match your desires perfectly.",
      icon: "🔍",
      details: [
        "Browse verified couple profiles",
        "Filter by location, age, lifestyle, interests, fantasies",
        "Search by sexual orientation and preferences",
        "Read couple preferences, boundaries, and desires",
      ],
    },
    {
      number: "03",
      title: "Connect & Communicate",
      description: "Unlock the power of connection. Subscribe to send messages, initiate conversations, and build chemistry through our secure messaging platform. Join group chats for events or have private, intimate conversations that spark excitement and anticipation.",
      icon: "💬",
      details: [
        "Send interest to couples that intrigue you",
        "Private messaging and group chats (subscription required)",
        "Video and voice call options",
        "Build chemistry and trust before meeting",
      ],
    },
    {
      number: "04",
      title: "Join or Host Exclusive Events",
      description: "Discover thrilling events hosted by verified couples or create your own unforgettable experiences. From intimate dinner parties to weekend retreats and private house parties, find and organize gatherings that bring adventurous couples together in a discreet, exciting atmosphere.",
      icon: "🎉",
      details: [
        "Browse exclusive upcoming events in your area",
        "RSVP to events that spark your interest",
        "Host your own private, exclusive events (subscription required)",
        "Manage attendees and curate perfect experiences",
      ],
    },
    {
      number: "05",
      title: "Explore & Create Unforgettable Memories",
      description: "Attend exclusive events, plan intimate meetups, and build deep connections. Whether it's a private gathering, adventurous retreat, or sophisticated dinner party, create experiences that ignite passion and forge lasting bonds with couples who share your desires.",
      icon: "✨",
      details: [
        "Attend verified couple events",
        "Plan group adventures and intimate meetups",
        "Build meaningful, exciting connections",
        "Create unforgettable memories together",
      ],
    },
  ];

  const tips = [
    {
      title: "Be Honest & Transparent",
      description: "Clear communication about your preferences, boundaries, and expectations helps build trust and ensures better matches.",
      icon: "💝",
    },
    {
      title: "Respect Boundaries",
      description: "Always respect the boundaries and rules set by other couples. Consent and respect are fundamental to our community.",
      icon: "🛡️",
    },
    {
      title: "Take Your Time",
      description: "Building meaningful connections takes time. Get to know couples through messaging and social events before making commitments.",
      icon: "⏰",
    },
    {
      title: "Stay Safe",
      description: "Use our verification system, meet in public places initially, and always prioritize your safety and comfort.",
      icon: "🔒",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An exciting, discreet, and sophisticated way to connect with adventurous couples. Your journey to deeper connections starts with just a few simple steps.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg">
                      {step.number}
                    </div>
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 h-full flex items-center justify-center">
                      <div className="text-9xl opacity-20">{step.icon}</div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-pink-500 to-purple-600 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tips for Success
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Make the most of your experience on Couple Socials with these helpful tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How do I verify my couple profile?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Both partners need to complete the verification process, which includes identity verification and profile completion. This helps ensure a safe and authentic community.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Is my information private and secure?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we take privacy seriously. Your information is encrypted and secure. You have full control over what information is visible to other couples through your privacy settings.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How do I find compatible couples?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use our powerful filtering system to find couples based on location, age, interests, lifestyle preferences, fantasies, and more. You have complete control - filter by what matters to you and discover couples who match your desires perfectly.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I host events on the platform?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Verified couples can create and host events. You can set event details, manage RSVPs, and ensure a safe, respectful environment for all attendees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Create your free profile today. Subscribe to unlock unlimited connections, messaging, and exclusive event access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Free Profile
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

