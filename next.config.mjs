/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `www.gimhae.go.kr`,
      },
      {
        protocol: 'https',
        hostname: `ddoba.s3.ap-northeast-2.amazonaws.com`,
      },
      {
        protocol: 'http',
        hostname: `k.kakaocdn.net`,
      },
    ],
  },
};

export default nextConfig;
