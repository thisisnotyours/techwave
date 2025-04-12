// src/components/sections/Features.tsx
export default function Features() {
  return (
    <section id="features" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
            Powerful Tools for Digital Success
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <i className="fas fa-brain" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">AI-Powered SEO</h3>
                <p className="mt-2 text-base text-gray-500">
                  Optimize for local engines with our advanced AI algorithms tailored for Asian markets.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start pt-8 border-t border-gray-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <i className="fas fa-comments" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Multilingual Content</h3>
                <p className="mt-2 text-base text-gray-500">
                  Reach diverse audiences with content automatically optimized for Korean, Chinese, and English.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start pt-8 border-t border-gray-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <i className="fas fa-mouse-pointer" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Drag-and-Drop Builder</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create professional websites without coding using our intuitive interface.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start pt-8 border-t border-gray-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <i className="fas fa-chart-bar" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Real-Time Analytics</h3>
                <p className="mt-2 text-base text-gray-500">
                  Track performance across all your digital channels with actionable insights.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Explore All Features
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}