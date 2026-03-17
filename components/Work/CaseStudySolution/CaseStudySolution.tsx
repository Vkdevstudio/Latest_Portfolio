'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Server, CheckCircle2 } from 'lucide-react';
import VisualArchitecture from '../VisualArchitecture/VisualArchitecture';

interface CaseStudySolutionProps {
  project: Project;
}

export default function CaseStudySolution({ project }: CaseStudySolutionProps) {
  const { solution } = project.caseStudy;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="space-y-24">
        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-emerald-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            ENGINEERING FOR <br />
            <span className="text-neutral-500 italic font-serif">SCALE & SPEED.</span>
          </h2>
        </div>

        <div className="space-y-12">
          <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 space-y-12">
            <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">System Architecture</h3>
            
            {solution.visualNodes ? (
              <VisualArchitecture nodes={solution.visualNodes} />
            ) : (
              <div className="p-8 rounded-2xl bg-black/50 border border-white/5 font-mono text-xs md:text-sm text-emerald-400/80 leading-relaxed whitespace-pre overflow-x-auto">
                {solution.architecture}
              </div>
            )}
            
            <p className="text-xl font-medium text-neutral-300 max-w-3xl">
              {solution.approach}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.decisions.map((d, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-4">
                  <h4 className="text-lg font-black tracking-tight text-emerald-400">{d.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{d.description}</p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-neutral-500 italic">
                      <span className="text-emerald-500 font-black not-italic uppercase tracking-widest mr-2">Why:</span>
                      {d.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-10 rounded-[48px] bg-emerald-500/5 border border-emerald-500/20 space-y-12">
              <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest">Tech Stack</h3>
              
              <div className="space-y-8">
                {solution.techStack.backend && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Server className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.techStack.backend.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black text-neutral-300 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {solution.techStack.database && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Database className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Database</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.techStack.database.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black text-neutral-300 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {solution.techStack.frontend && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Layout className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.techStack.frontend.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black text-neutral-300 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {solution.techStack.ml && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Cpu className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">AI / ML</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.techStack.ml.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black text-neutral-300 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-emerald-500/20 space-y-4">
                <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Key Benefits</h4>
                <ul className="space-y-3">
                  {[
                    'Highly scalable architecture',
                    'Real-time data processing',
                    'Automated anomaly detection',
                    'Optimized query performance'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
