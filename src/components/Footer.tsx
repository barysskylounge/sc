export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💑</span>
              <h3 className="text-lg font-bold text-white">Couple Socials</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed text-justify">
              An exclusive social platform designed for adventurous couples seeking deeper connections. Join a sophisticated, discreet community of verified couples exploring new dimensions of relationships. Discover exclusive events, engage in meaningful conversations, and forge exciting connections in a safe, respectful environment built for couples who share your lifestyle preferences and desires.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:contents gap-6 lg:gap-0">
            <div>
              <h4 className="text-sm text-white font-semibold mb-2">Platform</h4>
              <ul className="space-y-1">
                <li><a href="/features" className="text-sm hover:text-white transition-colors">Features</a></li>
                <li><a href="/how-it-works" className="text-sm hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/events" className="text-sm hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li><a href="/about" className="text-sm hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="text-sm hover:text-white transition-colors">Blog</a></li>
                <li><a href="/faqs" className="text-sm hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a href="/legal/terms" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/legal/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/legal/cookies" className="text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/legal/gdpr" className="text-sm hover:text-white transition-colors">GDPR Compliance</a></li>
              <li><a href="/legal/refund" className="text-sm hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="/legal/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-white font-semibold mb-2">Safety</h4>
            <ul className="space-y-1">
              <li><a href="/legal/safety" className="text-sm hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="/legal/risk-disclosure" className="text-sm hover:text-white transition-colors">Risk Disclosure</a></li>
              <li><a href="/legal/behavior" className="text-sm hover:text-white transition-colors">Inappropriate Behavior Policy</a></li>
              <li><a href="/legal/consent-boundaries" className="text-sm hover:text-white transition-colors">Consent & Boundaries Guidelines</a></li>
              <li><a href="/legal/online-safety" className="text-sm hover:text-white transition-colors">Online Safety Education</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
          <p className="text-xs">&copy; {new Date().getFullYear()} Couple Socials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

