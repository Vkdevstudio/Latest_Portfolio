'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowIWorkHero() {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-8 border border-emerald-500/20 bg-emerald-500/5 rounded-full"
        >
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.3em]">
            The Partnership Blueprint
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif italic mb-8 tracking-tighter leading-[0.9]"
        >
          High-performance systems, <br />
          <span className="text-emerald-400">built with intention.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-400 font-sans leading-relaxed max-w-3xl mx-auto"
        >
          I don&apos;t just write code. I architect solutions that solve business problems, 
          scale with your growth, and provide a seamless experience for your users.
        </motion.p>

        {/* Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 relative aspect-[21/9] w-full border border-white/10 rounded-sm overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          <Image
            src="https://picsum.photos/seed/architecture/1200/600" 
            alt="System Architecture" 
            fill
            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute bottom-8 left-8 z-20 text-left">
            <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">Current Focus</p>
            <p className="text-2xl font-serif italic text-white">Scalability & Reliability</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
