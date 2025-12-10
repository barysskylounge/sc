import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GDPR Compliance Statement
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction and Applicability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This GDPR Compliance Statement ("Statement") outlines how Couple Socials (the "Company," functioning solely as a contractual designation for the operator of the Service) complies with the General Data Protection Regulation ("GDPR") (Regulation (EU) 2016/679). This Statement applies to users located within the European Economic Area (EEA), the United Kingdom, and any jurisdiction that recognizes GDPR-equivalent protections.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Statement should be read together with the Company's Privacy Policy, Cookie Policy, Terms of Service, and any additional notices relating to data protection.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company is committed to ensuring that personal data is processed lawfully, transparently, securely, and in accordance with GDPR obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Legal Bases for Processing Personal Data</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company processes personal data only when one or more lawful bases under Article 6 GDPR apply. These include:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.1 Consent</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Processing is based on your freely given, specific, informed, and unambiguous consent, particularly for optional features such as marketing communication, use of non-essential cookies, or user-submitted profile content.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.2 Contractual Necessity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Processing is required to perform the contractual relationship between you and the Company, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>account creation</li>
                <li>subscription management</li>
                <li>enabling platform functionality</li>
                <li>delivering user-requested features</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.3 Legal Obligation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Processing is necessary for compliance with applicable laws, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>responding to lawful requests</li>
                <li>maintaining records where required</li>
                <li>complying with regulatory requirements</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2.4 Legitimate Interests</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Processing is necessary for the Company's legitimate interests, provided such interests are not overridden by your rights. These interests may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>maintaining platform security</li>
                <li>preventing fraud, misuse, or unauthorized access</li>
                <li>improving the Service's performance and user experience</li>
                <li>ensuring operational continuity and integrity</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company conducts balancing assessments where required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Your Rights as a Data Subject Under GDPR</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users located in the EEA or UK have the following rights, subject to applicable conditions and legal limitations:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 Right of Access (Article 15)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may request confirmation of whether your data is processed and obtain a copy of your personal data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Right to Rectification (Article 16)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may request correction of inaccurate or incomplete personal data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.3 Right to Erasure ("Right to Be Forgotten") (Article 17)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may request deletion of your personal data where:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>data is no longer necessary</li>
                <li>you withdraw consent (where consent is the basis)</li>
                <li>processing is unlawful</li>
                <li>you object and no overriding legitimate interests exist</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.4 Right to Restriction of Processing (Article 18)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may request restricted processing in certain circumstances, such as during dispute resolution or verification.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.5 Right to Data Portability (Article 20)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may request your data in a structured, commonly used, and machine-readable format and request its transfer to another controller where technically feasible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.6 Right to Object (Article 21)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may object to processing based on legitimate interests or processing for direct marketing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.7 Rights Related to Automated Decision-Making and Profiling (Article 22)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right not to be subjected solely to automated decision-making that produces legal or significant effects.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not engage in automated decision-making or profiling that would trigger this right.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Exercising Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To exercise your GDPR rights, contact the Company at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@couplesocials.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Subject Line:</strong> "GDPR Request – [Specific Request Type]"
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Examples:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>GDPR Request – Access</li>
                <li>GDPR Request – Erasure</li>
                <li>GDPR Request – Data Portability</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company will respond within one (1) month of receipt. For complex or high-volume requests, this period may be extended by up to an additional two (2) months, in which case you will be notified.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proof of identity may be required to prevent unauthorized or fraudulent requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. International Data Transfers</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Personal data may be processed or transferred outside the EEA or UK. When such transfers occur, the Company ensures that adequate safeguards are implemented, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions for specific jurisdictions</li>
                <li>Contractual and technical safeguards, including encryption and pseudonymization</li>
                <li>Compliance measures consistent with GDPR Articles 44–50</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company ensures that all transfers are lawful, secure, and compliant with regulatory expectations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Protection Officer (DPO)</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company has designated a Data Protection Officer to oversee GDPR compliance, monitor internal processes, and act as the primary contact for regulatory matters and data subject requests.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Data Protection Officer (DPO)</strong>
              </p>
                <p className="text-gray-600 dark:text-gray-300">
                Email: dpo@couplesocials.com
              </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Personal Data Breach Notification</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In accordance with GDPR Articles 33 and 34:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>In the event of a personal data breach that poses a high risk to the rights and freedoms of users, the Company will notify affected individuals without undue delay.</li>
                <li>The Company will notify the appropriate supervisory authority within 72 hours of becoming aware of the breach, unless the breach is unlikely to result in risk to users.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company maintains internal protocols for detection, investigation, and mitigation of data breaches.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention Practices</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>operational service delivery</li>
                <li>compliance with legal and regulatory obligations</li>
                <li>dispute resolution</li>
                <li>fraud prevention</li>
                <li>security and auditing</li>
                <li>subscription and account management</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Retention periods are determined by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>the nature and sensitivity of data</li>
                <li>risk assessments</li>
                <li>applicable legal requirements</li>
                <li>the necessity of maintaining service continuity</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When retention requirements expire, data is anonymized or securely deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Right to Lodge a Complaint With a Supervisory Authority</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you believe your GDPR rights have been violated, you may lodge a complaint with your national or regional data protection authority.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A list of supervisory authorities can be found on the website of the <a href="https://edpb.europa.eu" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300" target="_blank" rel="noopener noreferrer">European Data Protection Board (EDPB)</a>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may also contact the Company's DPO directly to resolve concerns prior to contacting authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Updates to This GDPR Compliance Statement</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may update this Statement from time to time to reflect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>changes in data processing practices</li>
                <li>updates in legal or regulatory frameworks</li>
                <li>operational or organizational changes</li>
                <li>technological advances</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Revisions become effective upon posting. Users are encouraged to review this Statement periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For inquiries, concerns, or GDPR-related requests, contact:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Data Protection Officer:</strong><br />
                  Email: dpo@couplesocials.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>General Privacy Inquiries:</strong><br />
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

