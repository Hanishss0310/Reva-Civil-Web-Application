import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Building2,
  Ruler,
  FlaskConical,
  Droplets,
  Hammer,
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <ClipboardCheck />,
      title: "Advanced & Specialized Services",
      desc: "Precision-driven evaluations for infrastructure, materials, and structures ensuring reliability and performance.",
    },
    {
      icon: <Building2 />,
      title: "Design & Structural Consultancy",
      desc: "End-to-end structural design solutions integrating safety, sustainability, and architectural excellence.",
    },
    {
      icon: <Ruler />,
      title: "Surveying",
      desc: "High-precision topographical and layout surveying using advanced Total Station and digital tools.",
    },
    {
      icon: <FlaskConical />,
      title: "General Material Testing",
      desc: "Comprehensive testing for aggregates, cement, concrete, soil, and bitumen as per IS and ASTM standards.",
    },
    {
      icon: <Hammer />,
      title: "Bricks, Blocks & Steel Testing",
      desc: "Evaluation of bricks, blocks, pavers, and reinforcement steel ensuring safety and structural compliance.",
    },
    {
      icon: <Droplets />,
      title: "Water & Wastewater Testing",
      desc: "Chemical and physical analysis for construction and environmental compliance as per IS and APHA standards.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100 py-24 px-6 md:px-12">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#fb923c_1px,transparent_0)] bg-[length:22px_22px] opacity-10 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            Our Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-5 leading-snug">
            Comprehensive <span className="text-orange-600">Engineering Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            From precision testing to advanced design consultancy — we deliver accuracy, reliability, and innovation across every engineering discipline.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group bg-white border border-orange-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-6 group-hover:rotate-6 transition-transform duration-300">
                {React.cloneElement(service.icon, {
                  className: "w-7 h-7 text-orange-600",
                })}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-700 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Animated Border Light */}
              <div className="absolute inset-0 border border-transparent group-hover:border-orange-200 rounded-2xl transition-all duration-700"></div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Glow Element */}
      <motion.div
        className="absolute -bottom-32 right-20 w-96 h-96 bg-orange-300/30 blur-[140px] rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ServicesOverview;
