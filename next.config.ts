import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.kitsu.app"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
