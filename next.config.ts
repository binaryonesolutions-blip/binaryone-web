import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Design uses locally-hosted PNGs; serve modern formats from next/image.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
