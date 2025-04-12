// src/components/sections/Solutions.tsx
export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
            Our Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-blue-700 rounded-lg p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-800 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-blue-600 mx-auto mb-6">
                <i className="fas fa-bolt text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">StartupBoost</h3>
              <p className="text-blue-100">
                All-in-one growth tools for startups.
              </p>
              {/* <div className="mt-6">
                <a href="#" className="text-white font-medium text-sm hover:underline">
                  Learn more →
                </a>
              </div> */}
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-blue-700 rounded-lg p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-800 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-blue-600 mx-auto mb-6">
                <i className="fas fa-shopping-cart text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">EcomEase</h3>
              <p className="text-blue-100">
                Drive e-commerce success with AI-powered SEO.
              </p>
              {/* <div className="mt-6">
                <a href="#" className="text-white font-medium text-sm hover:underline">
                  Learn more →
                </a>
              </div> */}
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-blue-700 rounded-lg p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-800 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-blue-600 mx-auto mb-6">
                <i className="fas fa-business-time text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">ServiceScale</h3>
              <p className="text-blue-100">
                Scale your service business with smarter websites.
              </p>
              {/* <div className="mt-6">
                <a href="#" className="text-white font-medium text-sm hover:underline">
                  Learn more →
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/solutions"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Explore All Solutions
          </a>
        </div>
      </div>
    </section>
  );
}