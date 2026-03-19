'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';
import CaseStudyHero from '@/components/Work/CaseStudyHero/CaseStudyHero';
import CaseStudyProblem from '@/components/Work/CaseStudyProblems/CaseStudyProblems';
import CaseStudySolution from '@/components/Work/CaseStudySolution/CaseStudySolution';
import CaseStudyResults from '@/components/Work/CaseStudyResults/CaseStudyResults';
import CaseStudyChallenges from '@/components/Work/CaseStudyChallenges/CaseStudyChallenges';
import CaseStudyDeepDive from '@/components/Work/CaseStudyDeepDive/CaseStudyDeepDive';
import CaseStudyOutcome from '@/components/Work/CaseStudyOutCome/CaseStudyOutCome';
import { Project } from '@/lib/projects'; 

export default function CaseStudyPage({ project }: { project: Project }) {
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-black">Project not found</h1>
        <Link href="/work" className="text-emerald-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-xs font-black text-neutral-500 hover:text-white transition-all uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      <CaseStudyHero project={project} />
      <CaseStudyProblem project={project} />
      <CaseStudySolution project={project} />
      <CaseStudyResults project={project} />
      <CaseStudyChallenges project={project} />
      {project.caseStudy.deepDives && <CaseStudyDeepDive project={project} />}
      <CaseStudyOutcome project={project} />

      <section className="max-w-7xl mx-auto px-6 py-48 border-t border-white/5">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            INTERESTED IN <span className="text-emerald-500 italic font-serif">HOW I WORK?</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Let&apos;s discuss your technical challenges and how we can approach them together to build high-performing systems.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="mailto:vk5241415@gmail.com"
              className="px-10 py-5 bg-emerald-500 text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all"
            >
              Contact Me
            </Link>
            <Link 
              href="/work"
              className="px-10 py-5 bg-white/5 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
            >
              See Other Projects
            </Link>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] gap-2 md:gap-0">
        <span>© 2026 Vinod Kumar // Crafting digital experiences</span>
        <span>Shaping ideas into interactive journeys</span>
      </footer>
    </main>
  );
}