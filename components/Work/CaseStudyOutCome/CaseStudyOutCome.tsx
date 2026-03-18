'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyOutcomeProps {
  project: Project;
}

export default function CaseStudyOutcome({ project }: CaseStudyOutcomeProps) {
  const { outcome,currentStatus } = project.caseStudy;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-emerald-500/30" />
              <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">Outcome</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                FINAL <span className="text-neutral-500 italic font-serif">REFLECTIONS.</span>
              </h2>
              <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 space-y-6">
                <p className="text-2xl font-black tracking-tight text-white leading-tight italic font-serif">
                  &quot;{outcome.reflection}&quot;
                </p>
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-black uppercase tracking-widest">{outcome.status}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">If I were building this again</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcome.ifBuildingAgain.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="p-10 rounded-[48px] bg-emerald-500/5 border border-emerald-500/20 space-y-12">
            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest">Proof of Work</h3>
            
            <div className="space-y-6">
              {outcome.links.demo && (
                <Link 
                  href={outcome.links.demo}
                  target="_blank"
                  className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest">Live Demo</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              
              {outcome.links.github && (
                <Link 
                  href={outcome.links.github}
                  target="_blank"
                  className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest">Source Code</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>

            {currentStatus && (
  <div className="pt-8 border-t border-emerald-500/20 space-y-6">
    <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
      Current Status
    </h4>
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="text-neutral-500 font-bold">Launched</span>
        <span className="text-white font-black">{currentStatus?.launched}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-neutral-500 font-bold">Uptime</span>
        <span className="text-emerald-400 font-black">{currentStatus?.uptime}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-neutral-500 font-bold">Users</span>
        <span className="text-white font-black">{currentStatus?.activeUsers}</span>
      </div>
    </div>
  </div>
)}
          </div>
        </div>
      </div>
    </section>
  );
}
