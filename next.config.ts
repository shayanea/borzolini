import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      // Remove console statements in production
      removeConsole: true,
    },
  }),
};

export default nextConfig;
