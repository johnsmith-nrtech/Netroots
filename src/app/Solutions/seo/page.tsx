import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Rank #1 on Google | SEO Services | Netroots Technologies",
  description:
    "Grow your organic traffic and rank higher on Google with Netroots Technologies' data-driven SEO services — technical SEO, on-page optimization, content strategy, and link building.",
  openGraph: {
    title: "Rank #1 on Google | SEO Services",
    description:
      "Data-driven SEO services — technical audits, on-page optimization, and link building.",
    url: "/Solutions/seo",
  },
};

const features = [
  {
    icon: "🔍",
    title: "Technical SEO Audits",
    description:
      "We identify and fix crawlability, indexing, site speed, and structure issues holding your rankings back.",
  },
  {
    icon: "📝",
    title: "On-Page Optimization",
    description:
      "Keyword-optimized titles, meta descriptions, headings, and content structure built around real search intent.",
  },
  {
    icon: "🔗",
    title: "Link Building",
    description:
      "Ethical, high-authority backlink strategies that build long-term domain trust and rankings.",
  },
  {
    icon: "📊",
    title: "Keyword Research",
    description:
      "In-depth research to target keywords your customers actually search for — balancing volume and competition.",
  },
  {
    icon: "📈",
    title: "Performance Tracking",
    description:
      "Transparent monthly reporting on rankings, traffic, and conversions so you always know what's working.",
  },
  {
    icon: "🛒",
    title: "E-commerce SEO",
    description:
      "Product page optimization, category structuring, and technical fixes tailored for online stores.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Research",
    description:
      "We analyze your current site, competitors, and target keywords to build a clear roadmap.",
  },
  {
    step: "02",
    title: "Strategy & Optimization",
    description:
      "We implement technical fixes, optimize content, and build authority through quality backlinks.",
  },
  {
    step: "03",
    title: "Track & Scale",
    description:
      "We monitor rankings and traffic monthly, refining the strategy to keep growth compounding.",
  },
];

export default function SeoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            SEO Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Rank #1 on <span className="text-blue-600">Google</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We help businesses climb search rankings and drive sustainable,
            organic traffic through data-driven SEO strategies tailored to
            your industry.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Get a Free SEO Audit
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our SEO Services Include
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <span className="text-blue-600 font-bold text-2xl">
                  {item.step}
                </span>
                <h3 className="font-semibold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 md:px-20 pb-20 pt-10">
        <div className="max-w-4xl mx-auto text-center bg-blue-50 rounded-2xl py-10 px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Ready to grow your organic traffic?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s build an SEO strategy tailored to your business goals.
          </p>
          <a
            href="/contectus"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}