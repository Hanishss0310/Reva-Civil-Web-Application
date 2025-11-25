import React from 'react';
import engineerImg from './Images/c4.jpg';
import craneImg from './Images/c1.jpg';
import workersImg from './Images/c2.jpg';

// Icons
import { FaUniversity } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const AboutUsREVA = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-r from-[#fffcf2] to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 relative z-10">
          
          {/* Left Title Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm">
              <FaUniversity size={16} />
              <span>About Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              School of Civil Engineering,  
              <span className="text-orange-600 block mt-1">REVA University</span>
            </h2>
          </div>

          {/* Right Text Section */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-gray-600 text-base leading-relaxed">
              The School of Civil Engineering at REVA University is a recognised centre for 
              <span className="text-gray-900 font-semibold"> testing, consultancy, and applied research. </span>
              Equipped with advanced laboratories and instrumentation, the school provides expertise in
              structural, geotechnical, construction materials, transportation, and environmental engineering.
              <br /><br />
              With a strong blend of academic excellence and hands-on consultancy experience, the faculty team 
              supports industries, government agencies, and research organisations with standards-compliant, 
              technology-driven, and sustainable engineering solutions.
            </p>

            <button className="mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-all duration-300">
              <span>Learn More</span>
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* IMAGE CLUSTER */}
        <div className="relative w-full h-[600px] lg:h-[550px] -mt-12 lg:-mt-24">
          
          {/* LEFT IMAGE – Engineer */}
          <div className="absolute top-1/3 left-0 w-[45%] lg:w-[28%] z-10">
            <img 
              src={engineerImg} 
              alt="Laboratory Experts" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
            <p className="text-center text-sm font-semibold text-gray-800 mt-2">
              Laboratory Experts
            </p>
          </div>

          {/* CENTER HIGHLIGHT BOX */}
          <div className="absolute top-2/3 left-1/2 lg:left-1/4 w-[50%] lg:w-[20%] transform -translate-x-1/2 lg:translate-x-full -translate-y-1/2 lg:top-auto lg:bottom-0 lg:-translate-y-0 bg-orange-500 p-6 rounded-lg shadow-xl z-30 text-center">
            <h3 className="text-4xl lg:text-5xl font-bold text-white">12+</h3>
            <p className="text-sm font-semibold text-white mt-1">Years Excellence</p>
          </div>

          {/* CENTER IMAGE – Facility */}
          <div className="absolute top-0 left-1/2 w-[70%] lg:w-[40%] h-[90%] lg:h-full transform -translate-x-1/2 z-20">
            <img 
              src={craneImg} 
              alt="Advanced Facilities" 
              className="w-full h-full object-cover rounded-lg shadow-2xl" 
            />
            <p className="text-center text-sm font-semibold text-gray-800 mt-2">
              Advanced Facilities
            </p>
          </div>
          
          {/* RIGHT IMAGE – Team / Workers */}
          <div className="absolute top-1/4 right-0 w-[45%] lg:w-[28%] z-10">
            <img 
              src={workersImg} 
              alt="Field Experts" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
            <p className="text-center text-sm font-semibold text-gray-800 mt-2">
              Field Experts
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsREVA;
