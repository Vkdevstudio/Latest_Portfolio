'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'THE PROBLEM-SOLVING HIGH',
    quote: 'That moment when a 3-second load time becomes 800ms—or when a system handling 10 users suddenly handles 100 without breaking. That\'s the rush.',
    accent: 'emerald'
  },
  {
    title: 'REAL IMPACT THROUGH CODE',
    quote: '9 products shipped. 100+ daily users. 5+ hospital clients live. I can measure and feel the impact every day.',
    accent: 'cyan'
  },
  {
    title: 'SYSTEMS THINKING',
    quote: 'Understanding why a database query is slow teaches you more than knowing every framework. Architecture matters.',
    accent: 'emerald'
  },
  {
    title: 'FULL-STACK OWNERSHIP',
    quote: 'From design to deployment. Frontend, backend, infrastructure. I own the full problem, not just one piece.',
    accent: 'cyan'
  }
];

export default function WhyICode() {
  return (
    <section className="py-48 relative overflow-hidden bg-neutral-950/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
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

        <div className="space-y-32">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Quote Mark */}
              <div className={`absolute -top-12 -left-12 text-[12rem] font-black leading-none select-none pointer-events-none opacity-10 ${
                item.accent === 'emerald' ? 'text-emerald-500' : 'text-cyan-500'
              }`}>
                &ldquo;
              </div>

              <div className="relative z-10 space-y-12">
                <p className="text-3xl md:text-5xl font-serif italic text-white leading-tight max-w-4xl">
                  {item.quote}
                </p>

                <div className="flex items-center gap-6">
                  <div className={`h-[2px] w-12 ${
                    item.accent === 'emerald' ? 'bg-emerald-500' : 'bg-cyan-500'
                  }`} />
                  <h3 className={`text-sm font-black tracking-[0.3em] uppercase ${
                    item.accent === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                  }`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Separator Line */}
              {i < reasons.length - 1 && (
                <div className="mt-32 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
