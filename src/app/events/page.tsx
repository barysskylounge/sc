import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard, { Event } from "@/components/EventCard";
import Image from "next/image";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.couplesocials.com";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover exclusive, thrilling events created by verified couples in your community. From intimate dinner parties and weekend retreats to private house parties and adventurous gatherings - find experiences designed to ignite passion and bring adventurous couples together.",
  keywords: [
    "couple events",
    "couple meetups",
    "couple social events",
    "couple gatherings",
    "couple activities",
    "couple parties",
  ],
  openGraph: {
    title: "Events | Couple Socials",
    description: "Discover exclusive events created by verified couples in your community. From intimate dinners to weekend getaways and social gatherings.",
    url: `${siteUrl}/events`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Couple Socials",
    description: "Discover exclusive events created by verified couples in your community.",
  },
  alternates: {
    canonical: `${siteUrl}/events`,
  },
};

// Mock data - In a real app, this would come from an API or database
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunset Beach Picnic",
    description: "Join us for a romantic sunset picnic at the beach. Bring your favorite snacks and drinks!",
    date: "March 15, 2024",
    time: "6:00 PM",
    location: "Santa Monica Beach, CA",
    coupleName: "Sarah & Mike",
    attendees: 8,
    maxAttendees: 12,
    category: "Outdoor",
  },
  {
    id: "2",
    title: "Wine Tasting Evening",
    description: "Explore local wines and enjoy a sophisticated evening with other couples at a beautiful vineyard.",
    date: "March 20, 2024",
    time: "7:00 PM",
    location: "Napa Valley Winery, CA",
    coupleName: "Emma & James",
    attendees: 6,
    maxAttendees: 10,
    category: "Social",
  },
  {
    id: "3",
    title: "Hiking Adventure",
    description: "Moderate difficulty hike with stunning views. Perfect for active couples who love nature!",
    date: "March 18, 2024",
    time: "9:00 AM",
    location: "Yosemite National Park, CA",
    coupleName: "Lisa & David",
    attendees: 12,
    maxAttendees: 15,
    category: "Adventure",
  },
  {
    id: "4",
    title: "Cooking Class: Italian Cuisine",
    description: "Learn to make authentic Italian pasta and desserts together. All ingredients provided!",
    date: "March 22, 2024",
    time: "5:00 PM",
    location: "Culinary Studio, San Francisco",
    coupleName: "Maria & Carlos",
    attendees: 4,
    maxAttendees: 8,
    category: "Workshop",
  },
  {
    id: "5",
    title: "Dance Night",
    description: "Salsa and bachata dancing for all skill levels. Great music, great vibes, great company!",
    date: "March 25, 2024",
    time: "8:00 PM",
    location: "Dance Studio Downtown, LA",
    coupleName: "Sofia & Diego",
    attendees: 20,
    maxAttendees: 25,
    category: "Entertainment",
  },
  {
    id: "6",
    title: "Weekend Getaway: Mountain Cabin",
    description: "Relaxing weekend retreat in a cozy mountain cabin. Hot tub, fireplace, and beautiful views included.",
    date: "March 28-30, 2024",
    time: "3:00 PM",
    location: "Big Bear Lake, CA",
    coupleName: "Jessica & Ryan",
    attendees: 3,
    maxAttendees: 6,
    category: "Travel",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2150171683.jpg"
            alt="Couple Events"
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
              <span className="text-2xl">🎉</span>
              <span className="text-sm font-semibold text-gray-900">Exclusive Events for Verified Couples</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Discover Exclusive
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Couple Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Explore exclusive, thrilling events created by verified couples in your community. From intimate dinner parties and weekend retreats to private house parties and adventurous gatherings, discover experiences designed to ignite passion and bring adventurous couples together in a discreet, exciting atmosphere.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Hosts Only</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>RSVP & Manage</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/dashboard?tab=hosting-events"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Host Your Event
              </a>
              <a
                href="#events"
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-pink-500 text-pink-600 dark:text-pink-400 rounded-full font-semibold text-lg hover:bg-pink-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
              >
                Browse Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter/Search Bar */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                All Events
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
                Outdoor
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
                Social
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
                Adventure
              </button>
            </div>
          </div>

          {/* Events Grid */}
          {mockEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check back later for new events or create your own!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

