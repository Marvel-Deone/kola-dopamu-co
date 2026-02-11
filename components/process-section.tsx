import React from "react";

export default function ProcessSection() {
  return (
    <section id="practice" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-amber-600 font-black uppercase text-[9px] tracking-widest">
            Our Methodology
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            A Systematic Approach to Excellence
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden lg:block z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {/* Step 01 */}
            <div
              className="transition-all duration-1000 transform opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-100 group hover:shadow-2xl hover:border-amber-200 transition-all duration-500 text-center lg:text-left h-full">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-amber-600 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx={11} cy={11} r={8} />
                  </svg>
                </div>

                <p className="text-[10px] font-black uppercase text-amber-600 mb-2">
                  Step 01
                </p>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  Discovery
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Deep dive into the legal issues and client objectives.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div
              className="transition-all duration-1000 transform opacity-100 translate-y-0"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-100 group hover:shadow-2xl hover:border-amber-200 transition-all duration-500 text-center lg:text-left h-full">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-amber-600 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <p className="text-[10px] font-black uppercase text-amber-600 mb-2">
                  Step 02
                </p>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  Risk Assessment
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Analyzing legal, commercial, and societal challenges.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div
              className="transition-all duration-1000 transform opacity-100 translate-y-0"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-100 group hover:shadow-2xl hover:border-amber-200 transition-all duration-500 text-center lg:text-left h-full">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-amber-600 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <circle cx={12} cy={12} r={6} />
                    <circle cx={12} cy={12} r={2} />
                  </svg>
                </div>

                <p className="text-[10px] font-black uppercase text-amber-600 mb-2">
                  Step 03
                </p>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  Strategy
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Designing a result-oriented, pragmatic legal path.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div
              className="transition-all duration-1000 transform opacity-100 translate-y-0"
              style={{ transitionDelay: "450ms" }}
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-100 group hover:shadow-2xl hover:border-amber-200 transition-all duration-500 text-center lg:text-left h-full">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-amber-600 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>

                <p className="text-[10px] font-black uppercase text-amber-600 mb-2">
                  Step 04
                </p>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  Execution
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Efficient implementation with minimal client disruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
