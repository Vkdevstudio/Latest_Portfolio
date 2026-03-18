/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Target } from 'lucide-react';

const PhilosophyItem = ({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="p-8 bg-white/[0.02] border border-white/10 rounded-sm hover:border-emerald-500/30 transition-all duration-500 group"
  >
    <div className="mb-6 p-3 bg-white/5 rounded-sm inline-block group-hover:bg-emerald-500/10 transition-colors">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-2xl font-serif italic mb-4 text-white group-hover:text-emerald-400 transition-colors">
      {title}
    </h3>
    <p className="text-neutral-400 font-sans leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

export default function HowIWorkPhilosophy() {
  const philosophies = [
    {
      icon: Target,
      title: "Outcome-First Thinking",
      description: "I start with the 'why'. Before a single line of code is written, I ensure we are solving the right problem for your business."
    },
    {
      icon: Zap,
      title: "Performance by Design",
      description: "Speed is a feature. I build systems that are fast, responsive, and efficient, ensuring a premium experience for every user."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Your product should grow with you. I design systems that handle 10x growth without needing a complete rewrite."
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      description: "Trust is built on reliability. I prioritize security and uptime, so you can focus on your business while I handle the tech."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Core Philosophy</h2>
          <p className="text-neutral-400 font-sans max-w-2xl">
            My approach is built on four pillars that ensure every project I take on is a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((p, i) => (
            <PhilosophyItem key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
