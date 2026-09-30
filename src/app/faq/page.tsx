"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What services does Netroots Technologies offer?",
    answer:
      "We offer custom software development, web and mobile application development, digital marketing, SEO, UI/UX design, cloud architecture, AI solutions, Web3, and related technology consulting services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on scope and complexity. A simple website may take a few weeks, while a full-scale application or ERP system can take a few months. We share a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes, we work with clients globally. Our team is set up to collaborate across time zones with regular updates, calls, and shared project boards.",
  },
  {
    question: "How is pricing structured for a project?",
    answer:
      "We offer both fixed-price and dedicated-team engagement models, depending on your project needs. Pricing is discussed and confirmed upfront in a Statement of Work (SOW) before any work begins.",
  },
  {
    question: "Can you help with an existing product or codebase?",
    answer:
      "Absolutely. We regularly take over, audit, and improve existing codebases, whether it's fixing bugs, adding new features, or planning a larger redesign or migration.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just reach out through our Contact Us page or book a strategy call. We'll schedule a quick discovery conversation to understand your goals and propose the right approach.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <section className="bg-white text-black px-6 md:px-20 pt-32 pb-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Answers to common questions about working with Netroots Technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-blue-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-1 text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center bg-blue-50 rounded-2xl py-10 px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Still have questions?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
          </p>
          <a
            href="/contectus"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}