'use client';

import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';



interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-4 py-3 text-[12px] font-bold rounded-xl border transition-all duration-300",
        active 
          ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" 
          : "bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:border-emerald-500/30 hover:text-emerald-500/80"
      )}
    >
      {label}
    </motion.button>
  );
}
