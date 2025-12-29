import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";

const coreTests = [
  "Dissolved Oxygen",
  "Chlorine Demand",
  "Sulphates",
  "Calcium",
  "Chlorides",
  "Alkalinity",
  "Acidity",
  "Hardness",
  "Total Solids",
  "Suspended Matter",
  "Turbidity",
  "pH",
  "Conductivity",
];

const whyChooseUs = [
  "Testing as per IS and BIS standards",
  "Automated titration, photometric, and pH/conductivity measurement systems",
  "Comprehensive chemical profiling with interpretive reports",
  "Rapid sample collection and express testing options available",
];

const applications = [
  "Quality assessment of water used in concrete mixing, curing, and construction",
  "Analysis of groundwater, surface water, and effluent for environmental monitoring",
  "Verification for water treatment plants and industrial discharge compliance",
  "Routine testing for municipalities, developers, and research organizations",
];

const WaterWastewaterTesting = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        
        {/* Reva orange gradient accents */}
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#F37021]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F5A25D]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl flex flex-col gap-12 px-4 py-16 md:px-8 md:py-24">

          {/* HEADER */}
          <header className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F37021]/30 bg-[#2a2a2a]/60 px-3 py-1 text-xs font-medium text-[#F5A25D] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F37021]" />
              Water & Wastewater Testing
            </div>

            <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-start">

              {/* Overview */}
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Chemical Integrity of Water
                  <span className="block text-[#F37021]">
                    for Safe Construction & Environment
                  </span>
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
                  Water quality directly influences construction performance, 
                  environmental safety, and material durability. Whether used in 
                  concrete mixing, curing, or industrial applications, water chemistry 
                  affects strength, corrosion potential, and long-term service life.
                  Our Water and Wastewater Testing Laboratory conducts detailed physical 
                  and chemical analysis following IS, ASTM, and APHA standards, ensuring 
                  every sample meets compliance for engineering and environmental safety.
                </p>
              </div>

              {/* Capabilities */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#F37021]/40 bg-[#2a2a2a]/70 p-5 shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#F37021] hover:shadow-orange-900/30">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F37021]/20 blur-2xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

                <div className="relative space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A25D]">
                    Capabilities
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    We analyze water for potability, construction suitability, and 
                    environmental compliance. All tests follow IS:3025 and APHA Standard Methods 
                    using calibrated and automated instruments.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["IS 3025", "APHA", "ASTM Standards"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-600/70 bg-[#222]/80 px-3 py-1 text-xs font-medium text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-gray-400">
                    Chemical Analysis • Environmental Monitoring • Compliance Testing
                  </p>
                </div>
              </div>

            </div>
          </header>

          {/* MAIN CONTENT GRID */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">

            {/* Core Tests */}
            <div className="space-y-5 rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black md:p-6">

              <h3 className="text-lg font-semibold text-white md:text-xl">Core Tests Offered</h3>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">
                Complete physical and chemical evaluation of water samples.
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {coreTests.map((test, index) => (
                  <div
                    key={test}
                    className="group flex items-start gap-3 rounded-xl border border-[#333] bg-[#222] p-3 text-sm text-gray-200 shadow-sm hover:-translate-y-0.5 hover:border-[#F37021] hover:bg-[#262626] hover:shadow-orange-900/40 transition-all"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#111] ring-1 ring-[#F37021]/60 transition-transform group-hover:scale-110">
                      <span className="text-[10px] font-semibold text-[#F5A25D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="leading-snug">{test}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Why + Applications */}
            <div className="space-y-6">

              {/* Why Choose Us */}
              <div className="rounded-2xl border border-[#F37021]/40 bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black">
                <h3 className="text-base font-semibold text-[#F5A25D] md:text-lg">
                  Why Choose Us
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-gray-200">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-[#F37021]/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black">
                <h3 className="text-base font-semibold text-white md:text-lg">
                  Applications
                </h3>

                <div className="mt-4 space-y-4">
                  {applications.map((app, idx) => (
                    <div
                      key={app}
                      className="group relative rounded-xl border border-[#333] bg-[#141414]/60 p-3 text-sm text-gray-200 transition-all hover:-translate-y-0.5 hover:border-[#F37021]"
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#F37021] via-[#F5A25D] to-[#F37021]" />
                      <div className="pl-3.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                          App {idx + 1}
                        </p>
                        <p className="mt-1 text-sm leading-snug">{app}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER STRIP */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#333] bg-[#121212] px-4 py-3 text-[11px] text-gray-300 shadow-inner shadow-black">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F37021]" />
              Water & Wastewater Testing – Reva Civil
            </span>

            {/* <span className="text-gray-400">
              Chemistry • Safety • Compliance • Sustainability
            </span> */}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default WaterWastewaterTesting;
