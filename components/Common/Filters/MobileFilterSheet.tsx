'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { FilterSection } from './FilterSection';
import { FilterState, FilterCategory } from '@/hooks/useProjectFilters';
import { useEffect } from 'react';

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onToggle: (category: FilterCategory, value: string) => void;
  onClear: () => void;
  totalCount: number;
}

export function MobileFilterSheet({ 
  isOpen, 
  onClose, 
  filters, 
  onToggle, 
  onClear,
  totalCount 
}: MobileFilterSheetProps) {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-white/10 rounded-t-[32px] z-[70] max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Grab Handle */}
            <div className="flex justify-center p-4">
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-1.5 bg-white/20 rounded-full" 
              />
            </div>

            {/* Header */}
            <div className="px-6 pb-4 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-lg font-black text-emerald-400 uppercase tracking-wider">
                Filter Projects
              </h2>
              <button 
                onClick={onClose}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <FilterSection 
                label="Company" 
                options={['Freelance', 'Tensys', 'Primates', 'Personal']} 
                selected={filters.company}
                onToggle={(v) => onToggle('company', v)}
              />
              <FilterSection 
                label="Project Type" 
                options={['SaaS', 'Healthcare', 'Full-Stack', 'Performance', 'Marketplace']} 
                selected={filters.type}
                onToggle={(v) => onToggle('type', v)}
              />
              <FilterSection 
                label="Status" 
                options={['live', 'beta']} 
                selected={filters.status}
                onToggle={(v) => onToggle('status', v)}
              />
              <FilterSection 
                label="Year" 
                options={['2025', '2024', '2023']} 
                selected={filters.year}
                onToggle={(v) => onToggle('year', v)}
              />
              <FilterSection 
                label="Tech Stack" 
                options={['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Kafka', 'TypeScript']} 
                selected={filters.tech}
                onToggle={(v) => onToggle('tech', v)}
              />
            </div>

            {/* Footer */}
            <div className="p-6 bg-neutral-950 border-t border-white/5 space-y-3">
              <button
                onClick={onClose}
                className="w-full h-12 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors"
              >
                Apply Filters ({totalCount})
              </button>
              <button
                onClick={onClear}
                className="w-full h-12 bg-transparent border-2 border-emerald-500/30 text-emerald-400 font-bold rounded-xl hover:bg-emerald-500/10 transition-colors"
              >
                Clear All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
