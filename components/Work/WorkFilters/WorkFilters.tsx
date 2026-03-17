/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkFiltersProps {
  allTech: string[];
  allTypes: string[];
  selectedTech: string[];
  setSelectedTech: (tech: string[]) => void;
  selectedType: string[];
  setSelectedType: (type: string[]) => void;
  sortBy: 'recent' | 'complexity' | 'impact';
  setSortBy: (sort: 'recent' | 'complexity' | 'impact') => void;
  clearFilters: () => void;
  count: number;
}

export default function WorkFilters({
  allTech,
  allTypes,
  selectedTech,
  setSelectedTech,
  selectedType,
  setSelectedType,
  sortBy,
  setSortBy,
  clearFilters,
  count
}: WorkFiltersProps) {
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const isFiltered = selectedTech.length > 0 || selectedType.length > 0;

  return (
    <div className="space-y-8 p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tech Filter */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Filter by Tech</h3>
          <div className="flex flex-wrap gap-3">
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  selectedTech.includes(tech)
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                    : 'bg-white/5 border-transparent text-neutral-400 hover:bg-white/10'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Info */}
        <div className="flex flex-col justify-between items-end gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Sort By</span>
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-white/5 border border-white/10 rounded-xl px-6 py-3 pr-12 text-sm font-bold text-white cursor-pointer hover:bg-white/10 transition-all outline-none"
              >
                <option value="recent">Recent</option>
                <option value="complexity">Complexity</option>
                <option value="impact">Impact</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <AnimatePresence>
              {isFiltered && (
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-xs font-black text-neutral-500 hover:text-white transition-all uppercase tracking-widest"
                >
                  <X className="w-3 h-3" />
                  Clear All
                </motion.button>
              )}
            </AnimatePresence>
            <p className="text-sm font-bold text-neutral-400">
              Showing <span className="text-white">{count}</span> projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
