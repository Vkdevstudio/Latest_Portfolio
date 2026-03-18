'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Target, TrendingUp, Zap } from 'lucide-react';



const horizons = [
  {
    title: 'HORIZON 1',
    period: 'Next 1-2 Years',
    role: 'Tech Lead / Senior Systems Architect',
    focus: 'Distributed systems, production infrastructure',
    learning: 'Kubernetes, advanced system design, team collaboration',
    icon: <TrendingUp className='w-5 h-5' />
  },
  {
    title: 'HORIZON 2',
    period: 'Next 3-5 Years',
    role: 'Principal Architect / CTO-track',
    focus: 'Architecture decisions, scaling problems',
    learning: 'Strategic product thinking, team leadership',
    icon: < Target className='w-5 h-5' />
  }
];

const metrics = [
  {
    label: 'Products Shipped',
    current: '9 live',
    goal: '20+ production systems',
    progress: 45,
    icon: <Zap className='w-5 h-5' />
  },
  {
    label: 'System Scale',
    current: '100+ daily users',
    goal: '100k+ concurrent',
    progress: 30,
    icon: < ArrowUpRight className='w-5 h-5' />
  },
  {
    label: 'Architecture Mastery',
    current: 'Multi-tenant, Event-driven',
    goal: 'Distributed systems expert',
    progress: 50,
    icon: < Target className='w-5 h-5' />
  }
];

export default function FutureVision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-end text-right mb-32">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-24 bg-cyan-500/30" />
          <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">06 // Vision</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          WHERE I&apos;M <br />
          <span className="text-neutral-500 italic font-serif">HEADING.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
        {/* Left: Horizons */}
        <div className="space-y-12">
          {horizons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 relative group hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-xs font-black tracking-[0.2em] text-cyan-400 uppercase">{h.title}</h3>
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{h.period}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-3xl font-black tracking-tight">{h.role}</h4>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Focus</span>
                    <p className="text-sm text-neutral-300 font-medium">{h.focus}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Learning</span>
                    <p className="text-sm text-neutral-300 font-medium">{h.learning}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="p-10 rounded-[32px] bg-emerald-500/5 border border-emerald-500/20">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">Ideal Environment</h4>
            <ul className="grid grid-cols-2 gap-4">
              {['Fast-growing startups', 'Hard technical problems', 'Code quality matters', 'Growth to leadership'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                  <span className="text-emerald-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Impact Metrics */}
        <div className="space-y-16 lg:pt-12">
          <h3 className="text-xs font-black text-neutral-500 uppercase tracking-[0.3em] mb-8">Impact Metrics & Goals</h3>
          
          <div className="space-y-12">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                      {m.icon}
                    </div>
                    <span className="text-xl font-black tracking-tight">{m.label}</span>
                  </div>
                  <span className="text-sm font-mono text-cyan-400">{m.progress}%</span>
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-neutral-600">Current: <span className="text-neutral-400">{m.current}</span></span>
                    <span className="text-neutral-600">Goal: <span className="text-neutral-400">{m.goal}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/[0.04] transition-all">
              <div className="space-y-1">
                <h4 className="text-sm font-black text-white">Download Vision Roadmap</h4>
                <p className="text-xs text-neutral-500">A detailed breakdown of my 5-year technical goals</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
