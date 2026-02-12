export default function PrincipalSection() {
    return (
        <section className="md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/kola-1.jpeg" // <-- use the strongest suited image here
                                alt="Principal Counsel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-amber-600 font-black uppercase text-[9px] tracking-widest">
                                Leadership
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                The Authority Behind the Advocacy
                            </h3>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            With decades of distinguished legal practice, our Principal Counsel
                            brings strategic precision, commercial insight, and unwavering
                            commitment to justice. His expertise spans corporate law,
                            litigation, maritime, and regulatory compliance.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Every engagement is approached with intellectual rigor,
                            discretion, and a results-driven mindset, ensuring clients
                            receive counsel that is both pragmatic and formidable.
                        </p>

                        <div className="flex gap-8 pt-4">
                            <div>
                                <p className="text-2xl font-black text-slate-900">20+</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-black text-slate-900">500+</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">
                                    Cases Handled
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-black text-slate-900">98%</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">
                                    Client Satisfaction
                                </p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-amber-600 transition">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Optional Small Image Row */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    <img
                        src="/images/kola-2.jpeg"
                        alt="Office portrait"
                        className="rounded-2xl object-cover h-56 w-full shadow-lg"
                    />
                    <img
                        src="/images/kola-4.jpeg"
                        alt="Office portrait"
                        className="rounded-2xl object-cover h-56 w-full shadow-lg"
                    />
                    <img
                        src="/images/kola-3.jpeg"
                        alt="Office portrait"
                        className="rounded-2xl object-cover h-56 w-full shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
