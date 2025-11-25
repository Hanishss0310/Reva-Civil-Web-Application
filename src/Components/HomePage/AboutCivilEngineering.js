import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaDraftingCompass,
  FaHardHat,
  FaRulerCombined,
  FaRecycle,
  FaCity,
} from "react-icons/fa";

const expertise = [
  {
    id: 1,
    title: "Structural Engineering",
    desc: "Expertise in testing, design validation, and structural performance monitoring.",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    title: "Geotechnical Testing",
    desc: "Comprehensive soil and foundation analysis with advanced instruments.",
    icon: <FaRulerCombined />,
  },
  {
    id: 3,
    title: "Construction Management",
    desc: "Efficient planning, supervision, and quality assurance for projects.",
    icon: <FaHardHat />,
  },
  {
    id: 4,
    title: "Transportation Engineering",
    desc: "Specialized in road safety audits, pavement design, and traffic studies.",
    icon: <FaDraftingCompass />,
  },
  {
    id: 5,
    title: "Environmental Engineering",
    desc: "Solutions for water, air, and waste management as per standards.",
    icon: <FaRecycle />,
  },
  {
    id: 6,
    title: "Urban Infrastructure",
    desc: "Sustainable planning for urban roads, stormwater, and smart city systems.",
    icon: <FaCity />,
  },
];

const AboutCivilEngineering = () => {
  return (
    <section className="relative w-full py-24 px-6 lg:px-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-gray-100 animate-gradientMove"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
      >
        Our Expertise
      </motion.h2>

      <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <p className="text-orange-500 font-semibold uppercase text-sm mb-2 tracking-wide">
            Explore the Services
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            About School of Civil Engineering
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            The School of Civil Engineering at REVA University offers testing,
            consultancy, and applied research in multiple domains, ensuring
            excellence in structural, environmental, and transportation
            solutions with modern technology and innovation.
          </p>
        </motion.div>

        {/* Right Section (Expertise Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow:
                  "0px 10px 25px rgba(255, 140, 0, 0.25)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative bg-white rounded-2xl p-8 text-center border-t-4 ${
                index === 2
                  ? "border-orange-500 shadow-xl lg:translate-y-[-10px]"
                  : "border-transparent hover:border-orange-500"
              } transition-all duration-300`}
            >
              <div className="text-4xl text-orange-500 mx-auto mb-4">
                {item.icon}
              </div>
              <p className="uppercase text-xs text-gray-400 mb-1">
                Service #{String(item.id).padStart(2, "0")}
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600 transition">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Animation CSS */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutCivilEngineering;
