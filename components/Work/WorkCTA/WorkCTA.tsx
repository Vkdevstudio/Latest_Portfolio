'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, User } from 'lucide-react';

export default function WorkCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48">
      <div className="relative p-16 md:p-24 rounded-[48px] overflow-hidden text-center bg-white/[0.02] border border-white/5">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              WHAT&apos;S <span className="text-emerald-500 italic font-serif">NEXT?</span>
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
              If you&apos;ve seen something you like, let&apos;s talk about how I can help your team build high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Technical architecture decisions',
              'How I approach complex problems',
              'Scaling challenges & solutions',
              'Team dynamics & mentorship'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-bold text-neutral-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              href="mailto:vk5241415@gmail.com"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-black rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all group"
            >
              <MessageSquare className="w-4 h-4" />
              Start Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10"
            >
              <User className="w-4 h-4" />
              View My Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
