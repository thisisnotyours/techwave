"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll event to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle dropdown menu (for mobile only)
  const toggleDropdown = (dropdownName: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the document click handler from firing
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Navigate to a page
  const navigateToPage = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    router.push(path);
  };

  // Product & Solution menu items
  const productItems = [
    { name: "AI SEO Optimizer", path: "/ai-seo-optimizer" },
    { name: "Multilingual Content Generator", path: "/multilingual-content-generator" },
    { name: "Startup Launchpad", path: "/startup-launchpad" },
    { name: "Analytics & Insights Dashboard", path: "/analytics-insights-dashboard" },
  ];

  const solutionItems = [
    { name: "StartupBoost", path: "/solutions#startupboost" },
    { name: "EcomEase", path: "/solutions#ecomease" },
    { name: "ServiceScale", path: "/solutions#servicescale" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className={scrolled ? "text-blue-600" : "text-white"}>
              Techwave
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about-us")}
              className={scrolled ? "text-gray-800 hover:text-gray-900" : "text-white hover:text-gray-300"}
            >
              About Us
            </button>
            
            {/* Products Dropdown - Using hover for desktop */}
            <div className="relative group">
              <button
                className={scrolled ? "text-gray-800 hover:text-gray-900 flex items-center" : "text-white hover:text-gray-300 flex items-center"}
                onClick={() => scrollToSection("products")}
              >
                Products
              </button>
              
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  {productItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Solutions Dropdown - Using hover for desktop */}
            <div className="relative group">
              <button
                className={scrolled ? "text-gray-800 hover:text-gray-900 flex items-center" : "text-white hover:text-gray-300 flex items-center"}
                onClick={() => scrollToSection("solutions")}
              >
                Solutions
              </button>
              
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  {solutionItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Regular menu items */}
            {["features", "case-studies", "resources", "contact-us"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={scrolled ? "text-gray-800 hover:text-gray-900 capitalize" : "text-white hover:text-gray-300 capitalize"}
                >
                  {section.replace(/-/g, " ")}
                </button>
              )
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={scrolled ? "text-gray-800 hover:text-gray-900 focus:outline-none" : "text-white hover:text-gray-300 focus:outline-none"}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => scrollToSection("about-us")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              About Us
            </button>
            
            {/* Products dropdown for mobile */}
            <div className="relative">
              <button
                onClick={(e) => toggleDropdown("products-mobile", e)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>Products</span>
                <svg 
                  className={`h-4 w-4 transition-transform ${activeDropdown === "products-mobile" ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === "products-mobile" && (
                <div className="bg-gray-50 py-1">
                  {productItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left px-6 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
            
            {/* Solutions dropdown for mobile */}
            <div className="relative">
              <button
                onClick={(e) => toggleDropdown("solutions-mobile", e)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>Solutions</span>
                <svg 
                  className={`h-4 w-4 transition-transform ${activeDropdown === "solutions-mobile" ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === "solutions-mobile" && (
                <div className="bg-gray-50 py-1">
                  {solutionItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => scrollToSection("solutions")}
                    className="block w-full text-left px-6 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    View All Solutions
                  </button>
                </div>
              )}
            </div>
            
            {/* Regular menu items for mobile */}
            {["features", "case-studies", "resources", "contact-us"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 capitalize"
                >
                  {section.replace(/-/g, " ")}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 