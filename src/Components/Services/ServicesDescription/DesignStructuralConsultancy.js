import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";

const coreServices = [
  "3D Elevation – Exterior",
  "Interior Architectural Design and Walkthrough",
  "Architectural Plan and Structural Design – Residential, Commercial, Industrial Buildings, Culverts",
  "Estimation and Costing",
];

const whyChooseUs = [
  "Multidisciplinary team of architects and structural engineers",
  "Use of advanced design and analysis software (STAAD.Pro, AutoCAD, Revit, ETABS)",
  "Compliance with IS 456, IS 800, IRC:21, and other relevant codes",
  "Focus on cost optimization, constructability, and aesthetics",
  "End-to-end coordination from concept to execution",
];

const applications = [
  "Residential layouts, apartment complexes, and gated communities",
  "Commercial buildings, educational institutions, and corporate offices",
  "Industrial sheds, warehouses, and production facilities",
  "Culverts, and retaining structures",
  "Renovation, retrofitting, and architectural enhancement projects",
];

const DesignStructuralConsultancy = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        
        {/* Reva Civil gradient blobs */}
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#F37021]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F5A25D]/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">

          {/* Header */}
          <header className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F37021]/30 bg-[#2a2a2a]/60 px-3 py-1 text-xs font-medium text-[#F5A25D] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F37021]" />
              Design & Structural Consultancy
            </div>

            <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-start">

              {/* Overview */}
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Engineering Excellence,  
                  <span className="block text-[#F37021]">
                    Built on Precision & Design
                  </span>
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
                  Our Design and Structural Consultancy division blends creativity with engineering precision 
                  to deliver durable, functional, and aesthetically superior infrastructure. From concept 
                  to completion, we ensure that every design aligns with safety standards, sustainability, 
                  and cost efficiency. Whether it's a residential villa, commercial complex, industrial facility, 
                  or a bridge culvert—our team turns concepts into engineered realities.
                </p>
              </div>

              {/* Capabilities Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#F37021]/40 bg-[#2a2a2a]/70 p-5 shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#F37021] hover:shadow-orange-900/30">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F37021]/20 blur-2xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                
                <div className="relative space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A25D]">
                    Capabilities
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    We integrate architectural vision, structural analysis, and practical constructability. 
                    Every project is designed using industry-standard software and validated against{" "}
                    <span className="font-medium text-[#F37021]">
                      IS, IRC, and ACI
                    </span>{" "}
                    codes.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["IS", "IRC", "ACI"].map((code) => (
                      <span
                        key={code}
                        className="rounded-full border border-gray-600/70 bg-[#222]/80 px-3 py-1 text-xs font-medium text-gray-200"
                      >
                        {code} Standard
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-xs text-gray-400">
                    Architecture + Structural Engineering + Cost Optimization
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Grid */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">

            {/* Core Services */}
            <div className="space-y-5 rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black md:p-6">
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  Core Services Offered
                </h3>
                <p className="mt-1 text-xs text-gray-400 md:text-sm">
                  End-to-end architectural & structural consultancy.
                </p>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {coreServices.map((service, index) => (
                  <div
                    key={service}
                    className="group flex items-start gap-3 rounded-xl border border-[#333] bg-[#222] p-3 text-sm text-gray-200 shadow-sm hover:-translate-y-0.5 hover:border-[#F37021] hover:bg-[#262626] hover:shadow-orange-900/40 transition-all"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#111] ring-1 ring-[#F37021]/60 transition-transform group-hover:scale-110">
                      <span className="text-[10px] font-semibold text-[#F5A25D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="leading-snug">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Why Choose Us */}
              <div className="rounded-2xl border border-[#F37021]/40 bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black">
                <h3 className="text-base font-semibold text-[#F5A25D] md:text-lg">Why Choose Us</h3>

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
                <h3 className="text-base font-semibold text-white md:text-lg">Applications</h3>

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

          {/* Footer strip */}
          {/* <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#333] bg-[#121212] px-4 py-3 text-[11px] text-gray-300 shadow-inner shadow-black">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F37021]" />
              Designed for Reva Civil – Design & Structural Consultancy
            </span>

            <span className="text-gray-400">
              Concept → Design → Validation → Execution
            </span>
          </div> */}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default DesignStructuralConsultancy;
