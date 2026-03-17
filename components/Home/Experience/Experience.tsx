'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Building2 } from 'lucide-react';


export const experiences = [
  {
    year: '2025-Present',
    company: 'FREELANCE',
    role: 'FULL STACK ENGINEER',
    icon: Briefcase,
    desc: 'Built 4+ projects end-to-end with multiple internal dashboards and user-facing apps, delivering scalable, maintainable solutions.',
    achievements: [
      '4+ freelance projects with 3+ internal dashboards each (excluding user-facing apps)',
      'Designed modular, reusable UI components for dashboards',
      'Implemented robust APIs and data pipelines',
      'Mentored junior engineers and ensured production-ready delivery'
    ],
    skills: 'Next.js, TypeScript, TailwindCSS, Bootstrap, Node.js, NextAuth, Dashboard design, Architecture, Mentorship'
  },
  {
    year: '2024-2025',
    company: 'TENSYS',
    role: 'FULL-STACK DEVELOPER',
    icon: Building2,
    desc: 'Developed MedTech projects including hospital workflows, doctor workflows, and appointment systems. Delivered both frontend and backend solutions, including DevOps deployments.',
    achievements: [
      'Automated internal workflows for hospitals and clinics',
      'Built scalable frontend & backend for MedTech applications',
      'Deployed multiple projects on AWS and Vercel environments',
      'Ensured security, performance, and maintainability across projects'
    ],
    skills: 'Next.js, TypeScript, TailwindCSS, Node.js, MongoDB, AWS, Vercel, Full-stack, DevOps'
  },
  {
    year: '2023-2024',
    company: 'PRIMATES',
    role: 'MERN STACK DEVELOPER',
    icon: Building2,
    desc: 'Built 5+ hospital websites end-to-end, optimizing for speed, SEO, and scalability while collaborating with digital marketing teams.',
    achievements: [
      'Optimized site loading times using Lighthouse & GTmetrix audits',
      'Implemented SEO-efficient practices for better indexing',
      'Ensured scalable architecture and maintainable codebase',
      'Collaborated closely with digital marketing teams for user engagement'
    ],
    skills: 'React, Next.js, TypeScript, TailwindCSS, Node.js, MongoDB, SEO, Performance Optimization, Collaboration'
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-24">
        Career Path
      </h2>

      <div className="relative space-y-24">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-cyan-400">
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-48 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <exp.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-black text-neutral-500">{exp.year}</span>
                </div>
                <h3 className="text-xl font-black">{exp.company}</h3>
              </div>

              {/* Expandable Card */}
              <div className="flex-1">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 rounded-2xl border border-white/5 bg-neutral-950 hover:bg-neutral-900 transition-colors relative"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <h4 className="text-lg font-bold uppercase tracking-tight">{exp.role}</h4>
                    </div>
                    <p className="text-neutral-400 text-start ">{exp.desc}</p>
                  </div>
                  <span className="text-cyan-400 text-xl">{expandedIndex === i ? '−' : '+'}</span>
                </button>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-6 mt-2 rounded-2xl border border-white/5 bg-neutral-900 space-y-4"
                    >
                      <div className="space-y-2">
                        <h5 className="text-xs font-black text-neutral-500 uppercase tracking-widest">Key Achievements:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((a, j) => (
                            <li key={j} className="text-sm text-white flex items-center gap-2">
                              <span className="text-cyan-400">•</span> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <span className="text-xs font-bold text-neutral-500">Skills Applied: {exp.skills}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}