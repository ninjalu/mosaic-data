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
  title: "Brightmere | Numbers That Survive Diligence",
  description: "We check whether a £5-50m business's numbers hold up, transaction by transaction, before the people with money look at them: a raise, a sale, a refinance, or a business you are about to buy. Three fixed-fee services. Every finding sized in pounds.",
  keywords: ["due diligence preparation", "investor readiness", "sell-side preparation", "financial due diligence", "operator diligence", "working capital", "revenue quality", "customer concentration", "margin analysis", "mid-market", "owner-managed business", "search fund", "acquisition"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Brightmere | Numbers That Survive Diligence",
    description: "Granular due diligence on £5-50m businesses, from the transactions up. Buy side or sell side. Three fixed-fee services, prices on the page.",
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
