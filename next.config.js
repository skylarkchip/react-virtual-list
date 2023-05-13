/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_URL],
  },
};

module.exports = nextConfig;
