import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Community Management | Social Media Management | Netroots Technologies",
  description:
    "Build an engaged, loyal audience with Netroots Technologies' community management services — social media management, content calendars, engagement, and reporting.",
  openGraph: {
    title: "Community Management | Social Media Management",
    description:
      "Social media management, content calendars, engagement, and reporting.",
    url: "/Solutions/community-management",
  },
};

const features = [
  {
    icon: "💬",
    title: "Daily Engagement",
    description:
      "Timely responses to comments, messages, and mentions that keep your community active and heard.",
  },
  {
    icon: "🗓️",
    title: "Content Calendars",
    description:
      "Consistent, planned posting schedules across platforms so your brand stays visible and relevant.",
  },
  {
    icon: "📸",
    title: "Social Content Creation",
    description:
      "Graphics, captions, and short-form content tailored to each platform's audience and format.",
  },
  {
    icon: "🚨",
    title: "Crisis & Reputation Management",
    description:
      "Fast, thoughtful responses to negative feedback that protect your brand's reputation online.",
  },
  {
    icon: "🤝",
    title: "Influencer & Partner Outreach",
    description:
      "Identifying and coordinating with creators and partners who align with your brand values.",
  },
  {
    icon: "📊",
    title: "Performance Reporting",
    description:
      "Clear monthly reports on engagement, follower growth, and sentiment so you see real impact.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    description:
      "We review your current channels and audience to build a community strategy aligned with your goals.",
  },
  {
    step: "02",
    title: "Engage & Grow",
    description:
      "We manage day-to-day interactions, content, and outreach to steadily grow an active community.",
  },
  {
    step: "03",
    title: "Report & Refine",
    description:
      "We track what's working and adjust the approach monthly to keep engagement and growth compounding.",
  },
];

export default function CommunityManagementPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Community Management
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Build a Community That <span className="text-blue-600">Stays</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We manage your social presence day-to-day: engaging your
            audience, creating consistent content, and protecting your brand
            reputation so you can focus on running your business.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Grow Your Community
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What We Handle for You
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
            Our Community Management Process
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
            Ready to build a loyal, engaged community?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s put together a community management plan around your goals.
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