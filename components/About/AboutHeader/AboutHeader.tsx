'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">The Narrative</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                WITH INTENT.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 font-serif italic leading-relaxed max-w-2xl">
              I don&apos;t just build features; I architect systems that survive the chaos of scale. This is the story of how I think, how I lead, and why I code.
            </p>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Focus</span>
                <span className="text-sm font-bold">Scalable Architecture</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Philosophy</span>
                <span className="text-sm font-bold">Systems Thinking</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Impact</span>
                <span className="text-sm font-bold">Mentorship & Growth</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl shadow-emerald-500/10"
          >
            <Image
              src="/profile.jpg"
              alt="Vinod Kumar"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <div className="w-16 h-[2px] bg-emerald-400 mb-4" />
              <p className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-1">Full Stack Developer</p>
              <p className="text-2xl font-black tracking-tight">Vinod Kumar</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
}
