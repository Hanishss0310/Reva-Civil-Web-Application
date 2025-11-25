import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import Logo from './Images/Logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Function to scroll smoothly to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Handle About link click
  const handleAboutClick = () => {
    if (location.pathname === '/') {
      scrollToSection('about-section');
    } else {
      navigate('/', { state: { scrollTo: 'about-section' } });
    }
  };

  return (
    <footer
      className="bg-[#0e1a2b] text-white font-poppins text-sm pt-16"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/CollegeOrUniversity"
    >
      <meta itemProp="name" content="REVA University - Civil Engineering Department" />
      <meta itemProp="url" content="https://reva.edu.in/school-of-civil-engineering" />
      <meta
        itemProp="description"
        content="REVA University Civil Engineering Department focuses on innovative education, research, and practical solutions in infrastructure and sustainable development."
      />
      <meta itemProp="email" content="civil@reva.edu.in" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[2fr_1.2fr_1.2fr_1.6fr] gap-y-16 md:gap-x-12 lg:gap-x-14 pb-12">
        
        {/* ✅ Logo + Info */}
        <div className="pr-4">
          <img
            src={Logo}
            alt="REVA Civil Logo"
            className="w-22 h-16 mb-4"
            loading="lazy"
          />
          <p className="mb-6 leading-relaxed">
            Innovating Civil Engineering education through research, hands-on projects, and sustainable infrastructure solutions.
          </p>

          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="mt-1" />
            <span>consultancy.civil@reva.edu.in</span>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              REVA University<br />
              School of Civil Engineering,<br />
              Rukmini Knowledge Park, Kattigenahalli, Yelahanka<br />
              Bengaluru – 560064, Karnataka
            </span>
          </div>
        </div>

        {/* ✅ Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-semibold text-lg mb-4 border-b border-white inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-2">
            <li>
              <button
                onClick={handleAboutClick}
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition w-full text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <Link
                to="/ContactUsIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/ServicesIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/GalleryIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>


        {/* ✅ Policies */}
        <nav aria-label="Policy and Resources">
          <h3 className="font-semibold text-lg mb-4 border-b border-white inline-block pb-1">
            Policies
          </h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Link
                to="/TermsIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <a
                href="./RevaCivil.pdf"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Brochure
              </a>
            </li>
            <li>
              <Link
                to="/PrivacyPolicyIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-500 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.instagram.com/revauniversity_official?igsh=YW9vOXMzcGN0cjY="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/REVAUniversityofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/REVAuniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center text-gray-300 text-xs gap-2">
          <span>All Rights Reserved © REVA Civil Department</span>
          <div className="flex gap-4 divide-x divide-white divide-opacity-20">
            <Link
              to="/TermsIndex"
              className="px-2 hover:bg-gray-900 hover:text-orange-500 rounded transition"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/PrivacyPolicyIndex"
              className="px-2 hover:bg-gray-900 hover:text-orange-500 rounded transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
