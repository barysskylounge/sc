import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. General Information and Interpretative Framework</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Disclaimer ("Disclaimer") applies to the use of the Couple Socials platform, including its website, web application, mobile application(s), content, features, digital components, and all associated services provided by Couple Socials (the "Company," used solely as a contractual designation). By accessing or using the Service, you acknowledge that you have read, understood, and accepted the provisions of this Disclaimer.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All information, features, and materials made available through the Service are provided strictly on an "as is," "as available," and "with all faults" basis, without warranties of any kind. The Company provides no assurances, guarantees, or representations regarding the accuracy, safety, reliability, or suitability of the Service or any content provided through it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. No Warranties of Any Kind</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the fullest extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>implied warranties of merchantability</li>
                <li>implied warranties of fitness for a particular purpose</li>
                <li>warranties arising from course of dealing or usage of trade</li>
                <li>warranties of non-infringement</li>
                <li>warranties relating to data accuracy, completeness, timeliness, or reliability</li>
                <li>warranties concerning availability, uptime, or uninterrupted access</li>
                <li>warranties regarding user behavior, interactions, communications, or content</li>
                <li>warranties regarding compatibility, suitability, or safety of meet-ups</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users acknowledge that the Company does not review, validate, or verify the identities, intentions, backgrounds, or information of other users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the maximum extent permitted by global law, the Company shall not be liable for any direct, indirect, incidental, consequential, punitive, exemplary, special, economic, or reputational damages arising from or related to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>use or inability to use the Service</li>
                <li>reliance on information provided on the platform</li>
                <li>loss of data, profits, business opportunities, or goodwill</li>
                <li>service interruptions, errors, or defects</li>
                <li>user-generated content, conduct, or misrepresentations</li>
                <li>offline activities, meetings, or events arranged through the platform</li>
                <li>decisions or actions taken by users based on communications or profiles</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Even if the Company or its representatives have been advised of the possibility of such damages, liability remains disclaimed to the fullest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User-Generated Content Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service contains content generated by users ("User Content"). The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not endorse, guarantee, or validate User Content</li>
                <li>does not review content for truthfulness, accuracy, legality, or completeness</li>
                <li>does not monitor conversations or evaluate user claims</li>
                <li>assumes no responsibility for any harm arising from reliance on User Content</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using the Service, you acknowledge and accept that you may be exposed to User Content that is offensive, inaccurate, misleading, harmful, incomplete, or otherwise objectionable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Website and Service Links</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service may contain links to external websites, applications, platforms, or services operated by third parties. The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not own or control third-party sites</li>
                <li>is not responsible for their content, privacy policies, data practices, or security</li>
                <li>makes no warranties regarding third-party reliability, legitimacy, or safety</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Accessing third-party sites is done at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Critical Disclaimer Regarding User Interactions, Meet-Ups, Events, and Conduct</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company and all individuals or entities operating under its umbrella ("Platform Parties") act solely as an intermediary technology provider enabling couples to discover, communicate, and interact. The Platform Parties do not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>supervise user interactions</li>
                <li>mediate disputes</li>
                <li>screen, verify, or authenticate user identities</li>
                <li>evaluate user backgrounds or intentions</li>
                <li>conduct criminal checks</li>
                <li>guarantee user compatibility, safety, or behavior</li>
                <li>oversee or manage meet-ups, events, or gatherings</li>
                <li>monitor offline activities, clubs, parties, or private arrangements</li>
                <li>provide safety assurances for any locations where users choose to meet</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Platform Parties expressly disclaim all liability, responsibility, and accountability for any and all:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>online or offline interactions</li>
                <li>meet-ups, gatherings, parties, or private events</li>
                <li>agreements, arrangements, or relationships formed between users</li>
                <li>physical, emotional, psychological, sexual, or financial harm</li>
                <li>unlawful behavior, misconduct, or violations of applicable laws</li>
                <li>deceptive, fraudulent, or misleading conduct</li>
                <li>injury, damage, loss, or harm of any kind</li>
                <li>activities involving user actions, choices, or personal decisions</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users acknowledge that all interactions and engagements are undertaken entirely at their own discretion and risk.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Platform Parties owe no duty of care, assume no supervisory obligation, and take no responsibility for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>user safety</li>
                <li>user well-being</li>
                <li>verification of user identity</li>
                <li>personal decisions involving meet-ups</li>
                <li>the legality or safety of physical locations</li>
                <li>any outcomes of user-initiated activities</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You are solely responsible for your personal safety, legal compliance, due diligence, and independent decision-making.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Service Availability and Technical Limitations</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>uninterrupted access to the Service</li>
                <li>the absence of defects, bugs, outages, or errors</li>
                <li>the availability of specific features or functionalities</li>
                <li>compatibility with all devices, networks, or operating systems</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service may be unavailable due to maintenance, upgrades, outages, network constraints, or other circumstances beyond the Company's control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. No Professional Advice</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All content on the Service—including text, images, messages, or user interactions—constitutes general information only. It does not constitute legal, medical, psychological, relationship, financial, or professional advice. Users should seek appropriate professional counsel where necessary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Indemnification Acknowledgment</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You agree that you, and you alone, are responsible for your actions both online and offline.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You agree to indemnify and hold harmless the Platform Parties from all claims, losses, liabilities, damages, expenses, or disputes arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>your conduct</li>
                <li>your decisions to meet or interact with others</li>
                <li>your violation of laws or regulations</li>
                <li>your misuse of the Service</li>
                <li>your User Content or representations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to This Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may update, revise, or modify this Disclaimer at any time. Changes take effect immediately upon publication. Continued use of the Service constitutes acceptance of all modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For inquiries regarding this Disclaimer, contact:
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

