/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTA() {
  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 py-48 overflow-hidden">
      {/* Background Visual */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
        >
          <Image 
            src="/cta_home.jpg"
            alt="Vinod Kumar"
            fill
            title='Vinod Kumar'
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-1">Available For</p>
            <p className="text-xl font-black">Your Challenge</p>
          </div>
        </motion.div>

        <div className="space-y-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Let's Build Something That Scales
          </motion.h2>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-neutral-500 uppercase tracking-widest">What I'm Looking For:</h3>
              <ul className="space-y-3 text-lg font-bold">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Growth-stage startup building hard problems
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Full-time role with architecture ownership
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Systems that handle real scale
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Parallel: Freelance projects (2-3 month cycles)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-neutral-500 uppercase tracking-widest">What I Bring:</h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">→</span>
                  Systems that handle 100+ concurrent users without breaking
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">→</span>
                  Microservices + event-driven architecture expertise
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">→</span>
                  End-to-end ownership: design → deploy → optimize
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">→</span>
                  Track record: 5+ MVPs shipped, 100% client satisfaction
                </li>
              </ul>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/5">
              <div className="space-y-2">
                <a href="mailto:vk5241415@gmail.com" className="block text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors">
                  vk5241415@gmail.com
                </a>
                <a href="https://linkedin.com/in/vinod-manimaran" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-white transition-colors">
                  linkedin.com/in/vinod-manimaran
                </a>
              </div>
              
              <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
                ⏱️ Usually respond within 24 hours • Best reach: 10 AM - 6 PM IST
              </p>
              
              <a href="/resume" target="_blank"  className="inline-block">
                <button className="text-sm cursor-pointer font-black text-white border-b-2 border-emerald-400 pb-1 hover:text-emerald-400 transition-colors">
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}