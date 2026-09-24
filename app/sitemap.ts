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

const routeLastModified: Record<string, string> = {
  "": "2026-09-24T08:37:08-07:00",
  "/services": "2026-09-21T01:07:55-07:00",
  "/how-care-works": "2026-09-24T09:20:43-07:00",
  "/about": "2026-09-24T09:20:43-07:00",
  "/resources": "2026-09-21T01:07:55-07:00",
  "/faq": "2026-09-21T01:07:55-07:00",
  "/careers": "2026-09-24T09:20:43-07:00",
  "/referrals": "2026-09-21T01:07:55-07:00",
  "/payments": "2026-09-21T01:07:55-07:00",
  "/privacy": "2026-09-22T11:30:39-07:00",
};

const servicesLastModified = new Date("2026-09-21T14:44:59-07:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(routeLastModified[path]),
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: servicesLastModified,
    })),
  ];
}
