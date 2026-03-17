'use client';

import { motion } from 'framer-motion';

const challenges = [
  {
    title: 'PERFECTION PARALYSIS',
    problem: 'Built apps that never shipped. Waited 6 months for "perfect" code that never came.',
    realization: 'Done > Perfect',
    action: 'Set strict shipping deadlines, learned to iterate in public.',
    result: '5 products shipped in 2 years, handling real users.',
    accent: 'emerald'
  },
  {
    title: 'DATABASE BLINDNESS',
    problem: 'Built systems that broke at 100 users. Thought scaling was just adding more servers.',
    realization: 'Fundamentals Matter',
    action: 'Deep dive into indexing, query optimization, and tradeoffs.',
    result: '95% query improvement, systems handle 100k+ events.',
    accent: 'cyan'
  },
  {
    title: 'COMMUNICATION GAP',
    problem: 'Good code but teammates didn\'t understand it. Mentoring was difficult.',
    realization: 'Communication is a Skill',
    action: 'Started writing technical blogs and simplifying complex ideas.',
    result: 'Mentored 3 juniors, 2 shipping independently now.',
    accent: 'emerald'
  }
];

export default function Challenges() {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">05 // Growth</span>
            <div className="h-[1px] w-24 bg-emerald-500/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            HONEST <br />
            <span className="text-neutral-500">ASSESSMENTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col"
            >
              <span className="text-4xl font-black text-white/5 mb-8 group-hover:text-emerald-500/20 transition-colors">0{i + 1}</span>
              
              <h3 className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase mb-6">{c.title}</h3>
              
              <div className="space-y-8 flex-grow">
                <p className="text-xl font-serif italic text-neutral-400 leading-tight">
                  &quot;{c.problem}&quot;
                </p>
                
                <div className="pt-8 border-t border-white/5 space-y-4">
                  <p className="text-sm font-bold text-white uppercase tracking-wider">
                    Realization: <span className={c.accent === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}>{c.realization}</span>
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{c.action}</p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Result</span>
                <span className="text-xs font-bold text-emerald-400">{c.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-[32px] bg-emerald-500/5 border border-emerald-500/10">
          <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-12">Current Learning Tracks</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Distributed Systems', desc: 'Studying Kafka and event sourcing at scale.' },
              { title: 'ML Integration', desc: 'Exploring LLM agents and RDB integration.' },
              { title: 'Mega-scale Design', desc: 'Learning from real-world high-traffic systems.' }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-8 h-[1px] bg-emerald-500/30" />
                <p className="text-xl font-black tracking-tight text-white">{item.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
