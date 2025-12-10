'use client';

import { useState, useEffect, useRef } from 'react';
import {
    hasConsentChoice,
    acceptAllCookies,
    rejectAllCookies,
    getConsentPreferences,
    saveConsentPreferences,
    type ConsentPreferences,
} from '@/lib/cookie-consent';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [preferences, setPreferences] = useState<ConsentPreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        if (!hasConsentChoice()) {
            setShowBanner(true);

            // Add click listener for implicit consent
            const handleClick = (e: MouseEvent) => {
                // Ignore clicks inside the banner or modal
                if (
                    (bannerRef.current && bannerRef.current.contains(e.target as Node)) ||
                    (modalRef.current && modalRef.current.contains(e.target as Node))
                ) {
                    return;
                }

                if (!hasConsentChoice()) {
                    acceptAllCookies();
                    setShowBanner(false);
                }
            };

            document.addEventListener('click', handleClick);

            return () => {
                document.removeEventListener('click', handleClick);
            };
        } else {
            // Load existing preferences
            const existingPrefs = getConsentPreferences();
            if (existingPrefs) {
                setPreferences(existingPrefs);
            }
        }
    }, []);

    const handleAcceptAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        acceptAllCookies();
        setShowBanner(false);
    };

    const handleRejectAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        rejectAllCookies();
        setShowBanner(false);
    };

    const handleOpenSettings = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowSettings(true);
    };

    const handleSaveSettings = (e: React.MouseEvent) => {
        e.stopPropagation();
        saveConsentPreferences(preferences);
        setShowSettings(false);
        setShowBanner(false);
    };

    const handleCloseSettings = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowSettings(false);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Banner */}
            <div
                ref={bannerRef}
                className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex-1">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{' '}
                                <a href="/legal/cookies" className="text-purple-600 dark:text-purple-400 hover:underline" onClick={(e) => e.stopPropagation()}>
                                    Cookie Policy
                                </a>{' '}and{' '}
                                <a href="/legal/privacy" className="text-purple-600 dark:text-purple-400 hover:underline" onClick={(e) => e.stopPropagation()}>
                                    Privacy Policy
                                </a>.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                onClick={handleRejectAll}
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleOpenSettings}
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                Settings
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {showSettings && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 flex items-center justify-center z-[60] p-4 bg-black bg-opacity-50"
                    onClick={handleCloseSettings}
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Cookie Preferences
                                </h2>
                                <button
                                    onClick={handleCloseSettings}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                    aria-label="Close"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Necessary Cookies */}
                                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Necessary Cookies
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Always Active</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                                    </p>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Analytics Cookies
                                        </h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                    </p>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Marketing Cookies
                                        </h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        These cookies are used to track visitors across websites to display relevant advertisements and encourage them to take action.
                                    </p>
                                </div>

                                {/* Preference Cookies */}
                                <div className="pb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Preference Cookies
                                        </h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.preferences}
                                                onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        These cookies enable the website to remember choices you make and provide enhanced, more personalized features.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={handleCloseSettings}
                                    className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveSettings}
                                    className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
