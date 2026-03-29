import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/getadmissionabroad",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "sop-writer.in" },
      { protocol: "https", hostname: "sop-writer.in" },
      { protocol: "http", hostname: "getadmissionabroad.in" },
      { protocol: "https", hostname: "getadmissionabroad.in" },
    ],
  },
};

export default nextConfig;
