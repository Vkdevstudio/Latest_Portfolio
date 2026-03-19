'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProcessStep = ({ title, desc, index }: { title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-12 border-l border-white/10 pb-16 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed font-sans">{desc}</p>
  </motion.div>
);

export default function TechnicalApproach() {
  const steps = [
    {
      title: "DISCOVERY & CONSTRAINT MAPPING",
      desc: "I don't just ask what you want to build. I ask what happens when it breaks. We map out data volume, user concurrency, and edge cases before a single line of code is written."
    },
    {
      title: "ARCHITECTURE & FAILURE DESIGN",
      desc: "I design the system with failure in mind. We implement circuit breakers, retries with exponential backoff, and eventual consistency where it makes sense to ensure the system stays up."
    },
    {
      title: "ITERATIVE DEPLOYMENT & MONITORING",
      desc: "We ship fast but with absolute confidence. Every deployment is monitored for performance regressions and data integrity issues, ensuring we catch problems before your users do."
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">THE ARCHITECTURAL PIPELINE.</h2>
              <p className="text-neutral-400 font-serif italic text-lg">
                A structured approach to building high-impact products, 
                from initial concept to global scale.
              </p>
            </motion.div>

            <div className="space-y-0">
              {steps.map((s, i) => (
                <ProcessStep key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-video border border-white/5 rounded-sm overflow-hidden group"
          >
            <Image 
              src="https://picsum.photos/seed/pipeline-abstract/1200/800?blur=1" 
              alt="Process Pipeline Visual" 
              fill
              title='Process Pipeline Visual'
              className="object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-emerald-500/10" />
            
            {/* Technical Pipeline Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-[2px] bg-emerald-500/10 overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
                />
              </div>
              
              <div className="absolute flex gap-20">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border border-emerald-500/20 rounded-sm backdrop-blur-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold mb-2">Workflow Analysis</p>
              <p className="text-xl font-bold text-white leading-tight">ENGINEERING FOR THE LONG TERM.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
