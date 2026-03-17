'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-emerald-500/20 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center text-black font-black text-[10px]">V</div>
            <span className="text-white font-bold tracking-tighter">Vinod</span>
          </div>
          <span className="text-[10px] text-neutral-500 font-bold tracking-widest mt-1 uppercase">Engineer</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {['Work', 'About', 'Contact'].map((item) => (
              <Link
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="text-sm text-neutral-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all">
            View Experience
          </button>
        </div>
      </div>
      {!isScrolled && <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/50 via-transparent to-transparent mt-4" />}
    </nav>
  );
}
