import type { Metadata } from "next";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "Üsküdar Çekici | Burak Oto Kurtarma", template: "%s | Burak Oto Kurtarma" },
  description: "Üsküdar, Küplüce ve çevresinde 7/24 oto çekici, oto kurtarma ve yol yardım.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Üsküdar Çekici | Burak Oto Kurtarma",
    description: "Üsküdar ve çevre mahallelerde 7/24 oto çekici, oto kurtarma ve yol yardım.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Üsküdar Çekici | Burak Oto Kurtarma",
    description: "Üsküdar ve çevresinde 7/24 oto çekici, oto kurtarma ve yol yardım.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,700;0,800;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
