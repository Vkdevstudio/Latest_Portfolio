'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, GraduationCap, PenTool } from 'lucide-react';

const reasons = [
  {
    title: 'THE PROBLEM-SOLVING RUSH',
    quote: 'That moment when something broken suddenly works—it\'s like solving a puzzle with infinite possibilities. Every bug is a chance to understand deeper.',
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    title: 'IMPACT THROUGH CODE',
    quote: '5 products I built are used by 500+ people. That is 500 people with a better tool because I coded. That compounds my impact.',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'LEARNING BY TEACHING',
    quote: 'Mentoring juniors forced me to articulate WHY things work. In explaining React optimization, I discovered optimizations I didn\'t know existed.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: 'THE CRAFT',
    quote: 'Well-architected code is beautiful. It\'s like poetry—elegant, concise, purposeful. Bad code is like a rough draft—functional but ugly.',
    icon: <PenTool className="w-5 h-5" />
  }
];

export default function WhyICode() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48 relative">
      <div className="flex flex-col items-center text-center mb-40">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-emerald-500/30" />
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">04 // Motivation</span>
          <div className="h-[1px] w-12 bg-emerald-500/30" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          BEYOND THE <br />
          <span className="text-neutral-500 italic font-serif">SYNTAX.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col items-start text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-400 mb-10 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
              {r.icon}
            </div>
            
            <h3 className="text-[10px] font-black tracking-[0.4em] text-neutral-500 uppercase mb-8 group-hover:text-emerald-400 transition-colors">
              {r.title}
            </h3>

            <blockquote className="text-3xl md:text-4xl font-serif italic text-white/90 leading-tight mb-8 relative">
              <span className="absolute -left-8 -top-4 text-6xl text-emerald-500/10 font-serif">&quot;</span>
              {r.quote}
            </blockquote>
            
            <div className="w-16 h-[1px] bg-emerald-500/20 group-hover:w-32 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
