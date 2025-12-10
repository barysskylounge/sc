import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OnlineSafetyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Online Safety Education
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Purpose of This Page</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Online Safety Education page ("Page") provides users of Couple Socials (the "Company," used solely as a contractual designation) with general information and best practices for safer online interactions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This Page:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>is informational only,</li>
                <li>does not constitute legal, professional, or safety advice, and</li>
                <li>does not create any duty or responsibility for the Company.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are solely responsible for their own safety, decisions, conduct, and risk management when using the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Understanding Online Interaction Risks</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Online interaction—whether in social, romantic, or intimate contexts—carries inherent risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>misrepresentation and deceptive behavior</li>
                <li>impersonation or identity falsification</li>
                <li>harassment or unwanted attention</li>
                <li>emotional manipulation or exploitation</li>
                <li>sharing of inaccurate or misleading information</li>
                <li>malicious intent or predatory behavior</li>
                <li>phishing, scams, or financial fraud</li>
                <li>exposure to explicit or inappropriate content</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not screen identities, monitor communication, or verify user intentions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users must independently evaluate the credibility and trustworthiness of others.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Safeguarding Personal Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Protecting your privacy is essential. Users should avoid sharing:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>full names or legal names</li>
                <li>home address or workplace</li>
                <li>personal phone numbers</li>
                <li>financial information</li>
                <li>government IDs or documents</li>
                <li>personal email unless necessary</li>
                <li>details about daily routines or private life</li>
                <li>sensitive intimate or relationship information</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Once shared, information cannot be guaranteed confidential.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company is not responsible for how users handle or distribute information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Safe Communication Practices</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When communicating with other couples online:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Proceed at a comfortable pace</li>
                <li>Avoid oversharing early on</li>
                <li>Watch for red flags or inconsistencies</li>
                <li>Decline video calls or media requests if uncomfortable</li>
                <li>Disengage immediately from interactions that feel abusive or coercive</li>
                <li>Verify profiles gradually and cautiously</li>
                <li>Avoid sending sensitive or compromising material</li>
                <li>Be cautious of users who escalate intimacy too quickly</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Remember:
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Any pressure, manipulation, or guilt-based persuasion is a warning sign.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Recognizing Red Flags</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users should remain alert to behaviors or patterns such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>persistent attempts to move conversations off-platform</li>
                <li>refusal to show both partners if claiming to be a couple</li>
                <li>requests for money, gifts, or financial assistance</li>
                <li>inconsistent stories or sudden changes in identity</li>
                <li>overly romantic or intimate messaging early on</li>
                <li>aggressive persuasion to meet offline</li>
                <li>pushing for explicit photos, videos, or content</li>
                <li>manipulation, gaslighting, or emotional pressure</li>
                <li>threats, ultimatums, or intimidation</li>
                <li>promises that feel "too good to be true"</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Any of these may indicate malicious intent or unsafe circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Digital Security and Device Protection</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users should adopt digital security practices such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>enabling two-factor authentication (where applicable)</li>
                <li>using strong, unique passwords</li>
                <li>avoiding shared or public devices</li>
                <li>keeping device software updated</li>
                <li>avoiding clicking on suspicious links</li>
                <li>not downloading unsolicited files</li>
                <li>using reputable antivirus and anti-malware tools</li>
                <li>logging out after each session</li>
                <li>restricting app permissions on mobile devices</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Digital safety reduces the risk of data breaches, account compromise, or identity theft.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Sharing Photos, Videos, and Media Safely</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users sharing photos or videos should:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>avoid showing identifiable backgrounds or landmarks</li>
                <li>exclude faces if anonymity is preferred</li>
                <li>disable geotagging and metadata</li>
                <li>avoid sharing explicit material unless fully comfortable</li>
                <li>assume any shared content might be saved or redistributed</li>
                <li>use caution when sharing intimate or sensitive content</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not control, monitor, or retrieve content once exchanged between users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Emotional and Psychological Online Safety</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Online dynamics can influence emotional well-being. Users should:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>avoid emotionally dependent relationships with strangers</li>
                <li>protect mental health by taking breaks when needed</li>
                <li>discuss potential concerns with their partner</li>
                <li>watch for manipulation or emotional abuse</li>
                <li>avoid responding to hostile or toxic messages</li>
                <li>set firm personal and relational boundaries</li>
                <li>disengage if any interaction affects emotional stability</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not act as a mediator or counselor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Third-Party Application Risks</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When using external apps or services (e.g., messaging apps, cloud sharing, location tools), users should be aware:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>third-party policies differ</li>
                <li>data may be stored outside your jurisdiction</li>
                <li>privacy controls may vary</li>
                <li>content may be saved without your knowledge</li>
                <li>security risks increase outside the platform</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users assume all risks when transitioning off the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Reporting Harmful or Suspicious Activity</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are encouraged to report:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>harassment</li>
                <li>threats</li>
                <li>impersonation</li>
                <li>suspected fraud</li>
                <li>inappropriate or abusive content</li>
                <li>violations of the Terms of Service</li>
                <li>boundary violations</li>
                <li>safety concerns</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reporting channel:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> safety@couplesocials.com
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company may respond at its discretion but does:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>not guarantee investigations,</li>
                <li>not guarantee outcomes,</li>
                <li>not act as arbitrator or mediator,</li>
                <li>not assume responsibility for user safety.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If imminent danger exists, users must contact local authorities immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Understanding Platform Limitations</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not monitor interactions</li>
                <li>does not guarantee safety</li>
                <li>does not verify users' identities</li>
                <li>does not intervene in disputes</li>
                <li>does not screen or supervise meet-ups</li>
                <li>does not enforce personal boundaries</li>
                <li>does not regulate sexual or intimate activity</li>
                <li>does not mediate conflicts or incidents</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users must take independent steps to protect their safety online and offline.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Your Responsibility</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using the Service, you acknowledge and accept that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>you are responsible for your own online safety</li>
                <li>you must evaluate risks independently</li>
                <li>the Company is not liable for misconduct by other users</li>
                <li>decisions to share information or meet others are entirely your own</li>
                <li>digital interactions may result in unpredictable outcomes</li>
                <li>you must act cautiously, respectfully, and responsibly at all times</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For safety-related questions, non-emergency issues, or concerns about online risk:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> safety@couplesocials.com
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  (Emergency situations must be directed to local law enforcement or relevant authorities. The Company does not provide emergency services.)
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

