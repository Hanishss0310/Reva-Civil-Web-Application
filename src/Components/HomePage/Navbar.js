// Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Images/revawhitelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Updated navItems (Gallery removed, Projects points to GalleryIndex)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/GalleryIndex" },
    { name: "Services", path: "/ServicesIndex" },
    { name: "About Us", path: "#" },
    { name: "Contact", path: "/ContactUsIndex" },
  ];

  // Detect active route
  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) {
      setActive(current.name);
    } else if (location.pathname === "/") {
      setActive("Home");
    }
  }, [location.pathname]);

  // Scroll helper
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Navigation behavior
  const handleNavigate = (item) => {
    setIsOpen(false);

    // About Us scroll logic
    if (item.name === "About Us") {
      if (location.pathname === "/") {
        scrollToSection("about-section");
      } else {
        navigate("/", { state: { scrollTo: "about-section" } });
      }
      return;
    }

    // Projects → GalleryIndex directly (updated)
    if (item.name === "Projects") {
      navigate("/GalleryIndex");
      return;
    }

    navigate(item.path);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-[#222831]/95 backdrop-blur-sm text-white border-b border-gray-700 shadow-lg fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-12 object-contain drop-shadow-[0_0_4px_rgba(249,115,22,0.5)]"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleNavigate(item)}
              className={`relative font-medium tracking-wide transition duration-200 ${
                active === item.name ? "text-[#f97316]" : "text-gray-300"
              } hover:text-[#f97316]`}
            >
              {item.name}
              {active === item.name && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f97316]"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Contact Icon (replaces Search) */}
        <div className="hidden md:flex items-center gap-4 text-gray-300 relative">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md"
            onClick={() => navigate("/ContactUsIndex")}
            title="Contact Us"
            aria-label="Contact Us"
          >
            <FiMail className="text-gray-300" size={20} />
            <span className="hidden lg:inline text-sm text-gray-300 hover:text-[#f97316]">
              Contact
            </span>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#222831]/95 border-t border-gray-700 px-6 pb-4"
          >
            <ul className="flex flex-col gap-3 mt-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item)}
                  className={`text-left text-lg font-medium ${
                    active === item.name ? "text-[#f97316]" : "text-gray-300"
                  } hover:text-[#f97316]`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile explicit Contact CTA for clarity */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/ContactUsIndex");
                }}
                className="mt-3 w-full text-left text-lg font-semibold text-[#f97316] bg-transparent"
              >
                Contact Us
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
