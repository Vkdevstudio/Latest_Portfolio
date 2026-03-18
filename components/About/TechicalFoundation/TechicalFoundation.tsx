'use client';

import { motion } from 'framer-motion';

const foundation = [
  {
    year: 'EARLY 2023',
    level: 'MERN BASICS',
    learned: ['React, Node.js, MongoDB', 'JWT + RBAC', 'Basic AWS EC2'],
    realized: 'Building features is easy. Scaling systems is hard.',
    confidence: 3
  },
  {
    year: 'MID 2023',
    level: 'PRODUCTION EXPERIENCE',
    learned: ['5+ hospital websites', 'Real healthcare workflows', 'Patient data security'],
    realized: 'Spreadsheets → dashboards = real business value',
    confidence: 5
  },
  {
    year: 'LATE 2024',
    level: 'SYSTEMS AT SCALE',
    learned: ['Performance optimization (3s → 800ms)', 'Multi-tenant architecture', 'Event-driven thinking'],
    realized: 'Databases are the bottleneck. Query optimization > adding servers.',
    confidence: 7
  },
  {
    year: 'PRESENT',
    level: 'ARCHITECTURE THINKING',
    learned: ['Microservices + Kafka', 'Distributed systems', 'ML integration (learning)'],
    realized: 'Tradeoffs > silver bullets. Every decision has cost.',
    confidence: 8
  }
];



export default function TechnicalFoundation() {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">03 // Foundation</span>
            <div className="h-[1px] w-24 bg-cyan-500/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            TECHNICAL <br />
            <span className="text-neutral-500">PROGRESSION.</span>
          </h2>
        </div>

        <div className="relative space-y-64">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-emerald-500/50 to-transparent" />

          {foundation.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-12 md:pl-24 group"
            >
              {/* Background Typography */}
              <div className="absolute left-0 top-0 -translate-y-1/2 pointer-events-none select-none">
                <span className="text-[8rem] md:text-[20rem] font-black text-white/[0.03] leading-none tracking-tighter">
                  {item.year.split(' ')[1]}
                </span>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-xs font-black tracking-[0.3em] text-cyan-400 uppercase">{item.level}</span>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">{item.year}</h3>
                  </div>

                  <div className="space-y-4 max-w-md">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Confidence Level</span>
                      <span className="text-sm font-mono text-cyan-400">{item.confidence}/10</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.confidence * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Core Learnings</h4>
                    <ul className="space-y-3">
                      {item.learned.map((l, j) => (
                        <li key={j} className="text-lg text-neutral-300 font-bold flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:pl-20">
                  <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="text-6xl font-black">0{i+1}</span>
                    </div>
                    <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-6">The Realization</h4>
                    <p className="text-2xl font-serif italic text-white leading-relaxed">
                      &quot;{item.realized}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Dot on line */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
