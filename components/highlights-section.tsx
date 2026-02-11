import React from "react";

export default function HighlightsSection() {
  return (
    <section id="about" className="bg-[#0F172A] py-10 text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Lagos Hub */}
        <div className="border-l border-slate-800 pl-6 space-y-1.5">
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
            className="text-amber-500 w-5 h-5"
            aria-hidden="true"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
          </svg>

          <p className="text-[9px] uppercase font-black text-slate-500 tracking-wider">
            Lagos Hub
          </p>
          <p className="text-base font-bold text-slate-100">Head Office</p>
        </div>

        {/* Clinic */}
        <div className="border-l border-slate-800 pl-6 space-y-1.5">
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
            className="text-amber-500 w-5 h-5"
            aria-hidden="true"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>

          <p className="text-[9px] uppercase font-black text-slate-500 tracking-wider">
            Clinic
          </p>
          <p className="text-base font-bold text-slate-100">
            Legal Education
          </p>
        </div>

        {/* Global */}
        <div className="border-l border-slate-800 pl-6 space-y-1.5">
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
            className="text-amber-500 w-5 h-5"
            aria-hidden="true"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>

          <p className="text-[9px] uppercase font-black text-slate-500 tracking-wider">
            Global
          </p>
          <p className="text-base font-bold text-slate-100">UK Partners</p>
        </div>

        {/* Pedigree */}
        <div className="border-l border-slate-800 pl-6 space-y-1.5">
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
            className="text-amber-500 w-5 h-5"
            aria-hidden="true"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx={12} cy={8} r={6} />
          </svg>

          <p className="text-[9px] uppercase font-black text-slate-500 tracking-wider">
            Pedigree
          </p>
          <p className="text-base font-bold text-slate-100">
            Fawehinmi Pedigree
          </p>
        </div>
      </div>
    </section>
  );
}
