import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Sıvı İzolasyon Uzmanı - İzmir, Çeşme, Aydın`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "sıvı izolasyon",
    "çatı izolasyonu",
    "havuz izolasyonu",
    "teras izolasyonu",
    "temel izolasyonu",
    "zemin izolasyonu",
    "otopark izolasyonu",
    "asansör boşluğu izolasyonu",
    "izolasyon izmir",
    "izolasyon çeşme",
    "izolasyon aydın",
    "izolasyon manisa",
    "izolasyon alaçatı",
    "izolasyon urla",
    "izolasyon foça",
    "izolasyon kuşadası",
    "izolasyon menemen",
    "izolasyon çiğli",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Sıvı İzolasyon Uzmanı`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Sıvı İzolasyon Uzmanı`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased pb-20 sm:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
