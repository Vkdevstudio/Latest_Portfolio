'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Database, Network, Box, Users } from 'lucide-react';

const competencies = [
  {
    title: 'DATABASE ARCHITECTURE',
    desc: 'Optimized queries: 4h → 15min (95%)',
    proven: 'Hospital, Predict-X',
    icon: Database,
    border: 'border-dashed border-emerald-400',
    bg: 'bg-emerald-500/5',
    accent: 'text-emerald-400',
    glow: 'group-hover:shadow-[0_0_50px_-12px_rgba(52,211,153,0.5)]'
  },
  {
    title: 'REAL-TIME SYSTEMS',
    desc: 'Built WebSocket system. Zero data loss guarantee.',
    proven: 'Hospital, Predict-X',
    icon: Network,
    border: 'border-solid border-cyan-400',
    bg: 'bg-cyan-500/5',
    accent: 'text-cyan-400',
    glow: 'group-hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.5)]'
  },
  {
    title: 'FULL-STACK PRODUCT',
    desc: '5 complete products. Schema to UI. 3-month cycles.',
    proven: 'PlusUAE, Hospital, Predict-X',
    icon: Box,
    border: 'border-white/10',
    bg: 'bg-purple-500/5',
    accent: 'text-white',
    glow: 'group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]'
  },
  {
    title: 'TEAM LEADERSHIP',
    desc: 'Mentored 3 juniors. 2 now shipping independently.',
    proven: 'Code reviews, knowledge transfer',
    icon: Users,
    border: 'border-[4px] border-pink-500/30',
    bg: 'bg-pink-500/5',
    accent: 'text-pink-400',
    glow: 'group-hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]'
  }
];

function CompetencyCard({ c, i }: { c: typeof competencies[0], i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative p-10 rounded-2xl ${c.bg} ${c.border} border transition-all duration-500 ${c.glow} flex flex-col justify-between min-h-[320px]`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-black tracking-tighter ${c.accent}`}>{c.title}</h3>
          <c.icon className={`w-8 h-8 ${c.accent} group-hover:scale-110 transition-transform`} />
        </div>
        <div className="w-12 h-[2px] bg-white/10 my-6" />
        <p className="text-2xl font-light leading-tight">{c.desc}</p>
      </div>
      
      <div style={{ transform: "translateZ(30px)" }} className="mt-8">
        <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase block mb-2">Proven:</span>
        <p className="text-sm text-neutral-400">{c.proven}</p>
      </div>
    </motion.div>
  );
}

export default function Competencies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-16 text-center">What I Solve For</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
        {competencies.map((c, i) => (
          <CompetencyCard key={i} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
