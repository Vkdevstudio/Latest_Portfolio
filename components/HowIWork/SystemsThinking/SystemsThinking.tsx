'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Principle = ({ title, desc, index }: { title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[10px] font-mono text-emerald-500 font-bold">0{index + 1}</span>
      <div className="h-[1px] w-8 bg-emerald-500/30 group-hover:w-12 transition-all" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed font-sans">{desc}</p>
  </motion.div>
);

export default function SystemsThinking() {
  const principles = [
    {
      title: "TRADE-OFFS OVER DOGMA",
      desc: "Every architectural choice is a trade-off. I don't follow 'best practices' blindly; I evaluate latency vs. consistency, cost vs. performance, and speed vs. technical debt based on your specific business stage."
    },
    {
      title: "FAILURE IS A FIRST-CLASS CITIZEN",
      desc: "I don't design for the happy path. I design for when the API times out, the database is under load, or the network is flaky. Resilience is built into the architecture, not added as an afterthought."
    },
    {
      title: "DATA INTEGRITY IS NON-NEGOTIABLE",
      desc: "UI can be fixed in minutes. Corrupt data can destroy a business. I prioritize strict schema validation, idempotent operations, and reliable state management above all else."
    }
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">HOW I THINK ABOUT SYSTEMS.</h2>
              <p className="text-neutral-400 font-serif italic text-lg">
                Engineering is the art of making decisions under pressure. 
                These are the principles that guide my architectural choices.
              </p>
            </motion.div>

            <div className="space-y-12">
              {principles.map((p, i) => (
                <Principle key={p.title} {...p} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square lg:aspect-[4/5] border border-white/10 rounded-sm overflow-hidden group"
          >
            <Image 
              src="https://picsum.photos/seed/system-diagram/800/1000?blur=1" 
              alt="Conceptual System Diagram" 
              fill
              title='Conceptual System Diagram'
              className="object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-black/60" />
            
            {/* Abstract Diagram Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-2/3 h-2/3 border border-emerald-500/20 rounded-full animate-spin-slow" />
              <div className="absolute w-1/2 h-1/2 border border-emerald-500/10 rounded-full animate-reverse-spin-slow" />
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold mb-2">Decision Matrix</p>
              <p className="text-xl font-bold text-white leading-tight">MAPPING COMPLEXITY TO OUTCOMES.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
