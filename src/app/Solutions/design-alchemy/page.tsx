import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Design Alchemy | Brand & Creative Design | Netroots Technologies",
  description:
    "Netroots Technologies' Design Alchemy service blends branding, UI/UX, and creative design to turn your brand identity into a visual experience customers remember.",
  openGraph: {
    title: "Design Alchemy | Brand & Creative Design",
    description:
      "Branding, UI/UX, and creative design that turns your identity into a visual experience.",
    url: "/Solutions/design-alchemy",
  },
};

const features = [
  {
    icon: "🎨",
    title: "Brand Identity Design",
    description:
      "Logos, color systems, and typography that give your brand a distinct, memorable visual identity.",
  },
  {
    icon: "🖼️",
    title: "UI/UX Design",
    description:
      "Intuitive, user-centered interfaces for websites and apps, designed around real user behavior.",
  },
  {
    icon: "📐",
    title: "Design Systems",
    description:
      "Reusable, consistent design components and guidelines that keep every touchpoint on-brand.",
  },
  {
    icon: "📣",
    title: "Marketing Creatives",
    description:
      "Social media graphics, ad creatives, and campaign visuals that stop the scroll and drive engagement.",
  },
  {
    icon: "📦",
    title: "Packaging & Print",
    description:
      "Product packaging, brochures, and print collateral designed to make a strong offline impression.",
  },
  {
    icon: "🎬",
    title: "Motion & Animation",
    description:
      "Micro-interactions, explainer animations, and motion graphics that bring your brand to life.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your brand, audience, and competitors to uncover what should make you stand out.",
  },
  {
    step: "02",
    title: "Create",
    description:
      "Our designers craft concepts, iterate with your feedback, and refine until it feels exactly right.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "You receive polished, ready-to-use assets and guidelines to keep every future touchpoint consistent.",
  },
];

export default function DesignAlchemyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Design Alchemy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Turning Ideas into <span className="text-blue-600">Visual Gold</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We blend branding, UI/UX, and creative design into a cohesive
            visual identity that makes your business instantly recognizable
            and easy to trust.
          </p>
          <a
            href="/contectus"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Start Your Design Project
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Design Alchemy Covers
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
            Our Creative Process
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
            Ready to give your brand a visual identity it deserves?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Let&apos;s turn your ideas into designs your customers remember.
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