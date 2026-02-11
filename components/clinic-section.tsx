import React from "react";

export default function ClinicSection() {
  return (
    <section
      id="clinic"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-6" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-xl bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest">
              Social Impact Initiative
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
              The Birth of the{" "}
              <span className="text-amber-600">Legal Clinic.</span>
            </h3>

            <p className="text-base text-slate-600 leading-relaxed font-medium">
              A concept designed primarily to bring law closer to people.
              Breaking down legal conundrums and simplifying the complexities
              of law for the common good.
            </p>

            {/* Feature list */}
            <div className="space-y-5 pt-4">
              {[
                {
                  title: "Monthly Seminars",
                  desc: "Symposia hosted by eminent jurists and professionals.",
                },
                {
                  title: "Remedies & Access",
                  desc: "Educating people on available legal remedies for injustice.",
                },
                {
                  title: "Rights Awareness",
                  desc: "Sensitizing the society about duties and privileges.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-amber-600 h-fit shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-12 text-white shadow-xl relative min-h-[580px] flex flex-col">
              <div className="flex-1 flex flex-col animate-in fade-in duration-500">
                {/* Watermark icon */}
                <div className="absolute top-8 right-8 opacity-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={150}
                    height={150}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx={20} cy={10} r={2} />
                  </svg>
                </div>

                <h4 className="text-2xl font-black mb-8 border-b border-white/10 pb-6">
                  Empowerment through Awareness
                </h4>

                {/* Topics grid */}
                <div className="grid md:grid-cols-2 gap-4 relative z-10 mb-8">
                  {[
                    {
                      title: "Police and You",
                      desc: "Empowering citizens against rights abuse.",
                      icon: (
                        <>
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                          <path d="m9 12 2 2 4-4" />
                        </>
                      ),
                    },
                    {
                      title: "Family & Inheritance",
                      desc: "Navigating Intestacy and Family law.",
                      icon: (
                        <>
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <circle cx={9} cy={7} r={4} />
                        </>
                      ),
                    },
                    {
                      title: "Employment Rights",
                      desc: "Remedies for unlawful termination.",
                      icon: (
                        <>
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          <rect x={2} y={6} width={20} height={14} rx={2} />
                        </>
                      ),
                    },
                    {
                      title: "Human Rights",
                      desc: "Safeguarding fundamental liberties.",
                      icon: (
                        <>
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                          <path d="m18 15-2-2" />
                          <path d="m15 18-2-2" />
                        </>
                      ),
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group"
                    >
                      <div className="mb-3 text-amber-500 group-hover:text-white transition-colors">
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
                          {item.icon}
                        </svg>
                      </div>

                      <p className="text-base font-black mb-1">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto p-6 bg-white/10 rounded-3xl border border-white/5 flex items-center justify-between gap-6 flex-wrap">
                  <div>
                    <p className="text-[9px] font-black uppercase text-amber-500 mb-1 tracking-wider">
                      Legal Hub
                    </p>
                    <p className="text-base font-bold text-slate-100">
                      Monthly Sessions & Community Briefs
                    </p>
                  </div>

                  <button className="bg-white text-[#0F172A] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all shadow-md active:scale-95">
                    View Schedule &amp; Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
