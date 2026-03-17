'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function FeaturedProject() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
        <div className="space-y-8">
          <motion.div 
            style={{ y }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 group"
          >
            <Image 
              src="https://picsum.photos/seed/analytics/1200/800"
              alt="Predict-X Dashboard"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-6 left-6 px-3 py-1 bg-emerald-400 text-black text-[10px] font-black uppercase tracking-widest rounded">Featured Project</div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-60"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-with-data-points-24659-preview.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-black/80 px-3 py-1 rounded">Live Demo Preview</span>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5">
              <Image 
                src="https://picsum.photos/seed/code/600/400"
                alt="Code Snippet"
                fill
                className="object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-black/80 px-3 py-1 rounded">Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tighter">PREDICT-X ANALYTICS</h2>
            <p className="text-2xl font-light text-neutral-400 leading-tight">Real-time analytics handling 100k+ daily events</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-3">Challenge:</h3>
              <p className="text-neutral-400 leading-relaxed">
                Client spending 4h daily analyzing events. Each hour of delayed insights = $200k lost revenue.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-3">Solution:</h3>
              <p className="text-neutral-400 leading-relaxed">
                Real-time pipeline with ML anomaly detection. Event-driven architecture using Kafka and Node.js.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase">Results:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-emerald-400">✓</span> 95% faster (4h→15min)
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-emerald-400">✓</span> $50k monthly opportunities
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-emerald-400">✓</span> 100k+ events/day, 99.9% up
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              View Case Study
            </button>
            <button className="px-6 py-3 bg-white/5 border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all">
              GitHub
            </button>
            <button className="px-6 py-3 bg-white/5 border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
