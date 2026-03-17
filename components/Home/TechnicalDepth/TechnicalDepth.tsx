'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export const technicalSections = [
  {
    title: 'PostgreSQL vs MongoDB',
    lines: [
      { text: 'PostgreSQL', type: 'root' },
      { text: 'Use case: ACID guarantees, relational data', type: 'child' },
      { text: 'Proven in: Hospital Dashboards (500 concurrent)', type: 'child' },
      { text: 'Tradeoff: Slower queries without optimization', type: 'child' },
      { text: 'Key: Proper indexing, query analysis', type: 'child' },
      { text: 'MongoDB', type: 'root' },
      { text: 'Use case: Flexible schema, horizontal scale', type: 'child' },
      { text: 'Proven in: Predict-X (100k event ingestion)', type: 'child' },
      { text: 'Tradeoff: No multi-doc transactions', type: 'child' },
      { text: 'Key: Handle consistency in application layer', type: 'child' },
    ],
  },
  {
    title: 'Supabase vs Custom Backend',
    lines: [
      { text: 'Supabase', type: 'root' },
      { text: 'Benefit: Rapid prototyping, auth + DB + API ready', type: 'child' },
      { text: 'Use case: MVPs with tight deadlines', type: 'child' },
      { text: 'Tradeoff: Limited flexibility & performance at scale', type: 'child' },
      { text: 'Key: Great for prototypes, less for high-complexity apps', type: 'child' },
      { text: 'Custom Backend', type: 'root' },
      { text: 'Benefit: Full control over architecture and performance', type: 'child' },
      { text: 'Use case: Enterprise apps, complex business logic', type: 'child' },
      { text: 'Tradeoff: Slower to build, more maintenance', type: 'child' },
      { text: 'Key: Choose when scalability and flexibility matter most', type: 'child' },
    ],
  },
  {
    title: 'Monolith vs Microservices',
    lines: [
      { text: 'Monolith', type: 'root' },
      { text: 'Benefit: Simpler to develop, deploy, and test', type: 'child' },
      { text: 'Use case: Small teams, MVPs', type: 'child' },
      { text: 'Tradeoff: Harder to scale and maintain long-term', type: 'child' },
      { text: 'Key: Ideal for early-stage products or tight deadlines', type: 'child' },
      { text: 'Microservices', type: 'root' },
      { text: 'Benefit: Independent deployable services, scalable', type: 'child' },
      { text: 'Use case: Large products, distributed teams', type: 'child' },
      { text: 'Tradeoff: Higher complexity, need orchestration', type: 'child' },
      { text: 'Key: Best for mature products and high scalability', type: 'child' },
    ],
  },
  {
    title: 'React.js vs Next.js',
    lines: [
      { text: 'React.js', type: 'root' },
      { text: 'Benefit: Component-based, flexible SPA development', type: 'child' },
      { text: 'Use case: Interactive frontend apps', type: 'child' },
      { text: 'Tradeoff: Requires own routing & SSR setup if needed', type: 'child' },
      { text: 'Key: Great for frontend-focused projects', type: 'child' },
      { text: 'Next.js', type: 'root' },
      { text: 'Benefit: SSR, SSG, routing, API routes included', type: 'child' },
      { text: 'Use case: SEO-critical apps, hybrid rendering, fullstack', type: 'child' },
      { text: 'Tradeoff: Opinionated, learning curve for SSR/SSG features', type: 'child' },
      { text: 'Key: Ideal for production-ready fullstack apps', type: 'child' },
    ],
  },
  {
    title: 'Real-Time Communication',
    lines: [
      { text: 'WebSockets (< 10k users)', type: 'root' },
      { text: 'Proven in: Hospital Dashboards', type: 'child' },
      { text: 'Benefit: Lower latency, persistent connection', type: 'child' },
      { text: 'Challenge: Server memory with many connections', type: 'child' },
      { text: 'Kafka (100k+ events/day)', type: 'root' },
      { text: 'Proven in: Predict-X', type: 'child' },
      { text: 'Benefit: Handles massive throughput', type: 'child' },
      { text: 'Challenge: Higher operational complexity', type: 'child' },
      { text: 'Redis Pub/Sub (Medium scale)', type: 'root' },
      { text: 'Use: When Kafka is overkill', type: 'child' },
      { text: 'Benefit: Simple, still scalable', type: 'child' },
      { text: 'Tradeoff: Less durable than Kafka', type: 'child' },
    ],
  },
  {
    title: 'Performance Optimization',
    lines: [
      { text: 'React Component Optimization', type: 'root' },
      { text: 'Method: Memoization, lazy loading', type: 'child' },
      { text: 'Result: 3s → 800ms load time (73%)', type: 'child' },
      { text: 'Impact: Better UX, higher conversion', type: 'child' },
      { text: 'Database Query Optimization', type: 'root' },
      { text: 'Method: Indexing, query analysis, denormalization', type: 'child' },
      { text: 'Result: 4h analysis → 15 minutes (95%)', type: 'child' },
      { text: 'Impact: Real-time insights, revenue identification', type: 'child' },
    ],
  },
];

export default function TechnicalDepth() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-32 overflow-hidden">
      <div className="max-w-7xl  mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-4">
            Architectural Thinking
          </h2>
          <p className="text-2xl font-light text-neutral-300">Architecture Decisions & Tradeoffs</p>
        </div>

        <div className="relative group">
          {/* Terminal Header */}
          <div className="bg-neutral-900 border border-white/10 rounded-t-xl px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                architecture_tradeoffs.sh
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-neutral-950 border-x border-b border-white/10 rounded-b-xl p-6 md:p-12 relative overflow-hidden">
            <div className="font-mono text-[10px] sm:text-xs md:text-sm text-neutral-400 space-y-6 relative z-0">
              {technicalSections.map((section, i) => (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="w-full text-left flex items-center gap-2 text-white font-bold text-lg hover:text-emerald-400 transition-colors"
                  >
                    <span className="text-emerald-400">$</span> {section.title}
                  </button>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="pl-4 border-l border-emerald-500/30 mt-2 space-y-1"
                      >
                        {section.lines.map((line, j) => (
                          <motion.p
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.03 }}
                            className={`${
                              line.type === 'root' ? 'font-bold text-white mt-2' : 'text-neutral-400 pl-2'
                            }`}
                          >
                            {line.type === 'root' ? `├─ ${line.text}` : `│  ├─ ${line.text}`}
                          </motion.p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}