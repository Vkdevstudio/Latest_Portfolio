'use client';

import { motion } from 'framer-motion';

const metrics = [
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Daily Events Handled', value: '100k+' },
  { label: 'Users Impacted', value: '500+' }
];

export default function WorkHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative overflow-hidden">
      {/* Background Visual */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white"
            >
              NOT JUST FEATURES. <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SYSTEMS THAT SCALE.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-neutral-400 font-medium"
            >
              Here&apos;s what I&apos;ve shipped.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                className="space-y-1"
              >
                <p className="text-4xl font-black text-emerald-400 tracking-tight">{m.value}</p>
                <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-square relative"
          >
            {/* Abstract Tech Stack Visual */}
            <div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3 + (i % 3), 
                    repeat: Infinity,
                    delay: (i % 5) * 0.5
                  }}
                  className="bg-emerald-500/30 rounded-lg border border-emerald-500/20"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
