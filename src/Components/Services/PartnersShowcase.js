import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, School, Factory, Landmark, X } from "lucide-react";

const PartnersShowcase = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const clients = [
    { id: 1, name: "Acharya College, Bengaluru", type: "Academic", work: "Total Station Training", remarks: "Academic Collaboration" },
    { id: 2, name: "Aditya Institute, Bengaluru", type: "Academic", work: "Structural Testing", remarks: "Educational Institution" },
    { id: 3, name: "Jayalakshmi Exports & Imports (P) Ltd.", type: "Industrial", work: "Water Testing", remarks: "Industrial Partner" },
    { id: 4, name: "SVR Construction, Bengaluru", type: "Construction", work: "Column Testing", remarks: "Construction Firm" },
    { id: 5, name: "AEE, VJNL – Upper Bhadra Project", type: "Government", work: "Material Testing", remarks: "Government Project" },
    { id: 6, name: "Ambika Constructions, Bengaluru", type: "Construction", work: "Structural Stability Testing", remarks: "Civil Construction" },
    { id: 7, name: "Vasundra Certified Farms, Kagallipura", type: "Private", work: "Total Station Survey", remarks: "Private Sector" },
    { id: 8, name: "Swapnil Malipatil, Gulbarga", type: "Private", work: "Structural Design", remarks: "Private Project" },
    { id: 9, name: "Sir MVIT, Bengaluru", type: "Academic", work: "CBR Test", remarks: "Academic Institution" },
    { id: 10, name: "CENTUM Electronics Ltd, Yelahanka", type: "Industrial", work: "NDT Testing", remarks: "Industrial Collaboration" },
    { id: 11, name: "Continental Automotive Components Pvt. Ltd, Bommasandra", type: "Industrial", work: "NDT Testing", remarks: "Industrial Collaboration" },
    { id: 12, name: "Aranthangi Municipality (Town Planning Office, Pudukkottai)", type: "Government", work: "GIS Mapping & Multispectral Data", remarks: "Government Collaboration" },
  ];

  const filteredClients =
    filter === "All" ? clients : clients.filter((c) => c.type === filter);

  const icons = {
    Academic: <School className="w-6 h-6 text-orange-600" />,
    Industrial: <Factory className="w-6 h-6 text-orange-600" />,
    Construction: <Building2 className="w-6 h-6 text-orange-600" />,
    Government: <Landmark className="w-6 h-6 text-orange-600" />,
    Private: <Building2 className="w-6 h-6 text-orange-600" />,
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#ffb347,_transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        Our Industry Partners
        </motion.h2>
        

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {["All", "Academic", "Industrial", "Construction", "Government", "Private"].map(
            (cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full border font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg"
                    : "border-orange-300 text-gray-700 hover:bg-orange-100"
                }`}
              >
                {cat}
              </motion.button>
            )
          )}
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.id}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-orange-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-300"></div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {icons[client.type]}
                  <h3 className="font-semibold text-lg text-gray-900">
                    {client.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium text-orange-600">
                  Type / Work:
                </span>{" "}
                {client.work}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <span className="font-medium text-orange-600">Remarks:</span>{" "}
                {client.remarks}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(client)}
                className="text-orange-600 font-semibold text-sm hover:text-orange-700"
              >
                View Details →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selected.name}
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  {selected.type}
                </p>
                <div className="text-left text-gray-600 space-y-2">
                  <p>
                    <strong className="text-gray-800">Work:</strong>{" "}
                    {selected.work}
                  </p>
                  <p>
                    <strong className="text-gray-800">Remarks:</strong>{" "}
                    {selected.remarks}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PartnersShowcase;
