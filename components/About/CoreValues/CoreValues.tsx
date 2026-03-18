'use client';

import { motion } from 'framer-motion';
import { Rocket, Mountain, Users, Network } from 'lucide-react';




const values = [
  {
    title: 'SHIPPED OVER PERFECT',
    quote: 'Done in 2 months > perfect in 6 months',
    desc: '9 products shipped in 2 years. Iteration beats analysis paralysis.',
    icon:  <Rocket className='w-5 h-5'/>,
    accent: 'emerald',
    borderStyle: 'border-dashed'
  },
  {
    title: 'SCALE OVER SIMPLICITY',
    quote: 'Choose architecture that handles 100x growth, not today\'s load',
    desc: 'Hospital SaaS handles 100+ concurrent. ClapOS designed for 100k+ events. Think ahead.',
    icon:  <Mountain className='w-5 h-5'/>,
    accent: 'cyan',
    borderStyle: 'border-solid border-2'
  },
  {
    title: 'OWNERSHIP OVER DELEGATION',
    quote: 'Full-stack: design → code → deploy → optimize',
    desc: 'Every project I touch, I own end-to-end. Frontend, backend, infrastructure, performance.',
    icon: <Users className='w-5 h-5'/>,
    accent: 'purple',
    borderStyle: 'border-solid'
  },
  {
    title: 'PROBLEMS OVER FRAMEWORKS',
    quote: 'Understand the problem first. Pick tools second.',
    desc: 'Why use Kafka? Because eventually-consistent events scale. Why MongoDB? Because flexible schema fits healthcare variations.',
    icon: < Network className='w-5 h-5' />,
    accent: 'pink',
    borderStyle: 'border-dotted border-2'
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
            whileHover={
              v.accent === 'emerald' ? { scale: 1.05 } : 
              v.accent === 'purple' ? { y: 4 } : 
              {}
            }
            className={`
              group relative p-12 rounded-[32px] bg-white/[0.02] border backdrop-blur-sm transition-all duration-500
              ${v.borderStyle}
              ${v.accent === 'emerald' ? 'border-emerald-500/30 hover:border-emerald-500' : ''}
              ${v.accent === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500' : ''}
              ${v.accent === 'purple' ? 'border-purple-500/30 hover:border-purple-500' : ''}
              ${v.accent === 'pink' ? 'border-pink-500/30 hover:border-pink-500' : ''}
            `}
          >
            {/* Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] pointer-events-none ${
              v.accent === 'emerald' ? 'bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 
              v.accent === 'cyan' ? 'bg-cyan-500/5 shadow-[0_0_40px_rgba(6,182,212,0.1)]' :
              v.accent === 'purple' ? 'bg-purple-500/5 shadow-[0_0_40px_rgba(168,85,247,0.1)]' :
              'bg-pink-500/5 shadow-[0_0_40px_rgba(236,72,153,0.1)]'
            }`} />

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                v.accent === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 group-hover:scale-110' : 
                v.accent === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 group-hover:scale-110' :
                v.accent === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:scale-110' :
                'bg-pink-500/10 text-pink-400 group-hover:rotate-12'
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
