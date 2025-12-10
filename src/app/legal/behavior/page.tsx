import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BehaviorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Inappropriate Behavior Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Purpose and Scope</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Inappropriate Behavior Policy ("Policy") establishes the standards of conduct expected from all users of Couple Socials (the "Company," used solely as a contractual designation). It identifies behaviors that are prohibited on the platform and outlines the Company's rights to restrict, suspend, or terminate accounts when violations occur.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Policy is incorporated into, and forms an integral part of, the Terms of Service, Safety Guidelines, Risk Disclosure, and Disclaimer.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All users ("User," "you," or "your") are required to comply fully with this Policy as a condition of using the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. General Conduct Expectations</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users must conduct themselves in a manner that is:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>respectful</li>
                <li>lawful</li>
                <li>honest</li>
                <li>non-deceptive</li>
                <li>non-threatening</li>
                <li>non-abusive</li>
                <li>consensual in all interactions</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are solely responsible for their conduct. The Company disclaims all responsibility for any harm, incidents, disputes, or consequences resulting from user-to-user interactions or violations of this Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Prohibited Behavior Categories</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The following conduct is strictly prohibited on the platform. The list is non-exhaustive, and the Company may determine additional behaviors as inappropriate at its sole discretion.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 Harassment, Abuse, and Threats</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Prohibited behaviors include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>insults, verbal abuse, intimidation</li>
                <li>stalking or persistent unwanted communication</li>
                <li>harassment based on gender, sexuality, race, ethnicity, or any personal attribute</li>
                <li>threatening language or actions</li>
                <li>blackmail, coercion, or manipulation</li>
                <li>pressuring users into uncomfortable or unwanted interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Sexual Misconduct</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While the platform may facilitate connections between couples, the following are prohibited:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>unsolicited explicit content</li>
                <li>non-consensual sharing of sexual messages or images</li>
                <li>sexual harassment</li>
                <li>pressuring others into sexual activities</li>
                <li>requests for sexual acts in exchange for money, gifts, or favors</li>
                <li>posting or requesting sexual content involving minors (immediate permanent ban + mandatory reporting)</li>
                <li>any non-consensual or coercive sexual behavior</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not monitor interactions and assumes no responsibility for misconduct, but reserves the right to ban violators.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.3 Fraud, Deception, and Misrepresentation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Strictly prohibited:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>impersonating another person, couple, or entity</li>
                <li>falsifying identity, relationship status, or age</li>
                <li>using stolen photos or content</li>
                <li>misrepresenting intentions (e.g., posing as a couple while acting alone)</li>
                <li>misleading others for financial gain</li>
                <li>creating fake or duplicate accounts</li>
                <li>providing deceptive or fraudulent information</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fraudulent behavior may result in permanent termination.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.4 Illegal Activities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The following are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>solicitation or arrangement of commercial sexual services</li>
                <li>prostitution, escorting, or monetized intimacy</li>
                <li>trafficking, exploitation, or coercion of any kind</li>
                <li>sharing illegal content or conducting illegal transactions</li>
                <li>promoting drug distribution, violence, or unlawful activities</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users remain responsible for compliance with all applicable laws in their jurisdiction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.5 Hate Speech and Discrimination</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Prohibited behaviors include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>hate speech</li>
                <li>derogatory comments targeting protected classes</li>
                <li>discriminatory behavior</li>
                <li>promoting extremist or violent ideologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.6 Unsafe Meet-Up Practices</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While the platform cannot supervise meet-ups, the following behaviors are prohibited on the platform:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>arranging meet-ups in a manner that endangers others</li>
                <li>coercing users into unsafe environments</li>
                <li>encouraging harmful or risky behavior</li>
                <li>pressuring users to disclose private locations</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are responsible for their own safety and should review the Safety Guidelines.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.7 Unwanted or Invasive Behavior</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>sharing others' private information without permission</li>
                <li>attempts to collect personal or financial data</li>
                <li>doxxing</li>
                <li>excessive probing or invasive questioning</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.8 Platform Misuse and Technical Abuse</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Strictly prohibited:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>spamming</li>
                <li>mass messaging</li>
                <li>attempting to hack or disrupt the Service</li>
                <li>installing malware or malicious code</li>
                <li>scraping or harvesting data</li>
                <li>using bots, automation, or unauthorized tools</li>
                <li>exploiting vulnerabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Reporting Inappropriate Behavior</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users may report inappropriate conduct using available in-platform tools or by contacting:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> safety@couplesocials.com
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may, but is not obligated to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>investigate reports</li>
                <li>take action</li>
                <li>provide updates</li>
                <li>mediate disputes</li>
                <li>verify claims</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company's decisions are final and at its sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Enforcement and Account Actions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Violation of this Policy may result in any of the following actions, at the Company's sole and absolute discretion:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>warning or caution notice</li>
                <li>temporary suspension</li>
                <li>feature restrictions</li>
                <li>permanent account termination</li>
                <li>permanent ban from the platform</li>
                <li>removal or modification of content</li>
                <li>reporting to legal authorities (when required by law)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For violations involving fraud, deception, sexual exploitation, or threats, permanent bans may be applied immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. No Refunds for Enforcement Actions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As outlined in the Refund Policy, Users whose accounts are:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>suspended</li>
                <li>restricted</li>
                <li>terminated</li>
                <li>permanently banned</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                for violating this Policy are not entitled to any refund, whether full, partial, or prorated.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This applies to Monthly, Yearly, and Lifetime subscriptions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users agree to waive any right to recover fees in connection with enforcement actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. No Duty to Monitor or Protect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not monitor user interactions</li>
                <li>does not pre-screen or verify User Content</li>
                <li>does not provide protection services</li>
                <li>does not intervene in disputes or conflicts</li>
                <li>does not guarantee user behavior or intentions</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users alone are responsible for their conduct and their safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. User Acknowledgment</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using the Service, you expressly acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>you have read and understood this Policy</li>
                <li>you agree to abide by all rules and restrictions</li>
                <li>violations may result in immediate account termination without refund</li>
                <li>the Company is not responsible for user behavior</li>
                <li>you assume all risks associated with interacting with others on the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions regarding this Policy, contact:
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

