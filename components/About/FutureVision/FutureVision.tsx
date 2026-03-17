'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Heart, Briefcase } from 'lucide-react';

export default function FutureVision() {
  return (
    <section className="py-48 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-40">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">06 // Vision</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            WHERE I&apos;M <br />
            <span className="text-neutral-500 italic font-serif">HEADING.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-700 group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Horizon 01</span>
                  <h3 className="text-3xl font-black tracking-tight">NEXT 1-2 YEARS</h3>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  'Tech Lead / Senior Engineer role',
                  'Focus: System architecture, team scaling',
                  'Learning: Distributed systems, mega-scale design'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-400 font-medium text-lg">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-700 group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Horizon 02</span>
                  <h3 className="text-3xl font-black tracking-tight">NEXT 3-5 YEARS</h3>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  'Engineering Manager or Architect role',
                  'Focus: Building high-performing teams, mentoring',
                  'Learning: Leadership, organizational design'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-400 font-medium text-lg">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-24 pt-12">
            <div className="space-y-12">
              <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] flex items-center gap-4">
                <Heart className="w-4 h-4 text-emerald-500" /> MY IDEAL IMPACT
              </h4>
              <div className="space-y-12">
                {[
                  { label: 'Scale systems 1000x', progress: 70 },
                  { label: 'Mentor 10+ engineers', progress: 40 },
                  { label: 'Contribute to Open Source', progress: 20 }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-black tracking-tight">{item.label}</span>
                      <span className="text-sm font-mono text-neutral-500">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] flex items-center gap-4">
                <Briefcase className="w-4 h-4 text-cyan-500" /> THE IDEAL ENVIRONMENT
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Fast-growing startups',
                  'Hard technical problems',
                  'Code quality matters',
                  'Growth into leadership'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-sm font-bold tracking-tight"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
