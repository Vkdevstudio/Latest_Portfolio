'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Database, Network, Box, Users } from 'lucide-react';

const competencies = [
  {
    title: 'SYSTEMS THAT HANDLE REAL TRAFFIC',
    desc: 'Users bounce on slow pages. I cut load times 3s → 800ms. They stayed. That\'s the difference.',
    proven: '5+ hospital clients, 100+ appointments/day without breaking',
    icon: Database,
    borderStyle: 'border-l-4 border-b border-neutral-400/50',
    accentColor: 'text-neutral-200',
    hoverBg: 'hover:bg-neutral-900/50'
  },
  {
    title: 'ARCHITECTURE THAT SCALES WITHOUT CHAOS',
    desc: 'Event-driven systems aren\'t just buzzwords. Kafka handles thousands of events without coupling. When one service breaks, others keep working.',
    proven: 'ClapOS — 10+ modules talking through events, zero data loss',
    icon: Network,
    borderStyle: 'border-t-4 border-r border-neutral-400/45',
    accentColor: 'text-neutral-200',
    hoverBg: 'hover:bg-neutral-900/50'
  },
  {
    title: 'PRODUCTS THAT WORK GLOBALLY',
    desc: 'RTL languages, currency conversion, timezone logic — complex. But users in Dubai don\'t care about complexity. They care that it works.',
    proven: 'PlusUAE — 5 languages, RTL, CRM-integrated, in production daily',
    icon: Box,
    borderStyle: 'border-2 border-neutral-400/35 rounded-none',
    accentColor: 'text-neutral-200',
    hoverBg: 'hover:bg-neutral-900/50'
  },
  {
    title: 'SHIP FAST WITHOUT BREAKING THINGS',
    desc: 'I don\'t hand off half-finished features. Every product I shipped handles real users on day one. That\'s the discipline.',
    proven: '5+ products from zero to production. 2-3 month cycles. Still running.',
    icon: Users,
    borderStyle: 'border-r-4 border-t border-neutral-400/45',
    accentColor: 'text-neutral-200',
    hoverBg: 'hover:bg-neutral-900/50'
  }
];

function CompetencyCard({ c, i }: { c: typeof competencies[0], i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

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
      transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group"
    >
      <div
        className={`relative p-8 rounded-lg ${c.borderStyle} border transition-all duration-300 ${c.hoverBg}
          bg-neutral-950/50 backdrop-blur-sm flex flex-col justify-between min-h-[300px] overflow-hidden`}
      >
        {/* Animated top accent line on hover */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-neutral-200"
          initial={{ width: "0%" }}
          whileHover={{ width: "50%" }}
          transition={{ duration: 0.3 }}
        />

        <div style={{ transform: "translateZ(40px)" }}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className={`text-lg font-bold tracking-tight mb-2 ${c.accentColor}`}>
                {c.title}
              </h3>
              <motion.div
                className="w-8 h-px bg-neutral-400/60"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-neutral-400 group-hover:text-neutral-200 transition-colors"
            >
              <c.icon className="w-8 h-8" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.12 + 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-light leading-snug text-white mt-6"
          >
            {c.desc}
          </motion.p>
        </div>

        <motion.div
          style={{ transform: "translateZ(25px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.12 + 0.25 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-neutral-700/50"
        >
          <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase block mb-2">
            Proven At
          </span>
          <p className="text-sm text-neutral-400">{c.proven}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Competencies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-4">
          What I Solve For
        </h2>
        <motion.div
          className="w-12 h-px bg-neutral-400/40"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
        {competencies.map((c, i) => (
          <CompetencyCard key={i} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}