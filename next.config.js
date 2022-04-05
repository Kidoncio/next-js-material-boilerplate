/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  swcMinify: true,
  styledComponents: true,
  experimental: {
    eslint: true,
  },
}

module.exports = nextConfig
