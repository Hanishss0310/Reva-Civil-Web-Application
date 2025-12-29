import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";

/* ================= DATA ================= */

const coreTests = [
  "Triaxial Shear Test (Unconsolidated Undrained – UU)",
  "Unconfined Compressive Strength (UCC)",
  "Soil Bearing Capacity for Shallow Foundations",
  "Compaction Test – Standard Proctor",
  "Compaction Test – Modified Proctor",
  "Atterberg Limits – Liquid, Plastic & Shrinkage Limits",
  "Grain Size Distribution – Sieve Analysis",
  "Grain Size Distribution – Hydrometer Analysis",
  "Specific Gravity of Soil Solids",
];

const whyChooseUs = [
  "Testing in accordance with IS:2720 series, ASTM D series, and IRC codes",
  "Automated triaxial and compaction testing systems for improved accuracy",
  "Experienced geotechnical engineers providing interpretation and design inputs",
  "Correlation-based recommendations for field implementation and QC",
  "Soil classification and suitability assessment for land development projects",
];

const applications = [
  "Foundation design for buildings, bridges, and retaining structures",
  "Subgrade evaluation for pavements, highways, and airfields",
  "Stability analysis of embankments, earth dams, and slopes",
  "Selection of construction materials and compaction quality control",
];

/* ================= COMPONENT ================= */

const SoilTestingSection = () => {
  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        {/* Orange Accent Blobs */}
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#F37021]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F5A25D]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 space-y-12">

          {/* ================= HEADER ================= */}
          <header className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F37021]/30 bg-[#2a2a2a]/60 px-3 py-1 text-xs font-medium text-[#F5A25D] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F37021]" />
              Geotechnical Testing Laboratory
            </div>

            <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr]">
              {/* Overview */}
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                  Soil Testing
                  <span className="block text-[#F37021]">
                    Foundation for Safe & Economic Design
                  </span>
                </h2>

                <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
                  Soil investigation forms the foundation of every successful civil
                  engineering project. Understanding soil behavior under varying
                  load, moisture, and stress conditions is essential for designing
                  safe, durable, and cost-effective foundations.
                </p>

                <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
                  Our Geotechnical Laboratory provides comprehensive soil testing
                  covering strength, compaction, classification, and consistency
                  characteristics in accordance with
                  <span className="font-medium text-[#F37021]">
                    {" "}IS, ASTM, and BS
                  </span>{" "}
                  standards, delivering accurate and reproducible results for
                  design and construction.
                </p>
              </div>

              {/* Capabilities Card */}
              <div className="relative rounded-2xl border border-[#F37021]/40 bg-[#2a2a2a]/70 p-5 shadow-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-[#F5A25D] font-semibold">
                  Capabilities
                </p>

                <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                  We provide end-to-end geotechnical testing solutions supporting
                  site feasibility studies, design validation, and quality
                  assurance for both field-collected and laboratory-prepared samples.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["IS:2720", "ASTM D", "IRC", "BS"].map((std) => (
                    <span
                      key={std}
                      className="rounded-full border border-gray-600/70 bg-[#222]/80 px-3 py-1 text-xs text-gray-200"
                    >
                      {std} Standards
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>Strength • Compaction • Classification</span>
                  <span>Field & Laboratory Samples</span>
                </div>
              </div>
            </div>
          </header>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">

            {/* Core Tests */}
            <div className="rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">Core Tests Offered</h3>
              <p className="mt-1 text-sm text-gray-400">
                Geotechnical characterization and strength assessment
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {coreTests.map((test, index) => (
                  <div
                    key={test}
                    className="flex gap-3 rounded-xl border border-[#333] bg-[#222] p-3 text-sm text-gray-200 hover:border-[#F37021] transition"
                  >
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#111] ring-1 ring-[#F37021]/60 text-[10px] font-semibold text-[#F5A25D]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p>{test}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">

              {/* Why Choose Us */}
              <div className="rounded-2xl border border-[#F37021]/40 bg-[#1f1f1f]/70 p-5 shadow-lg">
                <h3 className="text-lg font-semibold text-[#F5A25D]">
                  Why Choose Us
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-gray-200">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-[#F37021]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg">
                <h3 className="text-lg font-semibold">Applications</h3>

                <div className="mt-4 space-y-3">
                  {applications.map((app, idx) => (
                    <div
                      key={app}
                      className="relative rounded-xl border border-[#333] bg-[#141414]/60 p-3 text-sm text-gray-200 hover:border-[#F37021]"
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#F37021] to-[#F5A25D]" />
                      <div className="pl-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                          Application {idx + 1}
                        </p>
                        <p className="mt-1">{app}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Note */}
          {/* <div className="rounded-2xl border border-[#333] bg-[#121212] px-4 py-3 text-[11px] text-gray-300 shadow-inner">
            Soil Investigation → Geotechnical Analysis → Safe Foundation Design
          </div> */}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoilTestingSection;
