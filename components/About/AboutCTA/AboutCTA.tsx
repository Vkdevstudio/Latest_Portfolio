'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48">
      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[32px] p-12 md:p-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              THIS IS MY STORY. <br />
              <span className="text-emerald-400">LET&apos;S WRITE THE NEXT CHAPTER.</span>
            </h2>

            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              If you&apos;ve read this and thought, &quot;I want to work with someone who thinks like this,&quot; let&apos;s start a conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-12 border-t border-white/10">
              <div className="space-y-6">
                <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">Let&apos;s talk about:</h3>
                <ul className="space-y-3 text-lg font-bold">
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Your biggest technical challenges</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> The team you&apos;re building</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> The problems you&apos;re trying to solve</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest">I&apos;m looking for:</h3>
                <ul className="space-y-3 text-lg font-bold">
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Tech lead roles at ambitious startups</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Hard technical problems</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Mentorship & growth environments</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 pt-12">
              <a 
                href="mailto:hello@vinodkumar.dev"
                className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all duration-300 flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Start Conversation
                <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>

              <div className="flex items-center gap-8">
                <a href="https://linkedin.com/in/vinodkumar" className="text-neutral-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="https://github.com/vinodkumar" className="text-neutral-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                <a href="mailto:hello@vinodkumar.dev" className="text-neutral-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
              </div>

              <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em]">
                P.S. I respond within 2 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
