// src/components/sections/Products.tsx
export default function Products() {
    return (
      <section id="products" className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
              Our Products
            </h2>
          </div>
  
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 */}
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <i className="fas fa-robot text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">AI SEO Optimizer</h3>
                <p className="text-gray-500">
                  Optimize your website with AI precision for Korea, Hong Kong, and China.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="/ai-seo-optimizer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
  
            {/* Product 2 */}
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <i className="fas fa-language text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Multilingual Content Generator</h3>
                <p className="text-gray-500">
                  Create SEO-friendly content in Korean, Chinese, and English.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="/multilingual-content-generator" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
  
            {/* Product 3 */}
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <i className="fas fa-rocket text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Startup Launchpad</h3>
                <p className="text-gray-500">
                  Build and launch your startup's website in days, not weeks.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="/startup-launchpad" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
  
            {/* Product 4 */}
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <i className="fas fa-chart-line text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Insights Dashboard</h3>
                <p className="text-gray-500">
                  Track your growth with real-time, actionable insights.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="/analytics-insights-dashboard" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
  
          {/* <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Explore All Products
            </a>
          </div> */}
        </div>
      </section>
    );
  }