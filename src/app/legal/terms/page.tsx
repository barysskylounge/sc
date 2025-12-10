import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Formation of Binding Agreement and Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms of Service ("Terms," "Agreement") constitute a comprehensive, legally enforceable contract between you ("User," "you," or "your") and Couple Socials (the "Company"), which serves solely as a contractual designation for the operator(s) of the Service. The use of "Company" herein does not represent or imply incorporation, registration, or any specific legal entity status. The Company functions as the provider, administrator, and maintainer of the Couple Socials digital platform, including all associated systems, domains, interfaces, software, web applications, mobile applications, communication channels, and digital features (collectively, the "Service").
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing, browsing, registering for, or otherwise using the Service in any capacity, you unequivocally acknowledge that you have read, understood, and accepted all provisions contained in these Terms. Your continued use constitutes full, irrevocable acceptance.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you do not agree to these Terms in their entirety, you must immediately cease all access and refrain from using the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms incorporate by reference the Company's Privacy Policy, Cookie Policy, GDPR Compliance Statement, Refund Policy, Disclaimer, and any supplemental notices or guidelines publicly issued by the Company. The Company reserves the unilateral right to modify, amend, or replace these Terms at any time without prior notice. Revised Terms become effective immediately upon publication, and continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Eligibility Requirements and Couple-Exclusive Participation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is expressly and exclusively intended for couples, defined as two (2) consenting adults who jointly maintain a single account. The Service does not support or permit:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>individuals using the platform alone</li>
                <li>minors or persons lacking legal capacity</li>
                <li>triads, groups, or multi-person account configurations</li>
                <li>persons misrepresenting identity, age, or relationship status</li>
                <li>account sharing with anyone outside the couple</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By registering, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>both individuals are at least eighteen (18) years old or above the legal age of majority;</li>
                <li>both individuals possess legal capacity to enter binding contracts;</li>
                <li>both individuals jointly created and jointly control the account;</li>
                <li>all provided information is accurate and will remain updated;</li>
                <li>neither individual is impersonating or misrepresenting any identity or relationship;</li>
                <li>the couple structure is legitimate and not used as a circumvention mechanism.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may request identity or verification materials at any time. Any violation may result in immediate termination without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Subscription Tiers, Recurring Billing, and Financial Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is provided under a freemium model. Advanced features—including discovery, communication, interactive tools, visibility expansions, event participation, and enhanced functionalities—require an active paid subscription.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Available plans:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Monthly: USD $9.99</li>
                <li>Yearly: USD $99.99</li>
                <li>Lifetime: USD $999.99 (non-recurring)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All payments are final and non-refundable once processed. Users authorize the Company to initiate recurring billing for Monthly and Yearly subscriptions. Renewals occur automatically unless cancelled before renewal.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may adjust pricing or subscription structures prospectively. Discounts, promotional codes, or trial benefits, if offered, do not create ongoing entitlement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Platform Features and User-Controlled Manual Discovery</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service employs no automated matchmaking, algorithmic compatibility scoring, behavioral prediction systems, AI-driven pairing, or automated personalization. All search, filtering, discovery, contact initiation, or interaction is manually conducted by users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not endorse, verify, or guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>the accuracy of user profiles</li>
                <li>compatibility or suitability of any user</li>
                <li>safety, legality, or appropriateness of user interactions</li>
                <li>outcomes of online or offline engagements</li>
                <li>availability of any particular type of user or couple</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. User-Generated Content and Allocation of Responsibility</h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Ownership and Irrevocable License Grant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users retain ownership of all submitted materials, including images, bios, videos, messages, and other uploaded content ("User Content"). However, by submitting User Content, you grant the Company a perpetual, irrevocable, worldwide, royalty-free, sublicensable, transferable, non-exclusive license to store, process, display, reproduce, adapt, and utilize such content to operate, maintain, and enhance the Service.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">5.2 Legal Compliance, Restrictions, and User Responsibility</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service does not facilitate, endorse, or participate in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>paid or unpaid sexual transactions</li>
                <li>escorting, solicitation, or commercial sexual arrangements</li>
                <li>prostitution or compensated companionship</li>
                <li>negotiations of monetized intimacy or adult services</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Any attempt to use the Service for such purposes constitutes a severe breach.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users bear exclusive responsibility for ensuring compliance with all applicable civil, criminal, regulatory, and local laws in their jurisdiction. This includes content legality, consent requirements, media standards, and decency regulations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may remove or restrict content but is not obligated to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Prohibited Activities and User Conduct Standards</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>violate laws, regulations, or court orders</li>
                <li>impersonate individuals or entities</li>
                <li>upload explicit, illegal, non-consensual, or harmful content</li>
                <li>harass, stalk, exploit, or intimidate others</li>
                <li>collect or scrape user data</li>
                <li>attempt to hack, disrupt, or compromise the Service</li>
                <li>transmit malware, bots, or harmful code</li>
                <li>circumvent access controls</li>
                <li>reverse engineer any part of the Service</li>
                <li>create multiple accounts or accounts for ineligible individuals</li>
                <li>misuse the Service for commercial activities, including commercial sexual transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Reporting Mechanisms and Three-Strike Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users may report fraudulent or policy-violating profiles. Upon receiving three (3) verified, independent reports, the Company may permanently ban the account.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Banned accounts are not eligible for refunds under any circumstances.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company's determinations are final, non-negotiable, and not subject to appeal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Intellectual Property Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All non-User Content—including platform architecture, interface design, data compilations, source code, trademarks, logos, graphics, and other proprietary assets ("Company Content")—is protected under global intellectual property laws. Unauthorized reproduction, distribution, or modification is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Privacy and Global Data Handling</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Use of the Service constitutes acceptance of the Company's Privacy Policy and GDPR Compliance Statement. The Company applies global privacy principles consistent with internationally recognized standards. The Company may process data in multiple jurisdictions and may transfer data internationally where lawful.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Suspension, Restriction, and Termination</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may suspend, restrict, or terminate any account at its discretion, with or without cause, notice, justification, or liability. Grounds include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Terms violations</li>
                <li>illegal activity</li>
                <li>fraudulent behavior</li>
                <li>three-strike policy triggers</li>
                <li>payment issues</li>
                <li>prolonged inactivity</li>
                <li>suspected misuse or exploitation</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Termination may include deletion of the account and all associated User Content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Warranty Disclaimers</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service is provided strictly "AS IS," "AS AVAILABLE," "WITH ALL FAULTS," and WITHOUT WARRANTY."
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company disclaims all express, implied, statutory, and custom-based warranties, including merchantability, accuracy, fitness for purpose, security, uninterrupted availability, or non-infringement.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>user profiles are truthful, safe, or accurate</li>
                <li>interactions will be successful, appropriate, or lawful</li>
                <li>meet-ups or offline engagements will be safe, consensual, or risk-free</li>
                <li>communications will be secure or uninterrupted</li>
                <li>content will be error-free or accessible at all times</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users engage at their own discretion and risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Limitation of Liability and Indemnification</h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.1 Limitation of Liability</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the maximum extent permitted globally, the Company is not liable for indirect, consequential, punitive, exemplary, incidental, or economic damages. The Company's total cumulative liability shall not exceed:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>USD $100</li>
                <li>or</li>
                <li>the total amount you paid in the preceding twelve (12) months,</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                whichever is greater.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">12.2 No Liability for User Interactions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company bears no responsibility for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>online or offline interactions</li>
                <li>disputes, incidents, or harm involving users</li>
                <li>communications, agreements, or arrangements between users</li>
                <li>any form of personal, social, romantic, or intimate engagement</li>
                <li>safety, consent, injury, or misconduct during meet-ups</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users interact entirely at their own risk.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">12.3 Indemnification</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users agree to indemnify and defend the Company from any claims, damages, liabilities, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>their conduct</li>
                <li>their User Content</li>
                <li>their interactions</li>
                <li>their violations of these Terms</li>
                <li>their legal non-compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Governing Law and Binding Arbitration</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Agreement is governed by the substantive laws of the jurisdiction of the Service operator, without reference to conflict-of-law rules. All disputes shall be resolved exclusively through binding arbitration, conducted in English, with no class actions, collective arbitrations, or representative claims permitted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Severability and Entire Agreement</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If any provision of these Terms is deemed invalid or unenforceable, the remainder remains in full force. These Terms, together with referenced policies, constitute the entire agreement between you and the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may be contacted exclusively via email for all legal, operational, and administrative matters:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: legal@couplesocials.com
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


