"use client";

import { useState } from "react";

export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState<"account" | "privacy" | "notifications" | "preferences">("account");
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        newConnections: true,
        eventInvites: true,
        messages: true,
        weeklyDigest: false,
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your account settings and preferences</p>
            </div>

            <div className="flex gap-6">
                {/* Settings Navigation */}
                <div className="w-64 space-y-1">
                    <button
                        onClick={() => setActiveSection("account")}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeSection === "account"
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        Account
                    </button>
                    <button
                        onClick={() => setActiveSection("privacy")}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeSection === "privacy"
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        Privacy & Security
                    </button>
                    <button
                        onClick={() => setActiveSection("notifications")}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeSection === "notifications"
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        Notifications
                    </button>
                    <button
                        onClick={() => setActiveSection("preferences")}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeSection === "preferences"
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        Preferences
                    </button>
                </div>

                {/* Settings Content */}
                <div className="flex-1 space-y-6">
                    {/* Account Settings */}
                    {activeSection === "account" && (
                        <>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Email Address</h2>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-900 dark:text-white font-medium">alex.jordan@example.com</p>
                                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">✓ Verified</p>
                                    </div>
                                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                        Change Email
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Password</h2>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400">••••••••••</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last changed 3 months ago</p>
                                    </div>
                                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                        Change Password
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Danger Zone</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Deactivate Account</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Temporarily disable your account</p>
                                        </div>
                                        <button className="px-4 py-2 border border-orange-500 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                                            Deactivate
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Delete Account</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Permanently delete your account and data</p>
                                        </div>
                                        <button className="px-4 py-2 border border-red-500 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Privacy Settings */}
                    {activeSection === "privacy" && (
                        <>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Profile Visibility</h2>
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Public Profile</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Allow others to find and view your profile</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-purple-600" />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Show Location</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Display your city and state on your profile</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-purple-600" />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Show Activity Status</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Let others see when you're online</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-purple-600" />
                                    </label>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who Can Contact You</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="contact" defaultChecked className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Everyone</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Anyone can send you connection requests</p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="contact" className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Connections of Connections</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Only mutual connections can reach out</p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="contact" className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">No One</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Don't allow new connection requests</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Blocked Accounts</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't blocked any accounts</p>
                                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                    Manage Blocked Accounts
                                </button>
                            </div>
                        </>
                    )}

                    {/* Notifications Settings */}
                    {activeSection === "notifications" && (
                        <>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Notification Channels</h2>
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Receive notifications via email</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.email}
                                            onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Receive push notifications on your device</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.push}
                                            onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Activity Notifications</h2>
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">New Connections</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">When someone sends a connection request</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.newConnections}
                                            onChange={(e) => setNotifications({ ...notifications, newConnections: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Event Invites</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">When you're invited to an event</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.eventInvites}
                                            onChange={(e) => setNotifications({ ...notifications, eventInvites: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Messages</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">When you receive a new message</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.messages}
                                            onChange={(e) => setNotifications({ ...notifications, messages: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                    <label className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Weekly Digest</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Weekly summary of your activity</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.weeklyDigest}
                                            onChange={(e) => setNotifications({ ...notifications, weeklyDigest: e.target.checked })}
                                            className="w-5 h-5 rounded text-purple-600"
                                        />
                                    </label>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Preferences Settings */}
                    {activeSection === "preferences" && (
                        <>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Language & Region</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                                            <option>English (US)</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                            <option>German</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time Zone</label>
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                                            <option>Pacific Time (PT)</option>
                                            <option>Eastern Time (ET)</option>
                                            <option>Central Time (CT)</option>
                                            <option>Mountain Time (MT)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Appearance</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="theme" defaultChecked className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">System Default</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Use your device's theme setting</p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="theme" className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Light Mode</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Always use light theme</p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input type="radio" name="theme" className="w-4 h-4 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Always use dark theme</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data & Storage</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Download Your Data</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Get a copy of your Couple Socials data</p>
                                        </div>
                                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                            Download
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Clear Cache</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Free up space by clearing cached data</p>
                                        </div>
                                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
