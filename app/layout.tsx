import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mosaic Data | Fractional Data Science for PE Portfolio Companies",
  description: "AI-powered analytics for private equity portfolio companies. Deploy predictive insights across your entire portfolio at the price of one FTE.",
  keywords: ["data science", "private equity", "portfolio analytics", "AI", "predictive analytics"],
  openGraph: {
    title: "Mosaic Data | Fractional Data Science for PE",
    description: "Deploy AI-powered analytics across your entire portfolio at the price of one FTE.",
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
      </body>
    </html>
  );
}
