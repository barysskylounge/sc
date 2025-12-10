import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Couple Socials - our mission to create a vibrant, safe, and welcoming community where couples can connect, build meaningful friendships, and create unforgettable experiences together.",
  keywords: [
    "about couple socials",
    "couple socials mission",
    "couple community values",
    "couple social platform",
    "our story",
  ],
  openGraph: {
    title: "About Us | Couple Socials",
    description: "Learn about Couple Socials - our mission to create a vibrant, safe, and welcoming community where couples can connect, build meaningful friendships, and create unforgettable experiences together.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Us | Couple Socials",
    description: "Learn about Couple Socials - our mission to create a vibrant, safe, and welcoming community where couples can connect.",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4838.jpg"
            alt="About Couple Socials"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-white/20 shadow-lg">
              <span className="text-2xl">💑</span>
              <span className="text-sm font-semibold text-gray-900">Building Connections Since 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              About Couple Socials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              We're on a mission to create an exclusive, discreet community where adventurous couples explore new dimensions of connection. Join thousands of verified couples worldwide discovering deeper relationships, intimate gatherings, and thrilling experiences together.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Founded with the belief that the most exciting adventures are shared, Couple Socials has evolved into a sophisticated platform connecting like-minded couples who share a passion for exploring new experiences, building meaningful connections, and creating unforgettable memories in a safe, respectful environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Couple Socials, we believe that the most exciting adventures are shared. Our mission is to create an exclusive, sophisticated community where adventurous couples can connect, explore new dimensions of relationships, and build deep, meaningful connections with like-minded partners in a discreet, respectful environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="text-4xl mb-4">💑</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover couples who share your lifestyle preferences, desires, and passion for exploring new experiences. Build deep, meaningful connections that ignite excitement and create lasting bonds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Create
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organize and host exclusive events that bring adventurous couples together. From intimate dinner parties to private house parties and thrilling getaways, create experiences that spark passion and forge unforgettable connections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Discover
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore exclusive events and activities crafted for adventurous couples. Discover your next thrilling experience and create memories that deepen your connection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Communicate
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay connected with built-in messaging and video chat. Plan together, share moments, and keep the conversation going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Couple Socials was born from a simple yet powerful observation: adventurous couples seeking deeper connections and new experiences often struggle to find like-minded partners. Whether it's exploring lifestyle preferences, organizing intimate gatherings, or simply connecting with couples who understand and share your desires, the options were limited.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We set out to change that. Our platform provides a sophisticated, discreet space where couples can discover each other, plan exciting adventures together, and build a vibrant community of like-minded partners who share their lifestyle preferences and passions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, Couple Socials is a thriving global community of verified couples, all united by a common desire: to explore new dimensions of connection, create unforgettable experiences, and build meaningful relationships in a safe, respectful environment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize the safety and privacy of our community. Verified profiles and secure platform ensure you can connect with confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Inclusivity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everyone is welcome. We celebrate diversity and create an environment where all couples feel valued and respected.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We encourage genuine connections. Be yourself, share your passions, and find couples who appreciate the real you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>💑</span> Couple Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our powerful filtering system puts you in complete control. Find couples with matching lifestyle preferences, interests, and desires. Connect with couples who truly understand and share your passions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🎉</span> Event Hosting
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create and manage events effortlessly. From intimate gatherings to large group adventures, our tools make event planning simple and fun.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>💬</span> Integrated Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built-in messaging and video chat make it easy to stay connected. Plan together, share updates, and build relationships seamlessly.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🌍</span> Global Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a worldwide network of couples. Whether you're looking for local friends or planning international adventures, the world is your playground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@couplesocials.com"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/events"
              className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Explore Events
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

