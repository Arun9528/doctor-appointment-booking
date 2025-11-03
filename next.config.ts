import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/assets/docPhotos/**',
      },
      // {
      //   protocol: 'http',
      //   hostname: '127.0.0.1',
      //   port: '8000',
      //   pathname: '/assets/docPhotos/**',
      // },
      // {
      //   protocol: 'http',
      //   hostname: '::1',
      //   port: '8000',
      //   pathname: '/assets/docPhotos/**',
      // },
    ],
  },
};

export default nextConfig;