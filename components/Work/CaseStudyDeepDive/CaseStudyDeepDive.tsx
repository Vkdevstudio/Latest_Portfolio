'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import { Code, Terminal } from 'lucide-react';

interface CaseStudyDeepDiveProps {
  project: Project;
}

export default function CaseStudyDeepDive({ project }: CaseStudyDeepDiveProps) {
  const { deepDives } = project.caseStudy;

  if (!deepDives) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="space-y-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">Deep Dives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            TECHNICAL <br />
            <span className="text-neutral-500 italic font-serif">DETAILS.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {deepDives.map((d, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tight text-white">{d.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{d.description}</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 italic text-cyan-400 text-sm leading-relaxed">
                  <span className="text-cyan-500 font-black not-italic uppercase tracking-widest mr-2 block mb-2">Why this matters</span>
                  &quot;{d.why}&quot;
                </div>
              </div>

              <div className="space-y-8">
                {d.codeBefore && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Terminal className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Initial Approach</span>
                    </div>
                    <div className="p-8 rounded-[32px] bg-black/50 border border-white/5 font-mono text-sm text-neutral-500 overflow-x-auto">
                      <pre><code>{d.codeBefore}</code></pre>
                    </div>
                  </div>
                )}
                
                {d.codeAfter && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-500">
                      <Code className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Optimized Solution</span>
                    </div>
                    <div className="p-8 rounded-[32px] bg-emerald-500/[0.02] border border-emerald-500/20 font-mono text-sm text-emerald-400 overflow-x-auto shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                      <pre><code>{d.codeAfter}</code></pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
