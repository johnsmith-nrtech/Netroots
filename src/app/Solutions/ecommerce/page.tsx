import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "E-commerce Solutions | Online Store Development | Netroots Technologies",
  description:
    "Netroots Technologies builds high-converting e-commerce stores — custom storefronts, Shopify and WooCommerce development, payment integration, and SEO-ready product pages.",
  openGraph: {
    title: "E-commerce Solutions | Online Store Development",
    description:
      "High-converting stores — custom storefronts, Shopify/WooCommerce, payments, and SEO.",
    url: "/Solutions/ecommerce",
  },
};

const features = [
  {
    icon: "🛍️",
    title: "Custom Storefronts",
    description:
      "Fast, branded storefronts built with Next.js, Shopify, or WooCommerce, tailored to your product catalog.",
  },
  {
    icon: "💳",
    title: "Payment & Checkout Integration",
    description:
      "Secure, frictionless checkout flows with support for major payment gateways and local payment methods.",
  },
  {
    icon: "📦",
    title: "Inventory & Order Management",
    description:
      "Streamlined backend systems to manage stock, orders, and fulfillment as your store scales.",
  },
  {
    icon: "🔍",
    title: "Product Page SEO",
    description:
      "Optimized titles, descriptions, and structured data so your products actually get found on Google.",
  },
  {
    icon: "📱",
    title: "Mobile-First Shopping",
    description:
      "Smooth, fast mobile experiences designed for how most shoppers actually browse and buy today.",
  },
  {
    icon: "📈",
    title: "Conversion Optimization",
    description:
      "Cart abandonment recovery, upsells, and UX improvements focused on turning visitors into buyers.",
  },
];

const process = [
  {
    step: "01",
    title: "Plan & Structure",
    description:
      "We map out your catalog, categories, and customer journey before building anything.",
  },
  {
    step: "02",
    title: "Build & Integrate",
    description:
      "We develop your storefront and integrate payments, shipping, and inventory systems end-to-end.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "We launch your store and continue optimizing conversion rates, speed, and SEO after go-live.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            E-commerce Solutions
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Online Stores Built to <span className="text-blue-600">Sell</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We design and build fast, secure e-commerce stores, from custom
            storefronts to Shopify and WooCommerce builds, optimized to turn
            browsers into buyers.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Launch Your Store
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Our E-commerce Solutions Include
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
            Our E-commerce Development Process
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
            Ready to launch or grow your online store?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s build an e-commerce experience that converts.
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