/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['img.shields.io'],
  },
}

module.exports = nextConfig
