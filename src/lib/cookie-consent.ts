// Cookie consent management utilities

export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface ConsentPreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
}

const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

// Default preferences - necessary cookies are always enabled
export const defaultPreferences: ConsentPreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
};

// Get current consent preferences from localStorage
export function getConsentPreferences(): ConsentPreferences | null {
    if (typeof window === 'undefined') return null;

    try {
        const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
        if (!stored) return null;

        const parsed = JSON.parse(stored);
        return {
            necessary: true, // Always true
            analytics: parsed.analytics ?? false,
            marketing: parsed.marketing ?? false,
            preferences: parsed.preferences ?? false,
        };
    } catch (error) {
        console.error('Error reading consent preferences:', error);
        return null;
    }
}

// Save consent preferences to localStorage
export function saveConsentPreferences(preferences: ConsentPreferences): void {
    if (typeof window === 'undefined') return;

    try {
        const toSave = {
            ...preferences,
            necessary: true, // Always true
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(toSave));

        // Dispatch custom event for GTM and other listeners
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
            detail: preferences
        }));
    } catch (error) {
        console.error('Error saving consent preferences:', error);
    }
}

// Accept all cookies
export function acceptAllCookies(): void {
    saveConsentPreferences({
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true,
    });
}

// Reject all optional cookies (keep only necessary)
export function rejectAllCookies(): void {
    saveConsentPreferences(defaultPreferences);
}

// Check if user has made a consent choice
export function hasConsentChoice(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(CONSENT_COOKIE_NAME) !== null;
}

// Check if a specific category is consented
export function hasConsent(category: CookieCategory): boolean {
    const preferences = getConsentPreferences();
    if (!preferences) return category === 'necessary'; // Only necessary cookies by default
    return preferences[category];
}
