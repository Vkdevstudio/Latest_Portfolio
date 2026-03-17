'use client';

import { motion } from 'framer-motion';
import { Rocket, Mountain, Users, Network } from 'lucide-react';

const values = [
  {
    title: 'SHIPPING OVER PERFECTION',
    quote: 'Done and learning beats perfect and stuck',
    desc: 'Got 5 products live by prioritizing delivery and iterative learning.',
    icon: <Rocket className="w-6 h-6" />,
    accent: 'emerald'
  },
  {
    title: 'DEPTH OVER BREADTH',
    quote: 'Master one thing deeply, not everything shallowly',
    desc: 'Expert in database optimization with proven 95% performance improvements.',
    icon: <Mountain className="w-6 h-6" />,
    accent: 'cyan'
  },
  {
    title: 'PEOPLE OVER PROCESS',
    quote: 'Mentoring juniors > following frameworks',
    desc: '3 juniors I mentored are now shipping independently and leading their own tracks.',
    icon: <Users className="w-6 h-6" />,
    accent: 'emerald'
  },
  {
    title: 'SYSTEMS THINKING',
    quote: 'Understand the whole, optimize the parts',
    desc: 'Architecture decisions shaped my 5+ products to handle 100k+ daily events.',
    icon: <Network className="w-6 h-6" />,
    accent: 'cyan'
  }
];

export default function CoreValues() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center mb-32">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-emerald-500/30" />
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">02 // Philosophy</span>
          <div className="h-[1px] w-12 bg-emerald-500/30" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          WHAT DRIVES MY <br />
          <span className="text-neutral-500 italic font-serif">DECISIONS.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative p-12 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm"
          >
            {/* Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] pointer-events-none ${
              v.accent === 'emerald' ? 'bg-emerald-500/5' : 'bg-cyan-500/5'
            }`} />

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${
                v.accent === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'
              }`}>
                {v.icon}
              </div>

              <h3 className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase mb-4">{v.title}</h3>
              <p className="text-3xl font-black tracking-tight mb-6 leading-tight group-hover:text-white transition-colors">
                &quot;{v.quote}&quot;
              </p>
              <p className="text-neutral-400 leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
