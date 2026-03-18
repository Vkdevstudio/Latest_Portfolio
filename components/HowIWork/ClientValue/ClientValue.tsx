/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const ValueItem = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-8 border border-white/5 bg-white/[0.01] rounded-sm hover:border-emerald-500/20 transition-all group"
  >
    <div className="mb-6 p-3 bg-white/5 rounded-sm inline-block group-hover:bg-emerald-500/10 transition-colors">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed font-sans">{desc}</p>
  </motion.div>
);

export default function ClientValue() {
  const values = [
    {
      icon: Target,
      title: "OUTCOME-FIRST DELIVERY",
      desc: "I don't just ship features; I deliver business outcomes. Every line of code is measured against your core KPIs and growth goals."
    },
    {
      icon: Zap,
      title: "PERFORMANCE AS A FEATURE",
      desc: "Speed is a competitive advantage. I build systems that are fast, responsive, and efficient, ensuring a premium experience for every user."
    },
    {
      icon: Shield,
      title: "RELIABILITY & TRUST",
      desc: "Trust is built on uptime. I prioritize security and reliability, so you can focus on your business while I handle the technical complexity."
    },
    {
      icon: TrendingUp,
      title: "SCALABLE FOUNDATIONS",
      desc: "Your product should grow with you. I design systems that handle 10x growth without needing a complete rewrite or architectural overhaul."
    }
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-emerald-500/30" />
            <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">Client Value // 2026</span>
            <div className="h-[1px] w-8 bg-emerald-500/30" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">WHAT WORKING WITH ME LOOKS LIKE.</h2>
          <p className="text-xl text-neutral-400 font-serif italic max-w-2xl mx-auto">
            Translating complex engineering into tangible value for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ValueItem key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
