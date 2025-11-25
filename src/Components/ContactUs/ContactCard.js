import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiUser } from "react-icons/fi";

export default function ContactCard() {
  const handleEmail = () => {
    window.location.href =
      "mailto:consultancy.civil@reva.edu.in?subject=Inquiry%20from%20Website";
  };

  return (
    <section className="w-full bg-[#f6f7f9] py-16 px-6 sm:px-10">

      {/* Page Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Contact <span className="text-[#f97316]">Us</span>
        </h2>
        <p className="text-gray-600 mt-2">
          We are here to assist you with testing and consultancy services.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT – Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex gap-4">
                <FiMapPin className="text-[#f97316] mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    REVA University, School of Civil Engineering <br />
                    Rukmini Knowledge Park, Yelahanka <br />
                    Bengaluru – 560064, Karnataka
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <FiMail className="text-[#f97316] mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <button
                    onClick={handleEmail}
                    className="text-blue-600 hover:underline mt-1"
                  >
                    consultancy.civil@reva.edu.in
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <FiPhone className="text-[#f97316] mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700 mt-1">+91 80-4696 6966</p>
                </div>
              </div>

              {/* Technical Contact */}
              <div className="flex gap-4">
                <FiUser className="text-[#f97316] mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Technical Contact
                  </h4>
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    <span className="font-medium text-gray-900">
                      Mr. K. Chandraprakash, M.Tech. (Ph.D.)
                    </span>
                    <br />
                    Technical Manager, Testing Division <br />
                    Mobile: <span className="font-medium">+91 8897473289</span>
                    <br />
                    Tel: 080 4696 6966 | Ext: 189
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.385357197446!2d77.63461179999999!3d13.1168745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20University!5e0!3m2!1sen!2sin!4v1705641686579!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-full pointer-events-auto"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REVA University Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
