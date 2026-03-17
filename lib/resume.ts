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
  title: "Full Stack Engineer | AI/ML Specialist",
  summary: "Senior engineer with 8+ years building scalable systems. Expertise in React, Node.js, and AI/ML integration. Led teams to ship high-impact products. Passionate about technical excellence and mentoring.",
  location: "Chennai, India",

  email: "hello@vinodkumar.dev",
  linkedin: "vinodkumar",
  github: "vinodkumar",
  portfolio: "vinod-dev.vercel.app",

  experiences: [
    {
      id: "1",
      company: "Predict Analytics Inc",
      role: "Senior Full Stack Engineer",
      duration: {
        start: "Jan 2022",
        end: "Present",
      },
      type: "full-time",
      location: "Remote",
      summary: "Led development of real-time analytics platform processing 100k+ events daily.",
      achievements: [
        "Reduced query time from 4 hours to 15 minutes (95% improvement)",
        "Designed and built event streaming pipeline using Kafka + Node.js",
        "Mentored 3 junior engineers on system design principles",
        "Created $50k monthly revenue opportunity through API product",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Kafka", "AWS", "ML"],
      impact: "100k daily events, 95% performance improvement",
    },
    {
      id: "2",
      company: "Hospital Management Systems",
      role: "Full Stack Engineer",
      duration: {
        start: "Jul 2020",
        end: "Dec 2021",
      },
      type: "full-time",
      location: "Bangalore",
      summary: "Built real-time dashboard serving 500+ concurrent users with 99.9% uptime.",
      achievements: [
        "Architected real-time WebSocket infrastructure for live data updates",
        "Reduced error rate by 40% through comprehensive monitoring",
        "Achieved 99.9% uptime SLA in production",
        "Mentored 2 engineers on best practices",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
      impact: "500+ concurrent users, 99.9% uptime",
    },
    {
      id: "3",
      company: "PlusUAE",
      role: "Lead Frontend Engineer",
      duration: {
        start: "Mar 2019",
        end: "Jun 2020",
      },
      type: "full-time",
      location: "Dubai",
      summary: "Built high-converting SaaS platform for lead generation and CRM integration.",
      achievements: [
        "Achieved 12% conversion rate (5-6x industry average)",
        "Generated 5,000+ qualified leads in Q1 2020",
        "Implemented real-time lead tracking with Zoho CRM integration",
        "Led frontend architecture redesign",
      ],
      technologies: ["React", "TypeScript", "Zoho CRM", "Next.js", "i18n"],
      impact: "12% conversion, 5,000+ leads",
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", proficiency: 5, yearsOfExperience: 6 },
        { name: "TypeScript", proficiency: 5, yearsOfExperience: 4 },
        { name: "Next.js", proficiency: 5, yearsOfExperience: 3 },
        { name: "Tailwind CSS", proficiency: 5, yearsOfExperience: 2 },
        { name: "Framer Motion", proficiency: 4, yearsOfExperience: 2 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 5, yearsOfExperience: 6 },
        { name: "PostgreSQL", proficiency: 4, yearsOfExperience: 4 },
        { name: "MongoDB", proficiency: 4, yearsOfExperience: 3 },
        { name: "Express", proficiency: 5, yearsOfExperience: 5 },
        { name: "GraphQL", proficiency: 3, yearsOfExperience: 2 },
      ],
    },
    {
      category: "AI/ML",
      skills: [
        { name: "Python", proficiency: 4, yearsOfExperience: 3 },
        { name: "TensorFlow", proficiency: 3, yearsOfExperience: 2 },
        { name: "LLM Integration", proficiency: 4, yearsOfExperience: 1 },
        { name: "Data Analysis", proficiency: 4, yearsOfExperience: 2 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", proficiency: 4, yearsOfExperience: 3 },
        { name: "AWS", proficiency: 4, yearsOfExperience: 4 },
        { name: "Git", proficiency: 5, yearsOfExperience: 8 },
        { name: "CI/CD", proficiency: 4, yearsOfExperience: 3 },
      ],
    },
  ],

  education: [
    {
      id: "1",
      institution: "College of Engineering",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      year: "2016",
      details: "GPA: 3.8/4.0",
    },
  ],

  certifications: [
    {
      id: "1",
      name: "Advanced System Design",
      issuer: "Coursera",
      date: "2022",
    },
    {
      id: "2",
      name: "AWS Solutions Architect",
      issuer: "Amazon",
      date: "2021",
    },
  ],

  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Native" },
    { language: "Tamil", proficiency: "Fluent" },
  ],

  lastUpdated: new Date().toISOString(),
};