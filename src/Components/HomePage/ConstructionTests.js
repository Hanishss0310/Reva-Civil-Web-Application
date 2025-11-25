import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ✅ Import your images
import Bitumen from "./Images/Images/bitument1.jpg";
import Briks from "./Images/Images/aggregates.jpg";
import Steel from "./Images/Images/steell.jpeg";
import Water from "./Images/Images/water2.jpg";
import Surveying from "./Images/Images/CivilSur.png";
import RevaUniversity from "./Images/Images/Soil.jpg"; // Update this if needed

const services = [
  {
    title: "Bitumen",
    description:
      "Precision testing including Penetration, Softening Point, Ductility, Flash & Fire Point, and Specific Gravity ensuring road-grade quality.",
    image: Bitumen,
  },
  {
    title: "Bricks, Blocks & Pavers",
    description:
      "Material evaluation through Compressive Strength, Water Absorption, Dimension Check, and Efflorescence for structural durability.",
    image: Briks,
  },
  {
    title: "Steel (TMT Rods)",
    description:
      "Testing for Ultimate Tensile Strength, Yield Strength, Elongation, Bend & Rebend ensuring IS 1786 compliance.",
    image: Steel,
  },
  {
    title: "Water & Wastewater",
    description:
      "Analysis covering pH, Turbidity, Hardness, TDS, DO, BOD, COD, Chlorides, Sulphates, and potability assessment.",
    image: Water,
  },
  {
    title: "Surveying",
    description:
      "Land surveying using Total Station, Auto-Level, and GPS for layout marking, contouring, and geospatial mapping.",
    image: Surveying,
  },
  {
    title: "Consultancy & Testing (REVA)",
    description:
      "Advanced testing, consultancy, and research facilities supported by experts following IS, IRC, ASTM & AASHTO standards.",
    image: RevaUniversity,
  },
];

const ConstructionTests = () => {
  return (
    <section className="bg-[#141414] text-white py-16 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-orange-400 font-semibold mb-2">
          What We Do
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6">
          Testing & Consultancy Services
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We provide{" "}
          <span className="text-orange-400 font-semibold">
            material testing, surveying, and consultancy
          </span>{" "}
          for construction, environmental, and infrastructure sectors — ensuring
          complete accuracy and compliance.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-orange-500/20 hover:-translate-y-2 hover:scale-[1.02]
                       transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                {/* ⭐ Clean Icon Instead of “Read More” */}
                <ArrowUpRight
                  className="text-orange-400 w-5 h-5 
                             group-hover:rotate-45 transition-all duration-300"
                />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mt-1">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-14 text-center"
      >
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          All testing is performed under{" "}
          <span className="text-orange-400 font-semibold">
            IS / IRC / ASTM / AASHTO guidelines
          </span>{" "}
          ensuring accuracy, traceability, and compliance with regulatory norms.
        </p>
      </motion.div>
    </section>
  );
};

export default ConstructionTests;
