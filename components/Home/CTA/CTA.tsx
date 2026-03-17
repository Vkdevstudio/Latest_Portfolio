'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTA() {
  return (
    <section id="contact" className="relative  max-w-7xl mx-auto px-6 py-48 overflow-hidden">
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
            src="https://picsum.photos/seed/contact/800/800"
            alt="Let's Build"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-1">Current Status</p>
            <p className="text-xl font-black">Open for Opportunities</p>
          </div>
        </motion.div>

        <div className="text-right space-y-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            READY TO BUILD TOGETHER?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-20">
            <div />
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm font-black text-neutral-500 uppercase tracking-widest">I&apos;m actively looking for:</h3>
                <ul className="space-y-2 text-xl font-bold">
                  <li>Full-time Role</li>
                  <li>Tech Lead track</li>
                  <li>Architecture ownership</li>
                  <li>Problem-solving team</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-black text-neutral-500 uppercase tracking-widest">Let&apos;s discuss:</h3>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center justify-end gap-2">Your technical challenges <span className="text-emerald-400">✓</span></li>
                  <li className="flex items-center justify-end gap-2">Scaling systems <span className="text-emerald-400">✓</span></li>
                  <li className="flex items-center justify-end gap-2">Team architecture <span className="text-emerald-400">✓</span></li>
                  <li className="flex items-center justify-end gap-2">Where you&apos;re heading <span className="text-emerald-400">✓</span></li>
                </ul>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="space-y-2">
                  <a href="mailto:hello@vinodkumar.dev" className="block text-2xl font-black text-emerald-400 hover:underline">hello@vinodkumar.dev</a>
                  <a href="https://linkedin.com/in/vinod" className="block text-neutral-400 hover:text-white transition-colors">linkedin.com/in/vinod</a>
                  <a href="https://github.com/vinodkumar" className="block text-neutral-400 hover:text-white transition-colors">github.com/vinodkumar</a>
                </div>
                
                <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Response: Usually within 2 hours</p>
                
                <button className="text-sm font-black text-white border-b-2 border-emerald-400 pb-1 hover:text-emerald-400 transition-colors">
                  Resume PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
