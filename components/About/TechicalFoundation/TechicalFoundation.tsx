'use client';

import { motion } from 'framer-motion';

const foundation = [
  {
    year: 'YEAR 1',
    level: 'JUNIOR',
    learned: ['HTML/CSS/JavaScript basics', 'Portfolio & Todo apps', 'Weather projects'],
    realized: 'Code quality matters more than just "working"',
    confidence: '3/10 (Imposter syndrome heavy)'
  },
  {
    year: 'YEAR 2',
    level: 'MID-LEVEL',
    learned: ['React, Node.js, databases', '10+ MERN products', 'Freelance shipping'],
    realized: 'Databases are the bottleneck, not the UI',
    confidence: '5/10 (Starting to know what I don\'t know)'
  },
  {
    year: 'YEAR 3',
    level: 'SENIOR-TRACK',
    learned: ['System design, optimization', 'Architecture & Tradeoffs', 'Products at scale (100k events/day)'],
    realized: 'Understanding tradeoffs > knowing all languages',
    confidence: '7/10 (Comfortable with complexity)'
  },
  {
    year: 'YEAR 4',
    level: 'CURRENT',
    learned: ['Event-driven systems', 'ML & LLM integration', 'Distributed design'],
    realized: 'Teaching others reveals gaps in your own knowledge',
    confidence: '8/10 (Know what I know, know what I don\'t)'
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

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5" />

          <div className="space-y-48">
            {foundation.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center"
              >
                {/* Year Marker */}
                <div className={`
                  flex flex-col md:items-end text-left md:text-right
                  ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2 md:order-last md:items-start md:text-left'}
                `}>
                  <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter leading-none mb-4">{item.year}</span>
                  <div className="space-y-2">
                    <span className="text-xs font-black tracking-[0.3em] text-cyan-400 uppercase">{item.level}</span>
                    <p className="text-sm text-neutral-500 font-mono italic">Confidence: {item.confidence}</p>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`
                  relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500
                  ${i % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}
                `}>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-4">Core Learnings</h4>
                      <ul className="space-y-3">
                        {item.learned.map((l, j) => (
                          <li key={j} className="text-lg text-neutral-300 font-bold flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                      <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-3">The Realization</h4>
                      <p className="text-xl font-serif italic text-white leading-relaxed">
                        &quot;{item.realized}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot on line */}
                <div className="absolute left-[-4px] md:left-1/2 top-1/2 w-2 h-2 rounded-full bg-cyan-400 md:-translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
