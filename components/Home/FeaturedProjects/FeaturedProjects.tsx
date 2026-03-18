/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { moduleLabels, Project } from '@/lib/featureset';
import { 
  Zap, 
  Activity, 
  Layers, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Cpu, 
  ShieldCheck,
} from 'lucide-react';

const SystemLabel = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-2 mb-4">
    {Icon && <Icon className="w-3 h-3 text-emerald-500" />}
    <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold">
      {children}
    </h3>
  </div>
);

const StatusBadge = ({ label, value }: { label: string, value: string }) => (
  <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full">
    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
    <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">{label}:</span>
    <span className="text-[8px] font-mono text-white uppercase tracking-widest font-bold">{value}</span>
  </div>
);

export default function FeaturedProject({ data }: { data: Project }) {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-32 overflow-hidden relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/5">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.5em] font-bold">Featured Project </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            {data?.title}
          </h2>
        </div>
        <div className="flex gap-3">
          <StatusBadge label="Deployment" value="Production" />
          <StatusBadge label="Architecture" value="Microservices" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Visuals & Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Display Parallax */}
          <motion.div 
            style={{ y }}
            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group bg-neutral-900"
          >
            <Image 
              src={data?.media?.mainImage}
              alt={data?.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold mb-2">Primary Interface</p>
              <p className="text-xl font-bold text-white tracking-tight">{data?.subtitle}</p>
            </div>
          </motion.div>

          {/* Module Preview with AnimatePresence */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-neutral-900/50 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIdx}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={data?.media?.secondaryImage?.[selectedImageIdx]}
                    alt={moduleLabels[selectedImageIdx]}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 text-[9px] font-mono uppercase tracking-widest rounded">
                {moduleLabels[selectedImageIdx]}
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="md:col-span-4 space-y-3">
              <SystemLabel icon={Layers}>Sub-Modules</SystemLabel>
              <div className="grid grid-cols-2 gap-2">
                {data?.media?.secondaryImage?.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-300 ${
                      selectedImageIdx === idx 
                        ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                        : 'border-white/5 hover:border-white/20 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <Image src={image} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Technical Specs */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Challenge/Solution Cards */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl space-y-8">
            <div>
              <SystemLabel icon={Zap}>The Challenge</SystemLabel>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                {data?.challenge}
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <SystemLabel icon={Activity}>The Solution</SystemLabel>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                {data?.solution}
              </p>
            </div>
          </div>

          {/* Results Log */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl">
            <SystemLabel icon={ShieldCheck}>System Results</SystemLabel>
            <ul className="space-y-4">
              {data?.results.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <ChevronRight className="w-3 h-3 mt-1 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col gap-3">
            {data?.ctas.caseStudy && (
              <a 
                href={data.ctas.caseStudy} 
                target="_blank"
                className="flex items-center justify-between p-4 bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)]"
              >
                <span>Visit Case Study</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <div className="grid grid-cols-2 gap-3">
              {data?.ctas.github && (
                <a 
                  href={data.ctas.github} 
                  target="_blank"
                  className="flex items-center justify-center gap-3 p-4 bg-white/[0.03] border border-white/5 text-neutral-400 font-mono uppercase tracking-widest text-[9px] rounded-lg hover:border-emerald-500/50 hover:text-white transition-all"
                >
                  <Github className="w-3 h-3" />
                  Source
                </a>
              )}
              {data?.ctas.demo && (
                <a 
                  href={data.ctas.demo} 
                  target="_blank"
                  className="flex items-center justify-center gap-3 p-4 bg-white/[0.03] border border-white/5 text-neutral-400 font-mono uppercase tracking-widest text-[9px] rounded-lg hover:border-emerald-500/50 hover:text-white transition-all"
                >
                  <Activity className="w-3 h-3" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}