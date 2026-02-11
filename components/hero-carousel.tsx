"use client"

import * as React from "react"
import { motion } from "framer-motion"

type Slide = {
    id: string
    eyebrow: string
    title: string
    subtitle: string
    imageSrc: string
}

const SLIDES: Slide[] = [
    {
        id: "global",
        eyebrow: "TRUSTED EXCELLENCE SINCE 1995",
        title: "Strategic Advocacy.",
        subtitle: "Results-driven legal services from the heart of Nigeria to the world.",
        imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: "integrity",
        eyebrow: "TRUSTED EXCELLENCE SINCE 1995",
        title: "Proven Integrity.",
        subtitle: "A legacy built on decades of meticulous service and excellence.",
        imageSrc: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
    },
    {
        id: "advocacy",
        eyebrow: "TRUSTED EXCELLENCE SINCE 1995",
        title: "Global Excellence.",
        subtitle: "Serving institutional and private clients with international standards.",
        imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    },
]

const INTERVAL_MS = 6000

export function HeroCarousel() {
    const [index, setIndex] = React.useState(0)
    const [paused, setPaused] = React.useState(false)

    React.useEffect(() => {
        if (paused) return
        const t = window.setInterval(() => {
            setIndex((i) => (i + 1) % SLIDES.length)
        }, INTERVAL_MS)
        return () => window.clearInterval(t)
    }, [paused])

    const slide = SLIDES[index]

    return (
        <section
            id="home"
            className="relative h-screen min-h-[600px] overflow-hidden flex items-center bg-black"
        >
            <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <img
                    src={slide.imageSrc}
                    alt="Slide"
                    className="w-full h-full object-cover scale-105"
                />

                <div className="absolute inset-0 flex items-center z-20">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-600/20 text-amber-500 text-[9px] font-black uppercase tracking-[0.2em]">
                                {slide.eyebrow}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white">
                                {slide.title}
                            </h1>

                            <p className="text-lg text-slate-300 max-w-xl">
                                {slide.subtitle}
                            </p>

                            <button className="px-10 py-4 bg-white text-[#0F172A] rounded-2xl font-black hover:bg-amber-600 hover:text-white transition-all shadow-xl">
                                Initiate Action
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block ml-2 w-5 h-5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
