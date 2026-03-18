/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, CheckCircle } from 'lucide-react';

const ProcessStep = ({ icon: Icon, step, title, description, index }: { icon: any; step: string; title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative pl-8 py-12 border-l border-white/10"
  >
    {/* Emerald Left Border Accent */}
    <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-500" />
    
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-white/5 rounded-sm group-hover:bg-emerald-500/10 transition-colors">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
        Step {step}
      </span>
    </div>

    <h3 className="text-3xl font-serif italic mb-4 text-white group-hover:text-emerald-400 transition-colors">
      {title}
    </h3>
    <p className="text-neutral-400 font-sans leading-relaxed max-w-2xl">
      {description}
    </p>
  </motion.div>
);

export default function HowIWorkProcess() {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by diving deep into your business goals, user needs, and technical requirements. This phase ensures we have a clear roadmap for success."
    },
    {
      icon: PenTool,
      step: "02",
      title: "Architecture & Design",
      description: "I design the system architecture and user experience with a focus on scalability, performance, and intuitive interaction."
    },
    {
      icon: Code,
      step: "03",
      title: "Agile Development",
      description: "I build the solution in iterative cycles, providing regular updates and ensuring high code quality through automated testing."
    },
    {
      icon: Rocket,
      step: "04",
      title: "Deployment & Launch",
      description: "We launch the product with a focus on zero-downtime deployment and comprehensive monitoring to ensure a smooth rollout."
    },
    {
      icon: CheckCircle,
      step: "05",
      title: "Support & Growth",
      description: "Post-launch, I provide ongoing support and strategic advice to help your product evolve and grow with your business."
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">The Process</h2>
          <p className="text-neutral-400 font-sans max-w-2xl">
            A structured approach to building high-impact products, from initial concept to global scale.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <ProcessStep key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
