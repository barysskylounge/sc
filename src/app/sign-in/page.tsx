"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignInPage() {
    const [formData, setFormData] = useState({
        coupleName: "",
        email: "",
        interests: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ coupleName: "", email: "", interests: "" });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                            🚀 Launching Soon
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        The Premier Social Platform
                        <br />
                        <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                            Exclusively for Couples
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join the waitlist for the most innovative online community where verified couples connect, share experiences, and build meaningful friendships together.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/dashboard"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-border hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700"
                            style={{
                                backgroundClip: 'padding-box, border-box',
                                backgroundOrigin: 'padding-box, border-box',
                                backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, rgb(236, 72, 153), rgb(147, 51, 234), rgb(79, 70, 229))'
                            }}
                        >
                            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                                View Demo Dashboard
                            </span>
                            <svg className="w-5 h-5" fill="none" stroke="url(#gradient)" viewBox="0 0 24 24">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgb(236, 72, 153)" />
                                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                                        <stop offset="100%" stopColor="rgb(79, 70, 229)" />
                                    </linearGradient>
                                </defs>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left Column - Benefits */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Why Join Couple Socials?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                We're building something special — a safe, verified, and vibrant community where couples can explore new connections and create unforgettable memories together.
                            </p>

                            <div className="space-y-6">
                                {/* Benefit 1 */}
                                <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                Verified Couples Only
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Every couple goes through our verification process, ensuring an authentic and safe community for all members.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit 2 */}
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🎉</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                Exclusive Events & Experiences
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Access to couples-only events, virtual meetups, and unique experiences designed to strengthen bonds and create memories.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit 3 */}
                                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">💬</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                Connect with Like-Minded Couples
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Find couples who share your interests, values, and lifestyle to build lasting friendships and connections.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit 4 */}
                                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🎁</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                Early Access Perks
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Waitlist members get first access to the platform, exclusive founding member benefits, and special pricing offers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Waitlist Form */}
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Join the Waitlist
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Be among the first couples to experience Couple Socials. Get notified when we launch and receive exclusive early access benefits!
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6" data-nosnippet>
                                    <div>
                                        <label htmlFor="coupleName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Couple Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="coupleName"
                                            name="coupleName"
                                            value={formData.coupleName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                            placeholder="e.g., Alex & Jordan"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            What are you looking for? (Optional)
                                        </label>
                                        <textarea
                                            id="interests"
                                            name="interests"
                                            value={formData.interests}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition-all"
                                            placeholder="Tell us what you're hoping to find on Couple Socials..."
                                        />
                                    </div>

                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                            <p className="text-green-800 dark:text-green-300 font-medium">
                                                🎉 Welcome to the waitlist! Check your email for confirmation and updates.
                                            </p>
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                            <p className="text-red-800 dark:text-red-300">
                                                ✗ Something went wrong. Please try again or contact us directly.
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? "Joining Waitlist..." : "Join the Waitlist"}
                                    </button>

                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                        By joining, you agree to receive updates about Couple Socials. We respect your privacy and will never share your information.
                                    </p>
                                </form>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>100% Free to Join</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>No Credit Card Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Early Access Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Join a Growing Community
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Couples worldwide are already waiting to connect
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-2">
                                1,000+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 font-medium">
                                Couples on Waitlist
                            </div>
                        </div>

                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text mb-2">
                                50+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 font-medium">
                                Countries Represented
                            </div>
                        </div>

                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 text-transparent bg-clip-text mb-2">
                                2025
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 font-medium">
                                Official Launch Year
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
