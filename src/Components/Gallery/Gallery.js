import React from "react";

// Import local images from the Images folder
import img11 from "./Images/img11.jpg";
import img12 from "./Images/img12.jpg";
import img13 from "./Images/img13.jpg";
import img14 from "./Images/img14.jpg";
import img15 from "./Images/img15.jpg";
import img16 from "./Images/img16.jpg";
import img17 from "./Images/img17.jpg";
import img18 from "./Images/img18.jpg";

const Gallery = () => {
  const images = [img11, img12, img13, img14, img15, img16, img17, img18];

  return (
    <section className="bg-[#faf7f0] py-20 px-6 sm:px-10 lg:px-20 text-center font-poppins">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
          Gallery
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Take a Look Around
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Browse through our gallery and get inspired by the innovation, 
          creativity, and achievements of the School of Civil Engineering 
          at REVA University.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-[280px] h-[230px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
