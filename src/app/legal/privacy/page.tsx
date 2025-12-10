import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction and Scope</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Privacy Policy ("Policy") describes how Couple Socials (the "Company," used solely as a contractual designation and not as an indicator of legal entity status) collects, processes, stores, uses, discloses, transfers, and protects personal information when you access or use the Couple Socials platform, including the website, web application, mobile application(s), communication systems, and all associated features, tools, and services (collectively, the "Service").
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing or using the Service, creating an account, or submitting information, you acknowledge that you have read, understood, and agreed to the collection and processing of your information as outlined in this Policy. If you do not agree with this Policy, you must immediately discontinue use of the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Policy should be read together with the Company's Terms of Service, Cookie Policy, GDPR Compliance Statement, Refund Policy, and Disclaimer, each of which forms an integral part of your contractual relationship with the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Categories of Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may collect, receive, generate, or process information about you in the following categories.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This includes any information voluntarily submitted by users, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Identity and contact details: email address, display name, profile identifiers</li>
                <li>Profile information: age range, location (approximate or precise if enabled), bio, interests, lifestyle descriptors, preferences, relationship details</li>
                <li>Authentication credentials: username, encrypted password</li>
                <li>Subscription and billing information: payment method tokens, transaction records, subscription tier, renewal details</li>
                <li>Uploaded content: photographs, images, videos, media files, profile content, written text, descriptions</li>
                <li>Interactions and communications: messages, chats, calls, media exchanges, notifications, timestamps, logs</li>
                <li>Support inquiries: messages or information sent when contacting support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.2 Information Automatically Collected</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you access or interact with the Service, the Company may automatically collect and log:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Device characteristics: IP address, browser type, device model, OS version, network identifiers</li>
                <li>Usage data: pages viewed, navigation paths, features accessed, session durations, clickstream behavior</li>
                <li>Diagnostics: error reports, crash logs, performance metrics</li>
                <li>Location data: approximate or precise (if permitted by device settings)</li>
                <li>Tracking identifiers: cookies, session tokens, unique device identifiers, analytics beacons</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automatic collection enables operation, improvement, security monitoring, fraud prevention, and analytics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Purposes for Processing Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company processes your information for the following lawful and legitimate purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Service provision: enabling access, account creation, login, subscription management, and feature functionality</li>
                <li>Platform operations: delivering communication features, displaying profiles, managing interactions between couples</li>
                <li>Filtering and discovery: enabling user-initiated searches, filtering, and content visibility</li>
                <li>Payments and billing: processing transactions, subscription renewals, and verifying payment status</li>
                <li>Service improvement: analyzing user behavior, identifying issues, optimizing functionality</li>
                <li>Security and integrity: detecting fraud, preventing misuse, monitoring suspicious activity, enforcing policies</li>
                <li>Communication: sending updates, subscription notices, alerts, transactional emails, or required disclosures</li>
                <li>Compliance: meeting legal, regulatory, or enforcement obligations</li>
                <li>Protection: enforcing Terms of Service, safeguarding the platform, and protecting user rights and safety</li>
                <li>Analytics and insights: aggregated usage reporting for internal evaluation</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company never engages in algorithmic matchmaking or automated decision-making regarding compatibility or activity recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not sell personal information. Information may be shared only under the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.1 With Other Users</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Profile elements you choose to publish or make visible may be accessible to other registered users. Users should not upload content or information they do not wish to make public within the platform.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.2 Service Providers and Processors</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may disclose information to carefully selected third-party service providers who assist with hosting, analytics, messaging, subscription billing, data processing, content delivery, storage, fraud detection, or technical operations. Such providers process information only on behalf of the Company and under contractual confidentiality obligations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.3 Legal, Regulatory, and Safety Disclosures</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may disclose information to comply with applicable law, lawful requests, legal processes, or government orders, including for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>investigations</li>
                <li>enforcement actions</li>
                <li>fraud prevention</li>
                <li>the protection of rights, property, or safety</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.4 Business or Operational Transfers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In the event of a restructuring, data migration, systems overhaul, strategic transition, or transfer of platform operations, user information may be transferred to new operational administrators.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">4.5 With Your Consent</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Information may be shared when you explicitly authorize disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Security Framework</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company implements commercially reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, alteration, destruction, misuse, or disclosure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These measures may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>encryption at rest or in transit</li>
                <li>secured hosting environments</li>
                <li>pseudonymization or tokenization</li>
                <li>access control mechanisms</li>
                <li>routine audits and monitoring</li>
                <li>data minimization practices</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Despite these efforts, no method of electronic storage, transmission, or cloud-based processing is completely secure. The Company cannot guarantee absolute protection.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users share, upload, interact, and communicate at their own discretion and risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. User Rights and Controls</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Depending on jurisdiction and applicable law, users may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>access personal data held by the Company</li>
                <li>update or correct inaccurate information</li>
                <li>request deletion of personal data or account closure</li>
                <li>obtain a copy of their data in a portable format</li>
                <li>restrict or object to specific processing activities</li>
                <li>withdraw consent where consent is the processing basis</li>
                <li>disable or manage cookies through browser controls</li>
                <li>request clarification regarding data handling practices</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rights requests may be submitted by contacting the Company at the email listed in Section 10. The Company may require verification to confirm identity before fulfilling requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Similar Technologies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service uses cookies and related technologies for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>session management</li>
                <li>authentication</li>
                <li>analytics</li>
                <li>security monitoring</li>
                <li>preference storage</li>
                <li>performance optimization</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users may adjust browser settings to block or restrict cookies. However, disabling cookies may impair platform functionality, limit access to certain features, or prevent proper operation of the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Additional details are provided in the Company's Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Age Restrictions and Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is strictly intended for couples who are 18 years of age or older. The Company does not knowingly collect or solicit personal information from individuals under 18. If you believe a minor has submitted information, contact the Company immediately for removal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Updates to This Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may revise, amend, or update this Policy at any time. Updated versions will be posted on this page with a revised "Last Updated" date. Continued use of the Service after such revisions constitutes acceptance of the updated Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For privacy inquiries, data rights requests, or questions regarding this Policy, contact:
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

