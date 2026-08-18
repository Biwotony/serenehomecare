import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://SereneHomeCareServices.co.ke"),
  title: {
    default: "Serene Home Care Services | Eldoret",
    template: "%s",
  },
  description:
    "Professional home care in Eldoret, including elderly care, recovery support, home nursing, respite, rehabilitation and maternal support.",
  keywords: [
    "home care Eldoret",
    "elderly care Eldoret",
    "home nursing Eldoret",
    "Serene Home Care Services",
  ],
  openGraph: {
    title: "Serene Home Care Services",
    description: "Professional, person-centred home care in Eldoret.",
    type: "website",
    locale: "en_KE",
    url: "https://SereneHomeCareServices.co.ke",
    siteName: "Serene Home Care Services",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}
