// src/components/sections/Hero.tsx
"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const container = document.getElementById("tech-dots-container");
    if (!container) {
      console.error("tech-dots-container not found in the DOM");
      return;
    }

    const dotCount = 30;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.className = "tech-dots pulse";

      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 3 + 2;
      const delay = Math.random() * 5;

      dot.style.left = `${posX}%`;
      dot.style.top = `${posY}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.animationDelay = `${delay}s`;

      container.appendChild(dot);
    }

    console.log(`Created ${dotCount} tech dots`);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div id="tech-dots-container" className="absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 neon-text">
              <span className="block">Techwave combines</span>
              <span className="block text-blue-400">SEO automation</span>
              <span className="block">and website building</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Launch your website, optimize for search engines, and scale your business with tools tailored to your market.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 glow-effect"
                >
                  Start Free Trial
                </a>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition duration-300"
                >
                  See a Demo
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-400 opacity-10" />
                <div className="relative z-10 text-center p-8">
                  <div className="floating mb-6">
                    <i className="fas fa-globe-asia text-6xl text-white opacity-90" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Asia-Focused Solutions</h3>
                  <p className="text-blue-100">Korea • Hong Kong • China</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}