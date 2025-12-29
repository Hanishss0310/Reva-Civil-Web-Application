import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";

/* ================= DATA ================= */

const coreTests = [
  "Stripping Value",
  "Crushing Strength (Coarse Aggregate)",
  "Abrasion Test (Coarse Aggregate)",
  "Impact Value (Coarse Aggregate)",
  "Flakiness Index (Coarse Aggregate)",
  "Elongation Index (Coarse Aggregate)",
  "10% Fines Value (Coarse Aggregate)",
  "Bulk Density – Loose & Compacted (Coarse & Fine)",
  "Sieve Analysis – Coarse & Fine Aggregates",
  "Material Finer than 75 Microns (Fine Aggregate)",
  "Specific Gravity – Coarse & Fine Aggregates",
  "Water Absorption – Coarse & Fine Aggregates",
];

const whyChooseUs = [
  "Testing as per IS:2386, IS:383, IRC:109, and ASTM C standards",
  "Automated and calibrated equipment ensuring high precision",
  "Detailed analytical reports with tables and graphical interpretation",
  "Experienced civil engineers providing mix design and performance insights",
];

const applications = [
  "Quality assurance for concrete, bituminous, and sub-base construction",
  "Pavement and structural concrete mix design validation",
  "Source evaluation for quarry approval and material suppliers",
  "Routine and third-party testing for infrastructure and industrial projects",
];

/* ================= COMPONENT ================= */

const AggregateTestingSection = () => {
  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        {/* Orange Blobs */}
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#F37021]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F5A25D]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 space-y-12">

          {/* ================= HEADER ================= */}
          <header className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F37021]/30 bg-[#2a2a2a]/60 px-3 py-1 text-xs font-medium text-[#F5A25D] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F37021]" />
              Materials Testing Laboratory
            </div>

            <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr]">
              {/* Overview */}
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                  Aggregates Testing
                  <span className="block text-[#F37021]">
                    Foundation of Durable Infrastructure
                  </span>
                </h2>

                <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
                  Aggregates form the core of every durable concrete and pavement system.
                  Their strength, shape, grading, and durability directly influence the
                  performance and lifespan of civil structures.
                </p>

                <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
                  Our Materials Testing Laboratory provides comprehensive testing and
                  evaluation of coarse and fine aggregates in accordance with
                  <span className="text-[#F37021] font-medium"> IS, IRC, and ASTM </span>
                  specifications, ensuring consistent quality control and performance
                  reliability for construction projects.
                </p>
              </div>

              {/* Capabilities Card */}
              <div className="relative rounded-2xl border border-[#F37021]/40 bg-[#2a2a2a]/70 p-5 shadow-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-[#F5A25D] font-semibold">
                  Capabilities
                </p>

                <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                  We conduct detailed evaluations of aggregate strength, texture,
                  size distribution, and resistance to wear and weathering using
                  standardized laboratory procedures under controlled conditions.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["IS", "IRC", "ASTM"].map((std) => (
                    <span
                      key={std}
                      className="rounded-full border border-gray-600/70 bg-[#222]/80 px-3 py-1 text-xs text-gray-200"
                    >
                      {std} Standards
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>Coarse & Fine Aggregates</span>
                  <span>Concrete • Bituminous • Sub-base</span>
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
                Mechanical and physical characterization of aggregates
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
            Field → Laboratory Testing → Analysis → Quality Assurance
          </div> */}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AggregateTestingSection;
