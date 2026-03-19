'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, FileText, ArrowRight, Grid3X3Icon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Work', href: '/work' },
    { name: 'How I Work', href: '/howiwork' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

 const menuVariants = {
    closed: (isScrolled: boolean) => ({
      clipPath: `circle(0% at calc(100% - 44px) ${isScrolled ? '36px' : '52px'})`,
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren" as const
      }
    }),
    open: {
      clipPath: "circle(150% at calc(100% - 44px) 52px)", // Force 52px because py-8 is applied when open
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.1,
        when: "beforeChildren" as const
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)",
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 z-[10000] w-full transition-all duration-300 ${
        isOpen 
          ? 'bg-transparent py-8' 
          : (isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-emerald-500/20 py-4' : 'bg-transparent py-8')
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[10000]">
          {/* Architectural Logo */}
          <Link href="/" className="relative group flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 border border-emerald-500/30 rounded-sm flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-500">
                <div className="w-6 h-6 bg-emerald-500 rounded-[1px] flex items-center justify-center text-black font-black text-[12px] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-500">
                  V
                </div>
              </div>
              {/* Technical Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-emerald-500/50" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-emerald-500/50" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tighter text-lg leading-none">Vinod Kumar</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-emerald-500 font-mono uppercase tracking-[0.3em]">Full Stack Developer</span>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-12">
            {/* Desktop Nav - Technical Styling */}
            <div className="hidden lg:flex items-center gap-10">
             {navItems.map((item, idx) => {
const isActive = pathname.startsWith(item.href);
  return (
    <Link 
      key={item.name} 
      href={item.href}
      className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-all relative group py-2
        ${isActive ? 'text-emerald-400' : 'text-neutral-500 hover:text-emerald-400'}
      `}
    >
      <span className={`mr-2 transition-colors ${
        isActive ? 'text-emerald-500' : 'text-emerald-500/30 group-hover:text-emerald-500'
      }`}>
        0{idx + 1}
      </span>

      {item.name}

      <span className={`absolute -bottom-1 left-0 h-[1px] bg-emerald-500/50 transition-all duration-500
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
      `} />
    </Link>
  );
})}
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              {/* Premium CTA */}
              <Link 
                href="/resume" 
                className="relative px-6 py-2.5 group overflow-hidden"
              >
                <div className="absolute inset-0 border border-white/10 rounded-sm group-hover:border-emerald-500/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-emerald-500/[0.05] transition-colors duration-500" />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors">
                    View Experience
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-[1px] bg-emerald-500 group-hover:w-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              </Link>
            </div>

            {/* Mobile Menu Toggle - Refined */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
              aria-label="Toggle Menu"
            >
              <div className="absolute inset-0 border border-white/10 rounded-sm group-hover:border-emerald-500/30 transition-colors" />
              {isOpen ? (
                <X className="w-5 h-5 text-emerald-500" />
              ) : (
                <Grid3X3Icon/>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            custom={isScrolled}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black z-[9999] flex flex-col overflow-y-auto"
          >
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="flex flex-col min-h-full p-8 pt-32">
              <div className="flex flex-col gap-6 relative z-10">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl font-serif italic text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-auto pt-12 relative z-10"
              >
                <Link 
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-5 sm:p-6 bg-emerald-500 text-black rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm group overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    <span>View Full Resume</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 font-mono text-[10px] uppercase tracking-[0.3em] pb-4">
                  <span>Vinod Kumar // 2026</span>
                  <span>Chennai, IN</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
