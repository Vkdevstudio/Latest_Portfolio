'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { moduleLabels, Project } from '@/lib/featureset';

export default function FeaturedProject({ data }: { data: Project }) {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* TOP LEFT: MAIN IMAGE */}
        <motion.div 
          style={{ y }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 group"
        >
          <Image 
            src={data?.media?.mainImage}
            alt={data?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-6 left-6 px-3 py-1 bg-emerald-400 text-black text-[10px] font-black uppercase tracking-widest rounded">
            Featured Project
          </div>
        </motion.div>

        {/* TOP RIGHT: TEXT + CTA */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tighter">{data?.title}</h2>
            <p className="text-xl font-light text-neutral-400 leading-tight">
              {data?.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-3">
                Challenge
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{data?.challenge}</p>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-3">
                Solution
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{data?.solution}</p>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-3">
                Results
              </h3>
              <ul className="space-y-2">
                {data?.results.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white font-bold text-sm">
                    <span className="text-emerald-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-4">
            {data?.ctas.caseStudy && (
              <a href={data.ctas.caseStudy} target="_blank">
                <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-emerald-400 transition-colors text-sm">
                  View Case Study
                </button>
              </a>
            )}

            {data?.ctas.github && (
              <a href={data.ctas.github} target="_blank">
                <button className="px-6 py-3 bg-white/5 border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all text-sm">
                  GitHub
                </button>
              </a>
            )}

            {data?.ctas.demo && (
              <a href={data.ctas.demo} target="_blank">
                <button className="px-6 py-3 bg-white/5 border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all text-sm">
                  Try Demo
                </button>
              </a>
            )}
          </div>
        </div>

        {/* BOTTOM LEFT: FULL PREVIEW */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group shadow-lg">
          <Image 
            src={data?.media?.secondaryImage?.[selectedImageIdx]}
            alt={moduleLabels[selectedImageIdx]}
            fill
            className="object-cover border   group-hover:scale-105 transition duration-300"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-400/90 text-black text-[10px] font-black uppercase tracking-widest rounded">
            {moduleLabels[selectedImageIdx]}
          </div>
        </div>

        {/* BOTTOM RIGHT: THUMBNAIL GRID */}
        <div className="space-y-4">
          <p className="text-xs font-black tracking-widest text-neutral-500 uppercase">
            Modules & Features
          </p>
          <div className="grid grid-cols-3 gap-3">
            {data?.media?.secondaryImage?.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIdx(idx)}
                className={`relative cursor-pointer aspect-square rounded-lg overflow-hidden border-2 transition group ${
                  selectedImageIdx === idx 
                    ? 'border-emerald-400 ring-2 ring-emerald-400/50' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <Image 
                  src={image}
                  alt={moduleLabels[idx]}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition flex items-center justify-center">
                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 text-center px-1 leading-tight">
                    {moduleLabels[idx]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

