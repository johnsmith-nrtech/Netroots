import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Netroots Technologies",
  description:
    "Learn how Netroots Technologies collects, uses, and protects your personal data, including information about cookies, data security, and your privacy rights.",
  openGraph: {
    title: "Privacy Policy | Netroots Technologies",
    description:
      "Learn how Netroots Technologies collects, uses, and protects your personal data.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black px-6 md:px-20 pt-32 pb-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last Updated: 28th September 2026</p>

        <p className="text-gray-700 mb-6">
          At Netroots Technologies (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), we value
          your privacy and are committed to protecting your personal data. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information when you visit{" "}
          <a
            href="https://www.netrootstech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            https://www.netrootstech.com
          </a>
        </p>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">1. Information We Collect</h2>
            <p className="mb-2">
              We collect several types of information from and about users of our website:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number,
                company name, and project requirements submitted voluntarily through contact
                forms, quote requests, or direct correspondence.
              </li>
              <li>
                <strong>Automated Data / Usage Details:</strong> IP addresses, browser types,
                operating systems, referring URLs, pages visited, and duration of visits
                collected via cookies and tracking technology.
              </li>
              <li>
                <strong>Client & Job Applicant Data:</strong> Resumes, work history, or client
                onboarding details submitted for employment or business engagement.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Respond to inquiries, send service quotes, and deliver requested technical services.</li>
              <li>Improve our website layout, user experience, and service offerings.</li>
              <li>Send administrative communications, technical notices, or promotional updates (you may opt out at any time).</li>
              <li>Maintain website security, prevent fraud, and comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar tracking tools (such as Google Analytics)
              to analyze web traffic and user behavior. You can set your browser to refuse all or
              some cookies, but doing so may limit certain site functionalities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">4. Disclosure & Sharing of Information</h2>
            <p className="mb-2">
              We do not sell, rent, or trade your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Service Providers:</strong> Trusted third-party vendors who assist in
                website hosting, analytics, CRM management, or communication (under
                confidentiality obligations).
              </li>
              <li>
                <strong>Legal Compliance:</strong> Authorities or regulators if required by law,
                court order, or governmental regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> Parties involved in a merger, acquisition,
                or sale of company assets.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures (such as SSL
              encryption and access controls) to protect your personal data against
              unauthorized access, loss, or disclosure. However, no internet transmission is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, complete business contracts, or comply with
              statutory requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">7. Your Rights</h2>
            <p className="mb-2">
              Depending on your location (e.g., under GDPR, CCPA, or applicable data protection
              laws), you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request erasure of your personal data (&quot;Right to be Forgotten&quot;).</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time via the &quot;Unsubscribe&quot; link in emails.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us at [Insert Contact Email].
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites not operated by us. We encourage
              you to review the privacy policies of every site you visit, as we have no control
              over third-party practices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy periodically. Any changes will be posted on this
              page with an updated &quot;Last Updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">10. Contact Us</h2>
            <p>For questions or concerns regarding this Privacy Policy, reach out to us at:</p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:privacy@netrootstech.com"
                className="text-blue-600 hover:underline"
              >
                privacy@netrootstech.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.netrootstech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.netrootstech.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}