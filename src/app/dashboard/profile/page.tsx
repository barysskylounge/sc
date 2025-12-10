"use client";

import { useState } from "react";
import { Heart, MapPin, Shield, Instagram, Award, Users, MessageCircle, Coffee, MapPinned, Clock, Utensils, Activity } from "lucide-react";

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);

    // Mock couple data
    const coupleData = {
        couple: {
            photo: "/couple-main.jpg",
            firstName1: "Alex",
            firstName2: "Jordan",
            relationshipType: "Married",
            yearsTogetherSince: "2018-06-15",
            city: "San Francisco, CA",
            verified: true,
            bio: "We're a fun-loving couple who enjoy discovering new experiences together. Looking forward to connecting with like-minded couples for adventures, good conversations, and lasting friendships!"
        },
        partners: [
            {
                name: "Alex",
                age: 32,
                photo: "/partner1.jpg",
                occupation: "Software Engineer",
                interests: ["Photography", "Hiking", "Coffee"],
                personality: "Adventurous"
            },
            {
                name: "Jordan",
                age: 30,
                photo: "/partner2.jpg",
                occupation: "Marketing Director",
                interests: ["Yoga", "Cooking", "Reading"],
                personality: "Creative"
            }
        ],
        sharedInterests: [
            { name: "Travel", icon: "✈️" },
            { name: "Food & Dining", icon: "🍽️" },
            { name: "Fitness", icon: "💪" },
            { name: "Music", icon: "🎵" },
            { name: "Outdoors", icon: "🌲" },
            { name: "Nightlife", icon: "🌃" }
        ],
        intent: {
            lookingFor: ["Friends", "Double Dates", "Events", "Activity Partners"],
            summary: "Seeking authentic connections with couples who value adventure, good food, and meaningful conversations."
        },
        boundaries: {
            comfortLevel: "Public meetups only",
            groupSize: "Small groups (2-4 couples)",
            communicationStyle: "Chat first, then meet"
        },
        lifestyle: {
            activityLevel: "Active",
            diet: "Vegetarian-friendly",
            availability: "Weekends & evenings"
        },
        mediaGallery: [
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery4.jpg",
            "/gallery5.jpg",
            "/gallery6.jpg"
        ],
        socialLinks: {
            instagram: "@alexjordan_adventures",
            website: null
        }
    };

    const calculateYearsTogether = () => {
        const startDate = new Date(coupleData.couple.yearsTogetherSince);
        const today = new Date();
        const years = today.getFullYear() - startDate.getFullYear();
        const months = today.getMonth() - startDate.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < startDate.getDate())) {
            return years - 1;
        }
        return years;
    };

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Couple Header Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/40">
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-400/5"></div>

                <div className="relative p-10 md:p-14">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                        {/* Couple Photo */}
                        <div className="relative group">
                            <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-500/10 p-1 shadow-xl ring-1 ring-amber-400/30 backdrop-blur-sm">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 flex items-center justify-center text-5xl font-light text-slate-900 shadow-inner">
                                    {coupleData.couple.firstName1[0]}{coupleData.couple.firstName2[0]}
                                </div>
                            </div>
                            {coupleData.couple.verified && (
                                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2.5 shadow-lg ring-2 ring-slate-900">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                            )}
                        </div>

                        {/* Couple Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-5">
                                <h1 className="text-4xl md:text-5xl font-light tracking-tight bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-transparent bg-clip-text">
                                    {coupleData.couple.firstName1} & {coupleData.couple.firstName2}
                                </h1>
                                <span className="px-4 py-1.5 bg-amber-500/10 backdrop-blur-sm rounded-full text-sm font-normal border border-amber-400/30 text-amber-300">
                                    {coupleData.couple.relationshipType}
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-amber-500/20 text-slate-300">
                                    <Heart className="w-4 h-4 text-amber-400" fill="currentColor" />
                                    <span className="text-sm font-normal">{calculateYearsTogether()} years together</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-amber-500/20 text-slate-300">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm font-normal">{coupleData.couple.city}</span>
                                </div>
                            </div>

                            <p className="text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
                                {coupleData.couple.bio}
                            </p>
                        </div>

                        {/* Edit Button */}
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-5 py-2.5 bg-amber-500/10 text-amber-300 rounded-xl font-normal hover:bg-amber-500/20 transition-all border border-amber-400/30 hover:border-amber-400/50"
                        >
                            {isEditing ? "Cancel" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Partner Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {coupleData.partners.map((partner, index) => (
                    <div
                        key={index}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5"
                    >
                        <div className="flex items-start gap-5">
                            {/* Partner Photo */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-400 flex items-center justify-center text-2xl font-light text-slate-900 shadow-md">
                                {partner.name[0]}
                            </div>

                            {/* Partner Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-xl font-normal text-amber-300">
                                        {partner.name}
                                    </h3>
                                    <span className="text-slate-400 text-sm font-normal">
                                        {partner.age}
                                    </span>
                                </div>

                                <p className="text-slate-400 mb-4 text-sm font-normal">
                                    {partner.occupation}
                                </p>

                                {/* Interests */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {partner.interests.map((interest, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-xs font-normal border border-amber-500/20"
                                        >
                                            {interest}
                                        </span>
                                    ))}
                                </div>

                                {/* Personality Tag */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs font-normal border border-amber-400/30">
                                    <Award className="w-3.5 h-3.5" />
                                    {partner.personality}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Shared Interests */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10">
                <h2 className="text-2xl font-light text-amber-300 mb-6 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-amber-400" fill="currentColor" />
                    Shared Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                    {coupleData.sharedInterests.map((interest, index) => (
                        <div
                            key={index}
                            className="px-5 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-xl font-normal border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-base mr-2">{interest.icon}</span>
                            {interest.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Intent Section */}
            <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10">
                <h2 className="text-2xl font-light text-amber-300 mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-amber-400" />
                    What We're Looking For
                </h2>
                <div className="flex flex-wrap gap-3 mb-4">
                    {coupleData.intent.lookingFor.map((item, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-slate-800/50 text-amber-300 rounded-xl font-normal border border-amber-500/20"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-base text-slate-300 leading-relaxed italic font-light">
                    "{coupleData.intent.summary}"
                </p>
            </div>

            {/* Boundaries Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10">
                <h2 className="text-2xl font-light text-amber-300 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    Boundaries & Preferences
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPinned className="w-4 h-4 text-green-400" />
                            <h3 className="font-normal text-green-400 text-sm">Comfort Level</h3>
                        </div>
                        <p className="text-slate-300 text-sm font-light">{coupleData.boundaries.comfortLevel}</p>
                    </div>

                    <div className="p-5 bg-blue-500/5 rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <h3 className="font-normal text-blue-400 text-sm">Group Size</h3>
                        </div>
                        <p className="text-slate-300 text-sm font-light">{coupleData.boundaries.groupSize}</p>
                    </div>

                    <div className="p-5 bg-purple-500/5 rounded-xl border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageCircle className="w-4 h-4 text-purple-400" />
                            <h3 className="font-normal text-purple-400 text-sm">Communication</h3>
                        </div>
                        <p className="text-slate-300 text-sm font-light">{coupleData.boundaries.communicationStyle}</p>
                    </div>
                </div>
            </div>

            {/* Lifestyle Snapshot */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10">
                <h2 className="text-2xl font-light text-amber-300 mb-6 flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-orange-400" />
                    Lifestyle
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-orange-500/5 rounded-xl border border-orange-500/20">
                        <Activity className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <h3 className="font-normal text-orange-400 mb-1 text-sm">Activity Level</h3>
                        <p className="text-base font-normal text-orange-300">{coupleData.lifestyle.activityLevel}</p>
                    </div>

                    <div className="text-center p-6 bg-green-500/5 rounded-xl border border-green-500/20">
                        <Utensils className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <h3 className="font-normal text-green-400 mb-1 text-sm">Diet</h3>
                        <p className="text-base font-normal text-green-300">{coupleData.lifestyle.diet}</p>
                    </div>

                    <div className="text-center p-6 bg-blue-500/5 rounded-xl border border-blue-500/20">
                        <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h3 className="font-normal text-blue-400 mb-1 text-sm">Availability</h3>
                        <p className="text-base font-normal text-blue-300">{coupleData.lifestyle.availability}</p>
                    </div>
                </div>
            </div>

            {/* Media Gallery */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10">
                <h2 className="text-2xl font-light text-amber-300 mb-6">Our Adventures</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {coupleData.mediaGallery.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 group-hover:opacity-80 transition-opacity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-slate-400 text-3xl font-light opacity-40">
                                    {index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Safety & Verification */}
            <div className="bg-green-500/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500/20 rounded-full p-3 border border-green-400/30">
                            <Shield className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-normal text-green-400 mb-1">
                                Verified Couple
                            </h3>
                            <p className="text-slate-400 text-sm font-light">
                                Profile verified • Committed to safe & respectful connections
                            </p>
                        </div>
                    </div>

                    {coupleData.socialLinks.instagram && (
                        <a
                            href={`https://instagram.com/${coupleData.socialLinks.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 text-amber-300 rounded-xl font-normal hover:bg-amber-500/20 transition-all border border-amber-400/30 hover:border-amber-400/50"
                        >
                            <Instagram className="w-4 h-4" />
                            {coupleData.socialLinks.instagram}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
