import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Netroots Technologies",
  description:
    "Frequently asked questions about Netroots Technologies' services, pricing, project timelines, and how to get started with your project.",
  openGraph: {
    title: "FAQs | Netroots Technologies",
    description:
      "Answers to common questions about working with Netroots Technologies.",
    url: "/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}