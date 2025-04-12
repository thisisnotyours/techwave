import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/layout/sections/Hero";
import CompanyList from "@/components/layout/sections/CompanyList";
import AboutUs from "@/components/layout/sections/AboutUs";
import Products from "@/components/layout/sections/Products";
import Solutions from "@/components/layout/sections/Solutions";
import Features from "@/components/layout/sections/Features";
import CaseStudies from "@/components/layout/sections/CaseStudies";
import Resources from "@/components/layout/sections/Resources";
import ContactUs from "@/components/layout/sections/ContactUs";
import Footer from "@/components/layout/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CompanyList/>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section id="resources">
          <Resources />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
        <Footer />
      </main>
    </>
  );
}
