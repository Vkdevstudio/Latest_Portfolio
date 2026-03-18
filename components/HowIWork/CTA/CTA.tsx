'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HowIWorkCTA() {
  return (
    <section className="relative py-48 px-6 bg-black text-center border-t border-white/5 overflow-hidden">
      {/* Subtle Abstract Background Visual */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="https://picsum.photos/seed/abstract-cta/1920/1080?blur=10" 
          alt="Abstract Background" 
          fill
          className="object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-12"
          >
            <div className="h-[1px] w-12 bg-emerald-500/50" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-[0.5em]">Next Step</span>
            <div className="h-[1px] w-12 bg-emerald-500/50" />
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.85] uppercase">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              SOMETHING REAL.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-400 font-serif italic leading-relaxed max-w-3xl mx-auto mb-20">
            I&apos;m currently accepting new projects for Q2 2026. If you&apos;re looking for a partner 
            to build high-performance systems under real constraints, let&apos;s talk.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-6 px-16 py-8 bg-emerald-500 text-black font-black uppercase tracking-[0.3em] text-sm rounded-sm hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
            >
              Start a Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="mt-24 flex flex-col items-center gap-6">
            <div className="w-12 h-[1px] bg-white/10" />
            <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.6em]">
              Based in Chennai, India // Serving Clients Globally
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
