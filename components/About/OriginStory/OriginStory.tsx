'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-48 relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-40">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-emerald-500/30" />
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">01 // Evolution</span>
          <div className="h-[1px] w-12 bg-emerald-500/30" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          A NARRATIVE OF <br />
          <span className="text-neutral-500 italic font-serif">CONSTANT GROWTH.</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line Background */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
        
        {/* Animated Growing Line */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 md:-translate-x-1/2 z-10 origin-top"
        />

        <div className="space-y-40">
          {stories.map((item, i) => (
            <div key={i} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_100px_1fr] gap-8 md:gap-0 items-start">
              {/* Year - Left (Desktop) */}
              <div className="hidden md:flex flex-col items-end justify-center pr-12 pt-2">
                <span className="text-xs font-black tracking-[0.3em] text-neutral-500 uppercase">{item.year}</span>
              </div>

              {/* Dot - Middle */}
              <div className="relative flex justify-center pt-2 z-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse" />
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                </motion.div>
                
                {/* Mobile Year Label */}
                <div className="md:hidden absolute left-12 top-2 whitespace-nowrap">
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 uppercase">{item.year}</span>
                </div>
              </div>

              {/* Content - Right */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:pl-12 space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">{item.realization}</span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-neutral-400 leading-relaxed text-lg font-medium max-w-lg">
                  {item.story}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-neutral-500">
                    {item.icon}
                  </div>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
