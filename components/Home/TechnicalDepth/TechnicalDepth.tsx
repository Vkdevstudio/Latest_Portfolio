'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export const technicalSections = [
  {
    title: 'MongoDB for Microservices',
    lines: [
      { text: 'MongoDB', type: 'root' },
      { text: 'Use case: Flexible schema, horizontal scale', type: 'child' },
      { text: 'Proven in: ClapOS (10+ independent services)', type: 'child' },
      { text: 'Proven in: Hospital SaaS (5+ clients, 100+ daily users)', type: 'child' },
      { text: 'Benefit: Each service owns its data, independent scaling', type: 'child' },
      { text: 'Tradeoff: Handle consistency in application layer', type: 'child' },
      { text: 'Key: Perfect for event-driven microservices', type: 'child' },
    ],
  },
  {
    title: 'Custom Backend > BaaS for Scale',
    lines: [
      { text: 'Custom Backend (Node.js + Express)', type: 'root' },
      { text: 'Benefit: Full control over architecture and performance', type: 'child' },
      { text: 'Use case: Multi-tenant platforms, complex workflows', type: 'child' },
      { text: 'Proven in: Jignu, Wyka, Hospital SaaS', type: 'child' },
      { text: 'Tradeoff: More to build, but scalable and flexible', type: 'child' },
      { text: 'Key: Choose when handling real traffic and complexity', type: 'child' },
    ],
  },
  {
    title: 'Microservices + Event Streaming (Kafka)',
    lines: [
      { text: 'Microservices Architecture', type: 'root' },
      { text: 'Benefit: Independent deployable services, true scalability', type: 'child' },
      { text: 'Use case: Complex products (ClapOS 10+ modules)', type: 'child' },
      { text: 'Key: Each service owns domain, Kafka decouples', type: 'child' },
      { text: 'Apache Kafka (Event Streaming)', type: 'root' },
      { text: 'Proven in: ClapOS (vendor.created, audition.submitted events)', type: 'child' },
      { text: 'Benefit: Zero-coupling between services, real-time sync', type: 'child' },
      { text: 'Benefit: Event replay capability, audit trail built-in', type: 'child' },
      { text: 'Key: Services react to events, no direct dependencies', type: 'child' },
    ],
  },
  {
    title: 'Next.js for Production',
    lines: [
      { text: 'Next.js (Server-Side + Static Rendering)', type: 'root' },
      { text: 'Benefit: SSR, SSG, routing, API routes, middleware', type: 'child' },
      { text: 'Use case: SEO-critical apps, hybrid rendering', type: 'child' },
      { text: 'Proven in: ClapOS, PlusUAE, Hospital SaaS, Jignu, Wyka', type: 'child' },
      { text: 'Deployed on: Vercel (edge rendering, CDN)', type: 'child' },
      { text: 'Key: Ideal for production-ready fullstack apps', type: 'child' },
    ],
  },
  {
    title: 'Multi-Tenant Architecture',
    lines: [
      { text: 'Data Isolation at Scale', type: 'root' },
      { text: 'Approach: Tenant-scoped queries, row-level security', type: 'child' },
      { text: 'Proven in: Jignu (company isolation), Wyka (agent isolation)', type: 'child' },
      { text: 'Proven in: Hospital SaaS (client isolation)', type: 'child' },
      { text: 'Benefit: One codebase, multiple isolated tenants', type: 'child' },
      { text: 'Key: Security and scalability with shared infrastructure', type: 'child' },
    ],
  },
  {
    title: 'Performance Optimization',
    lines: [
      { text: 'Frontend Performance', type: 'root' },
      { text: 'Method: Code splitting, lazy loading, image optimization', type: 'child' },
      { text: 'Result: 3s → 800ms load time (73% improvement)', type: 'child' },
      { text: 'Achieved: Hospital SaaS (100+ users, no degradation)', type: 'child' },
      { text: 'Metric: Lighthouse 50 → 90+ across all deployments', type: 'child' },
      { text: 'Impact: Users stayed, conversion improved', type: 'child' },
      { text: 'Form Validation & Data Quality', type: 'root' },
      { text: 'Method: Zod + React Hook Form, client-side validation', type: 'child' },
      { text: 'Result: Invalid backend data reduced by 85%', type: 'child' },
      { text: 'Impact: Cleaner data, fewer errors in production', type: 'child' },
    ],
  },
  {
    title: 'Real-Time Features',
    lines: [
      { text: 'OAuth + Passport.js (Secure Auth)', type: 'root' },
      { text: 'Proven in: Wyka (cross-platform authentication)', type: 'child' },
      { text: 'Benefit: Agent data syncs real-time between dashboard and Canva app', type: 'child' },
      { text: 'Key: Unified auth across multiple platforms', type: 'child' },
      { text: 'Kafka Event Streaming', type: 'root' },
      { text: 'Proven in: ClapOS (vendor.created, audition.submitted, schedule.updated)', type: 'child' },
      { text: 'Benefit: Real-time sync, no polling, zero downtime', type: 'child' },
      { text: 'Key: Services react instantly to domain events', type: 'child' },
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