/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "", // 포트가 필요하지 않으면 빈 문자열
          pathname: "/**", // 모든 경로 허용
        },
      ],
    },
    eslint: {
      // Don't run ESLint during build
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;