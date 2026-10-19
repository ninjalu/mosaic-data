import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old brand domain -> new domain (permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "mosaic-data.co" }],
        destination: "https://brightmerehq.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mosaic-data.co" }],
        destination: "https://brightmerehq.com/:path*",
        permanent: true,
      },
      // Canonicalise www -> apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.brightmerehq.com" }],
        destination: "https://brightmerehq.com/:path*",
        permanent: true,
      },
      // Retired self-assessment -> home
      {
        source: "/assess",
        destination: "/",
        permanent: true,
      },
      // DD-only site (19 Oct 2026): both pages folded into the home page
      {
        source: "/methodology",
        destination: "/#what-we-check",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/#fee",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
