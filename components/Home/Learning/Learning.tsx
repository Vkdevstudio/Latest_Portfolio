'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Database, Cpu, Zap, ChevronDown } from 'lucide-react';

const learningItems = [
  {
    title: 'Deep Diving: Kafka & Event Sourcing',
    why: 'Need for 100k+ event scale',
    status: 'Building production application',
    progress: 40,
    next: 'Deploy Q1',
    icon: Database,
    color: 'text-emerald-400',
    details: [
      'Reading: Kafka definitive guide',
      'Experimenting: Event sourcing patterns',
      'Building: Real-time notification system',
      'Blogging: Lessons learned (coming soon)'
    ]
  },
  {
    title: 'Integrating: LLMs for Anomaly Detection',
    why: 'Predict-X needs smart filtering',
    status: 'Beta integration in progress',
    progress: 70,
    next: 'Release Predict-X v2',
    icon: Cpu,
    color: 'text-cyan-400',
    details: [
      'Built: Initial LLM integration',
      'Result: 20% fewer false positives',
      'Testing: Against 100k sample events',
      'Timeline: 4 weeks to production'
    ]
  },
  {
    title: 'Expanding: Distributed System Design',
    why: 'Want deep technical foundation',
    status: 'Designing side project',
    progress: 20,
    next: 'Build prototype',
    icon: Zap,
    color: 'text-white',
    details: [
      'Study: Consensus algorithms',
      'Goal: Understand Raft/PBFT',
      'Project: Distributed cache',
      'Timeline: 3 months research'
    ]
  }
];

export default function Learning() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-4">Leveling Up</h2>
          <p className="text-4xl font-black">☐ CURRENTLY LEARNING</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-cyan-400">[Progress: 65%]</span>
        </div>
      </div>

      <div className="space-y-6">
        {learningItems.map((item, i) => (
          <div key={i} className="border border-white/5 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="w-full p-8 text-left hover:bg-white/5 transition-colors flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-neutral-500">Why: {item.why}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                >
                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-neutral-500">Status: {item.status}</span>
                  <span className="text-cyan-400">{item.progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  />
                </div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Next: {item.next} (CLICK TO EXPAND)</p>
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-8"
                >
                  <div className="pt-6 border-t border-white/5 space-y-2 font-mono text-sm text-neutral-400">
                    {item.details.map((detail, j) => (
                      <p key={j}>├─ {detail}</p>
                    ))}
                   
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
