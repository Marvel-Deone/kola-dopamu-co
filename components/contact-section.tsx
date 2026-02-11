const contactItems = [
    {
        label: "Head Office",
        value: "7, Akingbola Street, Oregun, Ikeja, Lagos State.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Direct Lines",
        value: "+234 813 7999 998",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
        ),
    },
    {
        label: "Official Email",
        value: "info@koladopamulc.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
        ),
    },
];

type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

type InputProps = {
    label: string;
    type?: string;        // optional, defaults to "text"
    placeholder: string;
};

const ContactItem = ({ icon, label, value }: ContactItemProps) => (
    <div className="flex gap-5 group">
        <div className="p-3.5 bg-slate-50 rounded-xl shadow-sm transition-all group-hover:bg-[#0F172A] group-hover:text-white">
            {icon}
        </div>
        <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                {label}
            </p>
            <p className="font-bold text-sm text-slate-800 transition-colors group-hover:text-amber-600">
                {value}
            </p>
        </div>
    </div>
);

export default function ContactSection() {
    return (
        <section id="consultation" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16">

                {/* Contact Details */}
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <h2 className="text-amber-600 font-black uppercase text-[9px] tracking-widest mb-3">
                            Consultation
                        </h2>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                            Secure Your Brief.
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {contactItems.map((item, i) => (
                            <ContactItem key={i} {...item} />
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                    <div className="bg-[#0F172A] p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl min-h-[460px] flex items-center">
                        <form className="space-y-6 w-full">

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Input label="Full Name" placeholder="e.g. Kola Dopamu" />
                                <Input
                                    label="Email Address"
                                    type="email"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <Textarea
                                label="Brief Summary of Request"
                                placeholder="Provide a summary of the legal matter..."
                            />

                            <button className="w-full py-5 bg-amber-600 rounded-2xl font-black text-lg hover:bg-amber-500 transition shadow-xl">
                                Initiate Professional Engagement
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* Reusable Form Inputs */

const Input = ({ label, type = "text", placeholder }: InputProps) => (
    <div className="space-y-2">
        <label className="text-[9px] font-black uppercase tracking-widest text-slate-500">
            {label}
        </label>
        <input
            type={type}
            required
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-slate-800 py-2.5 outline-none focus:border-amber-600 transition font-bold placeholder:text-slate-700"
        />
    </div>
);

const Textarea = ({ label, placeholder }: InputProps) => (
    <div className="space-y-2">
        <label className="text-[9px] font-black uppercase tracking-widest text-slate-500">
            {label}
        </label>
        <textarea
            rows={2}
            required
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-slate-800 py-2.5 outline-none focus:border-amber-600 transition font-bold resize-none placeholder:text-slate-700"
        />
    </div>
);
