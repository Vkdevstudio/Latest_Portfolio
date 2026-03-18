/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Calendar, FileText, CheckCircle2 } from 'lucide-react';

const CollaborationItem = ({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
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

export default function HowIWorkCollaboration() {
  const collaborationPoints = [
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "No middlemen. You work directly with me, ensuring clear communication and faster decision-making."
    },
    {
      icon: Calendar,
      title: "Weekly Syncs",
      description: "Regular check-ins to review progress, discuss challenges, and align on the next steps."
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Detailed weekly reports on progress, budget, and milestones achieved."
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Every deliverable is thoroughly tested and reviewed to ensure it meets the highest standards."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">How We Collaborate</h2>
          <p className="text-neutral-400 font-sans max-w-2xl">
            I believe in a partnership approach, where we work together to achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborationPoints.map((p, i) => (
            <CollaborationItem key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
