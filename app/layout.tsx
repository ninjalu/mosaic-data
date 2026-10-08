import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightmerehq.com"),
  title: "Brightmere | Finance and Operations Clarity",
  description: "Brightmere joins what a £5-50m business's operation does to what its finance records, transaction by transaction, so the numbers it runs on are the numbers that survive diligence. For owners and finance leaders, and for whoever is about to buy, back or lend to them. Three fixed-fee services, every finding sized in pounds.",
  keywords: ["due diligence preparation", "investor readiness", "sell-side preparation", "financial due diligence", "operator diligence", "working capital", "revenue quality", "customer concentration", "margin analysis", "mid-market", "owner-managed business", "search fund", "acquisition"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Brightmere | Finance and Operations Clarity",
    description: "Operations joined to finance, transaction by transaction, so the numbers you run the business on are the numbers that survive diligence. For operators and for the deal. Three fixed-fee services, prices on the page.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
