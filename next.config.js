/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
