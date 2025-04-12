// src/components/sections/Resources.tsx
export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
            Tools and Insights for Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <i className="fas fa-book-open text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium">Blog: SEO Trends in Korea for 2025</h3>
              </div>
              <p className="text-gray-500">
                Stay ahead of the curve with our comprehensive analysis of upcoming SEO trends specifically for the Korean market.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                <i className="fas fa-download mr-2" />
                Download Now
              </a>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <i className="fas fa-file-pdf text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium">Guide: Multilingual Website Best Practices</h3>
              </div>
              <p className="text-gray-500">
                Learn how to effectively structure and optimize your website for multiple languages in Asian markets.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                <i className="fas fa-download mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Download Resources
          </a>
        </div>
      </div>
    </section>
  );
}