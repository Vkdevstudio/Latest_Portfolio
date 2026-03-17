'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div 
        whileHover={{ y: -8 }}
        className="group p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
      >
        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-8">
          <Image 
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">
                {project.name}
              </h3>
              <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest pt-2">
                {project.year}
              </span>
            </div>
            <div className="h-[2px] w-12 bg-emerald-500/50 group-hover:w-full transition-all duration-700" />
            <p className="text-sm text-neutral-400 font-medium italic">
              {project.shortDescription}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Role</span>
              <p className="text-xs font-bold text-neutral-300">{project.grid.role}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Impact</span>
              <p className="text-xs font-bold text-emerald-400/80">{project.grid.metrics}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.grid.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-neutral-500 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
            {project.grid.tags.length > 3 && (
              <span className="text-[10px] font-black text-neutral-600 self-center">
                +{project.grid.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
