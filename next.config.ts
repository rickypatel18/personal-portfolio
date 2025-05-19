import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  
};

export default nextConfig;
