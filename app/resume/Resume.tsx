/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume';
import Navigation from '@/components/Common/Nav/Nav';
import { 
  Download, 
  Mail, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Terminal,
  Zap,
  Layers,
  Activity,
  ChevronRight
} from 'lucide-react';

const StatusBadge = ({ label, value, color = "emerald" }: { label: string, value: string, color?: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]`} />
    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">{label}:</span>
    <span className="text-[9px] font-mono text-white uppercase tracking-widest font-bold">{value}</span>
  </div>
);

const BentoCard = ({ children, className = "", title, icon: Icon }: { children: React.ReactNode, className?: string, title?: string, icon?: any }) => (
  <div className={`relative p-6 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 ${className}`}>
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      {Icon && <Icon className="w-12 h-12 text-white" />}
    </div>
    {title && (
      <div className="flex items-center gap-2 mb-6">
        {Icon && <Icon className="w-3 h-3 text-emerald-500" />}
        <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] font-bold">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

const ExperienceLog = ({ exp, index }: { exp: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Timeline Connector */}
    <div className="absolute left-0 top-2 bottom-0 w-px bg-white/5 group-last:bg-gradient-to-b group-last:from-white/5 group-last:to-transparent" />
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neutral-800 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300" />

    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
      <div>
        <h4 className="text-xl font-black text-white tracking-tight uppercase group-hover:text-emerald-400 transition-colors">
          {exp.company}
        </h4>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
          {exp.role} <span className="mx-2 text-neutral-800">/</span> {exp.duration.start} — {exp.duration.end}
        </p>
      </div>
      {exp.impact && (
        <span className="text-[9px] font-mono text-emerald-500/60 uppercase tracking-tighter border border-emerald-500/20 px-2 py-0.5 rounded-sm">
          {exp.impact.split(',')[0]}
        </span>
      )}
    </div>

    <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-2xl">
      {exp.summary}
    </p>

    <ul className="space-y-3 mb-6" aria-label={`Achievements at ${exp.company}`}>
      {exp.achievements.map((achievement: string, i: number) => (
        <li key={i} className="flex items-start gap-3 group/item">
          <ChevronRight className="w-3 h-3 mt-1 text-emerald-500/30 group-hover/item:text-emerald-500 transition-colors" />
          <span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors leading-relaxed">
            {achievement}
          </span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {exp.technologies.map((tech: string) => (
        <span key={tech} className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-sm group-hover:border-emerald-500/20 group-hover:text-neutral-400 transition-all">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 font-sans">
      <Navigation />

      {/* Blueprint Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        
        {/* System Header */}
        <header role="banner" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/5">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.5em] font-bold">Who I Am</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
  <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
    VINOD <span className="text-emerald-500">KUMAR</span>
  </h1>
</motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-neutral-500 font-mono text-sm uppercase tracking-[0.3em]"
              >
                Full Stack Developer
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <StatusBadge label="Status" value="Active" />
              <StatusBadge label="Location" value="Chennai, IN" />
              <StatusBadge label="Exp" value="2+ Years" />
            </motion.div>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: System Overview & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Summary Card */}
            <div className=" lg:sticky lg:top-24 space-y-8 self-start">
   <BentoCard title="Core Objective" icon={Zap}>
              <p className="text-xl md:text-2xl font-medium text-neutral-200 leading-tight tracking-tight">
                {resumeData.summary}
              </p>
            </BentoCard>

            {/* Stats Card */}
            <BentoCard title="Performance Metrics" icon={Activity}>
              <div className="space-y-6 mt-2">
                {[
                  { label: 'MVPs Shipped', value: '5+', sub: 'Production Ready' },
                  { label: 'Latency Reduction', value: '73%', sub: 'Avg Improvement' },
                  { label: 'Daily Active Users', value: '100+', sub: 'Live Systems' }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-[9px] font-mono text-neutral-700 uppercase mt-0.5">{stat.sub}</p>
                    </div>
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Contact Card */}
            <BentoCard title="Communication Channels" icon={Mail}>
              <div className="grid grid-cols-1 gap-3">
                <a href={`mailto:${resumeData.email}`} className="flex items-center justify-between p-3 bg-white/[0.03] rounded-lg border border-white/5 hover:border-emerald-500/50 transition-all group/link">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Email</span>
                  <span className="text-[10px] font-mono text-neutral-600 group-hover/link:text-emerald-500 transition-colors">{resumeData.email}</span>
                </a>
                <div className="grid grid-cols-1 gap-3">
                  <a   aria-label="Vinod Kumar LinkedIn Profile"
 href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" className="flex items-center justify-between p-3 bg-white/[0.03] rounded-lg border border-white/5 hover:border-emerald-500/50 transition-all group/link">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600 group-hover/link:text-emerald-500 transition-colors" />
                  </a>
                  {/* <a href={`https://github.com/${resumeData.github}`} target="_blank" className="flex items-center justify-between p-3 bg-white/[0.03] rounded-lg border border-white/5 hover:border-emerald-500/50 transition-all group/link">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">GitHub</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600 group-hover/link:text-emerald-500 transition-colors" />
                  </a> */}
                </div>
              </div>
            </BentoCard>

            {/* Action Card */}
            <BentoCard className="bg-emerald-500/[0.02] border-emerald-500/10" title="System Export">
              <div className="text-center py-4">
                <p className="text-[10px] text-neutral-500 mb-6 font-mono uppercase tracking-widest">Download my latest resume (PDF)</p>
                <a 
                  aria-label="Download Vinod Kumar Full Stack Developer Resume PDF"
                  href={'./Vinod_Kumar_Full_Stack.pdf'} 
                  className="inline-flex items-center gap-4 px-8 py-4 bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </BentoCard>
            </div>
         
          </div>

          <div className="lg:col-span-7 space-y-16">
            
            <section aria-label="Career History">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Career History</h2>
              </div>
              
              <div className="space-y-4">
                {resumeData.experiences.map((exp, i) => (
                  <ExperienceLog key={exp.id} exp={exp} index={i} />
                ))}
              </div>
            </section>

            
            <section aria-label="Skills">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Layers className="w-4 h-4 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Module Stack</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.map((category) => (
                  <div key={category.category} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-bold mb-6 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {category.category}
                    </h3>
                    <div className="space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-neutral-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                            <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">{skill.yearsOfExperience}Y EXP</span>
                          </div>
                          <div className="flex gap-1"
                          role="meter"
  aria-label={`${skill.name} proficiency: ${skill.proficiency} out of 5`}
  aria-valuenow={skill.proficiency}
  aria-valuemin={0}
  aria-valuemax={5}
  >
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 flex-1 rounded-full transition-all duration-700 ${
                                  i < skill.proficiency 
                                    ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                                    : 'bg-white/5'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section aria-label="Education">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Academic</h2>
                </div>
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{edu.degree}</h3>
                    <p className="text-sm text-neutral-400 mt-1">{edu.institution}</p>
                    <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-4">{edu.year} • {edu.details}</p>
                  </div>
                ))}
              </section>

              {/* <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Award className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Verifications</h2>
                </div>
                <div className="space-y-4">
                  {resumeData.certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl group hover:border-emerald-500/30 transition-all">
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{cert.name}</h3>
                        <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mt-1">{cert.issuer} • {cert.date}</p>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-800 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </section> */}
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-700 font-mono text-[9px] uppercase tracking-[0.5em]">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>System Online • Global Node Available</span>
          </div>
          <div className="flex items-center gap-8">
            <span>Build: {new Date().getFullYear()}.03.18</span>
            <span>Last Sync: {new Date(resumeData.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </footer>

      </div>

      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
    </main>
  );
}
