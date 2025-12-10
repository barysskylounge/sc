"use client";

import { useState } from "react";

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

    const upcomingEvents = [
        {
            id: 1,
            title: "Wine Tasting at Napa Valley",
            date: "2025-12-15",
            time: "2:00 PM",
            location: "Napa Valley, CA",
            attendees: 8,
            type: "Social",
            hosted: false,
        },
        {
            id: 2,
            title: "Couples Game Night",
            date: "2025-12-20",
            time: "7:00 PM",
            location: "Virtual",
            attendees: 6,
            type: "Virtual",
            hosted: true,
        },
    ];

    const pastEvents = [
        {
            id: 3,
            title: "Beach Picnic",
            date: "2025-11-10",
            time: "12:00 PM",
            location: "Santa Monica Beach",
            attendees: 10,
            type: "Outdoor",
            hosted: false,
        },
    ];

    const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Events</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and discover couple events</p>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg">
                    + Create Event
                </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-8">
                    <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`pb-4 px-1 border-b-2 font-medium transition-colors ${activeTab === "upcoming"
                                ? "border-purple-600 text-purple-600 dark:text-purple-400"
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                    >
                        Upcoming Events
                    </button>
                    <button
                        onClick={() => setActiveTab("past")}
                        className={`pb-4 px-1 border-b-2 font-medium transition-colors ${activeTab === "past"
                                ? "border-purple-600 text-purple-600 dark:text-purple-400"
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                    >
                        Past Events
                    </button>
                </div>
            </div>

            {/* Events List */}
            <div className="grid grid-cols-1 gap-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                                    {event.hosted && (
                                        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full font-medium">
                                            Hosted by you
                                        </span>
                                    )}
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                                        {event.type}
                                    </span>
                                </div>
                                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>{event.attendees} couples attending</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                    View Details
                                </button>
                                {activeTab === "upcoming" && (
                                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all">
                                        {event.hosted ? "Manage" : "RSVP"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {events.length === 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-12 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No {activeTab} events</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        {activeTab === "upcoming" ? "Create your first event or browse available events!" : "You haven't attended any events yet."}
                    </p>
                </div>
            )}
        </div>
    );
}
