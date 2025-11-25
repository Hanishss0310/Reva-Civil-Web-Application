import React from "react"; // Removed useEffect and useRef, no longer needed
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaBuilding,
  FaBusinessTime,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Structural Stability Testing (NDT)",
    desc: "Evaluate existing building integrity using non-destructive testing methods for safe performance.",
    icon: <FaBuilding />,
  },
  {
    title: "Rebar Corrosion Mapping",
    desc: "Half-cell potential analysis to detect corrosion and ensure reinforcement reliability.",
    icon: <FaTools />,
  },
  {
    title: "Concrete Mix Design",
    desc: "Accelerated strength validation via boiling water method ensuring rapid, quality construction.",
    icon: <FaBusinessTime />,
  },
  {
    title: "Pavement Design & Evaluation",
    desc: "Design verification and assessment as per IRC & AASHTO standards for lasting performance.",
    icon: <FaIndustry />,
  },
  {
    title: "Marshall Stability & Flow Test",
    desc: "Analyze bituminous mix durability, strength, and flow consistency under load conditions.",
    icon: <FaTools />,
  },
];

const ServicesScroller = () => {
  // --- NEW: Calculate scroll animation properties ---
  // We base this on the larger (md) card width and gap
  const cardWidth = 240; // md:w-[240px]
  const gap = 24; // gap-6 is 1.5rem, which is 24px
  const totalScrollWidth = (cardWidth + gap) * services.length;

  // Calculate duration based on original speed (1px per 25ms = 40px/sec)
  const scrollDuration = totalScrollWidth / 40;
  // --- End of new calculation ---

  // --- REMOVED ---
  // The original useEffect hook for manual scrolling is no longer needed.
  // const scrollRef = useRef(null);
  // useEffect(() => { ... }, []);
  // --- END REMOVED ---

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d0d0d] via-[#111] to-[#1a1a1a] py-20 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Header (Unchanged) */}
      <div className="relative text-center mb-16 z-10">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 uppercase tracking-[4px] text-xs font-semibold"
        >
          Company Services
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mt-2"
        >
          Precision. Innovation. Reliability.
        </motion.h2>

        <p className="mt-3 text-gray-400 text-sm max-w-xl mx-auto">
          Comprehensive testing, design, and analysis services built to
          strengthen your projects with trust.
        </p>
      </div>

      {/* --- MODIFIED: Auto Scroll Section ---
        - The outer div is now just an 'overflow-hidden' mask.
        - An inner 'motion.div' handles the animation.
        - The 'services' array is mapped twice for a seamless loop.
      */}
      <div className="w-full overflow-hidden relative z-10 py-4 no-scrollbar">
        <motion.div
          className="flex gap-6 px-6 md:px-16" // Styles from old scroller applied here
          animate={{
            x: [0, -totalScrollWidth], // Animate from start to end of one full set
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop", // Loop back to the start
              duration: scrollDuration, // Use calculated duration
              ease: "linear", // A constant speed is crucial for a smooth loop
            },
          }}
        >
          {/* Render the list twice for seamless looping */}
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }} // This is for the 'whileInView'
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0px 8px 25px rgba(249,115,22,0.25)",
                // --- NEW: Added transition for a smooth hover ---
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex-shrink-0 w-[220px] md:w-[240px] bg-[#1b1b1b] border border-[#2c2c2c]
                       rounded-2xl p-6 flex flex-col items-center text-center
                       hover:bg-gradient-to-br hover:from-[#ff6a00] hover:to-[#ff9a44] hover:text-white"
              // Removed 'transition-all' as Framer Motion now handles it
            >
              <div className="text-3xl mb-4 text-orange-400">
                {service.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 leading-snug mb-3">
                {service.desc}
              </p>
              <motion.button
                // --- NEW: Added a spring transition for a snappier hover ---
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-xs font-medium flex items-center justify-center gap-1 text-orange-400 hover:text-white transition-all"
              >
                <span>Read More</span>
                <span>↗</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesScroller;