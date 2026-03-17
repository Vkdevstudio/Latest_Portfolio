'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';

interface CaseStudyChallengesProps {
  project: Project;
}

export default function CaseStudyChallenges({ project }: CaseStudyChallengesProps) {
  const { challenges } = project.caseStudy;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="space-y-24">
        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-purple-500/30" />
            <span className="text-[10px] font-black tracking-[0.4em] text-purple-500 uppercase">The Challenges</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            OVERCOMING <br />
            <span className="text-neutral-500 italic font-serif">COMPLEXITY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((c, i) => (
            <div key={i} className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 relative group overflow-hidden">
              <div className="absolute top-8 right-8 text-6xl font-black text-white/[0.03] group-hover:text-purple-500/10 transition-colors">
                0{i + 1}
              </div>
              
              <div className="space-y-8 relative z-10">
                <h3 className="text-2xl font-black tracking-tight text-purple-400">{c.title}</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Problem</span>
                    <p className="text-sm text-neutral-400 italic leading-relaxed">{c.problem}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Solution</span>
                    <p className="text-sm text-neutral-300 font-medium leading-relaxed">{c.solution}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Learning</span>
                      <p className="text-xs text-neutral-500 italic leading-relaxed">{c.learning}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-purple-500/50" />
                      </div>
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest whitespace-nowrap">Solved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
