import type { MetadataRoute } from "next";
import { services } from "./site-data";
import { siteUrl } from "./seo";

const staticRoutes = [
  "",
  "/services",
  "/how-care-works",
  "/about",
  "/resources",
  "/faq",
  "/careers",
  "/referrals",
  "/payments",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path, index) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : path === "/services" ? 0.9 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
