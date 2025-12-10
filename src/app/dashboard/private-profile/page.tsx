"use client";

import { useState } from "react";
import { Lock, Edit2, Save, X, User, Briefcase, MapPin, Ruler, Coffee, Calendar, Dumbbell, Utensils, Moon, Heart, Cigarette, Wine, PawPrint, Baby, Lightbulb, Users, MessageCircle, Clock, AlertCircle } from "lucide-react";

export default function PrivateProfilePage() {
    const [isEditingA, setIsEditingA] = useState(false);
    const [personAData, setPersonAData] = useState({
        // Basic Details
        name: "Alex",
        age: 32,
        location: "San Francisco, CA",
        height: "5'10\"",

        // Lifestyle Signals
        workDomain: "Tech",
        schedulePattern: "Flexible",
        fitnessLevel: "Active",
        diet: "Vegetarian",
        sleepRhythm: "Night Owl",

        // Intent
        intent: "Long Term",

        // Non-Negotiables
        smoking: "Never",
        drinking: "Socially",
        pets: "Love Them",
        kidsPreference: "Undecided",

        // Core Interests (3-5)
        interests: ["Photography", "Hiking", "Coffee Culture", "Tech Podcasts"],

        // Personality Markers
        personalityType: "Introvert",
        socialBandwidth: "Medium",
        communicationPattern: "Text-First",

        // Time Availability
        availability: ["Weekdays", "Weekends"],

        // Dealbreakers
        dealbreakers: "No smoking indoors, must respect personal space, value honesty"
    });

    // Person B data (locked/read-only)
    const personBData = {
        name: "Jordan",
        age: 30,
        location: "San Francisco, CA",
        height: "5'6\"",
        workDomain: "Creative/Marketing",
        schedulePattern: "9-5",
        fitnessLevel: "Moderate",
        diet: "Omnivore",
        sleepRhythm: "Early Bird",
        intent: "Long Term",
        smoking: "Never",
        drinking: "Socially",
        pets: "Have Pets",
        kidsPreference: "Want Kids",
        interests: ["Yoga", "Cooking", "Reading", "Art Galleries", "Travel"],
        personalityType: "Extrovert",
        socialBandwidth: "High",
        communicationPattern: "Call-First",
        availability: ["Weekends"],
        dealbreakers: "Must love animals, no drama, clear communication always"
    };

    const handleInputChange = (field: string, value: any) => {
        setPersonAData(prev => ({ ...prev, [field]: value }));
    };

    const handleInterestChange = (index: number, value: string) => {
        const newInterests = [...personAData.interests];
        newInterests[index] = value;
        setPersonAData(prev => ({ ...prev, interests: newInterests }));
    };

    const addInterest = () => {
        if (personAData.interests.length < 5) {
            setPersonAData(prev => ({ ...prev, interests: [...prev.interests, ""] }));
        }
    };

    const removeInterest = (index: number) => {
        if (personAData.interests.length > 3) {
            const newInterests = personAData.interests.filter((_, i) => i !== index);
            setPersonAData(prev => ({ ...prev, interests: newInterests }));
        }
    };

    const toggleAvailability = (day: string) => {
        const newAvailability = personAData.availability.includes(day)
            ? personAData.availability.filter(d => d !== day)
            : [...personAData.availability, day];
        setPersonAData(prev => ({ ...prev, availability: newAvailability }));
    };

    const renderPersonProfile = (person: typeof personAData, isLocked: boolean, personLabel: string) => {
        const isEditable = !isLocked && isEditingA;

        return (
            <div className={`relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10 ${isLocked ? 'opacity-60' : ''}`}>
                {/* Lock Overlay for Person B */}
                {isLocked && (
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md rounded-2xl z-10 flex items-center justify-center">
                        <div className="text-center">
                            <Lock className="w-14 h-14 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-xl font-light text-amber-300 mb-2">Locked Profile</h3>
                            <p className="text-slate-400 mb-4 text-sm font-normal">Only {person.name} can edit this profile</p>
                            <button className="px-5 py-2 bg-amber-500/10 text-amber-300 rounded-lg font-normal border border-amber-400/30 cursor-not-allowed">
                                Request to Unlock
                            </button>
                        </div>
                    </div>
                )}

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 flex items-center justify-center text-xl font-light text-slate-900">
                            {person.name[0]}
                        </div>
                        <div>
                            <h2 className="text-xl font-light text-amber-300">{personLabel}</h2>
                            <p className="text-slate-400 text-xs font-normal">Private Profile</p>
                        </div>
                    </div>

                    {!isLocked && (
                        <button
                            onClick={() => setIsEditingA(!isEditingA)}
                            className={`px-4 py-2 rounded-lg font-normal transition-all flex items-center gap-2 text-sm ${isEditingA
                                ? 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20'
                                : 'bg-amber-500/10 text-amber-300 border border-amber-400/20 hover:bg-amber-500/20'
                                }`}
                        >
                            {isEditingA ? <><X className="w-4 h-4" /> Cancel</> : <><Edit2 className="w-4 h-4" /> Edit</>}
                        </button>
                    )}
                </div>

                {/* Basic Details */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-base font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Basic Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            {isEditable ? (
                                <input
                                    type="text"
                                    value={person.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                />
                            ) : (
                                <p className="text-white font-medium">{person.name}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Age</label>
                            {isEditable ? (
                                <input
                                    type="number"
                                    value={person.age}
                                    onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                                    className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                />
                            ) : (
                                <p className="text-white font-medium">{person.age}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                            {isEditable ? (
                                <input
                                    type="text"
                                    value={person.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                />
                            ) : (
                                <p className="text-white font-medium">{person.location}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Height</label>
                            {isEditable ? (
                                <input
                                    type="text"
                                    value={person.height}
                                    onChange={(e) => handleInputChange('height', e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                />
                            ) : (
                                <p className="text-white font-medium">{person.height}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Lifestyle Signals */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <Coffee className="w-5 h-5" />
                        Lifestyle Signals
                    </h3>
                    <div className="space-y-3">
                        {[
                            { label: 'Work Domain', field: 'workDomain', icon: Briefcase, options: ['Tech', 'Healthcare', 'Education', 'Creative', 'Business', 'Other'] },
                            { label: 'Schedule Pattern', field: 'schedulePattern', icon: Calendar, options: ['9-5', 'Flexible', 'Night Shift', 'Irregular'] },
                            { label: 'Fitness Level', field: 'fitnessLevel', icon: Dumbbell, options: ['Very Active', 'Active', 'Moderate', 'Low'] },
                            { label: 'Diet', field: 'diet', icon: Utensils, options: ['Omnivore', 'Vegetarian', 'Vegan', 'Pescatarian', 'Other'] },
                            { label: 'Sleep Rhythm', field: 'sleepRhythm', icon: Moon, options: ['Early Bird', 'Night Owl', 'Flexible'] }
                        ].map(({ label, field, icon: Icon, options }) => (
                            <div key={field}>
                                <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {label}
                                </label>
                                {isEditable ? (
                                    <select
                                        value={person[field as keyof typeof person] as string}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                    >
                                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                ) : (
                                    <p className="text-white font-medium">{person[field as keyof typeof person]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intent */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Intent
                    </h3>
                    {isEditable ? (
                        <div className="flex gap-3">
                            {['Short Term', 'Long Term', 'Undecided'].map(option => (
                                <button
                                    key={option}
                                    onClick={() => handleInputChange('intent', option)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${person.intent === option
                                        ? 'bg-yellow-600 text-gray-900'
                                        : 'bg-gray-800 text-gray-400 border border-yellow-600/50 hover:bg-gray-700'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-white font-semibold text-lg">{person.intent}</p>
                    )}
                </div>

                {/* Non-Negotiables */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Non-Negotiables
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Smoking', field: 'smoking', icon: Cigarette, options: ['Never', 'Socially', 'Regularly', 'No Preference'] },
                            { label: 'Drinking', field: 'drinking', icon: Wine, options: ['Never', 'Socially', 'Regularly', 'No Preference'] },
                            { label: 'Pets', field: 'pets', icon: PawPrint, options: ['Love Them', 'Allergic', 'No Preference', 'Have Pets'] },
                            { label: 'Kids', field: 'kidsPreference', icon: Baby, options: ['Want Kids', "Don't Want Kids", 'Have Kids', 'Undecided'] }
                        ].map(({ label, field, icon: Icon, options }) => (
                            <div key={field}>
                                <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {label}
                                </label>
                                {isEditable ? (
                                    <select
                                        value={person[field as keyof typeof person] as string}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white text-sm"
                                    >
                                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                ) : (
                                    <p className="text-white font-medium text-sm">{person[field as keyof typeof person]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Interests */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        Core Interests (3-5 activities)
                    </h3>
                    {isEditable ? (
                        <div className="space-y-2">
                            {person.interests.map((interest, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={interest}
                                        onChange={(e) => handleInterestChange(index, e.target.value)}
                                        className="flex-1 px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                        placeholder={`Interest ${index + 1}`}
                                    />
                                    {person.interests.length > 3 && (
                                        <button
                                            onClick={() => removeInterest(index)}
                                            className="px-3 py-2 bg-red-600/30 text-red-400 rounded-lg border border-red-600/50 hover:bg-red-600/40"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                            {person.interests.length < 5 && (
                                <button
                                    onClick={addInterest}
                                    className="w-full px-3 py-2 border-2 border-dashed border-yellow-600/50 rounded-lg text-yellow-400 hover:bg-yellow-600/10 transition-all"
                                >
                                    + Add Interest
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {person.interests.map((interest, index) => (
                                <span key={index} className="px-3 py-1.5 bg-yellow-600/20 text-yellow-400 rounded-lg text-sm font-medium border border-yellow-600/40">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Personality Markers */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Personality Markers
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Type</label>
                            {isEditable ? (
                                <div className="flex gap-3">
                                    {['Introvert', 'Extrovert'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => handleInputChange('personalityType', type)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${person.personalityType === type
                                                ? 'bg-yellow-600 text-gray-900'
                                                : 'bg-gray-800 text-gray-400 border border-yellow-600/50 hover:bg-gray-700'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-white font-medium">{person.personalityType}</p>
                            )}
                        </div>

                        {[
                            { label: 'Social Bandwidth', field: 'socialBandwidth', options: ['High', 'Medium', 'Low'] },
                            { label: 'Communication Pattern', field: 'communicationPattern', options: ['Text-First', 'Call-First', 'In-Person', 'Flexible'] }
                        ].map(({ label, field, options }) => (
                            <div key={field}>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
                                {isEditable ? (
                                    <select
                                        value={person[field as keyof typeof person] as string}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white"
                                    >
                                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                ) : (
                                    <p className="text-white font-medium">{person[field as keyof typeof person]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time Availability */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Time Availability
                    </h3>
                    {isEditable ? (
                        <div className="flex gap-3">
                            {['Weekdays', 'Weekends'].map(day => (
                                <button
                                    key={day}
                                    onClick={() => toggleAvailability(day)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${person.availability.includes(day)
                                        ? 'bg-yellow-600 text-gray-900'
                                        : 'bg-gray-800 text-gray-400 border border-yellow-600/50 hover:bg-gray-700'
                                        }`}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {person.availability.map(day => (
                                <span key={day} className="px-3 py-1.5 bg-yellow-600/20 text-yellow-400 rounded-lg text-sm font-medium border border-yellow-600/40">
                                    {day}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dealbreakers */}
                <div className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-amber-500/10">
                    <h3 className="text-lg font-normal text-amber-300 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Dealbreakers (Keep it concise)
                    </h3>
                    {isEditable ? (
                        <textarea
                            value={person.dealbreakers}
                            onChange={(e) => handleInputChange('dealbreakers', e.target.value)}
                            maxLength={200}
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-800 border border-yellow-600/50 rounded-lg text-white resize-none"
                            placeholder="List your dealbreakers (max 200 characters)"
                        />
                    ) : (
                        <p className="text-white">{person.dealbreakers}</p>
                    )}
                    {isEditable && (
                        <p className="text-sm text-gray-400 mt-1">{person.dealbreakers.length}/200 characters</p>
                    )}
                </div>

                {/* Save Button (only for Person A when editing) */}
                {!isLocked && isEditingA && (
                    <button
                        onClick={() => setIsEditingA(false)}
                        className="w-full py-2.5 bg-amber-500/20 text-amber-300 rounded-lg font-normal hover:bg-amber-500/30 transition-all border border-amber-400/30 flex items-center justify-center gap-2"
                    >
                        <Save className="w-5 h-5" />
                        Save Changes
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-light bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-transparent bg-clip-text mb-2">Private Profiles</h1>
                <p className="text-slate-400 text-base font-normal">Manage individual partner details privately</p>
            </div>

            {/* Two Column Grid for Person A and Person B */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Person A Profile (Editable) */}
                {renderPersonProfile(personAData, false, "Person A")}

                {/* Person B Profile (Locked) */}
                {renderPersonProfile(personBData, true, "Person B")}
            </div>
        </div>
    );
}
