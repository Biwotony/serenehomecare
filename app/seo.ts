import type { Metadata } from "next";
import { contact, services } from "./site-data";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://serene-home-care.vercel.app"
).replace(/\/$/, "");

const socialImage = {
  url: "/serene-social-v2.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Serene Home Care Services — professional home care in Eldoret",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_KE",
      siteName: "Serene Home Care Services",
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: socialImage.url,
          alt: socialImage.alt,
        },
      ],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Serene Home Care Services",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}${socialImage.url}`,
  description:
    "Professional, person-centred home care including recovery support, elderly care, home nursing, respite, rehabilitation and maternal support in Eldoret.",
  telephone: contact.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kenyatta Street",
    addressLocality: "Eldoret",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "City",
    name: "Eldoret",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.phoneHref,
    contactType: "customer service",
    areaServed: "KE",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home care services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        areaServed: "Eldoret, Kenya",
        url: `${siteUrl}/services/${service.slug}`,
      },
    })),
  },
};
