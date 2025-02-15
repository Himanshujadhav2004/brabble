import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ui.aceternity.com"], // Allow images from this domain
  },
  reactStrictMode: true,
};

export default nextConfig;
