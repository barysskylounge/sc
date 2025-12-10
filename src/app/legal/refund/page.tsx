import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Policy Overview and Contractual Framework</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Refund Policy ("Policy") establishes the legal terms and conditions governing all subscription purchases, premium feature access, and paid digital services provided through the Couple Socials platform (the "Company," used solely as a contractual designation). By subscribing to or purchasing any paid features associated with the Service, you ("User," "Subscriber," or "you") acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>this Policy forms an integral component of your binding agreement with the Company,</li>
                <li>this Policy is incorporated by reference into the Terms of Service, Privacy Policy, and other applicable documents, and</li>
                <li>your use of paid services constitutes explicit acceptance of the no-refund principles defined herein.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong className="text-red-600 dark:text-red-400">IMPORTANT:</strong> All subscription purchases are final, non-cancellable, and non-refundable upon activation, except where mandatory applicable law explicitly requires otherwise. By completing a payment, you affirm your understanding of and agreement to this strict no-refund framework.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Non-Refundable Subscription Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.1 Strict and Irrevocable No-Refund Policy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All paid subscriptions—including Monthly ($9.99 USD), Yearly ($99.99 USD), and Lifetime ($999.99 USD) plans—are sold strictly on an as-is and non-refundable basis once payment processing is successfully completed.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No refunds shall be issued under any circumstances related to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>user dissatisfaction or unmet expectations</li>
                <li>technical issues experienced by the User</li>
                <li>inability to access features due to device limitations</li>
                <li>changes in personal circumstances</li>
                <li>accidental purchases or duplicate purchases</li>
                <li>voluntary account cancellation</li>
                <li>account termination due to policy violations</li>
                <li>alleged lack of usage by the User</li>
                <li>any reason not expressly mandated by law</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not offer discretionary refunds, goodwill refunds, prorated refunds, or partial refunds.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.2 Activation and Immediate Value</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A subscription is deemed activated immediately upon successful payment processing. This activation grants the User instant access to the platform's digital infrastructure, premium features, and system resources.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As the Company provides digital products delivered instantly upon payment, no cooling-off or withdrawal period is offered, except where legally mandatory and non-waivable.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.3 Subscription Cancellation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Subscribers may cancel upcoming renewals at any time. Cancellation:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>prevents future billing,</li>
                <li>does not entitle the User to any refund for unused time,</li>
                <li>does not prorate remaining periods, and</li>
                <li>does not modify the no-refund rule.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Premium access continues until the end of the current billing cycle unless terminated for cause.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.4 Automatic Renewal</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monthly and Yearly subscriptions renew automatically unless cancelled prior to the renewal date. All renewal charges are non-refundable. Failure to cancel in advance does not constitute grounds for reimbursement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Limited Exceptions Based on Mandatory Legal Requirements</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 Non-Waivable Consumer Rights (Where Applicable)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In jurisdictions where consumer protection laws provide mandatory refund rights that cannot be waived—such as limited rights within the EU Consumer Rights Directive, UK consumer laws, or Australian Consumer Law—the Company will comply strictly to the extent required by law.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may request evidence of residency or jurisdictional applicability prior to processing a legally mandated refund.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Platform-Wide Technical Failures</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In the rare event of a complete, continuous, verifiable outage lasting more than 30 consecutive days, directly attributable to the Company's actions or negligence, the Company may, at its discretion:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>provide a service credit, or</li>
                <li>extend subscription duration.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cash refunds will not be issued, even under this scenario.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This section excludes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>scheduled maintenance</li>
                <li>partial outages</li>
                <li>third-party service disruptions</li>
                <li>user-side device or network issues</li>
                <li>circumstances beyond the Company's control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Processing Fees and Transaction Costs</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All external financial charges—including payment processor fees, currency conversion fees, bank fees, gateway fees, chargeback fees, and any related processing costs ("Transaction Costs")—are non-refundable, regardless of whether a refund is legally mandated for the subscription fee itself.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transaction Costs are imposed by third parties, not by the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Chargebacks, Payment Disputes, and Account Consequences</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Initiating a chargeback, payment dispute, or unauthorized refund request through a financial institution without first contacting the Company constitutes a violation of this Policy and may result in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>immediate suspension of the User's account</li>
                <li>permanent account termination</li>
                <li>permanent ban from the platform</li>
                <li>reporting of the abuse to payment processors</li>
                <li>pursuit of debt recovery actions</li>
                <li>liability for administrative, legal, or collection costs</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users should contact refunds@couplesocials.com before initiating any formal dispute. Many issues can be resolved without escalation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. User Acknowledgment, Waiver, and Acceptance</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By purchasing any subscription, you affirm and acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>you have read and fully understood this Refund Policy;</li>
                <li>you voluntarily accept the strict no-refund terms;</li>
                <li>you understand that digital services begin immediately upon payment;</li>
                <li>you waive any right to refunds except where non-waivable law applies;</li>
                <li>you were provided the opportunity to review all relevant policies prior to purchase;</li>
                <li>you are not relying on any statement or representation outside this Policy;</li>
                <li>subscription fees are not contingent on feature usage, platform satisfaction, or successful match outcomes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Modifications to This Refund Policy and Severability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may modify or amend this Policy at any time, with or without notice. Updated versions take effect immediately upon publication.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If any provision of this Policy is found unlawful, void, or unenforceable:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>that specific provision shall be severed,</li>
                <li>it will not affect the enforceability of the remaining provisions, and</li>
                <li>the remaining Policy shall remain fully valid.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Policy is governed by the laws of the jurisdiction in which the Company operates, without regard to conflict-of-law principles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All disputes arising from or relating to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>refunds</li>
                <li>subscription payments</li>
                <li>billing</li>
                <li>digital goods</li>
                <li>or this Policy</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                shall be resolved exclusively through binding arbitration, conducted in English. Class actions and collective proceedings are strictly prohibited.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Where mandatory law requires otherwise, the Company will comply to the minimum extent required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For billing inquiries, subscription cancellations, or policy-related questions (noting that refunds will not be granted except where legally required), contact:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Billing & Subscription Inquiries:</strong><br />
                  Email: refunds@couplesocials.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>General Support:</strong><br />
                  Email: support@couplesocials.com
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

