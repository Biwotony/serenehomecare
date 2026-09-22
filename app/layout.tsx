import type { Metadata } from "next";
import "@fontsource/lato/latin-400.css";
import "@fontsource/lato/latin-700.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";
import "@fontsource/pt-sans/latin-400.css";
import "@fontsource/pt-sans/latin-700.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-600.css";
import "@fontsource/roboto/latin-700.css";
import "./globals.css";
import { MetaPixel } from "./meta-pixel";
import { localBusinessJsonLd, pageMetadata, siteUrl } from "./seo";

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
  other: {
    "codex-preview": "development",
  },
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
    <html lang="en-KE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
