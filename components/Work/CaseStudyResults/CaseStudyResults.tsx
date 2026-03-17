'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

interface CaseStudyResultsProps {
  project: Project;
}

export default function CaseStudyResults({ project }: CaseStudyResultsProps) {
  const { results } = project.caseStudy;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="space-y-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-emerald-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">The Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            MEASURABLE <br />
            <span className="text-neutral-500 italic font-serif">IMPACT.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.metrics.map((m, i) => (
            <div key={i} className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 border-l-emerald-500/50 border-l-4 space-y-8">
              <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">{m.label}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Before</span>
                    <p className="text-xl font-bold text-neutral-500 line-through">{m.before}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">After</span>
                    <p className="text-3xl font-black text-white tracking-tight">{m.after}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm font-black text-emerald-400">{m.impact}</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {results.adoption && (
            <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 space-y-12">
              <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">Adoption & Reliability</h3>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Launch</span>
                  </div>
                  <p className="text-xl font-black tracking-tight">{results.adoption.launch}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Users</span>
                  </div>
                  <p className="text-xl font-black tracking-tight">{results.adoption.users}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Uptime</span>
                  </div>
                  <p className="text-xl font-black tracking-tight text-emerald-400">{results.adoption.uptime}</p>
                </div>
              </div>
            </div>
          )}

          <div className="p-10 rounded-[48px] bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest">The Learning</h3>
              <p className="text-xl font-black tracking-tight text-white italic font-serif leading-tight">
                &quot;{results.learning}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
