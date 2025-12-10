import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Purpose and Scope</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Cookie Policy ("Policy") describes how Couple Socials (the "Company," used solely as a contractual designation) utilizes cookies, tracking technologies, analytic identifiers, pixels, tags, scripts, and similar technologies ("Cookies") when you access or interact with the Couple Socials website, mobile application(s), interfaces, or embedded services ("Service").
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Policy forms part of the Company's broader privacy and compliance framework and should be read in conjunction with the Privacy Policy, GDPR Compliance Statement, and Terms of Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By continuing to use the Service, you consent to the use of Cookies as described in this Policy, unless and until you disable them through your browser or device settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. What Are Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cookies are small data files that a website places on your computer, device, or browser for the purpose of storing information, enabling functionality, and improving user experience. Cookies may be session-based (deleted when you close your browser) or persistent (stored for a defined duration).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cookies allow websites to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>authenticate users</li>
                <li>remember preferences</li>
                <li>maintain session continuity</li>
                <li>analyze performance</li>
                <li>deliver personalized content</li>
                <li>support security features</li>
                <li>enable essential platform operations</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cookies do not inherently identify you, but when combined with other information, may constitute personal data under certain privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How the Company Uses Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company deploys Cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Authentication: maintaining login sessions and account continuity</li>
                <li>Preference retention: storing customized settings, language options, filters, and interface selections</li>
                <li>Security monitoring: detecting suspicious activity, preventing misuse, protecting account integrity</li>
                <li>Analytics and diagnostics: understanding navigation patterns, evaluating feature usage, measuring performance, and improving platform operation</li>
                <li>User experience enhancements: enabling smoother navigation, reducing loading times, improving layout responsiveness</li>
                <li>Content relevance: providing appropriate, platform-relevant content based on usage behavior</li>
                <li>Advertising and measurement: delivering and tracking promotional content, where applicable, in compliance with applicable laws</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not deploy cookies for algorithmic matchmaking or automated decision-making.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Categories of Cookies Used</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may utilize the following categories of Cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.1 Essential or Strictly Necessary Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Cookies are fundamental to the basic operation of the Service. They enable functionalities such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>login authentication</li>
                <li>security validations</li>
                <li>session management</li>
                <li>load balancing</li>
                <li>access control</li>
                <li>backend connectivity</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Blocking these Cookies may render the Service partially or fully inoperative.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.2 Performance and Analytics Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Cookies help the Company understand how users engage with the Service by collecting anonymized or aggregated metrics, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>pages viewed</li>
                <li>session durations</li>
                <li>navigation flows</li>
                <li>feature usage patterns</li>
                <li>crash diagnostics</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The insights generated assist in improving Service stability, usability, and responsiveness.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.3 Functionality Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Cookies remember your preferences and enable enhanced, customized features, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>language selections</li>
                <li>profile display choices</li>
                <li>saved settings</li>
                <li>persistent filters</li>
                <li>interface personalization</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Disabling these Cookies may reduce usability.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.4 Targeting, Advertising, and Measurement Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Where applicable, these Cookies may:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>deliver content or ads relevant to your interests</li>
                <li>measure ad performance</li>
                <li>determine engagement with promotional campaigns</li>
                <li>customize user-facing marketing material</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Such Cookies operate in accordance with relevant legal requirements, including opt-in rules where mandated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In addition to Cookies set directly by the Company, the Service may utilize third-party Cookies associated with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>analytics providers</li>
                <li>hosting services</li>
                <li>performance monitoring tools</li>
                <li>payment processors</li>
                <li>advertising networks (if used)</li>
                <li>content delivery networks (CDNs)</li>
                <li>crash reporting tools</li>
                <li>communication and messaging infrastructure</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These third parties may use Cookies to operate their respective technologies. The Company does not control third-party cookies and is not responsible for their practices. Users should review the privacy and cookie policies of applicable third-party providers for further information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Managing, Controlling, and Deleting Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You maintain full control over how Cookies are stored and used on your device. You may:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>block all Cookies</li>
                <li>restrict certain types of Cookies</li>
                <li>delete existing Cookies</li>
                <li>configure browser settings to notify you when a Cookie is set</li>
                <li>disable third-party Cookies</li>
                <li>use privacy tools or browser extensions</li>
                <li>adjust device-level tracking permissions</li>
                <li>withdraw consent where required by applicable law</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Please note:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>blocking certain Cookies may impair or limit Service functionality</li>
                <li>disabling Essential Cookies may prevent you from accessing the Service</li>
                <li>clearing Cookies may log you out or remove saved settings</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Additional resources for managing Cookies include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li><a href="https://www.allaboutcookies.org" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300">www.youronlinechoices.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may update or amend this Policy from time to time to reflect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>changes in technology</li>
                <li>evolving legal or regulatory requirements</li>
                <li>operational modifications</li>
                <li>updates to Service functionality</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Revised versions will be posted with an updated "Last Updated" date. Continued use of the Service after updates constitutes acceptance of the revised Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions or concerns regarding this Cookie Policy, contact:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-gray-600 dark:text-gray-300">
                Email: privacy@couplesocials.com
              </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

