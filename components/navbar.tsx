"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

// const NAV_ITEMS = ["About", "Practice", "Clinic", "Team"]
const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Practice", href: "#practice" },
    { label: "Clinic", href: "#clinic" },
    { label: "Team", href: "#team" },
]


export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // lock body scroll when menu is open (mobile)
    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = prev
        }
    }, [open])

    // close on route change and close when resizing to md+
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }
        window.addEventListener("resize", onResize, { passive: true })
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return (
        <>
            <nav
                className={[
                    "fixed top-0 left-0 right-0 z-50",
                    "transition-[background-color,box-shadow,padding] duration-500 ease-out",
                    scrolled
                        ? "border-b border-white bg-white shadow-[0_10px_30px_rgba(2,6,23,0.10)] py-3"
                        : "bg-transparent py-6",
                ].join(" ")}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* Brand */}
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div
                                className={[
                                    "rounded-lg p-2 transition-transform duration-500 ease-out",
                                    "bg-[#0F172A] group-hover:bg-amber-600 transition-all duration-500 transform group-hover:rotate-6",
                                    scrolled ? "scale-[0.98]" : "scale-100",
                                ].join(" ")}
                            >
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
                                    className="text-white w-5 h-5"
                                >
                                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                    <path d="M7 21h10" />
                                    <path d="M12 3v18" />
                                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                                </svg>
                            </div>

                            <div className="leading-none border-l border-slate-200 pl-3">
                                <h1
                                    className={[
                                        "text-lg font-black tracking-tight uppercase",
                                        "transition-colors duration-500",
                                        scrolled ? "text-slate-900" : "text-white",
                                    ].join(" ")}
                                >
                                    KOLA DOPAMU &amp; CO.
                                </h1>
                                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] font-bold text-amber-500">
                                    Attorneys &amp; Solicitors
                                </p>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {/* {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  className={[
                    "relative text-[11px] font-black uppercase tracking-widest",
                    "transition-colors duration-500",
                    scrolled ? "text-slate-700 hover:text-slate-950" : "text-white/90 hover:text-white",
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-600",
                    "after:transition-[width] after:duration-300 hover:after:w-full",
                  ].join(" ")}
                >
                  {item}
                </button>
              ))} */}
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={[
                                        "relative text-[11px] font-black uppercase tracking-widest",
                                        "transition-colors duration-500",
                                        scrolled
                                            ? "text-slate-700 hover:text-slate-950"
                                            : "text-white/90 hover:text-white",
                                        "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-600",
                                        "after:transition-[width] after:duration-300 hover:after:w-full",
                                    ].join(" ")}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link href="#consultation"
                                className={[
                                    "rounded-full px-6 py-2.5 text-[11px] font-black uppercase tracking-widest",
                                    "bg-[#0F172A] text-white shadow-[0_8px_20px_rgba(2,6,23,0.22)]",
                                    "transition-[background-color,transform,box-shadow] duration-300",
                                    "hover:bg-amber-600 active:scale-95",
                                ].join(" ")}
                            >
                                Consultation
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            {!open ? (
                                <button
                                    onClick={() => setOpen(true)}
                                    aria-label="Open menu"
                                    aria-expanded={open}
                                    className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-full shadow-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-menu"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 12h16"></path>
                                        <path d="M4 18h16"></path>
                                        <path d="M4 6h16"></path>
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    aria-expanded={open}
                                    className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-full shadow-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown */}
                <div
                    className={[
                        "md:hidden overflow-hidden",
                        "transition-[max-height,opacity] duration-500 ease-out",
                        open ? "max-h-[420px] opacity-100 mt-4" : "max-h-0 opacity-0",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "px-6 sm:px-8 lg:px-12 pb-6 pt-4",
                            scrolled ? "bg-white" : "bg-white/95 backdrop-blur-md",
                            "border-t border-slate-200/70",
                        ].join(" ")}
                    >
                        <div className="flex flex-col gap-3">
                            {/* {NAV_ITEMS.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setOpen(false)}
                                    className={[
                                        "text-left py-3 px-3 rounded-xl",
                                        "text-[12px] font-black uppercase tracking-widest",
                                        "text-slate-800 hover:bg-slate-100/80 transition-colors",
                                    ].join(" ")}
                                >
                                    {item}
                                </button>
                            ))} */}
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={[
                                        "text-left py-3 px-3 rounded-xl",
                                        "text-[12px] font-black uppercase tracking-widest",
                                        "text-slate-800 hover:bg-slate-100/80 transition-colors",
                                    ].join(" ")}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <button
                                onClick={() => setOpen(false)}
                                className={[
                                    "mt-2 w-full rounded-full px-6 py-3",
                                    "text-[11px] font-black uppercase tracking-widest",
                                    "bg-[#0F172A] text-white shadow-[0_8px_20px_rgba(2,6,23,0.22)]",
                                    "transition-[background-color,transform,box-shadow] duration-300",
                                    "hover:bg-amber-600 active:scale-95",
                                ].join(" ")}
                            >
                                Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            <div
                onClick={() => setOpen(false)}
                className={[
                    "fixed inset-0 z-40 md:hidden",
                    "transition-opacity duration-300",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                    "bg-slate-950/40",
                ].join(" ")}
                aria-hidden="true"
            />
        </>
    )
}
