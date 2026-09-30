import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Content Marketing | Blogs, SEO Content & Strategy | Netroots Technologies",
  description:
    "Netroots Technologies' content marketing services help you attract and convert customers with SEO-driven blogs, guides, and content strategy built around your audience.",
  openGraph: {
    title: "Content Marketing | Blogs, SEO Content & Strategy",
    description:
      "SEO-driven blogs, guides, and content strategy built around your audience.",
    url: "/Solutions/content-marketing",
  },
};

const features = [
  {
    icon: "✍️",
    title: "SEO Blog Writing",
    description:
      "Well-researched, keyword-optimized blog posts that drive organic traffic and answer real customer questions.",
  },
  {
    icon: "🗺️",
    title: "Content Strategy",
    description:
      "A clear content calendar and topic roadmap aligned with your audience's search intent and buying journey.",
  },
  {
    icon: "📄",
    title: "Landing Page Copy",
    description:
      "Conversion-focused copywriting for landing pages, product pages, and service pages.",
  },
  {
    icon: "📚",
    title: "Guides & Whitepapers",
    description:
      "In-depth, authoritative content that builds trust and positions your brand as an industry expert.",
  },
  {
    icon: "📧",
    title: "Email Content",
    description:
      "Newsletters and email sequences that keep your audience engaged and nudge them toward conversion.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    description:
      "Ongoing analysis of traffic, rankings, and engagement to refine what content to create next.",
  },
];

const process = [
  {
    step: "01",
    title: "Research & Planning",
    description:
      "We identify the topics and keywords your audience is actually searching for, and map out a content plan.",
  },
  {
    step: "02",
    title: "Create & Optimize",
    description:
      "We write, edit, and optimize content for both readers and search engines before publishing.",
  },
  {
    step: "03",
    title: "Measure & Improve",
    description:
      "We track performance and refine the strategy each month, doubling down on what drives results.",
  },
];

export default function ContentMarketingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Content Marketing
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Content That <span className="text-blue-600">Attracts & Converts</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We create SEO-driven blogs, guides, and copy that bring the right
            people to your site and move them closer to becoming customers.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Start Your Content Plan
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our Content Marketing Includes
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
            Our Content Marketing Process
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
            Ready to turn content into your growth engine?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s build a content strategy that attracts and converts your audience.
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