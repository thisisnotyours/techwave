// src/components/sections/ContactUs.tsx
export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900 map-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-blue-600 md:w-1/3 p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <i className="fas fa-envelope mr-3" />
                  <span>support@techwave.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt mr-3" />
                  <span>+82-2-1234-5678</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Offices</h3>
              <p className="text-blue-100 mb-2">
                <i className="fas fa-map-marker-alt mr-2" />
                Seoul, Korea
              </p>
              <p className="text-blue-100 mb-2">
                <i className="fas fa-map-marker-alt mr-2" />
                Hong Kong
              </p>
              <p className="text-blue-100">
                <i className="fas fa-map-marker-alt mr-2" />
                Shanghai, China
              </p>
            </div>
            <div className="p-8 md:w-2/3">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}