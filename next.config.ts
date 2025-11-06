import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  // images: {
  //    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   remotePatterns: [],
  //   unoptimized: false,
  //   domains: []
  // }
   images: { unoptimized: true },
};

export default nextConfig;
