'use client';

import { FilterPill } from './FilterPill';

interface FilterSectionProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}

export function FilterSection({ label, options, selected, onToggle }: FilterSectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
          {label}
        </h3>
        <div className="h-[2px] w-full bg-emerald-500/30" />
      </div>
      <div className="flex flex-wrap gap-2">
        <FilterPill 
          label="All" 
          active={selected.length === 0} 
          onClick={() => onToggle('All')} 
        />
        {options.map(option => (
          <FilterPill 
            key={option} 
            label={option} 
            active={selected.includes(option)} 
            onClick={() => onToggle(option)} 
          />
        ))}
      </div>
    </div>
  );
}
