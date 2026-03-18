/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';
import { resumeData } from '@/lib/resume';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-32 text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight">
              {resumeData.fullName}
            </h1>
            <p className="text-2xl text-emerald-400 font-semibold">
              {resumeData.title}
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {resumeData.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400 pt-4 border-t border-white/10">
          <span>2+ years shipping</span>
<span>10+ clients served</span>
<span>Production systems at scale</span>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-32 space-y-16">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Experience</h2>
            <p className="text-neutral-400">Where I've made an impact</p>
          </motion.div>

          <div className="space-y-16">
            {resumeData.experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="border-l-4 border-emerald-400 pl-8 py-4 hover:bg-white/[0.02] transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Company & Role */}
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xl font-semibold text-neutral-300">
                      {exp.role}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-3 text-sm text-neutral-500 font-mono">
                    <span>
                      {exp.duration.start} — {exp.duration.end}
                    </span>
                    {exp.location && <span>•</span>}
                    {exp.location && <span>{exp.location}</span>}
                  </div>

                  {/* Summary */}
                  <p className="text-neutral-400 leading-relaxed text-base">
                    {exp.summary}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Achievements</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-neutral-400 flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  {exp.impact && (
                    <p className="text-sm text-emerald-400 font-semibold pt-2">
                      📊 {exp.impact}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-32 space-y-12">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Skills & Expertise</h2>
            <p className="text-neutral-400">Core competencies across full stack development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resumeData.skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-8 space-y-6 hover:bg-white/[0.04] transition-all"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl font-black">{skillGroup.category}</h3>
                  <div className="h-1 w-12 bg-emerald-400" />
                </div>

                <div className="space-y-4">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-neutral-300 group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {skill.yearsOfExperience} yr{skill.yearsOfExperience > 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-3 rounded-sm transition-all ${
                              i < skill.proficiency
                                ? 'bg-emerald-400'
                                : 'bg-white/10'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-32 space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Education</h2>
          </motion.div>

          <div className="space-y-4">
            {resumeData.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="border-l-4 border-emerald-400 pl-8 py-4 space-y-2"
              >
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-neutral-400">{edu.field}</p>
                <p className="text-sm text-neutral-500">
                  {edu.institution}, {edu.year}
                </p>
                {edu.details && <p className="text-sm text-neutral-500">{edu.details}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-32 space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Certifications</h2>
          </motion.div>

          <div className="space-y-3">
            {resumeData.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors"
              >
                <span className="font-semibold text-white">{cert.name}</span>
                <span className="text-neutral-500"> — {cert.issuer}, {cert.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="border-t border-white/10 pt-12 space-y-8">
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Ready to work together?</h3>
            <p className="text-neutral-400">
              Let's discuss how I can help with your next project or opportunity.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:vk5241415@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg font-medium text-emerald-400 transition-all group"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/vinodkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all group"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
     <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] gap-2 md:gap-0">
  <span>© 2026 Vinod Kumar // Crafting digital experiences</span>
  <span>Shaping ideas into interactive journeys</span>

</footer>
    </main>
  );
}