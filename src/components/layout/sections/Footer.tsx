// src/components/sections/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-blue-400">Techwave</h2>
            </div>
  
            {/* Products Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Products</h3>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                AI SEO Optimizer
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Content Generator
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Startup Launchpad
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Analytics Dashboard
              </a>
            </div>
  
            {/* Solutions Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Solutions</h3>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                StartupBoost
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                EcomEase
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                ServiceScale
              </a>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                About Us
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Careers
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Blog
              </a>
              <a href="#" className="block mb-2 text-gray-400 hover:text-white transition duration-300">
                Contact
              </a>
            </div>
  
            {/* Connect Section */}
            {/* <div>
              <h3 className="text-lg font-medium text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div> */}
  
            {/* Newsletter Section */}
            {/* <div className="col-span-1 md:col-span-5">
              <h3 className="text-lg font-medium text-white mb-4">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="footer-input w-full border border-gray-700 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </div> */}
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">© 2025 Techwave</p>
          </div>
        </div>
      </footer>
    );
  }