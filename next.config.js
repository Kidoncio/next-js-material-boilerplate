/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    eslint: true,
  },
}

module.exports = nextConfig
