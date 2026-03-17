'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import { AlertCircle, Target, Lightbulb } from 'lucide-react';

interface CaseStudyProblemProps {
  project: Project;
}

export default function CaseStudyProblem({ project }: CaseStudyProblemProps) {
  const { problem } = project.caseStudy;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            IDENTIFYING THE <br />
            <span className="text-neutral-500 italic font-serif">BOTTLENECK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-xs font-black uppercase tracking-widest">Context & Pain</h3>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-300 font-medium leading-relaxed">
                  {problem.context}
                </p>
                <p className="text-sm text-neutral-500 italic">
                  &quot;{problem.pain}&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-[32px] bg-cyan-500/5 border border-cyan-500/20 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <Target className="w-5 h-5" />
                <h3 className="text-xs font-black uppercase tracking-widest">The Challenge</h3>
              </div>
              <p className="text-xl font-black tracking-tight text-white leading-tight">
                {problem.challenge}
              </p>
            </div>
          </div>

          <div className="md:col-span-2 p-10 rounded-[32px] bg-emerald-500/5 border border-emerald-500/20 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest">The Insight</h3>
              <p className="text-2xl font-black tracking-tight text-white italic font-serif">
                &quot;{problem.insight}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
