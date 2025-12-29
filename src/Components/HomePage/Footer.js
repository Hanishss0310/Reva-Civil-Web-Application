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

  // Scroll to section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle About link click
  const handleAboutClick = () => {
    if (location.pathname === '/') {
      scrollToSection('about-section');
    } else {
      navigate('/', { state: { scrollTo: 'about-section' } });
    }
  };

  return (
    <footer
      className="bg-[#0e1a2b] text-white font-poppins text-sm pt-20 pb-4 relative z-20"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/CollegeOrUniversity"
    >
      {/* Metadata */}
      <meta
        itemProp="name"
        content="REVA University (Testing Division) - School of Civil Engineering"
      />
      <meta
        itemProp="address"
        content="REVA University (Testing Division), School of Civil Engineering, Sy No 22 26 And 27, Kottigenahali Hobli, Yelahanka, Bengaluru (Bangalore) Urban, Karnataka, 560064"
      />
      <meta itemProp="email" content="consultancy.civil@reva.edu.in" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[2fr_1.2fr_1.2fr_1.6fr] gap-y-16 md:gap-x-12 pb-12">
        
        {/* LEFT - Logo + Description + Address */}
        <div className="pr-4">
          <img
            src={Logo}
            alt="REVA Civil Logo"
            className="w-24 h-16 object-contain mb-4"
            loading="lazy"
          />

          <p className="mb-6 leading-relaxed text-gray-300">
            Delivering excellence in civil engineering testing, consultancy,
            and research with precision, integrity, and real-world impact.
          </p>

          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="mt-1 text-orange-400" />
            <span className="text-gray-200">consultancy.civil@reva.edu.in</span>
          </div>

          <div className="flex items-start gap-3 text-gray-200 leading-relaxed">
            <FaMapMarkerAlt className="mt-1 text-orange-400" />
            <span>
              REVA University (Testing Division) <br />
              School of Civil Engineering <br />
              REVA University <br />
              Sy No 22, 26 and 27, Kottigenahali Hobli <br />
              Yelahanka, Bengaluru (Bangalore) Urban <br />
              Karnataka – 560064
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-semibold text-lg mb-4 border-b border-white inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-2 text-gray-300">
            <li>
              <button
                onClick={handleAboutClick}
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition w-full text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <Link
                to="/ContactUsIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/ServicesIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/GalleryIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* Policies */}
        <nav aria-label="Policies & Documents">
          <h3 className="font-semibold text-lg mb-4 border-b border-white inline-block pb-1">
            Policies
          </h3>
          <ul className="space-y-2 mt-2 text-gray-300">
            <li>
              <Link
                to="/TermsIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <a
                href="./RevaCivil.pdf"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brochure
              </a>
            </li>

            <li>
              <Link
                to="/PrivacyPolicyIndex"
                className="px-2 py-1 rounded hover:bg-gray-900 hover:text-orange-400 transition block"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <p className="mb-3 text-gray-300">Stay updated with REVA Civil activities</p>

          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://www.instagram.com/revauniversity_official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/REVAUniversityofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-400 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/REVAuniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-gray-900 hover:text-orange-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs gap-2">
          <span>
            © {new Date().getFullYear()} REVA University – School of Civil Engineering. All Rights Reserved.
          </span>

          <div className="flex gap-4 divide-x divide-white divide-opacity-20">
            <Link to="/TermsIndex" className="px-2 hover:text-orange-400 transition">
              Terms
            </Link>
            <Link to="/PrivacyPolicyIndex" className="px-2 hover:text-orange-400 transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
