'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Zap, Users, ShieldCheck, TrendingUp } from 'lucide-react';


const signalPills = [
  { label: 'MVPs Shipped', value: '5+' },
  { label: 'Clients Served', value: '10+' },
  { label: 'Daily Users', value: '100+' },
  { label: 'Learning', value: 'AI & Kafka' },
  { label: 'Approach', value: 'End-to-End' },
];

const cards = [
  { label: 'Production Systems', value: '5+', icon: Globe },
  { label: 'Healthcare Clients', value: '5+', icon: ShieldCheck },
  { label: 'Load Time Improvement', value: '73%', icon: Zap },
  { label: 'Data Quality Boost', value: '85%', icon: TrendingUp },
];

const metrics = [
  {
    label: 'Performance Optimization',
    value: 73,
    context: 'Cut load times 3s → 800ms across Hospital SaaS. Lighthouse 50 → 90+.',
  },
  {
    label: 'Data Quality',
    value: 85,
    context: 'Reduced invalid backend data by 85% with Zod + React Hook Form validation.',
  },
  {
    label: 'System Scalability',
    value: 90,
    context: 'Hospital SaaS handles 100+ daily appointments across 5+ clients without degradation.',
  },
  {
    label: 'AI Integration Progress',
    value: 30,
    context: 'Learning Gemini API for ClapOS supervision layer. Prototyping complete in Q2.',
  },
];


const MetricRow = ({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="border-b border-neutral-800 pb-10 last:border-0 last:pb-0">
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">{metric.label}</p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="text-[56px] leading-none font-black text-white mb-5"
      >
        {metric.value}
        <span className="text-2xl text-neutral-600 ml-1">%</span>
      </motion.p>

      <div className="relative h-[3px] w-full bg-neutral-800 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${metric.value}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-y-0 left-0 bg-emerald-400 rounded-full"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Baseline</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.05 + 1 }}
          className="text-xs font-bold text-emerald-400"
        >
          {metric.value}%
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.05 + 0.6 }}
        className="text-xs text-neutral-400 leading-relaxed max-w-xs"
      >
        {metric.context}
      </motion.p>
    </div>
  );
};


export default function Impact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-24 items-start">

        {/* LEFT — STICKY CARDS */}
        <div ref={leftRef} className="lg:sticky lg:top-24 space-y-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase mb-3"
            >
              Impact & Validation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-light text-neutral-300 leading-snug"
            >
              Real outcomes across MVPs, client projects, and learning journeys.
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-emerald-400 mb-3" />
                  <p className="text-2xl font-black text-white">{card.value}</p>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-widest mt-1">{card.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div>
            <p className="text-[10px] text-neutral-600 uppercase tracking-widest mb-3">
              System Signals
            </p>
            <div className="flex flex-wrap gap-2">
              {signalPills.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full"
                >
                  <span className="text-xs font-bold text-emerald-400">{pill.value}</span>
                  <span className="text-[11px] text-neutral-500">{pill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — SCROLLING METRICS */}
        <div className="space-y-10 pt-1">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
              Performance metrics
            </p>
            {/* <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              View all →
            </button> */}
          </div>

          {metrics.map((metric, i) => (
            <MetricRow key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}