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
    ];
  },
};

export default nextConfig;
