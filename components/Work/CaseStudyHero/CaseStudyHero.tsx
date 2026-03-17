'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            {project.name.toUpperCase()}
          </motion.h1>
          <div className="h-[2px] w-full bg-emerald-500/30" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-neutral-300 font-medium max-w-4xl"
          >
            {project.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Role</span>
            <p className="text-xl font-black tracking-tight text-emerald-400">{project.caseStudy.team.includes('Solo') ? 'Architect & Lead' : project.grid.role}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Timeline</span>
            <p className="text-xl font-black tracking-tight">{project.caseStudy.timeline}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Status</span>
            <p className="text-xl font-black tracking-tight uppercase">{project.status}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Year</span>
            <p className="text-xl font-black tracking-tight">{project.year}</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="aspect-[21/9] relative rounded-[48px] overflow-hidden border border-white/10"
        >
          <Image 
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
