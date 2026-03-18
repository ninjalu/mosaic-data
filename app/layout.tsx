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
  title: "Mosaic Data | Find the Revenue You're Missing",
  description: "We find the money you're leaving on the table—and build systems so you never miss it again. Strategic revenue intelligence for growing companies.",
  keywords: ["revenue optimization", "churn prediction", "pricing optimization", "demand forecasting", "business intelligence", "revenue intelligence", "data strategy"],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mosaic Data | Find the Revenue You're Missing",
    description: "We find the money you're leaving on the table—and build systems so you never miss it again.",
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
