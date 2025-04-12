// src/app/ai-seo-optimizer/page.tsx
"use client"; // 클라이언트 컴포넌트로 지정

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // useRouter 임포트
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// SEO 순위 차트 데이터
const data = {
  labels: ["Before", "Month 1", "Month 2", "Month 3"],
  datasets: [
    {
      label: "Search Ranking Position",
      data: [50, 30, 15, 5],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderWidth: 3,
      pointBackgroundColor: "#3b82f6",
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.3,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#e2e8f0",
        font: {
          family: "Poppins",
        },
      },
    },
    tooltip: {
      backgroundColor: "#1e293b",
      titleColor: "#f8fafc",
      bodyColor: "#e2e8f0",
      borderColor: "#334155",
      borderWidth: 1,
      padding: 12,
      usePointStyle: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      reverse: true,
      grid: {
        color: "#334155",
      },
      ticks: {
        color: "#94a3b8",
      },
    },
    x: {
      grid: {
        color: "#334155",
      },
      ticks: {
        color: "#94a3b8",
      },
    },
  },
};

export default function AISEOptimizerPage() {
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
        <Link
          href="#" // href는 더미 값으로 설정 (실제 내비게이션은 onClick에서 처리)
          onClick={handleBack} // 클릭 시 뒤로 가기
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-8"
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

        {/* Hero 섹션 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Boost Your Visibility with{" "}
              <span className="text-blue-400">AI-Powered SEO</span>
            </h1>
            {/* <p className="text-lg text-gray-300 mb-8">
              AI SEO Optimizer automates keyword research, meta tags, and content
              optimization, tailored to the search landscapes of Korea (Naver),
              Hong Kong (Google), and China (Baidu).
            </p> */}
            <p className="text-lg text-gray-300 mb-8">
              AI SEO Optimizer automates keyword research, meta tags, and content
              optimization, tailored to the search landscapes of Korea (Naver), Hong Kong (Google), and China (Baidu).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Try AI SEO Optimizer Free
              </Link>
              <Link
                href="#"
                className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 font-medium py-3 px-8 rounded-full transition"
              >
                Pricing from $29/month
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative neon-border rounded-2xl overflow-hidden p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-20 blur-lg"></div>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI SEO Optimizer Dashboard"
                width={1470}
                height={980}
                className="relative rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits 섹션 */}
        <div className="curve-mask bg-slate-800/50 py-16 px-6 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">
            Why Choose AI SEO Optimizer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card p-6 rounded-xl border border-slate-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saves Hours on Manual Tasks</h3>
              <p className="text-gray-400">
                Automate tedious SEO work and focus on what really matters - growing your business.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl border border-slate-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Increases Rankings</h3>
              <p className="text-gray-400">
                Optimized specifically for Naver, Baidu, and Google to maximize your local visibility.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl border border-slate-700 hover:border-blue-400">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.017 9.75c.001.103.023.204.064.299.041.095.107.18.191.246.084.066.183.11.287.127.104.016.211.004.312-.024a.6.6 0 00.25-.15c.033-.033.057-.073.07-.116.012-.043.013-.088.003-.132a.31.31 0 00-.064-.14.604.604 0 00-.15-.166c-.038-.03-.082-.05-.128-.06a.545.545 0 00-.139-.016.587.587 0 00-.143.013.627.627 0 00-.133.056.608.608 0 00-.123.098.45.45 0 00-.073.135.33.33 0 00-.023.152z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-400">
                Works seamlessly with Korean, Chinese, and English content for global reach.
              </p>
            </div>
          </div>
        </div>

        {/* Features 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-500/10 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Keyword Research</h3>
                  <p className="text-gray-400">
                    Get smart keyword suggestions tailored for regional markets in Asia.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-card p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-500/10 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Generated Meta Tags</h3>
                  <p className="text-gray-400">
                    Perfectly optimized titles and descriptions that drive clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-card p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-500/10 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">On-Page SEO Audits</h3>
                  <p className="text-gray-400">
                    Get actionable fixes to improve your page's search performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Chart 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">
            Proven Results
          </h2>
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl p-6 neon-border">
            <Line data={data} options={options} height={300} />
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
            Ready to Transform Your SEO?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses boosting their search visibility with AI-powered optimization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 px-10 rounded-full transition transform hover:scale-105 shadow-lg shadow-blue-500/30 text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="#"
              className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 font-medium py-4 px-10 rounded-full transition text-lg"
            >
              See Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}