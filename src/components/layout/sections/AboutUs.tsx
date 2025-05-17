// src/components/sections/AboutUs.tsx
export default function AboutUs() {
  return (
    <section className="py-20 bg-white text-gray-900 relative">
      <div className="wave-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="lg:text-center">
          <h2 className="text-3xl tracking-tight font-bold sm:text-4xl mb-8">
            Empowering Startups with AI-Driven Growth
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Techwave empowers startups and SMBs in Korea, Hong Kong, and China with AI tools for website building and SEO. Founded in 2025, our Korea-based team is dedicated to making technology accessible and affordable.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Meet our founders</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                <i className="fas fa-user-tie text-5xl text-blue-600" />
              </div>
              <h4 className="font-bold text-lg">Sue Kim</h4>
              <p className="text-gray-500">CEO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                <i className="fas fa-laptop-code text-5xl text-blue-600" />
              </div>
              <h4 className="font-bold text-lg">Atul Kamble</h4>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Learn More About Our Mission
          </a>
        </div> */}
      </div>
    </section>
  );
}