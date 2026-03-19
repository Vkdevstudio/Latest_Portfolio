/* eslint-disable @typescript-eslint/no-explicit-any */
// ============================================================================
// PAGE_CONFIG - Complete Consolidated Data for All Pages
// For: home | about | works | howiwork | resume | contact
// ============================================================================

export type PageType = 'home' | 'about' | 'works' | 'howiwork' | 'resume' | 'contact';


type PageConfig = {
  headline: string;
  subheading: string;
  status: string;
  tagline?: string;
  snippet: string;
  [key: string]: any;
};

export const PAGE_CONFIG:Record<PageType, PageConfig> = {

  home: {
    headline: 'VINOD KUMAR // FULL-STACK ARCHITECT',
    subheading: 'Building scalable systems that work',
    status: 'AVAILABLE',
    
    metrics: [
      { val: '10+', label: 'Production Systems' },
      { val: '100+', label: 'Daily Users' },
      { val: '73%', label: 'Performance Gains' },
    ],
    
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Apache Kafka', 'AWS'],
    
    tagline: 'Always learning. Always shipping.',
    snippet: 'const ready = true;',
    
    links: {
      email: 'hello@vinodkumar.dev',
      github: 'github.com/vinod-dev',
      linkedin: 'linkedin.com/in/vinodkumar',
      portfolio: 'vinod-dev.vercel.app',
    },
    
    achievements: [
      '10+ production systems live',
      '100+ daily active users across projects',
      '5 hospitals using healthcare platform',
      '73% performance improvement delivered',
    ],
  },

  // ============================================================================
  // ABOUT PAGE
  // ============================================================================
  about: {
    headline: 'ABOUT VINOD',
    subheading: 'The person behind the code',
    status: ' AVAILABLE',
    
    belief: 'Great architecture solves problems before they happen',
    
    focus: [
      { 
        title: 'Full-Stack Ownership', 
        desc: 'From frontend UX to backend infrastructure—I think in systems, not silos' 
      },
      { 
        title: 'Scalability First', 
        desc: 'Build right once, scale forever. Architecture is the foundation.' 
      },
      { 
        title: 'Production Mindset', 
        desc: 'Every line of code ships to real users. Quality is non-negotiable.' 
      },
    ],
    
    tagline: 'Full-stack thinker. Problem solver. Built-to-ship mindset.',
    snippet: '{ impact: "high" }',
    
    timeline: [
      { year: '2022', label: 'Started' },
      { year: '2024', label: 'Growth' },
      { year: '2025+', label: 'Leadership' },
    ],
    
    badges: ['2 years experience', 'Production proven', 'Healthcare certified'],
    
    tech: [
      'Next.js', 'React.js', 'Node.js', 'TypeScript', 
      'MongoDB', 'PostgreSQL', 'Redis', 'Apache Kafka',
      'AWS EC2', 'AWS S3', 'Vercel', 'Docker',
    ],
    
    achievements: [
      'Built 10+ production systems',
      'Served 100K+ healthcare records',
      'Optimized systems for 73% faster performance',
      'Architected multi-tenant marketplaces',
      'Deployed across healthcare, B2B, and SaaS domains',
    ],
  },

  // ============================================================================
  // WORKS PAGE
  // ============================================================================
  works: {
    headline: 'PROJECT WORK',
    subheading: 'Real systems. Real impact.',
    status: 'AVAILABLE',
    
    industries: [
      'Healthcare Technology',
      'B2B SaaS Solutions',
      'Marketplace Platforms',
      'Event-Driven Systems',
      'Film Production Tech',
      'Educational Platforms',
    ],
    
    projectStatus: '5 Live • 4 Beta • 0 Archived',
    
    tagline: 'Scroll to see detailed case studies with real metrics',
    snippet: 'projects: 9',
    
    focus: 'Real problems. Real solutions. Real users.',
    
    belief: 'Product quality is measured in production, not features.',
    
    metrics: [
      { val: '9', label: 'Projects' },
      { val: '5', label: 'Live in Production' },
      { val: '100K+', label: 'Records Managed' },
      { val: '200+', label: 'Active Users' },
    ],
    
    tech: [
      'Next.js', 'React', 'Node.js', 'MongoDB',
      'TypeScript', 'Kafka', 'Redux', 'Tailwind CSS',
    ],
    
    achievements: [
      '5 hospitals using production systems',
      '200+ active users across platforms',
      'Handled 100K+ medical records efficiently',
      'Built 3 marketplace platforms',
      '73% performance improvements delivered',
      'Multi-tenant architecture for scale',
    ],
    
    links: {
      portfolio: 'vinod-dev.vercel.app/work',
      github: 'github.com/vinod-dev',
      case_studies: 'See detailed breakdowns',
    },
  },

  // ============================================================================
  // HOW I WORK PAGE
  // ============================================================================
  howiwork: {
    headline: 'HOW I BUILD',
    subheading: 'From idea to live system',
    status: 'AVAILABLE',
    
    steps: ['Understand', 'Design', 'Build', 'Ship'],
    
    stepDescriptions: [
      'Deep problem discovery & user research',
      'Architecture & system design first',
      'Type-safe code & comprehensive testing',
      'Deploy to production & monitor',
    ],
    
    badges: [
      'Performance Optimized',
      'Type Safe (TypeScript)',
      'Production Ready',
      'Scalable Architecture',
      'Real-time Capable',
    ],
    
    tagline: 'Every project is built to scale from day one',
    snippet: 'quality: "first"',
    
    belief: 'Architecture is the foundation. Build it right before scaling.',
    
    focus: 'Systems thinking. Clean code. Production mindset.',
    
    metrics: [
      { val: '10+', label: 'Microservices' },
      { val: '5+', label: 'Healthcare Projects' },
      { val: '100%', label: 'Type Coverage' },
      { val: '99.9%', label: 'Uptime' },
    ],
    
    tech: [
      'Next.js for frontend scaling',
      'Node.js for backend',
      'Kafka for event-driven systems',
      'MongoDB for flexible data',
      'TypeScript for safety',
    ],
    
    achievements: [
      'Zero runtime errors in production',
      'Sub-second page loads achieved',
      'Automated testing at every stage',
      'Continuous deployment pipelines',
      'Real-time monitoring & alerts',
    ],
  },
  resume: {
    headline: 'PROFESSIONAL RECORD',
    subheading: '2+ years of consistent impact',
    status: 'AVAILABLE',
    
    timeline: [
      { year: '2022-2023', label: 'Foundation' },
      { year: '2024', label: 'Scale' },
      { year: '2025+', label: 'Leadership' },
    ],
    
    achievements: [
      '⚡ Delivered 73% performance improvement (Hospital SaaS)',
      '🏥 5 hospitals in production with 100+ daily users',
      '🚀 Shipped 9 projects across 3 companies',
      '💼 Full-stack ownership on multi-tenant systems',
      '🎯 Built event-driven architecture (10+ microservices)',
      '📊 Handled 100K+ records efficiently',
      '🔒 Implemented HIPAA compliance',
    ],
    
    badges: [
      'Healthcare Certified',
      'Full-Stack Owner',
      'Architecture Expert',
      'Performance Optimized',
    ],
    
    focus: 'Production systems. Real users. Measurable impact.',
    
    belief: 'Great engineers ship. Great architects build foundations for shipping.',
    
    metrics: [
      { val: '2+', label: 'Years Production' },
      { val: '9', label: 'Projects Shipped' },
      { val: '10+', label: 'Microservices' },
      { val: '100+', label: 'Daily Users' },
    ],
    
    tech: [
      'Next.js', 'React', 'Node.js', 'TypeScript',
      'MongoDB', 'PostgreSQL', 'Kafka', 'Redis',
      'AWS', 'Docker', 'Vercel',
    ],
    
    links: {
      email: 'hello@vinodkumar.dev',
      github: 'github.com/vinod-dev',
      linkedin: 'linkedin.com/in/vinodkumar',
      portfolio: 'vinod-dev.vercel.app',
    },
    
    snippet: 'experience: "2y"',
  },

  // ============================================================================
  // CONTACT PAGE
  // ============================================================================
  contact: {
    headline: "LET'S WORK TOGETHER",
    subheading: "I'm always open to new challenges",
    status: ' OPEN FOR PROJECTS',
    
    links: [
      { label: 'hello@vinodkumar.dev', icon: '✉', type: 'email' },
      { label: 'linkedin.com/in/vinodkumar', icon: '💼', type: 'linkedin' },
      { label: 'github.com/vinod-dev', icon: '💻', type: 'github' },
      { label: 'vinod-dev.vercel.app', icon: '🌐', type: 'website' },
    ],
    
    tagline: 'Response time: 24 hours. Always ready to chat.',
    snippet: '{ open: true }',
    
    focus: 'Healthcare Tech • SaaS • Marketplaces • Event-Driven Systems',
    
    belief: 'Great problems deserve great solutions. Let\'s build something real.',
    
    achievements: [
      'Available for full-time, contract, or advisory roles',
      'Experienced with healthcare compliance (HIPAA)',
      'Multi-company production experience',
      'Can scale systems from MVP to 100K+ users',
    ],
    
    metrics: [
      { val: '24h', label: 'Response Time' },
      { val: 'Flexible', label: 'Availability' },
      { val: '2+', label: 'Years Experience' },
      { val: '9', label: 'Projects Delivered' },
    ],
    
    tech: [
      'Full-stack JavaScript/TypeScript',
      'Cloud architecture (AWS)',
      'Database design',
      'Real-time systems',
      'Healthcare systems',
    ],
    
    badges: [
      'Open for opportunities',
      'Healthcare expertise',
      'Full-stack capable',
      'Production proven',
    ],
  },
};

