'use client';

import { useEffect } from 'react';
import { FilterSection } from './FilterSection';
import { FilterState, FilterCategory } from '@/hooks/useProjectFilters';

interface DesktopFilterSidebarProps {
  filters: FilterState;
  onToggle: (category: FilterCategory, value: string) => void;
  onClear: () => void;
  totalCount: number;
}

export function DesktopFilterSidebar({ 
  filters, 
  onToggle, 
  onClear,
  totalCount 
}: DesktopFilterSidebarProps) {

  // Scroll to grid section by ID
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
    <aside className="w-[280px] h-fit bg-white/[0.02] border border-white/10 rounded-[20px] p-6 space-y-8 backdrop-blur-md sticky top-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
          Refine Work
        </h2>
        <button 
          onClick={onClear}
          className="text-[10px] font-mono text-neutral-500 hover:text-emerald-400 transition-colors uppercase tracking-widest"
        >
          Clear
        </button>
      </div>

      <div className="space-y-8">
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
          options={['live', 'beta',"archived"]} 
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
          options={[
    'Next.js',
    'React.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'Tailwind CSS',
    'Redux Toolkit',
    'RTK Query',
    'Apache Kafka',
  ]}
          selected={filters.tech}
          onToggle={(v) => onToggle('tech', v)}
        />
      </div>

      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-neutral-400">
          Showing <span className="text-emerald-400 font-bold">{totalCount}</span> projects
        </p>
      </div>
    </aside>
  );
}
