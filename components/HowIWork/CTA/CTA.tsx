'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

export default function HowIWorkCTA() {
  return (
    <section className="py-32 px-6 bg-black text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12 tracking-tighter">
            Ready to <span className="text-emerald-400">elevate</span> your product?
          </h2>
          
          <p className="text-xl text-neutral-400 font-sans leading-relaxed max-w-2xl mx-auto mb-16">
            I&apos;m currently accepting new projects for Q2 2026. If you&apos;re looking for a partner 
            to build something exceptional, let&apos;s talk.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-sm rounded-sm hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a 
              href="mailto:vk5241415@gmail.com" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-sm rounded-sm hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5 text-emerald-500" />
              Email Me
            </a>
          </div>

          <p className="mt-16 text-neutral-600 text-[10px] font-mono uppercase tracking-[0.5em]">
            Based in Chennai, India // Serving Clients Globally
          </p>
        </motion.div>
      </div>
    </section>
  );
}
