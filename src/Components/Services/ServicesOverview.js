import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ClipboardCheck,
  Building2,
  Ruler,
  FlaskConical,
  Droplets,
  Hammer,
  ChevronRight,
} from "lucide-react";

const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <ClipboardCheck />,
      title: "Advanced & Specialized Services",
      desc: "Precision-driven evaluations for infrastructure, materials, and structures ensuring reliability and performance.",
      link: "/AdvancedSpecializedServicesSection",
    },
    {
      icon: <Building2 />,
      title: "Design & Structural Consultancy",
      desc: "End-to-end structural design solutions integrating safety, sustainability, and architectural excellence.",
      link: "/DesignStructuralConsultancy",
    },
    {
      icon: <Ruler />,
      title: "Surveying",
      desc: "High-precision topographical and layout surveying using advanced Total Station and digital tools.",
      link: "/Surveying",
    },
    {
      icon: <FlaskConical />,
      title: "General Material Testing",
      desc: "Comprehensive testing for aggregates, cement, concrete, soil, and bitumen as per IS and ASTM standards.",
      link: "/GeneralMaterialTesting",
    },
    {
      icon: <Hammer />,
      title: "Bricks, Blocks & Steel Testing",
      desc: "Evaluation of bricks, blocks, pavers, and reinforcement steel ensuring safety and structural compliance.",
      link: "/BricksBlocksPavers",
    },
    {
      icon: <Droplets />,
      title: "Water & Wastewater Testing",
      desc: "Chemical and physical analysis for construction and environmental compliance as per IS and APHA standards.",
      link: "/WaterWastewaterTesting",
    },
  ];

  const palette = [
    "bg-amber-500 text-white",
    "bg-gray-600 text-white",
    "bg-sky-500 text-white",
    "bg-cyan-500 text-white",
    "bg-rose-500 text-white",
    "bg-emerald-500 text-white",
  ];

  return (
    <section className="relative py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* FLEX WRAP FOR 3 PER ROW */}
        <div className="flex flex-wrap -mx-3">
          {services.map((svc, idx) => {
            const color = palette[idx % palette.length];
            return (
              <motion.button
                key={idx}
                onClick={() => svc.link && navigate(svc.link)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 120 }}
                className={`
                  ${color} 
                  rounded-md shadow-md overflow-hidden cursor-pointer
                  m-3 
                  w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center px-6 py-6">
                    <div className="mr-4">
                      <div className="w-[46px] h-[46px] bg-white/10 rounded-md flex items-center justify-center">
                        {React.cloneElement(svc.icon, { className: "w-5 h-5" })}
                      </div>
                    </div>

                    <div className="text-left">
                      <div className="font-serif text-2xl leading-tight tracking-wide">
                        {svc.title}
                      </div>

                      {/* desc visible only md+ */}
                      <div className="hidden md:block text-sm opacity-90 mt-1 max-w-xs">
                        {svc.desc}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 flex items-center justify-center">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
