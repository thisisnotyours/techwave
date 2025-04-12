// src/components/sections/CaseStudies.tsx
export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <div className="flex items-center justify-center">
            <i className="fas fa-trophy text-yellow-400 mr-3 text-xl" />
            <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
              Success Stories from Our Clients
            </h2>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="h-32 w-32 rounded-full bg-blue-600 flex items-center justify-center mx-auto md:mx-0 mb-6 md:mb-0">
                <i className="fas fa-store text-4xl text-white" />
              </div>
            </div>
            <div className="md:ml-8">
              <blockquote>
                <p className="text-xl font-medium mb-4">
                  "HKFashion launched a multilingual site in just 3 days and ranked on page 1 for 4 competitive keywords within 2 months using Techwave's solutions."
                </p>
                <footer className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <i className="fas fa-user text-white" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-blue-400">Michael Wong</div>
                    <div className="text-base text-gray-400">CEO, HKFashion</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="mt-12 bg-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Results Achieved</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-600 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">3x</div>
                <div className="text-sm text-gray-300">Faster website launch</div>
              </div>
              <div className="bg-gray-600 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">4</div>
                <div className="text-sm text-gray-300">Page 1 rankings</div>
              </div>
              <div className="bg-gray-600 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">60%</div>
                <div className="text-sm text-gray-300">Traffic increase</div>
              </div>
              <div className="bg-gray-600 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">2</div>
                <div className="text-sm text-gray-300">Months to results</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            See More Success Stories
          </a>
        </div> */}
      </div>
    </section>
  );
}