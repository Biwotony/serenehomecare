import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MetaPixel } from "./meta-pixel";
import { localBusinessJsonLd, pageMetadata, siteUrl, websiteJsonLd } from "./seo";

const lato = localFont({
  src: [
    { path: "./fonts/lato-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: false,
});

const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/montserrat-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Serene Home Care Services | Eldoret",
    description:
      "Professional home care in Eldoret, including elderly care, recovery support, home nursing, respite, rehabilitation and maternal support.",
    path: "/",
  }),
  title: {
    default: "Serene Home Care Services | Eldoret",
    template: "%s",
  },
  keywords: [
    "home care Eldoret",
    "elderly care Eldoret",
    "home nursing Eldoret",
    "Serene Home Care Services",
  ],
  icons: {
    icon: "/serene-profile-logo.png",
    shortcut: "/serene-profile-logo.png",
    apple: "/serene-profile-logo.png",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "gsyY7pq1WtrTy3UPm37OmNKoOsbnbvvngM5mEdFhpj8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" className={`${lato.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
