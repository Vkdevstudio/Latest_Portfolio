'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import { useState } from 'react';

const milestones = [
  {
    date: 'Nov 2023',
    title: 'Started First Tech Role @ Primayes',
    desc: 'Worked on MERN stack applications, contributing to real-world products while strengthening fundamentals in scalability and performance.'
  },
  {
    date: 'Sept 2024',
    title: 'Internally Hired by Client @ Tensys',
    desc: 'Transitioned to a client-side role, working closely with the product team. Improved database query performance by 95% and gained deep experience in database architecture and optimization.'
  },
  {
    date: 'Late 2025',
    title: 'Independent Development',
    desc: 'Worked independently on building MVPs, websites, and landing pages. Collaborated directly with clients, handling projects end-to-end from ideation to deployment.'
  },
  {
    date: 'Present',
    title: 'Actively Exploring Tech Opportunities',
    desc: 'Seeking roles to further enhance technical depth, expand impact, and grow into more challenging engineering environments.'
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
          <h2 className="text-sm font-black tracking-widest text-cyan-400 uppercase">Growth Mindset</h2>
          <div className="space-y-2">
            <p className="text-4xl font-bold">Shipped 5+ products.</p>
<p className="text-4xl font-bold">Built MVPs from idea to deployment.</p>
            <p className="text-4xl font-bold text-neutral-500">Learning: Event-driven systems & AI.</p>
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
            src="https://picsum.photos/seed/vinod/800/1000"
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
    <p className="text-4xl font-black text-cyan-400">2025</p>
    <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
      Trajectory
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
