import React from "react";
import { motion } from "framer-motion";

// --- Simple Icons (SVG inline for easy styling) ---
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75z" />
  </svg>
);
const InteriorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75" />
  </svg>
);
const PlanningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25" />
  </svg>
);
const ArchitectureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-6.75 3h10.5m-10.5 3h10.5" />
  </svg>
);
const RenovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0" />
  </svg>
);
const MaterialTestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v12" />
  </svg>
);

// --- Background Helmet-like Shape ---
const HelmetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full text-gray-100 opacity-50 transform -translate-x-10 -translate-y-10" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth={0.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M62.5,79.2C54.2,79.2,50,75,50,75s-4.2,4.2-12.5,4.2S25,75,25,66.7c0-12.5,12.5-20.8,25-20.8S75,54.2,75,66.7C75,75,70.8,79.2,62.5,79.2z" />
  </svg>
);

// --- Services Data ---
const services = [
  { id: "01", title: "Building Material Testing", description: "Reliable, expert-led construction for durable results.", icon: <BuildingIcon /> },
  { id: "02", title: "Interior Design", description: "Functional and aesthetic interior planning.", icon: <InteriorIcon /> },
  { id: "03", title: "Project Planning", description: "Strategic planning ensuring smooth execution.", icon: <PlanningIcon /> },
  { id: "04", title: "Architecture Design", description: "Modern, efficient, and sustainable design.", icon: <ArchitectureIcon /> },
  // { id: "05", title: "Re-Renovations", description: "Reviving structures with modern techniques.", icon: <RenovationIcon /> },
  // { id: "06", title: "Material Testing", description: "Ensuring quality and standards through precise lab testing.", icon: <MaterialTestIcon /> },
];

// --- Service Card Component ---
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ y: -6, scale: 1.03 }}
    className="p-4 sm:p-6 rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl"
  >
    <div className="flex items-center mb-3 space-x-3">
      {service.icon}
      <h3 className="text-gray-800 font-semibold text-base sm:text-lg">{service.title}</h3>
    </div>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
  </motion.div>
);

// --- Main Section ---
export default function CivilEnggServices() {
  return (
    <section className="relative bg-gray-50/50 py-12 md:py-20 overflow-hidden">
      {/* Cool Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-yellow-50 blur-3xl opacity-60"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-center lg:text-left"
          >
            <HelmetIcon />
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-orange-500 font-semibold tracking-widest text-xs sm:text-sm mb-2"
              >
                SCHOOL OF CIVIL ENGINEERING
              </motion.p>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug"
              >
                Testing & Consultancy Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-sm sm:text-base leading-relaxed"
              >
                The School of Civil Engineering at REVA University offers advanced testing and consultancy across structural, geotechnical, and environmental domains — ensuring accuracy, quality, and reliability through state-of-the-art labs and expert faculty.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Grid - Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
