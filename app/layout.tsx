import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBot from "@/components/Cookie/CookieBot";

const poppinsSans = Poppins({
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GridRight",
  description: "GridRight automatisiert die Verwaltung von Leitungsrechten für Energieversorger, Telekommunikationsanbieter und Infrastrukturbetreiber. Günstiger, effizienter und zuverlässiger als manuelle Prozesse.",
  keywords: ["Wegerecht", "Leitungsrechte", "Netzbetreiber", "Grundbuch", "Energieversorger", "Telekommunikation", "Infrastruktur", "Automatisierung", "Dienstbarkeiten", "Eigentümerdaten"],
  authors: [{ name: "GridRight" }],
  creator: "GridRight",
  publisher: "GridRight",
  metadataBase: new URL("https://gridright.de"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon180x180.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gridright.de",
    title: "GridRight - Automatisierte Beschaffung von Wegerecht-Daten",
    description: "GridRight automatisiert die Verwaltung von Leitungsrechten für Energieversorger, Telekommunikationsanbieter und Infrastrukturbetreiber. Günstiger, effizienter und zuverlässiger.",
    siteName: "GridRight",
    images: [
      {
        url: "https://gridright.de/preload.png",
        width: 1200,
        height: 630,
        alt: "GridRight - Automatisierte Wegerecht-Daten Beschaffung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GridRight - Automatisierte Beschaffung von Wegerecht-Daten",
    description: "GridRight automatisiert die Verwaltung von Leitungsrechten für Energieversorger, Telekommunikationsanbieter und Infrastrukturbetreiber.",
    images: ["https://gridright.de/preload.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppinsSans.className} bg-[#eeeeee]`}>
        {/* Cookiebot Consent Management */}
        <CookieBot />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2GTCFXHYD0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2GTCFXHYD0');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
