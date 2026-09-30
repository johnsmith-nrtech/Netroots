import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Website Design & Development | Netroots Technologies",
  description:
    "Custom website design and development services from Netroots Technologies — responsive, fast, and built to convert, using modern frameworks like Next.js and React.",
  openGraph: {
    title: "Website Design & Development",
    description:
      "Responsive, fast websites built to convert, using modern frameworks like Next.js and React.",
    url: "/Solutions/web-design",
  },
};

const features = [
  {
    icon: "🎨",
    title: "Custom UI/UX Design",
    description:
      "Pixel-perfect, brand-aligned designs crafted around how your users actually browse and buy.",
  },
  {
    icon: "⚡",
    title: "Fast, Modern Builds",
    description:
      "Built with performance-first frameworks like Next.js and React for fast load times and smooth interactions.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "Every site we build looks and works great on desktop, tablet, and mobile from day one.",
  },
  {
    icon: "🛒",
    title: "E-commerce Ready",
    description:
      "Product catalogs, carts, and checkout flows built to convert, whether on Shopify, WooCommerce, or custom stacks.",
  },
  {
    icon: "🔧",
    title: "CMS Integration",
    description:
      "Easily manage your own content with WordPress, headless CMS, or custom admin panels, no developer needed for updates.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Clean, maintainable code and secure architecture that scales as your business and traffic grow.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Wireframing",
    description:
      "We map out your goals, audience, and site structure before a single pixel is designed.",
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Our designers and developers work in parallel to bring the wireframes to life, pixel by pixel, line by line.",
  },
  {
    step: "03",
    title: "Launch & Support",
    description:
      "We test across devices, launch your site, and stick around for ongoing support and improvements.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Web Design & Development
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Websites Built to <span className="text-blue-600">Perform</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We design and build fast, responsive websites that reflect your
            brand and turn visitors into customers. From simple landing
            pages to full-scale platforms.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What We Deliver
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
            Our Design & Development Process
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
            Ready to build a website that works for you?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s talk about your goals and put together a plan.
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