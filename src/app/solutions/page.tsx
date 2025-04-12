// src/app/solutions/page.tsx
"use client"; // 클라이언트 컴포넌트로 지정

import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter 임포트

export default function SolutionsPage() {
  const router = useRouter(); // useRouter 훅 사용

  // 뒤로 가기 핸들러
  const handleBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  return (
    <div className="min-h-screen bg-gray-900 holographic-pattern text-white relative overflow-hidden">
      {/* 배경에 디지털 웨이브 패턴 추가 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="wave-shape">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Products 링크 */}
        <div className="mb-8">
          <Link
            href="#"
            onClick={handleBack}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Products
          </Link>
        </div>

        {/* 페이지 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored packages designed to accelerate your business growth with
            cutting-edge technology
          </p>
        </div>

        {/* 솔루션 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* StartupBoost Card */}
          <div className="feature-card holographic-pattern neon-border p-6 rounded-xl">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-blue-600">
                  StartupBoost
                </h2>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                "Everything Your Startup Needs to Grow"
              </h3>
              <p className="text-gray-300 mb-6">
                StartupBoost combines website building, SEO, and content tools
                into one affordable package for early-stage startups.
              </p>

              <div className="mb-6">
                <h4 className="font-medium text-blue-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-400 font-bold mr-2">✓</span>
                    Pre-built, optimized templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 font-bold mr-2">✓</span>
                    Automated SEO for instant visibility
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 font-bold mr-2">✓</span>
                    Multilingual content for broader reach
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-blue-400 mb-2">
                  Ideal Users:
                </h4>
                <p className="text-gray-300">Founders and small teams</p>
              </div>

              <Link
                href="#"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg text-center glow-effect hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                Boost Your Startup Now
              </Link>
            </div>
          </div>

          {/* EcomEase Card */}
          <div className="feature-card holographic-pattern neon-border p-6 rounded-xl">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-blue-600">
                  EcomEase
                </h2>
              </div>
              <h3>Power Up Your Online Store</h3>
              <p className="text-gray-300 mb-6">
                EcomEase drives e-commerce success with AI-powered SEO and
                content tailored to online retailers.
              </p>

              <div className="mb-6">
                <h4 className="font-medium text-purple-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-400 font-bold mr-2">✓</span>
                    SEO-optimized product descriptions
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 font-bold mr-2">✓</span>
                    Integration with Shopify and WooCommerce
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 font-bold mr-2">✓</span>
                    Regional SEO for Baidu and Naver
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-purple-400 mb-2">
                  Ideal Users:
                </h4>
                <p className="text-gray-300">E-commerce startups and retailers</p>
              </div>

              <Link
                href="#"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg text-center glow-effect hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                Grow Your Store Today
              </Link>
            </div>
          </div>

          {/* ServiceScale Card */}
          <div className="feature-card holographic-pattern neon-border p-6 rounded-xl">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-blue-600 to-blue-500">
                  ServiceScale
                </h2>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                "Scale Your Service Business"
              </h3>
              <p className="text-gray-300 mb-6">
                ServiceScale helps service providers build professional websites
                and boost visibility with localized SEO.
              </p>

              <div className="mb-6">
                <h4 className="font-medium text-pink-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-pink-400 font-bold mr-2">✓</span>
                    Service page templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 font-bold mr-2">✓</span>
                    Automated thought leadership blogs
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 font-bold mr-2">✓</span>
                    Testimonial sections for trust
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-pink-400 mb-2">
                  Ideal Users:
                </h4>
                <p className="text-gray-300">Agencies and consultants</p>
              </div>

              <Link
                href="#"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg text-center glow-effect hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                Scale Your Services Now
              </Link>
            </div>
          </div>
        </div>

        {/* 비교 섹션 */}
        <div className="max-w-5xl mx-auto">
          <div className="feature-card holographic-pattern neon-border p-8 rounded-xl">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-center mb-8 neon-text">
                Solution Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-4 text-left">Feature</th>
                      <th className="pb-4 text-center">StartupBoost</th>
                      <th className="pb-4 text-center">EcomEase</th>
                      <th className="pb-4 text-center">ServiceScale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 text-gray-300">Website Templates</td>
                      <td className="py-4 text-center text-blue-400">✓</td>
                      <td className="py-4 text-center text-purple-400">✓</td>
                      <td className="py-4 text-center text-pink-400">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 text-gray-300">SEO Optimization</td>
                      <td className="py-4 text-center text-blue-400">✓</td>
                      <td className="py-4 text-center text-purple-400">✓</td>
                      <td className="py-4 text-center text-pink-400">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 text-gray-300">
                        E-commerce Integration
                      </td>
                      <td className="py-4 text-center text-gray-500">-</td>
                      <td className="py-4 text-center text-purple-400">✓</td>
                      <td className="py-4 text-center text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 text-gray-300">
                        Multilingual Support
                      </td>
                      <td className="py-4 text-center text-blue-400">✓</td>
                      <td className="py-4 text-center text-purple-400">✓</td>
                      <td className="py-4 text-center text-pink-400">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-gray-300">
                        Service Page Templates
                      </td>
                      <td className="py-4 text-center text-gray-500">-</td>
                      <td className="py-4 text-center text-gray-500">-</td>
                      <td className="py-4 text-center text-pink-400">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating digital waves decoration */}
      <div className="fixed bottom-0 left-0 right-0 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="url(#gradient)"
            className="fill-current text-blue-500"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="url(#gradient)"
            className="fill-current text-purple-500"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#gradient)"
            className="fill-current text-pink-500"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}