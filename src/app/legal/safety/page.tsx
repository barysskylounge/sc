import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Safety Guidelines
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Purpose of These Guidelines</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Safety Guidelines ("Guidelines") are intended to help users navigate the Couple Socials platform responsibly and to promote safer interactions both online and offline. These Guidelines are advisory only and do not create any legal obligations or duties for Couple Socials ("Company," used solely as a contractual designation).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users remain solely responsible for their personal safety, conduct, decisions, privacy, and well-being when using the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Critical Notice and User Responsibility</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Couple Socials acts solely as a digital platform that enables couples to discover, communicate, and interact with other couples. The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not verify user identity, background, criminal history, or intentions</li>
                <li>does not monitor or supervise interactions</li>
                <li>does not screen or authenticate users</li>
                <li>does not arrange, organize, or oversee offline meet-ups</li>
                <li>does not guarantee compatibility, safety, or trustworthiness</li>
                <li>does not offer protection, mediation, or conflict resolution</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All interactions—including online communication, video calls, gatherings, and in-person meet-ups—occur entirely at the user's own risk.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are responsible for exercising caution, conducting their own due diligence, evaluating risks, and making independent decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. General Online Safety Practices</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To reduce risk while interacting with others on the platform, users are encouraged to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Avoid sharing personal, identifying, financial, or sensitive information with strangers.</li>
                <li>Use caution when providing location details—avoid revealing home addresses or private places.</li>
                <li>Enable privacy settings on devices and protect confidential media.</li>
                <li>Maintain control over what content you choose to share and with whom.</li>
                <li>Be cautious of users who pressure you for personal information, financial assistance, or inappropriate content.</li>
                <li>Report suspicious behavior, harassment, or fraud immediately.</li>
                <li>Trust your instinct—discontinue communication if something feels unsafe or uncomfortable.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company assumes no responsibility for user decisions or consequences arising from online communication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Offline Safety and Meet-Up Precautions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you choose to meet other users offline, you should:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Meet only in public, well-lit, and neutral locations for initial interactions.</li>
                <li>Inform a trusted friend or relative of your location and plans.</li>
                <li>Arrange independent transportation; avoid relying on others for pickup or drop-off.</li>
                <li>Keep personal belongings secure and avoid carrying large sums of money.</li>
                <li>Avoid consuming substances that impair judgment or situational awareness.</li>
                <li>Leave immediately if you feel unsafe or uncomfortable at any point.</li>
                <li>Establish clear boundaries and expectations with the other couple beforehand.</li>
                <li>Prioritize communication and consent at all stages.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company cannot guarantee user safety, oversee meet-ups, or intervene in any incident occurring offline.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Emotional, Relationship, and Boundary Safety</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Couples engaging with others should:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Communicate openly with each other before interacting with others on the platform.</li>
                <li>Agree on mutual boundaries and expectations.</li>
                <li>Respect each partner's comfort level, safety needs, and emotional limits.</li>
                <li>Avoid engaging in activities that create pressure, coercion, or emotional distress.</li>
                <li>Stop immediately if either partner expresses discomfort or concern.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company does not provide relationship counseling, mediation, or conflict support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Sexual Safety and Consent</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If users engage in sexual or intimate activities with others—online or offline—they do so entirely at their own discretion and risk. The Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not monitor, supervise, or regulate sexual behavior</li>
                <li>does not endorse or facilitate sexual encounters</li>
                <li>does not provide guarantees or oversight regarding consent</li>
                <li>does not assume any responsibility for physical, sexual, emotional, psychological, or relational consequences</li>
                <li>does not mediate disputes arising from intimate activities</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users should:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>Ensure clear, explicit, and ongoing consent from all involved parties</li>
                <li>Never pressure or coerce others into any activity</li>
                <li>Use adequate protection to safeguard sexual health when relevant</li>
                <li>Immediately withdraw from any situation that feels unsafe or non-consensual</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Consent must be voluntary, mutual, informed, specific, and reversible at all times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Avoiding Fraud, Scams, and Deceptive Behavior</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users should exercise caution when interacting with individuals who:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>request money, gifts, or financial assistance</li>
                <li>attempt to move conversations off-platform urgently</li>
                <li>provide inconsistent, incomplete, or suspicious information</li>
                <li>use aggressive persuasion tactics or emotional manipulation</li>
                <li>ask for explicit content early in conversation</li>
                <li>appear to be impersonating someone else</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company is not responsible for financial losses, scams, fraud, impersonation, or deceptive conduct perpetrated by users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Reporting Suspicious or Harmful Activity</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Users are encouraged to report conduct that appears:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>abusive</li>
                <li>fraudulent</li>
                <li>deceptive</li>
                <li>harassing</li>
                <li>threatening</li>
                <li>illegal</li>
                <li>inappropriate</li>
                <li>violating the Terms of Service</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While the Company may take action where appropriate, the Company:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>does not guarantee response times</li>
                <li>does not guarantee investigation outcomes</li>
                <li>does not guarantee removal or banning of other users</li>
                <li>does not assume responsibility for harms experienced before, during, or after reporting</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reports may be submitted via the appropriate in-platform reporting tools or support channels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Personal Safety Is the User's Sole Responsibility</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Guidelines are advisory and informational. They do not constitute legal instructions, professional safety advice, or a guarantee of protection. Users are solely responsible for evaluating risk and making informed decisions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Company and all Platform Parties expressly disclaim:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li>any duty of care</li>
                <li>any obligation to monitor user behavior</li>
                <li>any responsibility for harm, misconduct, or unlawful activity</li>
                <li>any liability for outcomes arising from user interactions or choices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For safety-related concerns or reports, users may contact:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> safety@couplesocials.com
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  (For reporting only. Emergency assistance must be sought from local authorities.)
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

