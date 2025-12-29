import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import AdvancedServices from "./AdvancedServices";
import WhyChooseUs from "./WhyChooseUs";
import ServicesOverview from "./ServicesOverview";
import PartnersShowcase from "./PartnersShowcase";

function ServicesIndex() {
  return (
    <div className="relative">
      <Navbar />

      {/* PAGE CONTENT */}
      <AdvancedServices />
      <ServicesOverview />
      <PartnersShowcase />
      <WhyChooseUs />

      <Footer />
    </div>
  );
}

export default ServicesIndex;
