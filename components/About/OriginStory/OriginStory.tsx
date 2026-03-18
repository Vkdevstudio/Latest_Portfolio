'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Network, Rocket, Users, Zap } from 'lucide-react';



const stories = [
  {
    year: 'Nov 2023',
    title: 'FIRST PRODUCTION CODE',
    icon: <Code2 className='w-5 h-5'/>,
    story: 'Started at Primates building MERN stack. Launched 5 hospital websites in 9 months. Terrible code, but it shipped. Patients used it. That was real.',
    realization: 'Shipped > Perfect'
  },
  {
    year: 'Mar 2024',
    title: 'THE SCALING CRISIS',
    icon: <Zap className='w-5 h-5'/>,
    story: 'Hospital SaaS worked for 10 users. Broke at 100+. Spent a month digging into database queries. Found: missing indexes, N+1 queries, no pagination.',
    realization: 'Fundamentals matter more than frameworks'
  },
  {
    year: 'Jun 2024',
    title: 'PERFORMANCE BREAKTHROUGH',
    icon: <Database className='w-5 h-5'/>,
    story: 'Optimized Hospital SaaS: cut load times 3s → 800ms (73% improvement). Lighthouse 50 → 90+. Users stopped bouncing.',
    realization: 'Every 100ms is a user retention battle'
  },
  {
    year: 'Oct 2024',
    title: 'COMPLEXITY EXPANSION',
    icon: <Network className='w-5 h-5'/>,
    story: 'At Tensys, built Medtech Dashboards: 5+ specialist workflows in one system. Multi-tenant isolation. Real-time sync. Security-first.',
    realization: 'Architecture decisions compound over time'
  },
  {
    year: 'Nov 2025',
    title: 'SYSTEMS OWNERSHIP',
    icon: < Rocket className='w-5 h-5'/>,
    story: 'Freelance. Built ClapOS: microservices + Kafka. Learned event-driven architecture. Frontend live, backend 50% complete. Learning infrastructure.',
    realization: 'True ownership: design → deploy → scale'
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
