import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "Features",
  description: "Discover powerful features designed for adventurous couples seeking deeper connections. From advanced filtering tools to secure communication, exclusive event hosting, and comprehensive safety measures - everything you need to explore new dimensions of connection with like-minded couples.",
  keywords: [
    "couple social features",
    "couple matching features",
    "event hosting platform",
    "secure messaging for couples",
    "couple profile features",
  ],
  openGraph: {
    title: "Features | Couple Socials",
    description: "Discover powerful features designed for adventurous couples seeking deeper connections. From advanced filtering tools to secure communication and exclusive event hosting.",
    url: `${siteUrl}/features`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | Couple Socials",
    description: "Discover powerful features designed for couples seeking genuine connections.",
  },
  alternates: {
    canonical: `${siteUrl}/features`,
  },
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Advanced Filtering & Discovery",
      description: "Take complete control of your search experience. Our powerful filtering system lets you discover couples based on location, lifestyle preferences, interests, fantasies, sexual orientation, and more. You decide exactly who you see and connect with - no algorithms, no suggestions, just pure control over your journey.",
      icon: "💑",
      gradient: "from-pink-500 to-rose-500",
      details: [
        "User-controlled filtering system",
        "Filter by: location, age, lifestyle preferences, interests, fantasies",
        "Search by sexual orientation and preferences",
        "Verified couple profiles only",
        "Privacy-focused with granular visibility controls",
        "Save favorite couples for easy access",
      ],
    },
    {
      title: "Secure Communication Platform",
      description: "Communicate with confidence through our secure messaging system. Send private messages to couples you're interested in, create group chats for event planning, or use video and voice calls to get to know each other better. All communications are encrypted and protected, ensuring your privacy and safety.",
      icon: "💬",
      gradient: "from-purple-500 to-indigo-500",
      details: [
        "End-to-end encrypted private messaging",
        "Group chat for events and activities",
        "HD video and crystal-clear voice calls",
        "Real-time message notifications",
        "Message read receipts and typing indicators",
        "Block and report features for safety",
      ],
    },
    {
      title: "Exclusive Lifestyle Events",
      description: "Host exclusive, private events for verified couples or discover thrilling meetups in your area. Create intimate dinner parties, weekend retreats, private house parties, or adventurous gatherings. Our platform makes it effortless to organize, manage, and attend experiences that ignite passion and create unforgettable connections in a discreet, respectful environment.",
      icon: "🎉",
      gradient: "from-indigo-500 to-blue-500",
      details: [
        "Create and customize exclusive event listings",
        "Host private house parties and intimate gatherings",
        "RSVP system with attendee management",
        "Event discovery with location-based search",
        "Private and discreet event options",
        "Event chat for seamless coordination",
        "Calendar integration and reminders",
      ],
    },
    {
      title: "Comprehensive Profile System",
      description: "Create captivating profiles that showcase your couple's unique personality and desires. Share individual partner information, lifestyle preferences, boundaries, interests, fantasies, and exactly what you're seeking. Our profile system helps you present yourselves authentically and attractively while maintaining complete privacy control.",
      icon: "👤",
      gradient: "from-blue-500 to-cyan-500",
      details: [
        "Individual partner profiles with separate editing",
        "Couple-level lifestyle preferences and boundaries",
        "Private photo galleries with granular privacy controls",
        "Verification badges and status indicators",
        "Express interests, desires, and fantasies",
        "Advanced visibility controls (public/private/hidden)",
      ],
    },
    {
      title: "Advanced Safety & Verification",
      description: "Your safety is our top priority. We employ comprehensive verification processes, robust privacy controls, and proactive safety measures. Every couple goes through identity verification, and our platform includes multiple layers of protection to ensure a safe, respectful environment for all members.",
      icon: "🔒",
      gradient: "from-cyan-500 to-teal-500",
      details: [
        "Multi-step identity verification for both partners",
        "Comprehensive privacy controls and settings",
        "Report, block, and safety features",
        "24/7 dedicated safety support team",
        "Community guidelines enforcement",
        "Background checks for premium members",
      ],
    },
    {
      title: "House Party Hosting",
      description: "Organize and host memorable house parties for couples in your community. Create intimate gatherings, themed parties, or casual get-togethers in the comfort of your home. Set guest limits, manage RSVPs, coordinate with attendees, and create unforgettable social experiences that bring couples together in a relaxed, private setting.",
      icon: "🏠",
      gradient: "from-teal-500 to-green-500",
      details: [
        "Create and customize house party listings",
        "Set guest limits and manage RSVPs",
        "Coordinate with attendees through event chat",
        "Private and intimate gathering options",
        "Themed party planning and organization",
        "Location privacy and security controls",
      ],
    },
  ];

  const additionalFeatures = [
    {
      title: "Smart Notifications",
      description: "Stay updated with personalized, real-time notifications about new matches, messages, event invitations, RSVPs, and important platform updates. Customize notification preferences to control what you're alerted about.",
      icon: "🔔",
    },
    {
      title: "Responsive Web App",
      description: "Access all platform features on any device with our fully responsive web application. Chat, browse matches, manage events, and stay connected wherever you are - all from your browser.",
      icon: "🌐",
    },
    {
      title: "Advanced Search & Filters",
      description: "Find exactly what you're looking for with powerful search capabilities. Filter by location, age, lifestyle experience, interests, verification status, and more to discover your perfect matches.",
      icon: "🔍",
    },
    {
      title: "Granular Privacy Controls",
      description: "Complete control over your privacy. Choose who can see your profile, photos, and information. Set visibility preferences, control search visibility, and manage your digital footprint.",
      icon: "🛡️",
    },
    {
      title: "Photo Verification",
      description: "Verify your photos to build trust within the community. Our photo verification system ensures authenticity and helps other couples feel confident when connecting with you.",
      icon: "📸",
    },
    {
      title: "Interest-Based Groups",
      description: "Join or create interest-based groups to connect with couples who share your hobbies, passions, or lifestyle preferences. Perfect for finding like-minded couples with specific interests.",
      icon: "👥",
    },
    {
      title: "Calendar Integration",
      description: "Sync your events and activities with your personal calendar. Never miss an event with automatic reminders and seamless calendar integration for all your devices.",
      icon: "📅",
    },
    {
      title: "Activity Feed",
      description: "Stay connected with the community through your personalized activity feed. See updates from couples you're interested in, new events in your area, and community highlights.",
      icon: "📰",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2149370718.jpg"
            alt="Couple Features"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-white/20 shadow-lg">
              <span className="text-2xl">💑</span>
              <span className="text-sm font-semibold text-gray-900">Designed for Couples</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Powerful Features for
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Meaningful Connections
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Discover a sophisticated platform built specifically for adventurous couples seeking deeper connections. From powerful filtering tools to secure communication and exclusive event hosting, we provide everything you need to explore new dimensions of connection with like-minded couples.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Couples Only</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Safe & Respectful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to discover like-minded couples, build exciting connections, and create unforgettable experiences in a discreet, respectful environment.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful tools and features designed to enhance your experience and make connecting with like-minded couples effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Couple Socials?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A platform designed specifically for couples, by couples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Secure & Private
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is our priority. We use industry-leading security measures to protect your data and ensure a safe environment for all couples.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Verified Members
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All couples go through a verification process to ensure authenticity and create a trustworthy community of genuine connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Respectful Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We foster a culture of respect, consent, and open communication. Our community guidelines ensure everyone feels safe and valued.
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
            Create your free profile today. Subscribe to unlock unlimited connections, messaging, and exclusive event access starting at $9.99/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Free Profile
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

