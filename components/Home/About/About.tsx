'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { useState } from 'react';

const milestones = [
  {
    date: 'Nov 2023',
    title: 'Shipped my first production code',
    desc: 'Started building MERN stack apps at Primates. Realized quickly — features are easy, systems breaking at scale is the real problem.'
  },
  {
    date: 'Sept 2024',
    title: 'Got promoted. Went deep on databases.',
    desc: 'Client hired me directly at Tensys. Spent the year obsessed with one problem: why is everything slow? Cut load times 3s → 800ms. That changed how I think about code.'
  },
  {
    date: 'Nov 2025',
    title: 'Built my own thing. ClapOS.',
    desc: 'Full ownership of a film industry SaaS from zero. Microservices, Kafka, 10 modules live. Proved I could architect systems, not just write features.'
  },
  {
    date: 'Present',
    title: 'Looking for the next hard problem',
    desc: 'Open to full-time roles at startups building at scale. Parallel: learning distributed systems, ideating the next MVP. Always shipping, always growing.'
  },
];

export default function About() {
  const [particles] = useState(() => {
  const total = 20;

  return Array.from({ length: total }).map((_, i) => {
    const angle = (i / total) * Math.PI * 2; // circular distribution
    const radius = 35 + (i % 5) * 5; // slight variation (deterministic)

    return {
      id: i,
      left: 50 + Math.cos(angle) * radius,
      top: 50 + Math.sin(angle) * radius,
      duration: 3 + (i % 3), 
      delay: i * 0.1,
    };
  });
})
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-20">
      <div className="text-left">
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="space-y-6"
>
  <h2 className="text-sm font-black tracking-widest text-cyan-400 uppercase">
    Growth Mindset
  </h2>

  <div className="space-y-2">
    <p className="text-4xl font-bold">Shipped 5+ production-ready products.</p>
    <p className="text-4xl font-bold">Built MVPs from idea to deployment.</p>
    <p className="text-4xl font-bold text-neutral-500">
      Exploring event-driven systems and AI.
    </p>
  </div>
</motion.div>

        <div className="mt-24 relative pl-8 border-l border-neutral-800 space-y-16">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <span className="font-serif italic text-cyan-400/60 text-sm">{m.date}</span>
              <h3 className="text-xl font-bold mt-1">{m.title}</h3>
              <p className="text-neutral-400 mt-2 max-w-md">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-12 sticky top-32 h-fit">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group"
        >
          <Image 
            src="/profile.jpg"
            alt="Vinod Kumar"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">Based in</p>
            <p className="text-xl font-black">Chennai, India</p>
          </div>
        </motion.div>

      <div className="relative w-full aspect-square border border-cyan-400/10 rounded-full flex items-center justify-center">
  {particles.map((p) => (
    <motion.div
      key={p.id}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.5, 0.2],
        x: Math.sin(p.id) * 20,
        y: Math.cos(p.id) * 20,
      }}
      transition={{
        duration: p.duration,
        repeat: Infinity,
        delay: p.delay,
      }}
      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
      style={{
        left: `${p.left}%`,
        top: `${p.top}%`,
      }}
    />
  ))}

  <div className="text-center space-y-2">
    <p className="text-4xl font-black text-cyan-400">2026</p>
    <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
      Trajectory
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
