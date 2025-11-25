import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceScroller from "./ServiceScroller";
import AboutRebuilders from "./AboutRebuilders";
import ConstructionTests from "./ConstructionTests";
import AboutCivilEngineering from "./AboutCivilEngineering";
import ServiceCards from "./ServiceCard";
import Footer from "./Footer";
import CompletedProjects from "./CompletedProjects";
import { FiMail } from "react-icons/fi";

function HomeIndex() {
  const location = useLocation();

  // ✅ Smooth scroll when coming from Navbar
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; // adjust for fixed navbar
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [location]);

  // ✅ Handle mail click
  const handleMailClick = () => {
    const subject = encodeURIComponent("Consultation Request - Civil Department");
    const body = encodeURIComponent("Hello,\n\nI would like to know more about your consultancy services.\n\nThank you!");
    window.location.href = `mailto:consultancy.civil@reva.edu.in?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <ServiceScroller />
      <AboutRebuilders />
    {/* <CompletedProjects /> */}
      {/* ✅ Projects Section (6th) */}
      <section id="projects-section">
        
        <ConstructionTests />
      </section>

      {/* ✅ About Section (8th) */}
      <section id="about-section">
        <AboutCivilEngineering />
      </section>

      <Footer />

      {/* ✅ Floating Mail Icon */}
      <button
        onClick={handleMailClick}
        className="fixed bottom-6 right-6 bg-[#f97316] hover:bg-[#fb923c] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
        aria-label="Contact via Email"
      >
        <FiMail size={24} />
      </button>
    </div>
  );
}

export default HomeIndex;
