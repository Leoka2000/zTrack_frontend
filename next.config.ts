import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static HTML export
  typescript: {
    ignoreBuildErrors: true, // allows build even with TS errors
  },
  eslint: {
    ignoreDuringBuilds: true, // allows build even with ESLint errors
  },
  images: {
    unoptimized: true, // disables server-side image optimization for static export
  },
};

export default nextConfig;
