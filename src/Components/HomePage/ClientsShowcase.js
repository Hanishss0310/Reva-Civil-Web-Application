// ClientsShowcase.jsx
import React from "react";
import { motion } from "framer-motion";

// IMPORT IMAGES (adjust paths if your structure differs)
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpeg";
import img5 from "./Images/img5.png";
import img6 from "./Images/img6.png";
import img7 from "./Images/img7.png";

const logos = [
  { src: img1, alt: "Client 1" },
  { src: img2, alt: "Client 2" },
  { src: img3, alt: "Client 3" },
  { src: img4, alt: "Client 4" },
  { src: img5, alt: "Client 5" },
  { src: img6, alt: "Client 6" },
  { src: img7, alt: "Client 7" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ClientsShowcase() {
  // split into top 4 and bottom 3
  const topRow = logos.slice(0, 4);
  const bottomRow = logos.slice(4, 7);

  return (
    <section className="relative bg-white py-20">
      {/* soft radial background */}
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f3f4f6 0%, #ffffff 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Our Clients
        </motion.h2>

        {/* Two-line subtitle with reduced opacity */}
        <motion.p
          initial={{ opacity: 10 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We partner with organisations across sectors to deliver precision-driven engineering solutions.
        
          Their continued trust validates our commitment to quality, safety, and innovation.
        </motion.p>

        {/* Logos container */}
        <motion.div
          className="flex flex-col items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* TOP ROW: 4 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full justify-items-center">
            {topRow.map((logo, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="bg-white shadow-md rounded-xl p-4 md:p-5 w-36 h-24 md:w-44 md:h-28 flex items-center justify-center hover:shadow-2xl transition-shadow"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-14 md:max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ROW: 3 logos centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full justify-items-center">
            {bottomRow.map((logo, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="bg-white shadow-md rounded-xl p-4 md:p-5 w-36 h-24 md:w-44 md:h-28 flex items-center justify-center hover:shadow-2xl transition-shadow"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-14 md:max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
