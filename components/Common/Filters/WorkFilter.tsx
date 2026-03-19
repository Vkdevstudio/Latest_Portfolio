'use client';

import { useEffect, useState } from 'react';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesktopFilterSidebar } from './DesktopFilterSideBar';
import { MobileFilterSheet } from './MobileFilterSheet';
import { useProjectFilters, FilterCategory } from '@/hooks/useProjectFilters';
import { Project } from '@/lib/projects';

interface WorkFilterSystemProps {
  projects: Project[];
  children: (filteredProjects: Project[]) => React.ReactNode;
}

export function WorkFilterSystem({ projects, children }: WorkFilterSystemProps) {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const { 
    filters, 
    toggleFilter, 
    clearAll, 
    filteredProjects, 
    totalCount 
  } = useProjectFilters(projects);

  useEffect(() => {
    const projectsSection = document.getElementById('projects-grid');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [filters]);

  return (
    <div className="relative">
      {/* Mobile Filter Trigger */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileSheetOpen(true)}
          className="flex items-center gap-3 px-6 py-4 bg-emerald-500 text-black font-black uppercase tracking-widest text-xs rounded-full shadow-[0_8px_32px_rgba(16,185,129,0.3)] backdrop-blur-md"
        >
          <Filter className="w-4 h-4" />
          Filter Work
          <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-[10px]">
            {totalCount}
          </span>
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block shrink-0">
          <DesktopFilterSidebar 
            filters={filters} 
            onToggle={toggleFilter} 
            onClear={clearAll}
            totalCount={totalCount}
          />
        </div>

        {/* Project Grid / Content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={JSON.stringify(filters)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children(filteredProjects)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      <MobileFilterSheet 
        isOpen={isMobileSheetOpen} 
        onClose={() => setIsMobileSheetOpen(false)} 
        filters={filters} 
        onToggle={toggleFilter}
        onClear={clearAll}
        totalCount={totalCount}
      />
    </div>
  );
}
