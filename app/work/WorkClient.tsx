'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import Navigation from '@/components/Common/Nav/Nav';
import ProjectCard from '@/components/Work/ProjectCard/ProjectCard';
import WorkHero from '@/components/Work/WorkHero/WorkHero';
import WorkCTA from '@/components/Work/WorkCTA/WorkCTA';
import { WorkFilterSystem } from '@/components/Common/Filters/WorkFilter';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <WorkHero />

      <section className="max-w-7xl mx-auto px-6 py-24" id="projects-grid">
        <Suspense fallback={<div className="text-center py-32 text-emerald-500 font-mono">INITIALIZING Projects...</div>}>
          <WorkFilterSystem projects={projects}>
            {(filteredProjects) => (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="text-center py-32">
                    <p className="text-neutral-500 text-xl font-mono uppercase tracking-widest">
                      No projects match your filters.
                    </p>
                  </div>
                )}
              </>
            )}
          </WorkFilterSystem>
        </Suspense>
      </section>

      <WorkCTA />

       <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] gap-2 md:gap-0">
          <span>© 2026 Vinod Kumar // Crafting digital experiences</span>
          <span>Shaping ideas into interactive journeys</span>
        </footer>
    </main>
  );
}
