"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const blogData: Record<string, any> = {
  "boost-website-performance": {
    title: "Boost Your Website Performance in 2025",
    image: "/blog/blog1.jpg",
    content: [
      { type: "paragraph", text: "Website performance is no longer optional; it directly affects SEO rankings, user experience, and conversion rates. In 2025, users expect websites to load in under 2 seconds or they leave." },
      { type: "heading", text: "Why performance matters:" },
      { type: "list", items: [
        "Faster sites rank higher on search engines",
        "Better UX increases engagement time",
        "Higher speed improves conversions and sales",
        "Reduces bounce rate significantly"
      ]},
      { type: "heading", text: "Key optimization strategies:" },
      { type: "list", items: [
        "Use modern frameworks like Next.js for SSR & SSG",
        "Compress and lazy-load images",
        "Optimize fonts and remove unused font weights",
        "Enable browser caching and CDN delivery",
        "Reduce unused JavaScript and CSS",
        "Monitor Core Web Vitals regularly"
      ]},
      { type: "heading", text: "Tools to use:" },
      { type: "list", items: [
        "Google PageSpeed Insights",
        "Lighthouse",
        "WebPageTest",
        "GTmetrix"
      ]},
      { type: "paragraph", text: "Fast websites don’t just look better; they perform better and earn more revenue." }
    ]
  },

  "top-10-seo-strategies": {
    title: "Top 10 SEO Strategies for Modern Websites",
    image: "/blog/blog2.jpg",
    content: [
      { type: "paragraph", text: "SEO in 2025 is smarter, user-focused, and AI-assisted." },
      { type: "heading", text: "Top modern SEO strategies:" },
      { type: "list", items: [
        "Publish high-quality, intent-based content",
        "Use semantic and long-tail keywords",
        "Optimize page speed and performance",
        "Mobile-first and responsive design",
        "Structured data and schema markup",
        "Strong internal linking structure",
        "High-authority backlink building",
        "UX optimization for engagement",
        "Optimize Core Web Vitals",
        "Use AI-powered SEO tools"
      ]},
      { type: "paragraph", text: "SEO is no longer about tricks; it’s about providing real value. Consistent SEO efforts bring long-term organic traffic and authority." }
    ]
  },

  "website-redesign-tips": {
    title: "Website Redesign: When and Why to Do It",
    image: "/blog/blog3.jpg",
    content: [
      { type: "paragraph", text: "A website redesign is a strategic decision, not just a visual upgrade." },
      { type: "heading", text: "Signs you need a redesign:" },
      { type: "list", items: [
        "Outdated design that hurts credibility",
        "Low conversion rates",
        "Poor mobile experience",
        "Slow loading speed",
        "Branding mismatch",
        "Weak SEO performance"
      ]},
      { type: "heading", text: "Benefits of redesigning:" },
      { type: "list", items: [
        "Improved UX and navigation",
        "Higher engagement and conversions",
        "Better SEO performance",
        "Modern branding and trust",
        "Faster load times"
      ]},
      { type: "paragraph", text: "A successful redesign focuses on users, performance, and business goals, not just aesthetics." }
    ]
  },

  "mobile-optimization-guide": {
    title: "Maximizing Mobile Optimization for 2025",
    image: "/blog/blog4.jpg",
    content: [
      { type: "paragraph", text: "Over 70% of global web traffic comes from mobile devices." },
      { type: "heading", text: "Why mobile optimization matters:" },
      { type: "list", items: [
        "Google uses mobile-first indexing",
        "Poor mobile UX increases bounce rates",
        "Mobile shoppers expect speed and simplicity"
      ]},
      { type: "heading", text: "Best mobile practices:" },
      { type: "list", items: [
        "Responsive and flexible layouts",
        "Fast-loading pages",
        "Touch-friendly buttons and spacing",
        "Optimized images and media",
        "Minimal popups and distractions"
      ]},
      { type: "paragraph", text: "Mobile-first websites win more users, trust, and conversions." }
    ]
  },

  "content-marketing-strategies": {
    title: "Effective Content Marketing Strategies",
    image: "/blog/blog5.jpg",
    content: [
      { type: "paragraph", text: "Content marketing builds trust, authority, and long-term growth." },
      { type: "heading", text: "Winning content strategies:" },
      { type: "list", items: [
        "Solve real user problems",
        "Write SEO-optimized blog posts",
        "Create video and visual content",
        "Maintain consistent publishing",
        "Use clear CTAs and funnels",
        "Repurpose content across platforms"
      ]},
      { type: "heading", text: "Benefits of strong content:" },
      { type: "list", items: [
        "Increased organic traffic",
        "Better brand authority",
        "Higher conversion rates",
        "Long-term ROI"
      ]},
      { type: "paragraph", text: "Great content doesn’t sell aggressively; it educates and converts naturally." }
    ]
  },

  "core-web-vitals-guide": {
    title: "Understanding Core Web Vitals",
    image: "/blog/blog6.jpg",
    content: [
      { type: "paragraph", text: "Core Web Vitals are Google’s performance metrics for user experience." },
      { type: "heading", text: "The three main metrics:" },
      { type: "list", items: [
        "LCP (Largest Contentful Paint) – loading speed",
        "FID (First Input Delay) – interactivity",
        "CLS (Cumulative Layout Shift) – visual stability"
      ]},
      { type: "heading", text: "Why they matter:" },
      { type: "list", items: [
        "Direct ranking factor",
        "Better UX and retention",
        "Lower bounce rates"
      ]},
      { type: "paragraph", text: "Optimizing Core Web Vitals improves both SEO and user satisfaction." }
    ]
  },

  "ai-website-growth": {
    title: "Leveraging AI Tools for Website Growth",
    image: "/blog/blog7.jpg",
    content: [
      { type: "paragraph", text: "AI is transforming how websites grow and scale." },
      { type: "heading", text: "AI-powered benefits:" },
      { type: "list", items: [
        "Smart SEO optimization",
        "AI chatbots for customer support",
        "Automated content creation",
        "Advanced analytics and insights",
        "Personalized user experiences"
      ]},
      { type: "heading", text: "Popular AI tools:" },
      { type: "list", items: [
        "Chatbots",
        "AI copywriters",
        "Analytics platforms",
        "Recommendation engines"
      ]},
      { type: "paragraph", text: "Websites using AI gain a competitive advantage in speed, personalization, and efficiency." }
    ]
  },

  "ecommerce-ux-tips": {
    title: "E-commerce UX Tips to Increase Sales",
    image: "/blog/blog8.jpg",
    content: [
      { type: "paragraph", text: "User experience directly impacts e-commerce revenue." },
      { type: "heading", text: "Key UX improvements:" },
      { type: "list", items: [
        "Simple and fast checkout process",
        "Clear CTAs and buttons",
        "Trust signals and reviews",
        "Easy navigation and filters",
        "Mobile-optimized shopping"
      ]},
      { type: "heading", text: "UX benefits:" },
      { type: "list", items: [
        "Reduced cart abandonment",
        "Higher conversion rates",
        "Better customer satisfaction",
        "Increased repeat purchases"
      ]},
      { type: "paragraph", text: "A smooth shopping experience turns visitors into loyal customers." }
    ]
  },
};


export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogData[slug as string];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <header className="relative h-[60vh]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-6">
            {blog.title}
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {blog.content.map((block: any, index: number) => {
          if (block.type === "paragraph") {
            return <p key={index} className="text-gray-700">{block.text}</p>;
          }
          if (block.type === "heading") {
            return <h3 key={index} className="text-2xl font-bold mt-6">{block.text}</h3>;
          }
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc list-inside space-y-1 text-gray-700">
                {block.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            Back to Blogs
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
