import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    '@react-pdf-viewer/core',
    '@react-pdf-viewer/default-layout',
    '@react-pdf-viewer/highlight',
  ],
};

export default nextConfig;
