'use client';

import { motion } from 'framer-motion';

const ProofItem = ({ value, label, desc, index }: { value: string; label: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-12 border border-white/5 bg-white/[0.01] rounded-sm hover:border-emerald-500/20 transition-all group"
  >
    <p className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter group-hover:text-emerald-400 transition-colors">{value}</p>
    <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{label}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed font-sans">{desc}</p>
  </motion.div>
);

export default function ProofSection() {
  const proofs = [
    {
      value: "8+",
      label: "PROJECTS DELIVERED",
      desc: "Successfully built and launched a diverse range of web applications, from e-commerce platforms to complex SaaS dashboards."
    },
    {
      value: "85%",
      label: "CLIENT SATISFACTION",
      desc: "Consistently received positive feedback for delivering high-quality code, meeting deadlines, and exceeding expectations."
    },
    {
      value: "2x",
      label: "DEVELOPMENT SPEED",
      desc: "Leveraged modern frameworks and efficient workflows to deliver production-ready features twice as fast as traditional methods."
    }
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-emerald-500/30" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Proof // 2026</span>
            <div className="h-[1px] w-8 bg-emerald-500/30" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">GROUNDED OUTCOMES.</h2>
          <p className="text-xl text-neutral-400 font-serif italic max-w-2xl mx-auto">
            Real-world metrics that demonstrate the impact of my architectural choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofs.map((p, i) => (
            <ProofItem key={p.label} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
