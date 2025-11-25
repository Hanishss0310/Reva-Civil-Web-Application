import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroVideo from "./Images/HeroVideo.mov";

const HeroSection = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative text-white overflow-hidden font-sans"
    >
      {/* 🎥 Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 text-center lg:text-left">
        <h1 className="text-lg text-gray-200">
          REVA UNIVERSITY CIVIL ENGINEERING CONSULTANCY SERVICES
        </h1>

        <motion.div variants={staggerContainer}>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <motion.span variants={fadeUp} className="block">
              Building the Future with
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="text-[#f97316] block mt-2"
            >
              Precision & Innovation
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-6"
          >
            We combine engineering excellence, sustainable materials, and modern
            design to construct smarter, stronger, and more sustainable
            infrastructures.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
          >
            {/* ⭐ Explore Projects → /GalleryIndex */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/GalleryIndex")}
              className="bg-[#f97316] text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-black/30 hover:bg-[#fb923c] transition-all duration-300"
            >
              Explore Projects
            </motion.button>

            {/* ⭐ Contact Us → /ContactUsIndex */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/ContactUsIndex")}
              className="border border-gray-300 text-gray-100 font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Team Info */}
          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="flex items-center justify-center lg:justify-start gap-4 mt-8"
          >
            <p className="text-sm text-gray-300">
              <span className="text-white font-medium">250+</span> Civil Experts
              Working With Us
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
