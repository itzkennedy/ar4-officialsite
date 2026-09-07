import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-images.dzcdn.net",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75, 80, 85, 90, 92],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

export default nextConfig;
