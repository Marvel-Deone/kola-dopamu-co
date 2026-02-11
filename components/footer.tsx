export function Footer() {
    return (
        <footer className="bg-[#0F172A] py-16 text-slate-500 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-amber-600 p-1.5 rounded-lg text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-scale"
                                    aria-hidden="true"
                                >
                                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                    <path d="M7 21h10" />
                                    <path d="M12 3v18" />
                                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-black text-white tracking-tight">
                                KOLA DOPAMU &amp; CO.
                            </h2>
                        </div>
                        <p className="max-w-xs text-[13px] leading-relaxed font-medium">
                            Full-service law firm with merit-based advocacy across Nigeria and
                            the UK partners.
                        </p>
                    </div>

                    {/* Global Hubs */}
                    <div className="space-y-3.5">
                        <p className="text-white font-black text-[10px] uppercase tracking-widest">
                            Global Hubs
                        </p>
                        <ul className="text-[13px] space-y-1.5 font-medium">
                            <li>Lagos State</li>
                            <li>FCT Abuja</li>
                            <li>Ogun State</li>
                            <li>United Kingdom</li>
                        </ul>
                    </div>

                    {/* Impact Section */}
                    <div className="space-y-3.5">
                        <p className="text-white font-black text-[10px] uppercase tracking-widest">
                            Impact
                        </p>
                        <ul className="text-[13px] space-y-1.5 font-medium">
                            <li>Legal Clinic</li>
                            <li>Rights Advocacy</li>
                            <li>Police Watch</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-black uppercase tracking-wider">
                        © 2026 Kola Dopamu &amp; Co. Chambers. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-slate-400">
                        {/* Globe Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-globe"
                            aria-hidden="true"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>

                        {/* Mail Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                            aria-hidden="true"
                        >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x={2} y={4} width={20} height={16} rx={2} />
                        </svg>

                        {/* Phone Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone"
                            aria-hidden="true"
                        >
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}