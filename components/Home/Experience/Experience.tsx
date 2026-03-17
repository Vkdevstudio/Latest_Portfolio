'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Building2, ChevronDown } from 'lucide-react';

export const experiences = [
  {
    year: '2025-Present',
    company: 'FREELANCE',
    role: 'FULL STACK ENGINEER',
    icon: Briefcase,
    desc: 'Built 4+ production projects end-to-end including ClapOS (film industry SaaS), PlusUAE (live UAE client platform), Hospital Management System, and a Business Directory — each with role-based dashboards and real client usage.',
    achievements: [
      'Built ClapOS — a film industry SaaS with 10+ operational modules (vendor management, auditions, call sheets, talent onboarding) on a microservices architecture with Apache Kafka',
      'Delivered PlusUAE for a UAE corporate client — multilingual platform supporting 5+ languages including Arabic and Chinese with RTL layout, live and in daily use',
      'Built Hospital Management System with role-based dashboards for doctors, admins, receptionists and lab staff — proximity-based appointment assignment reducing scheduling overhead',
      'Built Jignu Business Directory with multi-tenant architecture, Twilio SMS verification, and AWS S3 asset management'
    ],
    skills: 'Next.js, TypeScript, TailwindCSS, Node.js, MongoDB, Apache Kafka, AWS S3, NextAuth, Twilio, Microservices'
  },
  {
    year: '2024-2025',
    company: 'TENSYS',
    role: 'FULL STACK DEVELOPER',
    icon: Building2,
    desc: 'Promoted to client payroll from Primates after consistent delivery. Owned frontend architecture, role-based dashboards, and API integrations across 5+ hospital clients supporting 100+ daily appointments.',
    achievements: [
      'Owned appointment booking UI and role-based dashboards for admins, receptionists and lab staff across 5+ hospital clients handling 100+ daily appointments',
      'Identified and resolved a site-wide performance problem — cut load time from 3 seconds to under 800ms and pushed Lighthouse scores from 50 to 90+ across all deployments',
      'Replaced unvalidated intake forms with Zod and React Hook Form, reducing invalid data reaching the backend by 85%',
      'Deployed and maintained applications on AWS (EC2, S3) and Vercel across multiple client environments'
    ],
    skills: 'Next.js, TypeScript, TailwindCSS, Redux Toolkit, Node.js, MongoDB, AWS, Vercel, Zod, React Hook Form'
  },
  {
    year: '2023-2024',
    company: 'PRIMATES',
    role: 'MERN STACK DEVELOPER',
    icon: Building2,
    desc: 'Built and delivered 5+ hospital websites with patient, doctor and admin workflows using React.js and Node.js. Transitioned to Tensys on client payroll after consistent performance.',
    achievements: [
      'Built 5+ hospital websites with patient and doctor workflows — balancing reusable base templates with client-specific requirements across multiple healthcare clients',
      'Implemented JWT authentication and role-based access control securing data access for doctors, admins and patients across all platforms',
      'Replaced spreadsheet-based lead pipeline with a searchable filterable dashboard — delivered QR-based onboarding within the same sprint',
      'Managed backend APIs and MongoDB services on AWS EC2, documented endpoints for cross-team clarity and contributed to sprint planning in Agile environment'
    ],
    skills: 'React.js, Next.js, TypeScript, TailwindCSS, Node.js, MongoDB, AWS EC2, JWT, Agile, Performance Optimization'
  }
];

interface Experience {
  year: string;
  company: string;
  role: string;
  icon:React.ElementType;
  desc: string;
  achievements: string[];
  skills: string;
}

function ExperienceCard({ exp, i, isExpanded, onToggle }: { 
  exp: Experience, 
  i: number, 
  isExpanded: boolean,
  onToggle: () => void
}) {
  const colors = ['neutral', 'neutral', 'neutral'];
  const accentBorders = [
    'border-l-4 border-neutral-400/40',
    'border-r-4 border-neutral-400/35',
    'border-l-2 border-r-2 border-neutral-400/30'
  ];

  return (
    <div className="relative">
      {/* Timeline connecting line */}
      <motion.div
        className="absolute -left-6 top-14 w-5 h-px bg-neutral-700/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: i * 0.2 + 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      />

      <motion.button
        onClick={onToggle}
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.15, duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 text-left group"
      >
        {/* Left - Year & Company */}
        <motion.div className="lg:w-48 flex-shrink-0">
          <motion.div
            animate={{ y: isExpanded ? -3 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="sticky top-20"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 rounded border border-neutral-400/50"
              >
                <exp.icon className="w-4 h-4 text-neutral-300" />
              </motion.div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {exp.year}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
              {exp.company}
            </h3>
            <motion.div
              className="mt-3 h-px bg-neutral-600/50"
              animate={{ width: isExpanded ? "100%" : "32px" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>

        {/* Right - Role & Description */}
        <motion.div className="flex-1">
          <motion.div
            className={`w-full p-8 rounded-lg transition-all duration-300 border backdrop-blur-sm
              ${isExpanded 
                ? 'border-neutral-400/40 bg-neutral-900/60' 
                : `${accentBorders[i]} border-neutral-700/50 bg-neutral-950/40 group-hover:bg-neutral-950/60`
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <motion.div
                  animate={{ scale: isExpanded ? 1.05 : 1 }}
                  className="inline-block mb-3"
                >
                  <h4 className={`text-lg font-bold uppercase tracking-tight transition-colors
                    ${isExpanded ? 'text-neutral-200' : 'text-white group-hover:text-neutral-100'}`}>
                    {exp.role}
                  </h4>
                </motion.div>

                <motion.p
                  animate={{ 
                    color: isExpanded ? 'rgb(212, 212, 212)' : 'rgb(161, 161, 170)',
                    marginTop: isExpanded ? '8px' : '0px'
                  }}
                  className="text-sm leading-relaxed transition-colors"
                >
                  {exp.desc}
                </motion.p>
              </div>

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0, scale: isExpanded ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-neutral-500 group-hover:text-neutral-400 flex-shrink-0 mt-1"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:ml-48 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className={`p-8 rounded-lg border border-neutral-700/50 bg-neutral-950/40 backdrop-blur-sm ${accentBorders[i]}`}
            >
              {/* Achievements */}
              <div className="mb-8">
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs font-bold tracking-[0.15em] text-neutral-400 uppercase mb-4"
                >
                  Key Achievements
                </motion.h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((a, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + j * 0.04 }}
                      className="text-sm text-neutral-300 flex gap-3 group/item"
                    >
                      <span className="text-neutral-500 flex-shrink-0 mt-1">
                        →
                      </span>
                      <span className="group-hover/item:text-neutral-100 transition-colors leading-relaxed">
                        {a}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-6 border-t border-neutral-700/50"
              >
                <p className="text-xs font-bold tracking-[0.15em] text-neutral-400 uppercase mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.split(', ').map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + j * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded text-xs font-semibold bg-neutral-900/60 border border-neutral-700/50 text-neutral-300 hover:bg-neutral-900/80 hover:border-neutral-600/50 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-sm font-black tracking-[0.3em] text-neutral-500 uppercase mb-4">
          Career Path
        </h2>
        <motion.div
          className="w-12 h-px bg-neutral-400/30"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-neutral-400/40 via-neutral-400/20 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Timeline dots */}
        {experiences.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.3 }}
            viewport={{ once: true }}
            className="absolute left-0 w-3 h-3 rounded-full border-2 border-neutral-800 bg-neutral-950 ring-4 ring-neutral-900"
            style={{
              marginTop: `${i * 220 + 64}px`,
              marginLeft: "-6px"
            }}
          />
        ))}

        {/* Experience cards */}
        <div className="relative space-y-20 pl-12">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              i={i}
              isExpanded={expandedIndex === i}
              onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}