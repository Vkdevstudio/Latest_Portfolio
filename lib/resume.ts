// lib/resume.ts

export interface ResumeExperience {
  id: string;
  company: string;
  role: string;
  duration: {
    start: string; // "Jan 2021"
    end: string | "Present";
  };
  type: "full-time" | "contract" | "freelance";
  location?: string;
  summary: string; // 1-2 sentences about the role
  achievements: string[]; // 3-4 key achievements
  technologies: string[]; // Tech stack used
  impact?: string; // Quantified impact if available
}

export interface ResumeSkill {
  category: string; // "Frontend", "Backend", "AI/ML", "Database", "DevOps"
  skills: {
    name: string;
    proficiency: number; // 1-5
    yearsOfExperience: number;
  }[];
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  details?: string;
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ResumeSection {
  title: string;
  description: string; // Brief intro to this section
}

export interface Resume {
  // Header
  fullName: string;
  title: string; // "Full Stack Engineer" or similar
  summary: string; // 2-3 sentence professional summary
  location: string;

  // Contact
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;

  // Core sections
  experiences: ResumeExperience[];
  skills: ResumeSkill[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];

  // Optional
  languages?: Array<{
    language: string;
    proficiency: "Native" | "Fluent" | "Professional" | "Basic";
  }>;

  // Metadata
  lastUpdated: string;
  pdfUrl?: string; // Link to downloadable PDF
}

// Placeholder data
export const resumeData: Resume = {
  fullName: "Vinod Kumar",
  title: "Full Stack Developer • Microservices • Production Systems",
  summary: "2 years shipping production systems at scale. Built 5+ MVPs handling real traffic and complexity. Expertise in microservices, event-driven architecture, multi-tenant platforms. Full-stack ownership: design → deploy → optimize.",
  location: "Chennai, India",

  email: "vk5241415@gmail.com",
  linkedin: "vinod-manimaran",
  github: "",
  portfolio: "vinod-dev.vercel.app",

  experiences: [
    {
      id: "1",
      company: "Freelance",
      role: "Full Stack Engineer",
      duration: {
        start: "Nov 2025",
        end: "Present",
      },
      type: "freelance",
      location: "Remote",
      summary: "Full-stack ownership of production systems. Microservices, event-driven architecture, multi-tenant platforms.",
      achievements: [
        "ClapOS: Film industry SaaS with 10+ operational modules (vendor, auditions, call sheets, talent, media vault). Microservices + Kafka event streaming. Frontend live, backend 50% complete.",
        "PlusUAE: Multilingual platform for UAE corporate client. 5 languages (Arabic, French, Chinese, English, Mandarin), RTL layout, Zoho CRM integration. Live & in daily use.",
        "Jignu: Business directory platform (JustDial-style). Multi-tenant with 3 dashboards (Company, Admin, Public). Company-scoped data isolation.",
        "Wyka: Marketing automation platform. Custom Canva marketplace integration. OAuth + Passport.js auth across platforms. Real-time data sync.",
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Apache Kafka", "OAuth", "Passport.js", "AWS S3", "Vercel"],
      impact: "5+ MVPs shipped, 10+ clients served, real-time systems",
    },
    {
      id: "2",
      company: "Tensys",
      role: "Full Stack Engineer (Promoted from Primates)",
      duration: {
        start: "Sep 2024",
        end: "Oct 2025",
      },
      type: "full-time",
      location: "Bangalore",
      summary: "Owned frontend layer for medtech SaaS platforms. 5+ hospital clients, 100+ daily users. Cut load times 3s → 800ms.",
      achievements: [
        "Hospital Management System: Built appointment booking UI + role-based dashboards (admins, receptionists, lab staff) for 5+ hospital clients managing 100+ daily appointments.",
        "Performance optimization: Cut load times from 3 seconds to 800ms (73% improvement). Lighthouse scores 50 → 90+. Difference between users staying or bouncing.",
        "Workflow dashboards: Built complex role-based dashboards. Proximity-based batch appointment assignment. Dynamic time slot generation.",
        "PG Accommodation Platform: Multi-tenant property management. Tenant onboarding, booking workflows, notice period tracking, PDF invoice generation.",
        "Form validation: Replaced unvalidated forms with Zod + React Hook Form. Reduced invalid backend data by 85%.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB", "AWS EC2/S3", "Zod", "React Hook Form", "React PDF"],
      impact: "100+ daily users, 5+ hospital clients, 73% performance improvement",
    },
    {
      id: "3",
      company: "Primates Development",
      role: "MERN Stack Developer",
      duration: {
        start: "Nov 2023",
        end: "Aug 2024",
      },
      type: "full-time",
      location: "Chennai",
      summary: "Built production websites and healthcare platforms. Patient/doctor/admin workflows. End-to-end ownership.",
      achievements: [
        "5+ production healthcare websites: Patient portals, doctor dashboards, appointment systems, lab services. Balanced reusable templates with client-specific requirements.",
        "Authentication & Authorization: Implemented JWT + role-based access control (RBAC). Secured patient, doctor, and admin data. Zero unauthorized access incidents.",
        "Lead management system: Replaced spreadsheet pipeline with searchable/filterable dashboard. Added QR-based client onboarding. Shipped within same sprint.",
        "Backend & infrastructure: Managed Node.js APIs, MongoDB schemas, deployed on AWS EC2. Documented all endpoints. Agile contributor.",
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB", "AWS EC2", "JWT", "RBAC"],
      impact: "5+ production websites, healthcare domain expertise",
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", proficiency: 5, yearsOfExperience: 2 },
        { name: "Next.js", proficiency: 5, yearsOfExperience: 2 },
        { name: "TypeScript", proficiency: 5, yearsOfExperience: 2 },
        { name: "Tailwind CSS", proficiency: 5, yearsOfExperience: 2 },
        { name: "Redux Toolkit", proficiency: 4, yearsOfExperience: 1.5 },
        { name: "RTK Query", proficiency: 4, yearsOfExperience: 1.5 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 5, yearsOfExperience: 2 },
        { name: "Express.js", proficiency: 5, yearsOfExperience: 2 },
        { name: "MongoDB", proficiency: 5, yearsOfExperience: 2 },
        { name: "Apache Kafka", proficiency: 4, yearsOfExperience: 0.5 },
        { name: "OAuth", proficiency: 4, yearsOfExperience: 0.5 },
        { name: "Passport.js", proficiency: 4, yearsOfExperience: 0.5 },
      ],
    },
    {
      category: "Architecture & Systems",
      skills: [
        { name: "Microservices", proficiency: 4, yearsOfExperience: 0.5 },
        { name: "Event-Driven Architecture", proficiency: 4, yearsOfExperience: 0.5 },
        { name: "Multi-Tenant Systems", proficiency: 4, yearsOfExperience: 1 },
        { name: "Real-Time Systems", proficiency: 4, yearsOfExperience: 1 },
        { name: "Database Optimization", proficiency: 4, yearsOfExperience: 1 },
      ],
    },
    {
      category: "DevOps & Deployment",
      skills: [
        { name: "Docker", proficiency: 3, yearsOfExperience: 0.5 },
        { name: "AWS (EC2, S3)", proficiency: 4, yearsOfExperience: 2 },
        { name: "Vercel", proficiency: 5, yearsOfExperience: 2 },
        { name: "Git", proficiency: 5, yearsOfExperience: 2 },
        { name: "Kubernetes (EKS)", proficiency: 2, yearsOfExperience: 0.25 },
      ],
    },
    {
      category: "Learning Track",
      skills: [
        { name: "Gemini API", proficiency: 2, yearsOfExperience: 0.25 },
        { name: "AI Integration", proficiency: 2, yearsOfExperience: 0.25 },
        { name: "Distributed Systems", proficiency: 2, yearsOfExperience: 0.25 },
      ],
    },
  ],

  education: [
    {
      id: "1",
      institution: "Hindustan College of Arts and Science",
      degree: "Bachelor of Computer Applications",
      field: "Computer Science",
      year: "2022",
      details: "Chennai, India",
    },
  ],

  certifications: [
  ],

  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "Tamil", proficiency: "Native" },
  ],

  lastUpdated: new Date().toISOString(),
};