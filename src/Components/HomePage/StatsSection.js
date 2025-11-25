// src/Components/HomePage/StatsSection.js
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const springValue = useSpring(count, { damping: 60, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      count.set(value, { duration: 2000 });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatsSection = () => {
  const stats = [
    { label: "Complete Projects", value: 150, suffix: "+" },
    { label: "Team Members", value: 100, suffix: "+" },
    { label: "Client Reviews", value: 200, suffix: "+" },
    { label: "Winning Awards", value: 30, suffix: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      // STYLE UPDATE: Reduced vertical padding for a shorter section
      className="bg-slate-50 py-12 sm:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:divide-x sm:divide-slate-200 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              // STYLE UPDATE: Reduced padding for a tighter layout
              className="px-4 py-6 sm:py-0"
              variants={itemVariants}
            >
              {/* STYLE UPDATE: Smaller font size for the numbers */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
                <Counter value={stat.value} />{stat.suffix}
              </h2>
              {/* STYLE UPDATE: Smaller font size and wider tracking for the labels */}
              <p className="text-xs font-medium text-slate-500 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;