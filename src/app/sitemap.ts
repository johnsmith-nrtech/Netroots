import type { MetadataRoute } from "next";

const baseUrl = "https://www.netrootstech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/Aboutus",
    "/WhyUs",
    "/Careers",
    "/blog",
    "/contectus",
    "/faq",
    "/terms-and-conditions",
    "/privacy-policy",
    "/Solutions",
    "/Solutions/seo",
    "/Solutions/web-design",
    "/Solutions/design-alchemy",
    "/Solutions/community-management",
    "/Solutions/performance-marketing",
    "/Solutions/brand-strategy",
    "/Solutions/ecommerce",
    "/Solutions/content-marketing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}