import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import Img1 from "./Images/pj1.jpg";
import Img2 from "./Images/pj2.jpg";
import Img3 from "./Images/pj3.jpg";

const categories = [
  "All",
  "Aviation",
  "Building",
  "Commercial",
  "Electrical",
  "Energy",
  "Residential",
  "Stadium",
];

const projects = [
  {
    id: 1,
    title: "Modern Urban Housing Project",
    desc: "A sleek residential development featuring sustainable design, smart layouts.",
    category: "Residential",
    img: Img1,
    location: "102.2 Sylhet, Bangladesh",
    duration: "12-2024 / 4-2025",
  },
  {
    id: 2,
    title: "Downtown Office Tower Build",
    desc: "A high-rise commercial tower designed for modern businesses, with efficient space planning.",
    category: "Commercial",
    img: Img2,
    location: "102.2 Sylhet, Bangladesh",
    duration: "12-2024 / 4-2025",
  },
  {
    id: 3,
    title: "Coastal Bridge Expansion Project",
    desc: "An advanced infrastructure project focused on enhancing regional connectivity through durable engineering.",
    category: "Building",
    img: Img3,
    location: "102.2 Sylhet, Bangladesh",
    duration: "12-2024 / 4-2025",
  },
];

const CompletedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-gray-100 py-16 px-6 md:px-10 lg:px-20 font-poppins">
      {/* --- Animated Gradient Background --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-300/30 via-white/40 to-orange-200/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      ></motion.div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span> See
              all Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discover Our <br /> Completed Projects
            </h2>
          </div>
          <p className="text-gray-700 max-w-lg mt-6 lg:mt-0 text-base leading-relaxed">
            Every project we complete is a reflection of our commitment to
            quality, precision, and client satisfaction. At Reva Civil, we take
            pride in transforming ideas into built realities — whether it’s a
            modern residence or large-scale infrastructure.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-white text-gray-700 hover:bg-orange-100 border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white border border-gray-100"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-60 object-cover rounded-t-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex items-center text-gray-600 text-sm mb-1 gap-2">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span>{proj.location}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm gap-2">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>{proj.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompletedProjects;
