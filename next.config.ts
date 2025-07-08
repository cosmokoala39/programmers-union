import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    domains: ["www.staradvertiser.com",'sa-media.s3.us-east-1.amazonaws.com'],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sa-media.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
