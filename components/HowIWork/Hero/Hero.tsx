'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowIWorkHero() {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[1px] bg-emerald-500" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.4em] font-bold">
              Systems Thinking // 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12"
          >
            I DON&apos;T BUILD FEATURES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              I BUILD PRODUCTS THAT SCALE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 font-serif italic leading-relaxed max-w-3xl"
          >
            Code is a tool. Products are the solution. I focus on the entire stack: 
            from intuitive frontends to robust backends, ensuring performance and reliability at every layer.
          </motion.p>
        </div>

        {/* Full-width Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-24 relative aspect-[21/9] w-full border border-white/5 rounded-sm overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <Image 
            src="https://picsum.photos/seed/abstract-system/1920/1080?blur=2" 
            alt="Abstract System Architecture" 
            fill
            className="object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          
          {/* Technical Overlays */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-10 left-10 flex flex-col gap-2">
              <div className="w-12 h-[1px] bg-emerald-500/50" />
              <span className="text-[8px] font-mono text-emerald-500/50 uppercase tracking-widest">System Load: Nominal</span>
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
              <span className="text-[8px] font-mono text-emerald-500/50 uppercase tracking-widest">Architecture v4.2</span>
              <div className="w-12 h-[1px] bg-emerald-500/50" />
            </div>
          </div>

          <div className="absolute bottom-12 left-12 z-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold">Reliability First</p>
            </div>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">BUILT FOR REAL-WORLD CONSTRAINTS.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
