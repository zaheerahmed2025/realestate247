import type { NextConfig } from "next";

const basePath = "/realestate247";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
