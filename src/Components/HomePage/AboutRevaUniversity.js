import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGlobeAsia, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUniversity />,
    title: "State Private University",
    desc: "Established under the Government of Karnataka Act No.13 of 2012, located in Bengaluru.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Global Recognition",
    desc: "Accredited with NAAC A+ grade and approved by UGC & AICTE for excellence in education.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Research",
    desc: "Focused on research-driven learning with a strong emphasis on creativity and innovation.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Industry Collaboration",
    desc: "Active partnerships with industries fostering applied learning and employability.",
  },
];

const AboutRevaUniversity = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-14 bg-gray-50 overflow-hidden">
      {/* Background Gradient Motion */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,186,102,0.3), transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(255,215,150,0.3), transparent 70%)",
            "radial-gradient(circle at 40% 60%, rgba(255,180,80,0.3), transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      ></motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-orange-600">REVA University</span>
        </h2>
        <div className="mx-auto w-24 h-1 bg-orange-500 rounded-full"></div>
      </motion.div>

      {/* Main Glass Card */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-10 md:p-14"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
              Empowering Knowledge <br />
              Through <span className="text-orange-600">Innovation</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
              REVA University, established under the Government of Karnataka Act
              No. 13 of 2012, is a State Private University located in
              Bengaluru—India’s hub of technology and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Accredited with NAAC A+ grade and approved by UGC & AICTE, REVA is
              known for its world-class infrastructure, research, and
              industry-oriented learning, producing graduates ready to face
              real-world challenges.
            </p>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 md:p-14 bg-gradient-to-br from-orange-100 via-white to-orange-50"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl text-orange-500 mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutRevaUniversity;
