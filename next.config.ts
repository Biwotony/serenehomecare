import type { NextConfig } from "next";

const canonicalOrigin = "https://serenehome.care";

const nextConfig: NextConfig = {
  images: {
    qualities: [65, 75],
  },
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "serene-home-care\\.vercel\\.app",
          },
        ],
        destination: `${canonicalOrigin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
