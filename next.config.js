/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/Privacy-Policy',
        destination: '/privacy-policy.html',
      },
    ];
  },
}

module.exports = nextConfig
