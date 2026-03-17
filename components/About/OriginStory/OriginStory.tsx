'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Rocket, Users, Zap } from 'lucide-react';

const stories = [
  {
    year: '2021',
    title: 'THE FIRST COMMIT',
    icon: <Code2 className="w-5 h-5" />,
    story: 'Started coding learning JavaScript on YouTube. Built a weather app—terrible code, but it shipped. That moment of "it works!" was addictive.',
    realization: 'Shipping > Perfection'
  },
  {
    year: '2022',
    title: 'THE FIRST REAL PROJECT',
    icon: <Zap className="w-5 h-5" />,
    story: 'Spent the year building anything I could. Learned more from broken projects than working ones. Realized that code is just a tool to solve problems.',
    realization: 'Broken projects are the best teachers'
  },
  {
    year: '2023',
    title: 'THE "CLICK" MOMENT',
    icon: <Database className="w-5 h-5" />,
    story: 'Built systems that worked at 100 users but broke at 1000. That is when I realized: databases and architecture are the real challenges.',
    realization: 'Architecture > Speed'
  },
  {
    year: '2024',
    title: 'SCALING & SYSTEMS',
    icon: <Rocket className="w-5 h-5" />,
    story: 'Deep dived into system design and optimization. Shipped 5 products handling 100k+ daily events with 95% query improvements.',
    realization: 'Tradeoffs are the core of engineering'
  },
  {
    year: 'PRESENT',
    title: 'TEACHING & IMPACT',
    icon: <Users className="w-5 h-5" />,
    story: 'Mentoring 3 juniors and seeing them ship independently. Realized that teaching others solidifies your own knowledge.',
    realization: 'Impact compounds through people'
  }
];

export default function OriginStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-32">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">01 // Evolution</span>
          <div className="h-[1px] w-24 bg-emerald-500/30" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter max-w-3xl leading-none">
          A NARRATIVE OF <br />
          <span className="text-neutral-500">CONSTANT GROWTH.</span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
        {/* Left Side: Summary */}
        <div className="sticky top-48 h-fit space-y-8 hidden lg:block">
          <p className="text-xl text-neutral-400 font-serif italic leading-relaxed">
            My journey hasn&apos;t been linear. It&apos;s been a series of deliberate shifts from &quot;how do I make this work?&quot; to &quot;how do I make this scale?&quot;
          </p>
          <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">Core Realization</h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Engineering is not about writing code. It&apos;s about managing complexity and making informed tradeoffs under constraints.
            </p>
          </div>
        </div>

        {/* Right Side: Timeline */}
        <div className="relative space-y-32">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-transparent" />

          {stories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:scale-150 transition-transform" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 tracking-widest">{item.year}</span>
                  <div className="h-[1px] w-8 bg-white/10" />
                  <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{item.realization}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                  {item.story}
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-all">
                    {item.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
