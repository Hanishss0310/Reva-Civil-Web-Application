import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceScroller from "./ServiceScroller";
import AboutRebuilders from "./AboutRebuilders";
import ConstructionTests from "./ConstructionTests";
import AboutCivilEngineering from "./AboutCivilEngineering";
import ServiceCards from "./ServiceCard";
import ClientsShowcase from "./ClientsShowcase";
import Footer from "./Footer";
import AboutRevaUniversity from "./AboutRevaUniversity";

import { FiMail } from "react-icons/fi";
import { Plus, ChevronRight, Beaker, Ruler, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function HomeIndex() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showTestingMenu, setShowTestingMenu] = useState(false);
  const [showMobileTesting, setShowMobileTesting] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const handleMailClick = () => {
    window.location.href =
      "mailto:consultancy.civil@reva.edu.in?subject=Consultation Request";
  };

  /* ================= MENU DATA ================= */
  const menuItems = [
    {
      title: "Advanced Services",
      link: "/AdvancedSpecializedServicesSection",
      icon: <Plus />,
    },
    {
      title: "Design Consultancy",
      link: "/DesignStructuralConsultancy",
      icon: <Layers />,
    },
    {
      title: "Surveying",
      link: "/Surveying",
      icon: <Ruler />,
    },
    {
      title: "General Material Testing",
      link: "/GeneralMaterialTesting",
      icon: <Beaker />,
      hasSubmenu: true,
    },
  ];

  const testingSubMenu = [
    { title: "Aggregate Testing", link: "/AggregateTestingSection" },
    { title: "Cement Testing", link: "/CementTestingSection" },
    { title: "Concrete Testing", link: "/ConcreteTestingSection" },
    { title: "Soil Testing", link: "/SoilTestingSection" },
    { title: "Bitumen Testing", link: "/BitumenTestingSection" },
    { title: "Bricks, Blocks, Tiles & Pavers Testing", link: "/BricksBlocksTilesPaversTestingSection" },
    { title: "Steel Testing", link: "/SteelTestingSection" },
    { title: "Water & Wastewater Testing", link: "/WaterWastewaterTestingSection" },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />

      {/* ================= DESKTOP SIDEBAR (DARK REVA) ================= */}
      <div className="hidden md:block fixed right-0 top-32 z-[60] w-64">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 pr-3"
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onMouseEnter={() =>
                item.hasSubmenu
                  ? setShowTestingMenu(true)
                  : setShowTestingMenu(false)
              }
              onClick={() => navigate(item.link)}
              whileHover={{ x: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                relative rounded-2xl p-5
                bg-[#121212]/90 backdrop-blur-xl
                border border-[#F37021]/30
                text-white shadow-xl
                overflow-hidden
              "
            >
              {/* Accent line */}
              <span className="absolute left-0 top-0 h-full w-1 bg-[#F37021]" />

              {/* Hover glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#F37021]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center justify-between">
                <div className="text-left">
                  <h4 className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Explore services
                  </p>
                </div>

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#F5A25D]"
                >
                  {item.icon}
                </motion.div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP SUBMENU (DARK GLASS) ================= */}
      <AnimatePresence>
        {showTestingMenu && (
          <motion.div
            onMouseEnter={() => setShowTestingMenu(true)}
            onMouseLeave={() => setShowTestingMenu(false)}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="
              hidden md:flex fixed top-0 right-0 h-screen
              w-[25vw] min-w-[340px]
              bg-[#0f0f0f]/95 backdrop-blur-xl
              border-l border-[#F37021]/30
              shadow-2xl z-[70] flex-col
            "
          >
            <div className="px-8 py-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-b border-[#F37021]/30">
              <h3 className="text-2xl font-bold text-white">
                Material Testing
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Specialized laboratory services
              </p>
            </div>

            <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {testingSubMenu.map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => navigate(item.link)}
                  className="
                    w-full px-6 py-4 text-left
                    rounded-xl font-medium
                    bg-[#151515]
                    hover:bg-[#1e1e1e]
                    border border-[#F37021]/20
                    text-gray-200
                    flex justify-between items-center
                  "
                >
                  {item.title}
                  <ChevronRight size={18} className="text-[#F37021]" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE FLOATING BUTTONS (UNCHANGED) ================= */}
      <div className="md:hidden fixed bottom-24 right-4 z-[70] flex flex-col gap-3">
        {menuItems.map((item, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              item.hasSubmenu
                ? setShowMobileTesting(true)
                : navigate(item.link)
            }
            className="
              w-14 h-14 rounded-full
              flex items-center justify-center
              shadow-xl text-white
              bg-[#121212] border border-[#F37021]/40
            "
          >
            {item.icon}
          </motion.button>
        ))}
      </div>

      {/* ================= MOBILE BOTTOM SHEET (UNCHANGED) ================= */}
      <AnimatePresence>
        {showMobileTesting && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="
              fixed inset-x-0 bottom-0 z-[90]
              bg-white rounded-t-3xl
              shadow-2xl
            "
          >
            <div className="flex justify-center pt-3">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            <div className="px-6 py-5 border-b">
              <h3 className="text-xl font-bold">
                Material Testing
              </h3>
              <p className="text-sm text-gray-500">
                Select a service
              </p>
            </div>

            <div className="p-4 space-y-2">
              {testingSubMenu.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setShowMobileTesting(false);
                    navigate(item.link);
                  }}
                  className="
                    w-full px-5 py-4 text-left
                    rounded-xl bg-gray-50
                    hover:bg-gray-100
                    font-medium
                  "
                >
                  {item.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowMobileTesting(false)}
              className="w-full py-4 text-center text-red-500 font-semibold"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PAGE CONTENT (UNCHANGED) ================= */}
      <HeroSection />
      <ServiceCards />
      <ServiceScroller />
      <AboutRebuilders />

      <section id="projects-section">
        <ConstructionTests />
      </section>

      <section id="about-section">
        <AboutCivilEngineering />
      </section>

      <ClientsShowcase />
      <Footer />

      {/* ================= MAIL BUTTON ================= */}
      <button
        onClick={handleMailClick}
        className="
          fixed bottom-6 right-6
          bg-[#f97316] hover:bg-[#fb923c]
          text-white p-4 rounded-full
          shadow-xl transition hover:scale-110
          z-[95]
        "
      >
        <FiMail size={24} />
      </button>
    </div>
  );
}

export default HomeIndex;
