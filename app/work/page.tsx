'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/lib/projects';
import Navigation from '@/components/Common/Nav/Nav';
import WorkHero from '@/components/Work/WorkHero/WorkHero';
import WorkFilters from '@/components/Work/WorkFilters/WorkFilters';
import ProjectCard from '@/components/Work/ProjectCard/ProjectCard';
import WorkCTA from '@/components/Work/WorkCTA/WorkCTA';


export default function WorkPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'complexity' | 'impact'>('recent');

  const allTech = useMemo(() => {
    const tech = new Set<string>();
    projects.forEach(p => p.grid.tags.forEach(t => tech.add(t)));
    return Array.from(tech).sort();
  }, []);

  const allTypes = useMemo(() => {
    const types = new Set<string>();
    projects.forEach(p => {
      if (p.grid.tags.includes('Full-stack')) types.add('Full-stack');
      if (p.description.toLowerCase().includes('dashboard')) types.add('Dashboard');
      if (p.description.toLowerCase().includes('api')) types.add('API');
      // Add more logic as needed or add a 'type' field to Project
    });
    return Array.from(types).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter(p => {
      const techMatch = selectedTech.length === 0 || selectedTech.some(t => p.grid.tags.includes(t));
      // For simplicity, we'll just use tech match for now as 'type' isn't explicitly in data yet
      return techMatch;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'recent') return parseInt(b.year) - parseInt(a.year);
      if (sortBy === 'complexity') return b.complexity - a.complexity;
      if (sortBy === 'impact') return b.impact - a.impact;
      return 0;
    });
  }, [selectedTech, sortBy]);

  const clearFilters = () => {
    setSelectedTech([]);
    setSelectedType([]);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <WorkHero />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <WorkFilters 
          allTech={allTech}
          allTypes={['Full-stack', 'Dashboard', 'API', 'Infrastructure']}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          sortBy={sortBy}
          setSortBy={setSortBy}
          clearFilters={clearFilters}
          count={filteredProjects.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <AnimatePresence mode="popLayout">
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
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <p className="text-neutral-500 text-xl">No projects match your filters.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-emerald-400 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      <WorkCTA />

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Vinod Kumar | Portfolio | Built with Next.js
        </p>
      </footer>
    </main>
  );
}
