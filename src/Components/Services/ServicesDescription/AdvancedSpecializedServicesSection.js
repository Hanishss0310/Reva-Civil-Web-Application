import React from "react";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
const services = [
  "Structural Stability Testing of Existing Buildings (NDT)",
  "Rebar Corrosion Mapping Study (Half-Cell Potential)",
  "Concrete Mix Design with Accelerated Strength Validation (Boiling Water Method)",
  "California Bearing Ratio of soil (Soaked and un-soaked conditions)",
  "Pavement Design and Verification (Flexible and Rigid – IRC and AASHTO Procedures)",
  "Pavement Surface Evaluation and Recommendations",
  "Traffic Volume Counts",
  "Swell Pressure Test on Expansive Soil",
  "Aggregate Soundness Test (Sodium/Magnesium Sulphate – 5 cycles)",
  "Polished Stone Value (PSV) – Resistance to Polishing",
  "Tile Abrasion Test",
  "Marshall Stability and Flow Test (Bituminous Mixes)",
];

const whyChooseUs = [
  "Advanced instrumentation and trained professionals",
  "Integration of field data with digital modelling and reporting",
  "Fast turnaround with optional express testing services",
  "Compliance with IS, IRC, ASTM, and AASHTO standards",
];

const applications = [
  "Structural health monitoring of aged or distressed buildings and bridges",
  "Pavement design and performance evaluation for highways and industrial roads",
  "Rehabilitation planning and life-cycle assessment for existing infrastructure",
  "Quality assurance in construction projects requiring compliance with international testing standards",
];

const AdvancedSpecializedServicesSection = () => {
  return (
   <div>
    <Navbar/>

     <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
      
      {/* Reva Soft Orange Blobs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#F37021]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F5A25D]/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
        
        {/* Header */}
        <header className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F37021]/30 bg-[#2a2a2a]/60 px-3 py-1 text-xs font-medium text-[#F5A25D] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F37021]" />
            Advanced &amp; Specialized Services
          </div>

          <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-start">

            <div className="space-y-4 md:space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Precision-Driven Testing
                <span className="block text-[#F37021]">
                  for Reliable Infrastructure Decisions
                </span>
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
                Our Advanced and Specialized Services division provides precision-driven evaluations 
                for infrastructure, materials, and structural performance. These services go beyond 
                routine testing, enabling early detection of failures, design validation, and 
                data-backed decision-making. With state-of-the-art equipment and a team of qualified 
                professionals, every assessment meets the highest standards of accuracy and reliability.
              </p>
            </div>

            {/* Capabilities Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#F37021]/40 bg-[#2a2a2a]/70 p-5 shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#F37021] hover:shadow-orange-900/30">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F37021]/20 blur-2xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

              <div className="relative space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A25D]">
                  Capabilities
                </p>

                <p className="text-sm leading-relaxed text-gray-200">
                  We offer specialized investigations and design validation services combining 
                  field testing, laboratory analysis, and computational evaluations. All tests follow{" "}
                  <span className="font-medium text-[#F37021]">IS, IRC, ASTM, AASHTO</span> standards.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["IS", "IRC", "ASTM", "AASHTO"].map((code) => (
                    <span
                      key={code}
                      className="rounded-full border border-gray-600/70 bg-[#222]/80 px-3 py-1 text-xs font-medium text-gray-200"
                    >
                      {code} Compliant
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F37021]" />
                    Field + Lab + Computation
                  </span>
                  <span className="text-right">Real-world infrastructure decisions</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">

          {/* Core Services */}
          <div className="space-y-5 rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  Core Services Offered
                </h3>
                <p className="mt-1 text-xs text-gray-400 md:text-sm">
                  Specialized testing for structures, pavements, soils & materials.
                </p>
              </div>

              <div className="hidden rounded-xl border border-[#F37021]/40 bg-[#F37021]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#F5A25D] sm:inline-flex">
                NDT • Pavement • Materials
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
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

          {/* Right Column */}
          <div className="space-y-6">

            {/* Why Choose Us */}
            <div className="rounded-2xl border border-[#F37021]/40 bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black">
              <h3 className="text-base font-semibold text-[#F5A25D] md:text-lg">
                Why Choose Us
              </h3>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">High accuracy & Reva Civil quality assurance.</p>

              <ul className="mt-4 space-y-3 text-sm text-gray-200">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-[#F37021]/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="rounded-2xl border border-[#333] bg-[#1f1f1f]/70 p-5 shadow-lg shadow-black">
              <h3 className="text-base font-semibold text-white md:text-lg">
                Key Applications
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

        {/* Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#333] bg-[#121212] px-4 py-3 text-[11px] text-gray-300 shadow-inner shadow-black">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F37021]" />
            Designed for Reva Civil – Advanced Testing & Consultancy
          </span>

          {/* <span className="text-gray-400">
            Field → Lab → Digital Modelling → Actionable Reports
          </span> */}
        </div>
      </div>
    </section>

    
    <Footer/>


   </div>
  );
};

export default AdvancedSpecializedServicesSection;
