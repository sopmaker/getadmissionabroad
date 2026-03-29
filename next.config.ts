import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages preview; omit for normal dev/production builds
  ...(isGitHubPages && {
    output: "export",
    basePath: "/getadmissionabroad",
    trailingSlash: true,
  }),
  images: {
    // next/image optimisation is unavailable in static export mode
    ...(isGitHubPages && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sop-writer.in",
      },
      {
        protocol: "https",
        hostname: "sop-writer.in",
      },
      {
        protocol: "http",
        hostname: "getadmissionabroad.in",
      },
      {
        protocol: "https",
        hostname: "getadmissionabroad.in",
      },
    ],
  },
};

export default nextConfig;
