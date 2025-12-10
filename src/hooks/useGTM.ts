'use client';

import { useEffect } from 'react';
import { hasConsent, getConsentPreferences } from '@/lib/cookie-consent';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export function useGTM() {
    useEffect(() => {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || [];

        // Listen for consent updates
        const handleConsentUpdate = (event: Event) => {
            const customEvent = event as CustomEvent;
            const preferences = customEvent.detail;

            // Update GTM consent mode
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: 'consent_update',
                    analytics_consent: preferences.analytics ? 'granted' : 'denied',
                    marketing_consent: preferences.marketing ? 'granted' : 'denied',
                    preferences_consent: preferences.preferences ? 'granted' : 'denied',
                });
            }

            // Update gtag consent if available
            if (typeof window.gtag === 'function') {
                window.gtag('consent', 'update', {
                    analytics_storage: preferences.analytics ? 'granted' : 'denied',
                    ad_storage: preferences.marketing ? 'granted' : 'denied',
                    ad_user_data: preferences.marketing ? 'granted' : 'denied',
                    ad_personalization: preferences.marketing ? 'granted' : 'denied',
                    functionality_storage: preferences.preferences ? 'granted' : 'denied',
                    personalization_storage: preferences.preferences ? 'granted' : 'denied',
                });
            }
        };

        // Set initial consent state
        const preferences = getConsentPreferences();
        if (preferences) {
            handleConsentUpdate(new CustomEvent('cookieConsentUpdated', { detail: preferences }));
        } else {
            // Set default deny for all optional categories
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: 'consent_default',
                    analytics_consent: 'denied',
                    marketing_consent: 'denied',
                    preferences_consent: 'denied',
                });
            }

            if (typeof window.gtag === 'function') {
                window.gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                    functionality_storage: 'denied',
                    personalization_storage: 'denied',
                    wait_for_update: 500,
                });
            }
        }

        window.addEventListener('cookieConsentUpdated', handleConsentUpdate);

        return () => {
            window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
        };
    }, []);
}
