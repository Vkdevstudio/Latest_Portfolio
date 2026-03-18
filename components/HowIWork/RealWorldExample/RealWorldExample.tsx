'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RealWorldExample() {
  return (
    <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">Case Study // 01</span>
            <div className="h-[1px] w-12 bg-emerald-500/30" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">REAL-WORLD IMPACT.</h2>
          <p className="text-xl text-neutral-400 font-serif italic max-w-2xl">
            A look at how I solve for high-stakes environments where failure is not an option.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video border border-white/10 rounded-sm overflow-hidden group shadow-2xl shadow-emerald-500/5"
          >
            <Image 
              src="https://picsum.photos/seed/dashboard-real/1200/800?blur=1" 
              alt="Medtech Dashboard Visual" 
              fill
              className="object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            {/* Technical Detail Overlay */}
            <div className="absolute top-6 left-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-1">Status: Active</p>
              <p className="text-xl font-bold text-white">100k+ Records</p>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold mb-2">SaaS Analytics Platform</p>
              <p className="text-2xl font-black text-white leading-tight">OPTIMIZING DATA RETRIEVAL FOR REAL-TIME INSIGHTS.</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold">Problem</h3>
              <p className="text-xl font-bold text-white leading-snug">
                The platform was struggling with slow dashboard loads as user data grew. 
                Queries were taking 5+ seconds, leading to high bounce rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold">Approach</h3>
              <p className="text-xl font-bold text-white leading-snug">
                Implemented a multi-layer caching strategy with Redis and optimized database indexes. 
                Refactored the frontend to use optimistic updates and skeleton loading.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold">Tradeoff</h3>
              <p className="text-xl font-bold text-white leading-snug">
                Accepted a slight increase in infrastructure cost for Redis to achieve near-instant data availability. 
                Prioritized core metrics over secondary data to speed up initial paint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 border-t border-white/10"
            >
              <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold mb-4">Result</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-white">90%</p>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Faster Load</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">40%</p>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Lower Churn</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
