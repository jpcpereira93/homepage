import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
