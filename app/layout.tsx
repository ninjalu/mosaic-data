import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Loader from "./components/Loader";
import Reveal from "./components/Reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Premium redesign (Oct 2026): light editorial serif for headlines, DM Sans for text.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightmerehq.com"),
  title: "Brightmere | Operator Diligence for Buyers",
  description: "Financial due diligence stops at the trial balance. Brightmere starts below it: before you buy a £5-50m business, we rebuild its revenue, margin, cash and capacity from its own orders, invoices and jobs. Alongside your financial DD, not instead of it. 2-3 weeks, £15,000 fixed per target.",
  keywords: ["operator due diligence", "buy-side due diligence", "operational due diligence", "acquisition due diligence UK", "customer cohort analysis", "revenue quality", "customer concentration", "margin by customer", "working capital peg", "independent searcher", "search fund", "holding company acquisition", "lower mid-market M&A"],
  icons: {
    icon: [{ url: "/icon-sun-2026.png", type: "image/png" }, { url: "/favicon-sun.ico", sizes: "any" }],
    apple: "/apple-icon-sun-2026.png",
  },
  openGraph: {
    title: "Brightmere | Operator Diligence for Buyers",
    description: "Financial due diligence stops at the trial balance. We start below it. Transaction-level diligence for buyers of £5-50m businesses. 2-3 weeks, £15,000 fixed per target.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${dmSans.variable} antialiased`}
      >
        <Loader />
        <Reveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
