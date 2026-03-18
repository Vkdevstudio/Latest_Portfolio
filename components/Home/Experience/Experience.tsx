'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Building2, ChevronDown } from 'lucide-react';

export const experiences = [
  {
    year: 'Nov 2025 - Present',
    company: 'Freelance',
    role: 'Building at Scale',
    icon: Briefcase,
    desc: 'Full-stack ownership of production systems. Multi-tenant platforms, real-time integrations, secure auth at scale. Microservices + event-driven architecture.',
    achievements: [
      'ClapOS: Film industry SaaS with 10+ operational modules (vendor, auditions, call sheets, talent, media vault). Microservices + Kafka event streaming. Frontend live, backend 50% complete.',
      'PlusUAE: Multilingual platform for UAE corporate client. 5 languages (Arabic, French, Chinese, English, Mandarin), full RTL layout, Zoho CRM integration. Live & in daily use.',
      'Jignu: Business directory platform (JustDial-style). Multi-tenant with 3 dashboards: Company (listings, jobs, applications, events, analytics), Admin (user management, approvals, moderation), Public website (discovery, lead capture). Company-scoped data isolation.',
      'Wyka: Marketing automation for agents. Agent dashboard for bulk client data management. Custom Canva marketplace integration — agent data auto-populated into design interface. OAuth + Passport.js auth across platforms. Real-time data sync between dashboard and Canva app.'
    ],
    skills: 'Next.js • TypeScript • Tailwind • React.js • Node.js • MongoDB • Apache Kafka • OAuth • Passport.js • Multi-tenant Architecture • Microservices • AWS S3 • Vercel'
  },
  {
    year: 'Sep 2024 - Oct 2025',
    company: 'Tensys',
    role: 'Full Stack Developer (Promoted from Primates)',
    icon: Building2,
    desc: 'Promoted after consistent shipping. Owned frontend architecture for medtech SaaS platforms. 5+ healthcare clients. 100+ daily users. Cut load times 3s → 800ms.',
    achievements: [
      'Hospital Management System: Built appointment booking UI + role-based dashboards (admins, receptionists, lab staff) for 5+ hospital clients managing 100+ daily appointments without degradation.',
      'Performance optimization: Identified site-wide bottleneck. Cut load times from 3 seconds to 800ms (73% improvement). Lighthouse scores 50 → 90+. Difference between users staying or bouncing.',
      'Workflow dashboards: Built complex role-based dashboards for doctors, admins, lab staff. Proximity-based batch appointment assignment. Dynamic time slot generation. Real-time status tracking.',
      'PG Accommodation Platform: Multi-tenant property management system. Tenant onboarding, booking workflows, notice period tracking, PDF invoice generation with React PDF.',
      'Form validation & data quality: Replaced unvalidated forms with Zod + React Hook Form. Reduced invalid backend data by 85%. Quality over speed.'
    ],
    skills: 'Next.js • TypeScript • Tailwind • Redux Toolkit • RTK Query • Node.js • MongoDB • AWS EC2/S3 • Zod • React Hook Form • React PDF • Vercel'
  },
  {
    year: 'Nov 2023 - Aug 2024',
    company: 'Primates Development',
    role: 'MERN Stack Developer',
    icon: Building2,
    desc: 'Built production websites and platforms from scratch. Healthcare workflows, patient/doctor/admin portals. End-to-end full-stack ownership.',
    achievements: [
      '5+ production healthcare websites: Built patient portals, doctor dashboards, appointment systems, lab services. Balanced reusable base templates with client-specific healthcare requirements.',
      'Authentication & Authorization: Implemented JWT + role-based access control (RBAC). Secured patient, doctor, and admin data access. Zero unauthorized access incidents.',
      'Lead management system: Replaced spreadsheet pipeline with searchable/filterable dashboard. Added QR-based client onboarding. Shipped within same sprint.',
      'Backend & infrastructure: Managed Node.js APIs, MongoDB schemas, deployed on AWS EC2. Documented all endpoints for team clarity. Agile sprint contributor.'
    ],
    skills: 'React.js • Next.js • TypeScript • Tailwind • Node.js • MongoDB • AWS EC2 • JWT • RBAC • Agile'
  }
];

interface Experience {
  year: string;
  company: string;
  role: string;
  icon: React.ElementType;
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
  const accentBorders = [
    'border-l-4 border-neutral-400/45',
    'border-r-4 border-neutral-400/40',
    'border-l-2 border-r-2 border-neutral-400/35'
  ];

  return (
    <div className="relative">
      {/* Timeline connecting line */}
      <motion.div
        className="absolute -left-6 top-14 w-5 h-px bg-neutral-700/60"
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
                className="w-4 h-4 rounded border border-neutral-400/60"
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
              className="mt-3 h-px bg-neutral-600/60"
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
                ? 'border-neutral-400/50 bg-neutral-900/60' 
                : `${accentBorders[i]} border-neutral-700/60 bg-neutral-950/50 group-hover:bg-neutral-950/70`
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <motion.div
                  animate={{ scale: isExpanded ? 1.05 : 1 }}
                  className="inline-block mb-3"
                >
                  <h4 className={`text-lg font-bold uppercase tracking-tight transition-colors
                    ${isExpanded ? 'text-neutral-100' : 'text-white group-hover:text-neutral-100'}`}>
                    {exp.role}
                  </h4>
                </motion.div>

                <motion.p
                  animate={{ 
                    color: isExpanded ? 'rgb(217, 217, 217)' : 'rgb(161, 161, 170)',
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
              className={`p-8 rounded-lg border border-neutral-700/60 bg-neutral-950/50 backdrop-blur-sm ${accentBorders[i]}`}
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
                className="pt-6 border-t border-neutral-700/60"
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
                      className="px-3 py-1 rounded text-xs font-semibold bg-neutral-900/70 border border-neutral-700/60 text-neutral-300 hover:bg-neutral-900/90 hover:border-neutral-600/70 transition-all"
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
          className="w-12 h-px bg-neutral-400/40"
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
          className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-neutral-400/50 via-neutral-400/30 to-transparent"
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