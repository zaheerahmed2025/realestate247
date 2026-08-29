import type { NextConfig } from "next";

// Detect if building on GitHub Pages vs Netlify / Vercel / local
const isGithubPages = process.env.GITHUB_ACTIONS === "true" || process.env.GH_PAGES === "true";
const basePath = isGithubPages ? "/realestate247" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
