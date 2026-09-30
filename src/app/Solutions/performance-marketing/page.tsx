import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Performance Marketing | Paid Ads & ROI-Driven Campaigns | Netroots Technologies",
  description:
    "Netroots Technologies' performance marketing services deliver measurable ROI through data-driven paid ad campaigns across Google, Meta, and other platforms.",
  openGraph: {
    title: "Performance Marketing | Paid Ads & ROI-Driven Campaigns",
    description:
      "Measurable ROI through data-driven paid ad campaigns across Google, Meta, and more.",
    url: "/Solutions/performance-marketing",
  },
};

const features = [
  {
    icon: "🎯",
    title: "Paid Search (PPC)",
    description:
      "Google Ads campaigns built around high-intent keywords, optimized to lower cost-per-acquisition over time.",
  },
  {
    icon: "📱",
    title: "Social Media Advertising",
    description:
      "Meta, Instagram, TikTok, and LinkedIn ad campaigns tailored to reach and convert your target audience.",
  },
  {
    icon: "🛒",
    title: "E-commerce Campaigns",
    description:
      "Shopping ads and retargeting funnels built to drive purchases and reduce cart abandonment.",
  },
  {
    icon: "📊",
    title: "Conversion Rate Optimization",
    description:
      "Landing page and funnel testing to squeeze more conversions out of the traffic you're already paying for.",
  },
  {
    icon: "🔁",
    title: "Retargeting & Remarketing",
    description:
      "Bringing back warm visitors who didn't convert the first time with tailored follow-up campaigns.",
  },
  {
    icon: "📈",
    title: "Transparent ROI Reporting",
    description:
      "Clear dashboards showing spend, return, and cost-per-conversion — no vanity metrics, just results.",
  },
];

const process = [
  {
    step: "01",
    title: "Research & Planning",
    description:
      "We study your audience, competitors, and funnel to build a campaign strategy tied to real business goals.",
  },
  {
    step: "02",
    title: "Launch & Optimize",
    description:
      "We launch campaigns, monitor performance closely, and continuously optimize targeting, creatives, and bids.",
  },
  {
    step: "03",
    title: "Scale What Works",
    description:
      "We double down on winning campaigns and cut what isn't performing, scaling your ROI month over month.",
  },
];

export default function PerformanceMarketingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Performance Marketing
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Marketing That Pays for <span className="text-blue-600">Itself</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We run data-driven paid campaigns across Google, Meta, and other
            platforms — focused on measurable ROI, not just impressions and
            clicks.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Launch a Campaign
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our Performance Marketing Includes
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
            Our Performance Marketing Process
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
      <section className="bg-white px-6 md:px-20 pb-20">
        <div className="max-w-4xl mx-auto text-center bg-blue-50 rounded-2xl py-10 px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Ready to turn ad spend into real revenue?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s build a performance marketing plan around your growth goals.
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