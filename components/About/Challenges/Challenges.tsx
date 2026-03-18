'use client';

import { motion } from 'framer-motion';


const challenges = [
  {
    id: '01',
    title: 'THE 3-SECOND BOTTLENECK',
    problem: 'Hospital SaaS loaded in 3 seconds. Users bounced. I didn\'t know why.',
    realization: 'Profile before optimizing',
    changed: 'Spent a week with DevTools. Found: large bundle, unoptimized images, no code splitting.',
    result: '73% improvement (3s → 800ms). Lighthouse 50 → 90+.',
    progress: 95,
    accent: 'emerald'
  },
  {
    id: '02',
    title: 'DATA QUALITY CRISIS',
    problem: '15% of backend data was invalid. Receptionist typos, validation gaps.',
    realization: 'Validate early, fix late',
    changed: 'Implemented Zod + React Hook Form. Real-time validation. User feedback instant.',
    result: '85% reduction in invalid data. Clean database.',
    progress: 90,
    accent: 'cyan'
  },
  {
    id: '03',
    title: 'MULTI-TENANT DATA LEAKS',
    problem: 'Built multi-tenant wrong. Potential cross-tenant data visibility.',
    realization: 'Security is architecture, not afterthought',
    changed: 'Every query now scoped to tenant_id. Middleware verification. Audit logging.',
    result: 'Zero cross-tenant leaks. Secure by design.',
    progress: 100,
    accent: 'purple'
  },
  {
    id: '04',
    title: 'MICROSERVICES COUPLING',
    problem: 'ClapOS services calling each other directly. Tight coupling. Cascading failures.',
    realization: 'Events > REST calls',
    changed: 'Switched to Kafka event streaming. Services emit events, others listen. Decoupled.',
    result: 'One service down doesn\'t break others. Independent scaling.',
    progress: 60,
    accent: 'pink'
  }
];

const learningTracks = [
  { name: 'Kafka & Event Streaming', progress: 50, status: 'ClapOS in production' },
  { name: 'Distributed Systems Design', progress: 35, status: 'Learning Raft, consensus' },
  { name: 'AI/LLM Integration', progress: 30, status: 'Gemini API exploration' },
  { name: 'Kubernetes & Docker', progress: 25, status: 'Planning AWS EKS migration' }
];

export default function Challenges() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-48 relative overflow-hidden">
      <div className="flex flex-col items-start mb-32">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">05 // Growth</span>
          <div className="h-[1px] w-24 bg-emerald-500/30" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          HONEST <br />
          <span className="text-neutral-500">ASSESSMENTS.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`
              p-10 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-8 relative overflow-hidden
              ${i === 0 ? 'opacity-60' : i === 1 ? 'opacity-100' : 'opacity-80'}
            `}
          >
            <div className="flex justify-between items-start">
              <span className="text-4xl font-black text-neutral-700">{c.id}</span>
              <div className={`w-2 h-2 rounded-full ${
                c.accent === 'emerald' ? 'bg-emerald-500' : 
                c.accent === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'
              }`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black tracking-tight">{c.title}</h3>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Problem</h4>
                <p className="text-neutral-400 italic leading-relaxed">
                  {c.problem}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Realization</h4>
                <p className={`text-xl font-black ${
                  c.accent === 'emerald' ? 'text-emerald-400' : 
                  c.accent === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                }`}>
                  {c.realization}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Result</h4>
                <p className="text-white font-bold">
                  {c.result}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Progress</span>
                <span className="text-xs font-mono text-neutral-400">{c.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${
                    c.accent === 'emerald' ? 'from-emerald-500 to-emerald-400' : 
                    c.accent === 'cyan' ? 'from-cyan-500 to-cyan-400' : 'from-purple-500 to-purple-400'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Tracks Footer */}
      <div className="p-12 rounded-[32px] border border-white/5 bg-white/[0.01]">
        <h3 className="text-xs font-black text-neutral-500 uppercase tracking-[0.3em] mb-12 text-center">Current Learning Tracks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {learningTracks.map((track, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-white">{track.name}</span>
                <span className="text-xs font-mono text-neutral-500">{track.progress}%</span>
              </div>
              <div className="flex gap-1">
                {[...Array(10)].map((_, j) => (
                  <div 
                    key={j}
                    className={`h-1.5 flex-grow rounded-full transition-colors duration-500 ${
                      j < track.progress / 10 ? 'bg-emerald-500' : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
