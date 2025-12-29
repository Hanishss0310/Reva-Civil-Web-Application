import React from "react";
import { motion } from "framer-motion";
import {
  Ruler,
  Building2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, title, description, link }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative bg-white p-8 rounded-2xl shadow-md border border-orange-100 h-full group hover:shadow-2xl transition-all duration-500"
  >
    <Link to={link} className="absolute inset-0 z-20 rounded-2xl" />

    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 to-orange-100/40 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
    <div className="relative z-10 pointer-events-none">
      <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-5">
        {React.cloneElement(icon, { className: "w-7 h-7 text-orange-600" })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-sm">{description}</p>

      {/* arrow indicator */}
      <motion.div
        className="mt-4 text-orange-600 flex items-center gap-1 font-semibold"
        whileHover={{ x: 6 }}
      >
        <span className="text-sm">Explore</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </div>
  </motion.div>
);

const WhyChooseReva = () => {
  const features = [
    {
      title: "Advanced Testing & Services",
      description:
        "Delivering advanced testing, analysis, and validation for critical infrastructure — ensuring every project meets global standards of safety and quality.",
      icon: <ShieldCheck />,
      link: "/AdvancedSpecializedServicesSection",
    },
    {
      title: "Design & Structural Consultancy",
      description:
        "Our consultancy blends creativity with engineering precision to deliver durable, functional, and aesthetically refined infrastructure solutions.",
      icon: <Building2 />,
      link: "/DesignStructuralConsultancy",
    },
    {
      title: "Precision Surveying & Mapping",
      description:
        "Providing accurate measurements, mapping, and layout verification using modern Total Station and digital tools — ensuring absolute precision.",
      icon: <Ruler />,
      link: "/Surveying",
    },
    {
      title: "Integrated Project Solutions",
      description:
        "Combining testing, design, and field data integration under one roof — minimizing coordination delays and improving overall project performance.",
      icon: <Layers />,
      link: "/GeneralMaterialTesting", // you can change if another page exists
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-orange-100 py-24 px-5 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_#fb923c_1px,_transparent_0)] bg-[length:20px_20px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-orange-100 text-orange-700 px-5 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-5 shadow-sm">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Why <span className="text-orange-600">REVA Civil Labs</span> Is
            Your Partner in Engineering Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            From precision testing to design consultancy and surveying, we
            integrate innovation, accuracy, and trust to empower your
            engineering vision with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-10 rounded-2xl shadow-2xl flex flex-col justify-between border border-orange-700/20"
          >
            <div>
              <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-5">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Flexible & Responsive Service
              </h3>
              <p className="text-orange-100 leading-relaxed mb-4 text-sm">
                Our teams are committed to delivering results aligned with your
                project schedule. Through agile coordination and continuous
                communication, we ensure smooth workflow from testing to
                delivery.
              </p>
              <p className="text-orange-100/90 leading-relaxed mb-4 text-sm">
                Whether you need quick field testing, 3D structural design, or
                integrated data analysis, our responsive system guarantees
                accuracy and efficiency without compromising quality.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/ContactUsIndex"
                className="mt-8 bg-white text-orange-700 font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseReva;
