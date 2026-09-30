import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Brand Strategy Development | Netroots Technologies",
  description:
    "Netroots Technologies' brand strategy services help you define a clear positioning, voice, and identity that sets your business apart and builds lasting customer trust.",
  openGraph: {
    title: "Brand Strategy Development",
    description:
      "Define a clear positioning, voice, and identity that sets your business apart.",
    url: "/Solutions/brand-strategy",
  },
};

const features = [
  {
    icon: "🧭",
    title: "Brand Positioning",
    description:
      "A clear, defensible position in your market that tells customers exactly why you're the right choice.",
  },
  {
    icon: "🗣️",
    title: "Brand Voice & Messaging",
    description:
      "A consistent tone and message framework used across your website, ads, and every customer touchpoint.",
  },
  {
    icon: "🔍",
    title: "Market & Competitor Research",
    description:
      "In-depth analysis of your industry and competitors to uncover real gaps and opportunities to own.",
  },
  {
    icon: "👥",
    title: "Audience & Persona Mapping",
    description:
      "Detailed customer personas that guide smarter marketing, product, and content decisions.",
  },
  {
    icon: "📋",
    title: "Brand Guidelines",
    description:
      "A documented playbook covering visuals, tone, and messaging so your brand stays consistent as you grow.",
  },
  {
    icon: "🚀",
    title: "Go-to-Market Strategy",
    description:
      "A roadmap for launching new products or entering new markets with a clear, confident brand story.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your business, audience, competitors, and goals through structured research and conversations.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "We define your positioning, voice, and messaging framework, refined with your feedback along the way.",
  },
  {
    step: "03",
    title: "Rollout & Alignment",
    description:
      "We deliver clear brand guidelines and help align your team and touchpoints around the new strategy.",
  },
];

export default function BrandStrategyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Brand Strategy Development
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            A Brand That Knows <span className="text-blue-600">Who It Is</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We help you define a clear positioning, voice, and identity so
            your business stands out, builds trust, and stays consistent as
            it grows.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Build Your Brand Strategy
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Brand Strategy Includes
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
            Our Brand Strategy Process
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
            Ready to define a brand strategy that lasts?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s build a clear, confident foundation for your brand.
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