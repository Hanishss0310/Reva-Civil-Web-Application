import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./Images/img1.jpg";
import {
  ChevronDown,
  ChevronUp,
  Info,
  Settings,
  Wrench,
} from "lucide-react";

const AdvancedServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const services = [
    {
      title: "Overview",
      icon: <Info className="w-6 h-6 text-orange-600" />,
      content: `Our Advanced and Specialized Services division provides precision-driven evaluations for infrastructure, materials, and structural performance. These services go beyond routine testing, enabling early detection of failures, design validation, and data-backed decision-making.`,
    },
    {
      title: "Capabilities",
      icon: <Settings className="w-6 h-6 text-orange-600" />,
      content: `We offer a wide range of specialized investigations and design validation services that combine field testing, laboratory analysis, and advanced computation — all conforming to IS, IRC, ASTM, and AASHTO standards.`,
    },
    {
      title: "Core Services Offered",
      icon: <Wrench className="w-6 h-6 text-orange-600" />,
      content: `
      • Structural Stability Testing (NDT)
      • Concrete Mix Design & Validation
      • Pavement Design & Verification
      • Rebar Corrosion Mapping
      • Traffic Volume Studies
      • Aggregate Soundness & Abrasion Tests
      `,
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-orange-50 via-white to-gray-100 rounded-[3rem] shadow-2xl mt-28 mb-20">
      {/* background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/30 blur-3xl opacity-50" />

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 relative z-10"
        >
          <h3 className="uppercase text-orange-600 font-semibold tracking-widest text-sm">
            Advanced & Specialized Services
          </h3>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 text-transparent">
            Precision Evaluations for Reliable Structural Performance
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Delivering advanced testing, analysis, and validation for critical
            infrastructure — ensuring every project meets global standards of
            safety, quality, and durability.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(249,115,22,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img
              src={img1}
              alt="Advanced Services"
              className="rounded-[2rem] shadow-2xl w-full max-w-md object-cover h-[440px] border-[6px] border-white/80"
            />
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-300/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Right Dropdown Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className={`overflow-hidden border backdrop-blur-md rounded-2xl transition-all duration-500 cursor-pointer shadow-md ${
                hoverIndex === index
                  ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white border-transparent shadow-xl"
                  : "bg-white/70 border-orange-100 hover:shadow-lg"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 font-semibold text-lg">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <span>{service.title}</span>
                </div>
                {hoverIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>

              {/* Expanded Content */}
              {hoverIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-5 text-sm leading-relaxed"
                >
                  {service.content.split("•").map((item, i) =>
                    item.trim() ? (
                      <p
                        key={i}
                        className={`mb-2 ${
                          hoverIndex === index
                            ? "text-orange-50"
                            : "text-gray-700"
                        }`}
                      >
                        {i !== 0 && "•"} {item.trim()}
                      </p>
                    ) : null
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: Math.random() * 400, opacity: 0 }}
            animate={{
              y: [Math.random() * 600, -100],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-orange-300/20 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvancedServices;
