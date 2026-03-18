'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Terminal, AlertTriangle, ShieldAlert } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-emerald-500/30 overflow-hidden font-sans">
      <Navigation />

      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Big 404 */}
          <div className="relative flex-shrink-0 flex justify-center md:justify-start">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12rem] md:text-[16rem] font-serif italic font-light leading-none tracking-tighter text-white"
            >
              404
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute -top-10 -left-10 text-[20rem] font-serif italic text-white pointer-events-none select-none"
            >
              404
            </motion.div>
          </div>

          {/* Right Column: Message & Actions */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
                Ooops! <br />
                <span className="text-emerald-400">Page Not Found</span>
              </h2>
              <div className="space-y-4 font-mono text-xs uppercase tracking-widest text-neutral-400 leading-relaxed">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Terminal className="w-3 h-3 text-emerald-500" />
                  &gt; We looked everywhere… nothing here.
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <ShieldAlert className="w-3 h-3 text-red-500" />
                  &gt; Seems this resource has moved or never existed.
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <AlertTriangle className="w-3 h-3 text-yellow-500" />
                  &gt; Tip: Try navigating back or exploring my projects.
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-8 items-center md:items-start"
            >
              <Link
                href="/"
                className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all duration-300 w-full md:w-auto"
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-mono uppercase tracking-widest">Return to Home</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 group-hover:text-emerald-500">01</span>
              </Link>

              <Link
                href="/work"
                className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all duration-300 w-full md:w-auto"
              >
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest">Explore Projects</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 group-hover:text-emerald-500">02</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-4 border-t border-white/5 pt-8"
      >
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Location_Log</p>
          <p className="text-xs font-mono text-white uppercase tracking-widest">Undefined_Sector_0x00</p>
        </div>
        <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.5em]">
          Vinod Kumar // Full Stack Developer
        </p>
      </motion.div>

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-black" />
    </main>
  );
}