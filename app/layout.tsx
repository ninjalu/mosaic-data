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
  metadataBase: new URL("https://mosaic-data.co"),
  title: "Mosaic Data | Find the Cash Trapped in Your Operations",
  description: "We read your ledgers line by line and show you exactly where your cash is stuck—inventory you don't need, invoices you're not chasing, terms you pay too early. One week. Every pound sized.",
  keywords: ["working capital", "cash flow", "cash conversion cycle", "inventory optimization", "DSO", "days inventory outstanding", "working capital release", "mid-market", "manufacturing", "distribution", "DTC", "retail"],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mosaic Data | Find the Cash Trapped in Your Operations",
    description: "We read your ledgers line by line and show you exactly where your cash is stuck. One week. Every pound sized.",
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
