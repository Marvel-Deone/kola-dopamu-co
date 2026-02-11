const testimonials = [
    {
        quote:
            "The strategic depth and risk assessment provided by Kola Dopamu & Co. were instrumental in our recent merger.",
        author: "Managing Director, Global FinCo",
    },
    {
        quote:
            "Highly professional service that values integrity above all else. They truly promoted and defended my rights.",
        author: "Public Servant, FCT",
    },
];

const legalPosts = [
    {
        date: "Oct 12, 2025",
        title: "Navigating New Maritime Regulations in West Africa",
        category: "Maritime",
    },
    {
        date: "Sept 28, 2025",
        title: "Employee Rights: Unfair Dismissal & Remedies",
        category: "Employment",
    },
    {
        date: "Sept 15, 2025",
        title: "The Impact of Data Privacy Laws on Corporate Governance",
        category: "Cyber Law",
    },
];

const Stars = () => (
    <div className="flex gap-1 text-amber-500 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
        ))}
    </div>
);

export default function TestimonialsAndInsights() {
    return (
        <section className="py-24 bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Testimonials */}
                    <div className="space-y-12">
                        <div className="space-y-3">
                            <h2 className="text-amber-500 font-black uppercase text-[9px] tracking-widest">
                                Client Feedback
                            </h2>
                            <h3 className="text-3xl font-black">
                                Trusted Advocacy. Proven Results.
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition"
                                >
                                    <Stars />
                                    <p className="text-slate-200 italic mb-6 leading-relaxed">
                                        “{t.quote}”
                                    </p>
                                    <p className="text-sm font-black text-amber-500 uppercase tracking-widest">
                                        — {t.author}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Feed */}
                    <div className="space-y-12">
                        <div className="space-y-3">
                            <h2 className="text-amber-500 font-black uppercase text-[9px] tracking-widest">
                                Legal Feed
                            </h2>
                            <h3 className="text-3xl font-black">
                                Recent Insights & Briefs
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {legalPosts.map((post, i) => (
                                <div
                                    key={i}
                                    className="group p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:bg-amber-600 transition cursor-pointer"
                                >
                                    <div className="space-y-1.5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white/80">
                                            {post.date}
                                        </span>
                                        <h4 className="font-bold group-hover:text-white">
                                            {post.title}
                                        </h4>
                                        <p className="text-[10px] uppercase tracking-widest text-amber-500 group-hover:text-white font-black">
                                            {post.category}
                                        </p>
                                    </div>

                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-2"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
