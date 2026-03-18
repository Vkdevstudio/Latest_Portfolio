'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Database, Cpu, Zap, ChevronDown } from 'lucide-react';

const learningItems = [
  {
    title: 'AI Integration: Gemini for Context & Supervision',
    why: 'Build intelligent supervision layer across all ClapOS modules',
    status: 'Learning & prototyping',
    progress: 30,
    next: 'Integrate into ClapOS by Q2',
    icon: Cpu,
    color: 'text-emerald-400',
    details: [
      'Learning: Gemini API capabilities, context capture patterns',
      'Experimenting: User action context analysis',
      'Goal: Script analysis, real-time supervision, smart suggestions',
      'Security: End-to-end encryption, data privacy'
    ]
  },
  {
    title: 'Deep Dive: Event-Driven Architecture at Scale',
    why: 'Master Kafka patterns for 100k+ events/day systems',
    status: 'Building production with ClapOS',
    progress: 50,
    next: 'Production deployment Q2',
    icon: Database,
    color: 'text-cyan-400',
    details: [
      'Building: ClapOS backend microservices with Kafka',
      'Learning: Event sourcing, saga patterns, dead letter queues',
      'Implementing: Real-time sync across 10+ modules',
      'Target: Zero data loss, guaranteed delivery'
    ]
  },
  {
    title: 'Docker & Container Orchestration',
    why: 'Prepare microservices for Kubernetes on AWS EKS',
    status: 'Learning & implementing',
    progress: 35,
    next: 'Deploy to EKS Q2',
    icon: Zap,
    color: 'text-white',
    details: [
      'Learning: Docker fundamentals, image optimization, multi-stage builds',
      'Building: Dockerfiles for each ClapOS microservice',
      'Goal: Kubernetes-ready containers, CI/CD pipeline',
      'Next: AWS EKS deployment, auto-scaling setup'
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
