import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Netroots Technologies",
  description:
    "Read the Terms & Conditions governing the use of Netroots Technologies' website and services, including intellectual property, client agreements, and liability.",
  openGraph: {
    title: "Terms & Conditions | Netroots Technologies",
    description:
      "Read the Terms & Conditions governing the use of Netroots Technologies' website and services.",
    url: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black px-6 md:px-20 pt-32 pb-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-8">Last Updated: 28th September 2026</p>

        <p className="text-gray-700 mb-6">
          Welcome to Netroots Technologies (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          These Terms & Conditions govern your access to and use of our website{" "}
          <a
            href="https://www.netrootstech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            https://www.netrootstech.com
          </a> and any services provided by Netroots Technologies.
          By accessing or using our website and services, you agree to be bound by these Terms.
          If you do not agree, please do not use our website or services.
        </p>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">1. Services Offered</h2>
            <p>
              Netroots Technologies provides custom software development, web and mobile
              application development, digital marketing, SEO, UI/UX design, cloud
              architecture, AI solutions, Web3, and related technology consulting services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">2. Intellectual Property Rights</h2>
            <p className="mb-2">
              <strong>Website Content:</strong> All text, graphics, logos, software, designs,
              and materials on this site are the intellectual property of Netroots Technologies
              or its licensors and are protected by applicable intellectual property laws.
            </p>
            <p>
              <strong>Client Deliverables:</strong> Ownership of custom code, software, or
              marketing assets developed for clients shall be governed by specific Master
              Services Agreements (MSA) or Statements of Work (SOW) executed between the
              client and Netroots Technologies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">3. User Obligations & Acceptable Use</h2>
            <p className="mb-2">You agree to use our website only for lawful purposes. You shall not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Violate any applicable local, national, or international laws or regulations.</li>
              <li>Attempt to gain unauthorized access to our systems, website servers, or databases.</li>
              <li>Introduce malicious code, viruses, trojans, or harmful software to the site.</li>
              <li>Scrape, reverse-engineer, or re-sell information or services from this website without explicit written consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">4. Client Agreements & Service Terms</h2>
            <p>
              Proposals, quotes, and Statements of Work (SOW) provided via this website or
              directly by our team are subject to separate contract terms. In the event of a
              conflict between these Terms & Conditions and a signed client contract/MSA, the
              signed contract shall take precedence.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">5. Third-Party Links & Integrations</h2>
            <p>
              Our website may contain links to third-party websites or services (e.g., payment
              gateways, analytics providers, partners). We are not responsible for the content,
              privacy policies, or practices of any third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Netroots Technologies shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages (including loss of 
              profits, data, or business opportunities) arising out of or in connection with your use 
              of our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">7. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either express or implied,
              including fitness for a particular purpose or non-infringement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Netroots Technologies, its
              directors, employees, and agents from any claims, damages, liabilities, or
              expenses arising from your violation of these Terms or misuse of the website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">9. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              [Insert Jurisdiction, e.g., State of Pennsylvania, USA / Ireland / Pakistan,
              depending on your primary legal registration]. Any disputes arising under these
              terms shall be subject to the exclusive jurisdiction of the local courts.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">10. Contact Information</h2>
            <p>
              If you have questions regarding these Terms & Conditions, please contact us:
            </p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:legal@netrootstech.com"
                className="text-blue-600 hover:underline"
              >
                legal@netrootstech.com
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