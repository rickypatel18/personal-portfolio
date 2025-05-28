import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true
  },
  experimental: {
    // serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  
};

export default nextConfig;
