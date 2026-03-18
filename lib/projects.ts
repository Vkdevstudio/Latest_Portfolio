export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  status: 'live' | 'beta' | 'archived';
  year: string;
  complexity: number; // 1-10
  impact: number; // 1-10
  
  grid: {
    role: string;
    company:string;
    nda:boolean
    metrics: string;
    tags: string[];
  };
  
  caseStudy: {
    timeline: string;
    team: string;
    
    problem: {
      context: string;
      pain: string;
      challenge: string;
      insight: string;
    };
    
    solution: {
      approach: string;
      architecture: string;
      visualNodes?: {
        id: string;
        label: string;
        type: 'input' | 'process' | 'database' | 'output';
        description?: string;
      }[];
      techStack: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        infra?: string[];
        integration?: string[];
        optimization?: string[];
        features?: string[];
        ml?: string[];
        security?: string[];
        deployment?: string[];
      };
      decisions: {
        title: string;
        description: string;
        why: string;
      }[];
    };
    
    results: {
      metrics: {
        label: string;
        before: string;
        after: string;
        impact: string;
      }[];
      adoption?: {
        launch: string;
        users: string;
        uptime: string;
      };
      learning: string;
    };
    
    challenges: {
      title: string;
      problem: string;
      solution: string;
      learning: string;
      result: string;
    }[];
    
    deepDives?: {
      title: string;
      description: string;
      codeBefore?: string;
      codeAfter?: string;
      why: string;
    }[];
    
    outcome: {
      status: string;
      reflection: string;
      current?: string; // Additional context for current status (used in some projects)
      ifBuildingAgain: string[];
      links: {
        github?: string;
        demo?: string;
        blog?: string;
        deployment?: string;
        caseStudy?: string;
      };
    };
    
    currentStatus?: {
      launched: string;
      uptime: string;
      activeUsers: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 'clapos',
    name: 'ClapOS',
    slug: 'clapos',
    description: 'Film Industry SaaS. 10+ modules. Microservices. Kafka event streaming.',
    shortDescription: 'Microservices platform for film production',
    thumbnail: '/projects/clapos/images/clap1.png',
    status: 'beta',
    year: '2025',
    complexity: 9,
    impact: 8,
    
    grid: {
      role: 'Full Stack Owner',
         company: 'Personal Project', 
  nda: false, 
      metrics: '10+ modules, Frontend live, Backend 50%',
      tags: ['Next.js', 'Kafka', 'Microservices', 'MongoDB', 'Node.js'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Present',
      team: 'Solo',
      
      problem: {
        context: 'Film production teams scattered across vendors, talent, locations. No unified system.',
        pain: 'Spreadsheets, email chains, manual scheduling. Departments working in silos.',
        challenge: 'How to build a single system where 10+ workflows stay in sync without tight coupling?',
        insight: 'The real problem isn\'t features. It\'s orchestration. Services must work independently but react instantly.',
      },
      
      solution: {
        approach: 'Microservices Architecture with Kafka Event Streaming',
        architecture: 'Frontend (Vercel) → API Gateway → 10+ Microservices → Kafka Event Bus → MongoDB',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['Apache Kafka', 'AWS S3', 'Cloudinary', 'Vercel', 'AWS EKS'],
        },
        decisions: [
          {
            title: 'Microservices over Monolith',
            description: 'Why split into independent services?',
            why: 'Film workflows are independent. Each team needs independent scaling. Monolith bottlenecks.',
          },
          {
            title: 'Kafka Event Streaming',
            description: 'Why event-driven instead of REST?',
            why: 'Services react to events without calling each other. Kafka provides durability, replay, decoupling.',
          },
          {
            title: 'MongoDB per Service',
            description: 'Why not shared database?',
            why: 'Data isolation = independent scaling. Each service owns schema. Prevents cascading failures.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Modules Built', before: '0', after: '10+', impact: 'Full product surface' },
          { label: 'Architecture Type', before: 'Monolith planned', after: 'Event-driven active', impact: 'Zero service coupling' },
          { label: 'Frontend Status', before: 'Not started', after: 'Production ready', impact: 'Live on Vercel' },
        ],
        adoption: {
          launch: 'Frontend Live',
          users: 'In active development',
          uptime: 'Backend infrastructure building',
        },
        learning: 'Microservices + Kafka handles complexity at scale. Infrastructure complexity is real.',
      },
      
      challenges: [
        {
          title: 'Service Decoupling',
          problem: 'Services initially had direct API calls. Tight coupling.',
          solution: 'Switched to event-driven. Services emit events, others listen. No direct dependencies.',
          learning: 'True decoupling requires rethinking architecture entirely.',
          result: 'Services scale independently. One failing doesn\'t break others.',
        },
        {
          title: 'Data Consistency',
          problem: 'Eventual consistency across services. What if service goes down?',
          solution: 'Kafka event log provides audit trail. Services replay events on recovery.',
          learning: 'Distributed systems require eventual consistency.',
          result: 'Zero data loss even during service failures.',
        },
      ],
      
      deepDives: [
        {
          title: 'Event-Driven Architecture Pattern',
          description: 'How services communicate without direct API calls.',
          codeBefore: 'Vendor Service → (call) Audition API → (call) Schedule API → Tight coupling',
          codeAfter: 'Vendor emits vendor.created → Kafka → Audition listens → Schedule listens → Decoupled',
          why: 'Decoupling = independent scaling, failure isolation, easier testing.',
        },
      ],
      
      outcome: {
        status: 'Frontend Live, Backend In Development',
        reflection: 'Building ClapOS taught me that true scalability requires rethinking architecture, not just adding servers.',
        ifBuildingAgain: [
          'Start with event sourcing from day 1',
          'Plan Kubernetes deployment earlier',
          'Implement observability from start',
        ],
        links: {
          demo: 'https://clapstudio.vercel.app',
        },
      },
    },
  },

 {
  id: 'plusuae',
  name: 'PlusUAE',
  slug: 'plusuae',
  description: 'High-conversion landing page. 5 languages (Arabic RTL). Multilingual content strategy. Zoho CRM auto-capture. Live & converting.',
  shortDescription: 'Multilingual high-conversion landing page',
  thumbnail: '/projects/plusuae/images/main.png',
  status: 'live',
  year: '2025',
  complexity: 7,
  impact: 8,
  
  grid: {
    role: 'Full Stack Owner',
    company: 'Freelance', 
  nda: false,  
    metrics: '5 languages, RTL, Conversion-optimized, CRM integrated',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n', 'RTL', 'Zoho CRM', 'Shadcn UI'],
  },
  
  caseStudy: {
    timeline: 'Nov 1-7, 2025',
    team: 'Solo',
    
    problem: {
      context: 'UAE corporate client: international visitors landing from 5+ regions. Language barriers. Manual lead capture into Zoho.',
      pain: 'Visitors bounce at English-only page. No native language = no engagement. Leads captured manually = data entry errors + delays.',
      challenge: 'How to build high-converting landing page in 5 languages where every visitor sees native language AND leads auto-capture to Zoho CRM without manual work?',
      insight: 'Conversion isn\'t design alone. It\'s: right language + right message + frictionless CRM sync.',
    },
    
    solution: {
      approach: 'Multilingual High-Conversion Landing Page + Real-time Zoho CRM Sync',
      architecture: 'Visitor lands → Auto-detect language → Native language + RTL → Form fill → Instant Zoho lead creation → Client sees in CRM',
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Custom i18n Context'],
        backend: ['Node.js', 'Express.js'],
        integration: ['Zoho CRM API', 'Real-time lead sync'],
        deployment: ['Vercel'],
      },
      decisions: [
        {
          title: 'Custom i18n + Auto Language Detection',
          description: 'Why custom instead of library?',
          why: 'Off-the-shelf doesn\'t handle auto-detection + RTL switching smoothly. Custom context gave full control over user experience.',
        },
        {
          title: 'RTL-First CSS Design',
          description: 'How to support Arabic without breaking layout?',
          why: 'Arabic = right-to-left text + right-to-left margins, borders, everything. CSS variables + dynamic direction attribute handles both LTR and RTL.',
        },
        {
          title: 'Zoho CRM Real-time Sync',
          description: 'Why direct API instead of form submissions?',
          why: 'Form submitted → instant lead in Zoho. No delay. No manual entry. Client sees new leads in real-time.',
        },
        {
          title: 'Conversion-Optimized Copy',
          description: 'Why multilingual content matters?',
          why: 'Not just translation. Each language = native messaging. Arabic copy speaks to Arabic culture. French copy to French market.',
        },
        {
          title: 'Fast Page Load',
          description: 'Why performance on landing page?',
          why: 'Landing pages lose 7% conversion per 1s delay. Code splitting + lazy load ensures fast initial render across all languages.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Language Coverage', before: '1 (English only)', after: '5 (Arabic, English, French, Chinese, Mandarin)', impact: 'Visitor reach 5x' },
        { label: 'RTL Support', before: 'Not supported', after: 'Full RTL + LTR switching', impact: 'Arabic speakers engaged' },
        { label: 'Lead Capture', before: 'Manual Zoho entry', after: 'Auto-sync real-time', impact: 'Zero manual work' },
        { label: 'CRM Integration', before: 'Missing', after: 'Seamless Zoho sync', impact: 'Leads in CRM instantly' },
        { label: 'Page Speed', before: 'Unknown', after: 'Optimized for conversion', impact: 'Lower bounce rate' },
      ],
      adoption: {
        launch: 'Nov 2025',
        users: 'International visitors + client team',
        uptime: '99%+ production',
      },
      learning: 'Conversion landing pages need: right language + right design + zero friction CRM sync. Multilingual isn\'t just translation—it\'s cultural messaging.',
    },
    
    challenges: [
      {
        title: 'RTL Layout Without Breaking LTR',
        problem: 'CSS with margin-left, border-left breaks when Arabic switches direction.',
        solution: 'CSS variables: margin-inline-start, border-inline-start work for both directions. Dynamic dir attribute on html.',
        learning: 'RTL requires architectural thinking from day 1, not afterthought.',
        result: 'Seamless LTR ↔ RTL switching. No visual bugs.',
      },
      {
        title: 'Multilingual Content Quality',
        problem: 'Copy translated word-by-word sounds unnatural. Doesn\'t convert.',
        solution: 'Worked with native speakers for each language. Adapted messaging, not just words.',
        learning: 'Localization > Translation. Cultural nuance matters for conversion.',
        result: 'Each language feels native. Not just translated.',
      },
      {
        title: 'Zoho CRM Rate Limiting',
        problem: 'Multiple simultaneous form submissions hit Zoho API limits. Leads lost.',
        solution: 'Implemented queue system. Batch submissions. Retry logic with exponential backoff.',
        learning: 'External APIs have constraints. Design around them.',
        result: 'Zero lost leads. 100% sync success rate.',
      },
      {
        title: 'Auto Language Detection Accuracy',
        problem: 'Browser language detection wrong. User lands on wrong language.',
        solution: 'Language selector in header. User preference saved. Fallback to browser locale.',
        learning: 'Auto-detection is helpful, but user choice always wins.',
        result: 'Users always see correct language immediately.',
      },
    ],
    
    deepDives: [
      {
        title: 'Conversion-Optimized Multilingual Copy',
        description: 'How to write landing page copy that converts in 5 languages.',
        codeBefore: 'English: "We provide insurance solutions" → Translate to Arabic: نحن نقدم حلول التأمين',
        codeAfter: 'Arabic: عيش بثقة مع تغطية تأمين شاملة (Live with confidence with comprehensive coverage)',
        why: 'Direct translation loses cultural messaging. Native messaging converts.',
      },
      {
        title: 'RTL CSS Pattern',
        description: 'How to write CSS that works for both LTR and RTL.',
        codeBefore: '.button { margin-left: 16px; border-left: 2px solid emerald; }',
        codeAfter: '.button { margin-inline-start: 16px; border-inline-start: 2px solid emerald; } /* Works for both LTR and RTL */',
        why: 'Direction-agnostic CSS = one codebase for all languages.',
      },
      {
        title: 'Zoho CRM Sync with Queue',
        description: 'How to reliably sync leads to Zoho without losing any.',
        codeBefore: 'Form submit → API call to Zoho → hope it works',
        codeAfter: 'Form submit → Add to queue → Process queue with retry logic → Zoho sync → Mark complete',
        why: 'Queue prevents lost leads. Retry logic handles API failures.',
      },
    ],
    
    outcome: {
      status: 'Live in Production',
      reflection: 'Building PlusUAE taught me that conversion landing pages need 3 things: visitor\'s language, cultural messaging, and zero friction to CRM. Multilingual ≠ just translation.',
      ifBuildingAgain: [
        'Implement A/B testing for each language copy',
        'Add heatmap tracking to see where visitors scroll',
        'Build multilingual SEO from start (hreflang tags)',
        'Test RTL with real Arabic speakers early',
      ],
      links: {
        demo: 'https://www.plusuae.ae',
      },
    },
    
    currentStatus: {
      launched: 'Nov 2025',
      uptime: '99%+',
      activeUsers: '200+ (Visitors + Client team)',
    },
  },
},
{
  id: 'jignu',
  name: 'Jignu',
  slug: 'jignu',
  description: 'Business directory MVP (JustDial-style). Multi-tenant architecture. Company-scoped data isolation. Built in 1.5 months.',
  shortDescription: 'Multi-tenant business directory MVP',
  thumbnail: '/projects/jignu/images/main.png',
  status: 'beta',
  year: '2025',
  complexity: 8,
  impact: 7,
  
  grid: {
    role: 'Full Stack Owner',
    company: 'Freelance', 
  nda: false,  
    metrics: '1.5 month sprint, Multi-tenant, 3 dashboards',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Multi-tenant'],
  },
  
  caseStudy: {
    timeline: 'Nov 2025 - Feb 2025 (1.5 month MVP sprint)',
    team: 'Solo',
    
    problem: {
      context: 'Client idea: Business directory (JustDial-style). Companies list. Users discover. Admin moderates. Needed MVP fast to validate market viability.',
      pain: 'No product to show. Concept in head. Needed visual MVP to test with users and investors.',
      challenge: 'How to build multi-tenant business directory MVP in 1.5 months with production-grade security?',
      insight: 'MVP ≠ sloppy. Fast doesn\'t mean cutting corners on architecture. Multi-tenancy from day 1 prevents rewrites later.',
    },
    
    solution: {
      approach: 'Multi-tenant Architecture Built Fast',
      architecture: '3 Interfaces: Company Dashboard (manage listings, view leads) → Admin Dashboard (moderate content) → Public Website (discover, search, capture leads)',
      techStack: {
        frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        backend: ['Node.js', 'Express.js', 'Monolith'],
        database: ['MongoDB'],
        infra: ['AWS (EC2 currently paused)', 'AWS S3 (image storage)'],
        features: ['Multi-tenant isolation', 'Tenant-scoped queries', 'JWT auth', 'Admin moderation'],
      },
      decisions: [
        {
          title: 'Monolith Backend for Speed',
          description: 'Why monolith instead of microservices?',
          why: 'MVP needs fast shipping. Single deployment. Microservices adds complexity. Monolith fine for MVP validation.',
        },
        {
          title: 'Multi-tenant from Day 1',
          description: 'Why build multi-tenant for MVP?',
          why: 'Client pitch: unlimited companies. Single-tenant requires rewrite at scale. Multi-tenant from start = ready without refactor.',
        },
        {
          title: 'Tenant-Scoped Queries',
          description: 'How to isolate company data?',
          why: 'Every query includes tenant_id filter. No cross-company data leaks. Security by architecture.',
        },
        {
          title: '3 Dashboard Separation',
          description: 'Why 3 separate interfaces?',
          why: 'Company dashboard (manage), Admin dashboard (moderate), Public website (discovery). Clear separation = clear code.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'MVP Time', before: 'Concept', after: '1.5 months shipped', impact: 'Fast validation' },
        { label: 'Dashboards', before: '0', after: '3 complete', impact: 'Full feature set' },
        { label: 'Architecture Type', before: 'Planned', after: 'Multi-tenant ready', impact: 'Scales without rewrite' },
        { label: 'Data Isolation', before: 'Design phase', after: 'Production security', impact: 'Zero leaks' },
      ],
      adoption: {
        launch: 'Nov 2025',
        users: 'Client validation phase + local testing',
        uptime: '99%+ (when server active)',
      },
      learning: 'MVP + quality + speed are possible. Right architecture from day 1 saves rewrites. Multi-tenancy seems complex but pays off immediately.',
    },
    
    challenges: [
      {
        title: 'Speed vs Quality in MVP',
        problem: '1.5 months to build production-grade multi-tenant. Pressure to cut corners.',
        solution: 'Focused on core features. Skipped polish. Prioritized security + architecture.',
        learning: 'MVP is feature-complete + secure, not visually perfect.',
        result: 'Shipped secure, scalable MVP in 1.5 months.',
      },
      {
        title: 'Multi-tenant Complexity',
        problem: 'Multi-tenant seems slower than single-tenant MVP. Thought it would delay launch.',
        solution: 'Realized multi-tenant only adds day-1 complexity. Pays off immediately with second company.',
        learning: 'Right architecture early saves future pain.',
        result: 'Ready to onboard multiple companies without refactoring.',
      },
      {
        title: 'Tenant Data Isolation Testing',
        problem: 'How to verify Company A can\'t see Company B data?',
        solution: 'Built tenant middleware. Created edge case test scenarios.',
        learning: 'Security testing essential even for MVP.',
        result: 'Zero cross-tenant exposure in testing.',
      },
      {
        title: 'Server Maintenance Pause',
        problem: 'Client paused AWS server + domain due to maintenance priorities. Backend currently offline.',
        solution: 'Frontend works locally. Code ready to redeploy when client resumes.',
        learning: 'Sometimes client priorities shift. Quality code allows quick relaunch.',
        result: 'Can redeploy in hours when client resumes server payments.',
      },
    ],
    
    deepDives: [
      {
        title: 'Tenant-Scoped Query Pattern',
        description: 'How to enforce multi-tenant isolation in MongoDB.',
        codeBefore: 'db.listings.find({ status: "active" })',
        codeAfter: 'db.listings.find({ status: "active", tenant_id: req.user.tenant_id })',
        why: 'Every query filtered by tenant_id. No exceptions. Prevents data leaks.',
      },
      {
        title: 'Multi-tenant vs Single-tenant',
        description: 'Why multi-tenant from day 1 is faster long-term.',
        codeBefore: 'MVP single-tenant (fast) → Validate → Refactor to multi-tenant (2-3 months rework)',
        codeAfter: 'MVP multi-tenant from start (1.5 months) → Validate → Ready at scale',
        why: 'Multi-tenant upfront = faster to production at scale.',
      },
    ],
    
    outcome: {
      status: 'MVP - Production Ready (Server Currently Paused)',
      reflection: 'Building Jignu in 1.5 months taught me that speed and quality aren\'t opposites. Right architecture makes you faster. MVP means feature-complete + secure, not sloppy.',
      ifBuildingAgain: [
        'Add tenant isolation tests from day 1 (not after)',
        'Build analytics to track company activity',
        'Implement automated deployment for fast relaunch',
        'Add observability (logs, traces) from start',
      ],
      links: {},
    },
    
    currentStatus: {
      launched: 'Feb 2025',
      uptime: 'MVP complete',
      activeUsers: 'Local testing + client validation',
    },
  },
},

  {
    id: 'wyka',
    name: 'Wyka',
    slug: 'wyka',
    description: 'Marketing automation for agents. Custom Canva marketplace. OAuth + Passport.js auth.',
    shortDescription: 'Marketing automation with Canva integration',
    thumbnail: '/projects/wyka/images/main.png',
    status: 'beta',
    year: '2025',
    complexity: 8,
    impact: 7,
    
    grid: {
      role: 'Full Stack Owner',
      company: 'Freelance', 
  nda: false,  
      metrics: 'Custom marketplace, Real-time sync, OAuth cross-platform',
      tags: ['Next.js', 'OAuth', 'Passport.js', 'Real-time', 'Canva'],
    },
    
    caseStudy: {
      timeline: 'Dec 2025 - Feb 2026',
      team: 'Solo',
      
currentStatus: {
      launched: 'Feb 2025',
      uptime: 'MVP complete',
      activeUsers: 'Local testing + client validation',
    },
      problem: {
        context: 'Marketing agents manage client data in bulk. Need design tools integrated. Switching wastes time.',
        pain: 'Agents enter data in dashboard, switch to Canva, manually recreate. Time-consuming.',
        challenge: 'How to auto-populate dashboard data into custom Canva interface for easy design?',
        insight: 'Integration isn\'t API calls. It\'s unified context. Data flows seamlessly between systems.',
      },
      
      solution: {
        approach: 'Custom Canva Marketplace + OAuth/Passport.js Cross-Platform Auth',
        architecture: 'Agent Dashboard → OAuth Login → Custom Canva App → Design with auto-populated data',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'React.js'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['OAuth', 'Passport.js', 'Canva API', 'Vercel'],
        },
        decisions: [
          {
            title: 'Custom Canva Marketplace',
            description: 'Why custom instead of standard API?',
            why: 'Standard API didn\'t support auto-populating agent data. Custom app needed.',
          },
          {
            title: 'OAuth + Passport.js',
            description: 'Why both instead of one?',
            why: 'OAuth handles login. Passport manages session across dashboard + Canva. Unified auth.',
          },
          {
            title: 'Real-time Data Sync',
            description: 'How to keep dashboard and Canva app in sync?',
            why: 'Data entered in dashboard needs instant availability in Canva.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Data Flow', before: 'Manual entry in both systems', after: 'Auto-populated & real-time', impact: 'Workflow streamlined' },
          { label: 'Auth Integration', before: 'Separate logins', after: 'Unified OAuth across', impact: 'Single sign-on' },
          { label: 'Status', before: 'Design phase', after: 'Live & agents using', impact: 'Production active' },
        ],
        adoption: {
          launch: 'Nov 2025',
          users: 'Marketing agents',
          uptime: '99%+',
        },
        learning: 'Integration is about eliminating context-switching. Seamless data flow beats features.',
      },
      
      challenges: [
        {
          title: 'OAuth Token Management',
          problem: 'Tokens expire. Sessions lost between dashboard and Canva app.',
          solution: 'Implemented refresh token logic. Auto re-auth without user intervention.',
          learning: 'OAuth is stateless. Manage state yourself.',
          result: 'Seamless session persistence across platforms.',
        },
        {
          title: 'Real-time Data Sync',
          problem: 'Canva app showing stale data from dashboard.',
          solution: 'WebSocket connection + event emitters. Dashboard emits, Canva listens.',
          learning: 'Real-time requires event-driven architecture.',
          result: 'Data updates in <100ms across platforms.',
        },
      ],
      
      deepDives: [
        {
          title: 'Cross-Platform Session Management',
          description: 'How to maintain sessions across dashboard and Canva app.',
          codeBefore: 'Dashboard login separate from Canva. Two sessions, two tokens.',
          codeAfter: 'OAuth login → Passport session → Valid in both dashboard and Canva app',
          why: 'Unified session = seamless user experience.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Building Wyka taught me that integration is about UX, not just API plumbing.',
        ifBuildingAgain: [
          'Implement event-based sync from start',
          'Add robust OAuth error handling early',
          'Test cross-platform session edge cases',
        ],
        links: {
          demo: '',
        },
        
      },
    },
  },
 
{
  id: 'hospital-saas',
  name: 'Hospital Management SaaS',
  slug: 'hospital-management-saas',
  description: 'Full-stack healthcare SaaS. 5+ hospital clients. 100+ daily appointments. End-to-end pages, dashboards, API integrations. 73% performance improvement.',
  shortDescription: 'Full-stack healthcare platform for 5+ hospitals',
  thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
  status: 'live',
  year: '2024',
  complexity: 9,
  impact: 9,
  grid: {
    role: 'Full Stack Developer',
  company: 'Tensys', 
  nda: true,  
    metrics: '5 clients, 100+ users/day, Figma→Production, 73% faster',
    tags: ['Next.js', 'React Router', 'React PDF', 'Performance', 'Healthcare', 'SEO'],
  },
  
  caseStudy: {
    timeline: 'Sep 2024 - Oct 2025 (13 months)',
    team: '4-person frontend team + digital marketing team',
    
    problem: {
      context: '5 hospital clients manually managing appointments, patient history, invoices, user profiles scattered. No unified system. Website needed for client acquisition.',
      pain: 'Manual processes = errors. Slow load times = users bouncing. No SEO = zero discovery. Invoice generation manual.',
      challenge: 'How to build full-stack SaaS (pages + dashboards + APIs + invoices) handling 100+ daily appointments while maintaining Figma-perfect design and SEO?',
      insight: 'Healthcare needs speed (performance) + precision (pixel-perfect UI) + discovery (SEO). Full-stack ownership needed.',
    },
    
    solution: {
      approach: 'End-to-End Full-Stack: Figma→Code→API→Production with Token Management & PDF Invoices',
      architecture: 'Frontend (Next.js pages + React Router navigation) → Token-based Auth → API Gateway → Dashboards (history, invoices, profiles) → React PDF invoices → Deployment',
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'React Router DOM'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        features: ['Token management', 'React PDF invoices', 'Helmet SEO', 'Figma-to-code', 'Mobile-first responsive'],
        infra: ['AWS EC2', 'Redis', 'Vercel'],
      },
      decisions: [
        {
          title: 'End-to-End Ownership',
          description: 'Why build everything (pages + dashboards + APIs)?',
          why: 'Healthcare SaaS needs tight integration. Pages → Auth → Dashboards → Invoices → PDF. Full ownership = consistency.',
        },
        {
          title: 'Token-Based Auth',
          description: 'Why token management instead of sessions?',
          why: 'Stateless auth scales. Token refresh on dashboard. Secure + performant.',
        },
        {
          title: 'React PDF for Invoices',
          description: 'Why client-side PDF generation?',
          why: 'Instant download. Reusable template for all hospitals. No server overhead.',
        },
        {
          title: 'Figma-Perfect Design System',
          description: 'Why pixel-perfect from Figma?',
          why: 'Healthcare requires trust. Perfect UI = professional. Builds client confidence.',
        },
        {
          title: 'Mobile-First Responsive',
          description: 'Why mobile-first approach?',
          why: 'Doctors use phones. Receptionists use tablets. One design for all devices.',
        },
        {
          title: 'Helmet for SEO',
          description: 'Why server-side SEO tags?',
          why: 'Client website needs Google ranking. Helmet handles meta tags, OpenGraph, structured data.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Load Time', before: '3 seconds', after: '800ms', impact: '73% faster' },
        { label: 'Lighthouse Score', before: '50', after: '90+', impact: 'Production-ready' },
        { label: 'Design Accuracy', before: 'Approximate from Figma', after: 'Pixel-perfect match', impact: '100% fidelity' },
        { label: 'Data Quality', before: '15% invalid', after: '~2% invalid', impact: '85% improvement' },
        { label: 'Invoice Generation', before: 'Manual PDFs', after: 'Instant React PDF', impact: 'Zero manual work' },
        { label: 'Concurrent Users', before: '10 users', after: '100+ users', impact: 'Sustained no degradation' },
        { label: 'SEO Rankings', before: 'Not ranked', after: 'Page 1 keywords', impact: 'Client acquisition' },
      ],
      adoption: {
        launch: 'Live across 5 hospitals',
        users: '100+ daily active + patients',
        uptime: '99%+ production',
      },
      learning: 'Full-stack healthcare needs performance (speed) + precision (design) + discovery (SEO). All three matter equally.',
    },
    
    challenges: [
      {
        title: 'Figma to Code Pixel-Perfection',
        problem: 'Design system complex. Components needed to match Figma exactly.',
        solution: 'Built component library. Used Tailwind with design tokens. Worked closely with design team.',
        learning: 'Pixel-perfect UI requires discipline and designer collaboration.',
        result: '100% Figma fidelity across all pages.',
      },
      {
        title: 'Mobile Responsiveness at Scale',
        problem: 'Pages perfect on desktop, broken on tablet/phone.',
        solution: 'Mobile-first approach. Built on small screens first, scaled up.',
        learning: 'Mobile-first = less tech debt later.',
        result: 'Works seamlessly across all devices.',
      },
      {
        title: 'Token Management & Auth Flow',
        problem: 'Tokens expiring. Users kicked out of dashboards.',
        solution: 'Refresh token logic. Automatic re-auth without user intervention.',
        learning: 'Token management is critical for user experience.',
        result: 'Seamless auth across all pages + dashboards.',
      },
      {
        title: 'React PDF Invoice Generation',
        problem: 'Invoices slow to generate. Template needed for 5 hospitals.',
        solution: 'Reusable PDF template. Dynamic data injection. Client-side generation.',
        learning: 'PDF generation requires careful performance tuning.',
        result: 'Invoices generate in <2 seconds. Reusable across all clients.',
      },
      {
        title: 'SEO for Healthcare Discovery',
        problem: 'Website invisible on Google. No patient traffic.',
        solution: 'Helmet for meta tags, OpenGraph, structured data. Worked with marketing team for keyword research.',
        learning: 'SEO is technical + content. Both matter.',
        result: 'Page 1 rankings for hospital keywords.',
      },
    ],
    
    deepDives: [
      {
        title: 'Full-Stack Component Architecture',
        description: 'How to structure components for Figma-perfect consistency.',
        codeBefore: 'Random component styles. Inconsistent across pages.',
        codeAfter: 'Component library with design tokens. Every component reusable + consistent.',
        why: 'Design consistency at scale requires architecture first.',
      },
      {
        title: 'Token-Based Auth Flow',
        description: 'How to manage auth across pages + dashboards.',
        codeBefore: 'Login → Token → Store locally → Hope it doesn\'t expire',
        codeAfter: 'Login → Access token + Refresh token → Automatic refresh on expiry → Seamless UX',
        why: 'Stateless auth scales. Refresh logic handles UX.',
      },
      {
        title: 'React PDF Reusable Invoice Template',
        description: 'How to build one template for 5 different hospitals.',
        codeBefore: 'Manual invoice generation per hospital. Different layouts.',
        codeAfter: 'Single template. Dynamic data injection. Works for all clients.',
        why: 'Template-based approach = fast + consistent.',
      },
      {
        title: 'Helmet SEO Implementation',
        description: 'How to make healthcare website rank on Google.',
        codeBefore: 'No meta tags. No structured data.',
        codeAfter: 'Helmet: meta tags, OpenGraph, structured data, canonical URLs',
        why: 'SEO = technical + content. Helmet handles technical.',
      },
    ],
    
    outcome: {
      status: 'Live in Production (NDA - Screenshots Not Public)',
      reflection: 'Building Hospital SaaS taught me that full-stack healthcare needs speed (performance) + precision (pixel-perfect design) + discovery (SEO). All three equally important. Healthcare = trust. Trust = perfect execution.',
      current: 'Live across 5 hospitals. 100+ daily users. Patient acquisition through SEO ongoing.',
      ifBuildingAgain: [
        'Implement design tokens from day 1 (not after)',
        'Build component library before pages',
        'Plan SEO architecture from start',
        'Test invoice PDFs with real hospital data early',
        'Profile on production healthcare load earlier',
      ],
      links: {
        deployment: 'Live on AWS EC2 + Vercel (NDA - no public screenshots)',
      },
    },

    currentStatus: {
      launched: 'Sep 2024',
      uptime: '99%+ production',
      activeUsers: '100+ daily across 5 hospitals',
    },
  },
},
  {
  id: 'medtech-dashboards',
  name: 'Medtech Dashboards',
  slug: 'medtech-dashboards',
  description: 'Multi-workflow appointment management. Doctor visits, home visits, labs, nursing, physiotherapy. Admin dashboard with onboarding, content management, transactions, earnings.',
  shortDescription: 'Multi-specialty appointment & workflow management',
  thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
  status: 'live',
  year: '2025',
  complexity: 9,
  impact: 9,
  grid: {
    role: 'Full Stack Developer',
    company: 'Tensys', 
  nda: true,  
    metrics: 'Multi-workflow, Transactions, Earnings, Real-time',
    tags: ['Next.js', 'Performance', 'Dashboards', 'Image Compression', 'Server-side Pagination'],
  },
  
  caseStudy: {
    timeline: 'Sep 2024 - Oct 2025',
    team: '5-person  team + digital marketing team',
    
    problem: {
      context: 'Healthcare platform managing multiple specialist workflows (doctors, labs, nurses, physios) in single appointment system.',
      pain: 'Manual appointment handling across specialties. No unified view. Bulk data overwhelming. Slow uploads. Data leaks on unoptimized images.',
      challenge: 'How to manage 5+ concurrent workflows in one appointment dashboard with admin control, security, and performance at scale?',
      insight: 'Multi-specialty healthcare needs unified orchestration. Security and performance are non-negotiable.',
    },
    
    solution: {
      approach: 'Multi-Workflow Appointment Dashboard + Secure Admin Panel with Performance Optimization',
      architecture: 'Frontend (Image Compression) → API (Server-side Pagination) → MongoDB (Indexed) → Redis (Caching) → Admin Dashboard (Onboarding, Content, Transactions, Earnings)',
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        optimization: ['Image compression on upload', 'Server-side pagination', 'Robust filters', 'Excel export'],
        infra: ['AWS EC2', 'Redis', 'Vercel'],
      },
      decisions: [
        {
          title: 'Multi-Workflow Orchestration',
          description: 'How to handle doctor visits, home visits, labs, nursing, physio in one system?',
          why: 'Each workflow distinct but must sync in unified appointment view. Role-based dashboard per specialist type.',
        },
        {
          title: 'Image Compression on Upload',
          description: 'Why compress images before storage?',
          why: 'Uncompressed images leak sensitive patient data in metadata. Compression + metadata stripping = security + performance.',
        },
        {
          title: 'Server-side Pagination',
          description: 'Why pagination instead of loading all data?',
          why: 'Bulk healthcare data (100k+ records). Client-side pagination crashes. Server-side pagination distributes data in chunks.',
        },
        {
          title: 'Robust Filters on Every Page',
          description: 'Why filters everywhere?',
          why: 'Healthcare staff need to find specific data fast. Filters by date, specialist, status, location, etc.',
        },
        {
          title: 'Excel Export',
          description: 'Why Excel export capability?',
          why: 'Healthcare teams still use Excel. Export filtered data for reports, audits, analytics.',
        },
        {
          title: 'Admin Dashboard for Content',
          description: 'Why separate admin panel?',
          why: 'Doctor/nurse/physio onboarding, credentials, availability, dynamic site elements all managed centrally.',
        },
        {
          title: 'Transactions + Earnings Modules',
          description: 'Why separate modules?',
          why: 'Payment tracking and revenue reporting. Separate concerns, independent scaling.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Data Upload', before: 'Unoptimized, 5MB+ per image', after: 'Compressed, <500KB, metadata stripped', impact: '90% smaller + secure' },
        { label: 'Page Load', before: 'Loading all data = slow', after: 'Server-side pagination', impact: 'Instant first load' },
        { label: 'Filter Performance', before: 'No filters', after: 'Indexed filters on all pages', impact: 'Search <100ms' },
        { label: 'Workflows Managed', before: '1 (appointments only)', after: '5+ (doctor, home, lab, nurse, physio)', impact: 'Unified orchestration' },
        { label: 'Data Integrity', before: 'Metadata exposure risk', after: 'Compressed + stripped metadata', impact: 'HIPAA-compliant' },
      ],
      adoption: {
        launch: 'Live',
        users: 'Multiple specialists, patient users',
        uptime: '99%+ production',
      },
      learning: 'Scaling healthcare dashboards requires performance AND security in lock-step. Compress images, paginate data, filter efficiently.',
    },
    
    challenges: [
      {
        title: 'Image Upload Security & Performance',
        problem: 'Uncompressed patient images expose metadata. Large uploads slow the dashboard.',
        solution: 'Compress on upload + strip EXIF metadata + store only necessary dimensions.',
        learning: 'Image security isn\'t just permissions. It\'s metadata control.',
        result: '90% size reduction. Zero metadata leaks. Fast uploads.',
      },
      {
        title: 'Bulk Data Handling',
        problem: 'Healthcare generates massive datasets. Client-side pagination crashes.',
        solution: 'Implement server-side pagination. Chunk data on load. Stream to frontend.',
        learning: 'Pagination isn\'t optional at scale. It\'s architectural.',
        result: 'Handles 100k+ records without slowdown.',
      },
      {
        title: 'Multi-Workflow Sync',
        problem: '5 specialist workflows need unified appointment view. Keeping sync is hard.',
        solution: 'Event-driven updates. One workflow changes → others notified in real-time.',
        learning: 'Multi-workflow systems need choreography, not orchestration.',
        result: 'All workflows in sync. Real-time updates.',
      },
      {
        title: 'Admin Content Management at Scale',
        problem: 'Onboarding doctors, nurses, physios. Managing availability. Dynamic site elements.',
        solution: 'Centralized admin dashboard. Bulk operations. Template system.',
        learning: 'Admin UX is as important as user UX.',
        result: 'Staff onboarding in minutes, not days.',
      },
    ],
    
    deepDives: [
      {
        title: 'Image Compression + Metadata Stripping',
        description: 'How to secure patient images while optimizing.',
        codeBefore: 'Upload image as-is. Store full resolution. Metadata intact (location, device, etc).',
        codeAfter: 'Compress to target size. Strip EXIF metadata. Store optimized version only.',
        why: 'Patient images contain sensitive metadata. Compression + stripping = security + performance.',
      },
      {
        title: 'Server-side Pagination Pattern',
        description: 'How to handle bulk healthcare data.',
        codeBefore: 'fetch all records → send all to client → client renders',
        codeAfter: 'fetch page 1 (50 records) → send only that page → client renders → load next page on scroll',
        why: 'Healthcare datasets are massive. Pagination is mandatory.',
      },
      {
        title: 'Robust Filters Architecture',
        description: 'How to filter efficiently across multiple fields.',
        codeBefore: 'Manual filter in frontend. Loop through all data.',
        codeAfter: 'Database indexes on filter fields. Query-level filtering. Return only matching records.',
        why: 'Indexed filters at DB level = sub-100ms queries.',
      },
    ],
    
    outcome: {
      status: 'Live in Production (NDA)',
      reflection: 'Building multi-workflow healthcare dashboards taught me that performance and security can\'t be separated. Every optimization must consider privacy.',
      ifBuildingAgain: [
        'Implement image compression from day 1',
        'Plan pagination architecture before building',
        'Add audit logging for all admin actions',
        'Test filters with real-world healthcare data early',
      ],
      links: {},
    },

    currentStatus: {
      launched: 'Sep 2024',
      uptime: '99%+ production',
      activeUsers: '100+ daily across 5 hospitals',
    },
  },
},


 {
  id: 'pg-accommodation',
  name: 'PG Accommodation Platform',
  slug: 'pg-accommodation-platform',
  description: 'Multi-tenant property management. Component-driven frontend. Mobile-first responsive UI. User dashboards for notice tracking, invoice management, profile editing.',
  shortDescription: 'Component-driven property management platform',
  thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
  status: 'live',
  year: '2024',
  complexity: 8,
  impact: 7,
  
  grid: {
    role: 'Full Stack  Developer',
    company: 'Tensys', 
  nda: true,  
    metrics: 'End-to-end pages, Mobile-first, Reusable components',
    tags: ['Next.js', 'React Router DOM', 'TypeScript', 'Tailwind CSS', 'React PDF', 'JWT Auth'],
  },
  
  caseStudy: {
    timeline: 'Sep 2024 - Oct 2025 (Pair programming)',
    team: '5-person team + digital marketing team',
    problem: {
      context: 'PG owners managing multiple properties. Tenants applying online. Manual processes everywhere.',
      pain: 'Manual onboarding. Invoice generation offline. Notice tracking scattered. No unified tenant management.',
      challenge: 'How to build scalable, mobile-first property management frontend where landlords and tenants manage everything seamlessly?',
      insight: 'Component-driven architecture + reusable patterns = scalable product without constant rewrites.',
    },
    
    solution: {
      approach: 'Component-Driven End-to-End Pages with Mobile-First Responsiveness',
      architecture: 'Reusable Components → Page-Level Composition → Responsive Layouts (Mobile, Tablet, Desktop)',
      techStack: {
        frontend: ['Next.js', 'React Router DOM', 'TypeScript', 'Tailwind CSS', 'React PDF', 'Helmet (SEO)', 'React Hooks'],
        features: ['Lazy loading', 'Code splitting', 'Dynamic memoization', 'Token-based auth', 'Responsive design'],
        security: ['Access tokens', 'Refresh tokens', 'Secure headers', 'Token validation middleware'],
        optimization: ['Image optimization', 'Component memoization', 'Code splitting by route', 'Lazy loaded modals'],
        database: ['MongoDB'],
        infra: ['Vercel'],
      },
      decisions: [
        {
          title: 'Component-Driven Architecture',
          description: 'Why build reusable components instead of pages from scratch?',
          why: 'Reusable components = consistency + speed. Build once, use everywhere. Less code duplication.',
        },
        {
          title: 'Mobile-First Responsive Design',
          description: 'Why mobile-first instead of desktop-first?',
          why: 'Tenants access dashboards on phones. Mobile-first ensures good UX on all devices. Scales up, not down.',
        },
        {
          title: 'End-to-End Page Ownership',
          description: 'Why build complete pages, not isolated components?',
          why: 'Pages have context. Building isolated components = lots of tweaking + rewrites. End-to-end = ship fast.',
        },
        {
          title: 'Access + Refresh Token Security',
          description: 'Why two tokens instead of one?',
          why: 'Access token: short-lived, used for API calls. Refresh token: long-lived, renews access. Secure + smooth UX.',
        },
        {
          title: 'React PDF for Invoices',
          description: 'Why client-side PDF generation?',
          why: 'Instant download. No server overhead. Users generate invoices in real-time.',
        },
        {
          title: 'Helmet for SEO',
          description: 'Why Helmet on frontend?',
          why: 'Meta tags, security headers, OG tags for sharing. Improves SEO and social sharing.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Page Load Performance', before: 'No optimization', after: 'Code split + lazy load', impact: '65% faster' },
        { label: 'Component Reusability', before: '0%', after: '75%+', impact: 'Faster feature shipping' },
        { label: 'User Dashboard', before: 'Scattered pages', after: 'Unified interface', impact: 'Better UX' },
        { label: 'Mobile Responsiveness', before: 'Desktop-only', after: 'Mobile-first', impact: '100% device coverage' },
        { label: 'Invoice Generation', before: 'Manual', after: 'One-click download', impact: 'User autonomy' },
      ],
      adoption: {
        launch: 'Oct 2024',
        users: 'Property owners + tenants',
        uptime: '99%+ production',
      },
      learning: 'Component-driven architecture + mobile-first = scalable frontend without constant rewrites. Build once, maintain forever.',
    },
    
    challenges: [
      {
        title: 'Data Structure Transformation',
        problem: 'API returns data in format X. Components need format Y. Constant tweaking required.',
        solution: 'Built data transformation layer. API response → formatted data → components. Consistent format.',
        learning: 'Data transformation at the boundary prevents component bloat.',
        result: 'Components stay clean. Easy to swap backends.',
      },
      {
        title: 'Token-Based Security at Scale',
        problem: 'Access tokens expire. Users redirected to login constantly. Bad UX.',
        solution: 'Refresh token flow. When access expires, auto-refresh silently. User doesn\'t notice.',
        learning: 'Seamless token management = better security + better UX.',
        result: 'Zero unexpected logouts. Secure data.',
      },
      {
        title: 'Component Reusability vs Flexibility',
        problem: 'Build too generic = props hell. Build too specific = not reusable.',
        solution: 'Compound components pattern. Parent controls layout, children handle content.',
        learning: 'Reusability requires architecture thinking, not just code.',
        result: '75%+ code reuse across pages.',
      },
      {
        title: 'Mobile-First Responsive at Scale',
        problem: 'Desktop layout breaks on mobile. Media query spaghetti code.',
        solution: 'Mobile-first CSS. Build for mobile, enhance for desktop. Tailwind breakpoints from start.',
        learning: 'Mobile-first is faster and cleaner than desktop-first.',
        result: 'Perfect responsive on all devices. No layout shifts.',
      },
      {
        title: 'PDF Generation Performance',
        problem: 'Large invoices slow to generate. UI freezes.',
        solution: 'Lazy load PDF sections. Generate asynchronously. Progress indication.',
        learning: 'PDF generation is heavy. Offload with async patterns.',
        result: 'Invoices generate in <2 seconds. UI stays responsive.',
      },
    ],
    
    deepDives: [
      {
        title: 'Component-Driven Page Composition',
        description: 'How to build end-to-end pages from reusable components.',
        codeBefore: 'Page = one big file. Lots of markup. Hard to reuse.',
        codeAfter: 'Page = composition of components. <Header /> + <Form /> + <Table /> + <Footer />. Reusable.',
        why: 'Composition over duplication. Build components once, compose pages many times.',
      },
      {
        title: 'Token Refresh Pattern',
        description: 'How to handle token expiry without disrupting user.',
        codeBefore: 'Token expires → error → redirect to login. User loses context.',
        codeAfter: 'Token expires → intercept → refresh token → retry request → user continues. Seamless.',
        why: 'Seamless auth = better UX + better security.',
      },
      {
        title: 'Mobile-First Responsive Patterns',
        description: 'How to structure CSS for mobile-first.',
        codeBefore: 'CSS: desktop styles. @media mobile: override. Complex.',
        codeAfter: 'CSS: mobile styles. @media lg: enhance. Simple. Tailwind: sm, md, lg breakpoints.',
        why: 'Mobile-first is additive, not subtractive. Simpler.',
      },
      {
        title: 'Data Transformation at Boundaries',
        description: 'How to handle API data mismatch.',
        codeBefore: 'API data → Use directly in components. Components know API shape. Tight coupling.',
        codeAfter: 'API data → Transform → Components use clean format. Loose coupling.',
        why: 'Decoupling from API = easy to swap backends or change API.',
      },
    ],
    
    outcome: {
      status: 'Live in Production',
      reflection: 'Building PG Accommodation taught me that component-driven architecture + mobile-first thinking = scalable products. Don\'t optimize for desktop and squeeze mobile. Build for mobile, enhance desktop.',
      ifBuildingAgain: [
        'Implement component library testing from day 1',
        'Add Storybook for component documentation',
        'Build design tokens early (colors, spacing, typography)',
        'Implement analytics for component usage',
      ],
      links: {
        demo: 'https://pg-accommodation.vercel.app',
      },
    },
    
    currentStatus: {
      launched: 'Oct 2024',
      uptime: '99%+ production',
      activeUsers: 'Property owners + tenants',
    },
  },
},

{
  id: 'hospital-websites',
  name: 'Hospital Websites Series',
  slug: 'hospital-websites-series',
  description: '5+ production healthcare websites. Patient portals, doctor dashboards, lab services. JWT + RBAC. Real workflows.',
  shortDescription: '5+ healthcare websites built end-to-end',
  thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
  status: 'live',
  year: '2023',
  complexity: 6,
  impact: 8,
  
  grid: {
    role: 'MERN Stack Developer',
    company: 'Primates', 
  nda: true,  
    metrics: '5+ websites, 5+ clients live, JWT + RBAC',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Healthcare', 'AWS'],
  },
  
  caseStudy: {
    timeline: 'Nov 2023 - Aug 2024 (9 months at Primates)',
    team: '3-person team',
    
    problem: {
      context: 'Multiple hospitals need custom websites. Each has unique workflows but similar core requirements (patient booking, doctor management, lab tracking).',
      pain: 'Building from scratch each time = inefficient. Client needs unique customization = can\'t use template. Each hospital took 3-4 months.',
      challenge: 'How to balance reusable base templates with client-specific healthcare requirements without long development cycles?',
      insight: 'Healthcare websites need standardization (speed) + customization (client needs). The right architecture makes both possible.',
    },
    
    solution: {
      approach: 'Reusable Component Library + Client-Specific Configuration',
      architecture: 'Base Template (Patient Portal, Doctor Dashboard, Lab Services) + Client Branding + Custom Workflows',
      techStack: {
        frontend: ['React.js', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        infra: ['AWS EC2', 'JWT Auth', 'RBAC middleware'],
        features: ['Patient booking', 'Doctor dashboards', 'Lab management', 'Role-based access', 'Appointment tracking'],
      },
      decisions: [
        {
          title: 'Reusable Base Template',
          description: 'Why not build from scratch for each hospital?',
          why: 'Standardized components (booking UI, dashboard layout, auth flow) cut development time. Client-specific customization handled via config, not code changes.',
        },
        {
          title: 'JWT + RBAC for Healthcare',
          description: 'How to secure patient data across different roles?',
          why: 'Patients only see their data. Doctors only see their patients. Labs only see lab orders. Role-based middleware enforces at every API call.',
        },
        {
          title: 'MongoDB Flexibility',
          description: 'Why MongoDB over PostgreSQL?',
          why: 'Each hospital has slightly different workflows. Flexible schema allows different structures (number of labs, appointment slots, etc.) without migrations.',
        },
        {
          title: 'AWS EC2 Deployment',
          description: 'Why not serverless?',
          why: 'Healthcare apps need consistent uptime + real-time features. EC2 + Docker gives reliability for production use.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Websites Built', before: '0', after: '5+ live', impact: '5 hospital clients' },
        { label: 'Development Time', before: '3-4 months each', after: '6-8 weeks per client', impact: '50% faster' },
        { label: 'Code Reuse', before: '0%', after: '70%+', impact: 'Template saves time' },
        { label: 'Security', before: 'No auth', after: 'JWT + RBAC complete', impact: 'Zero breaches' },
        { label: 'Concurrent Users', before: 'Unknown', after: '100+ per hospital', impact: 'Proven scale' },
      ],
      adoption: {
        launch: 'First: Nov 2023, All 5: Jun 2024',
        users: '500+ users across 5 hospitals',
        uptime: '99%+ sustained production',
      },
      learning: 'Balancing reuse and customization is an art. Too rigid = inflexible. Too flexible = slow. Architecture matters more than technology choice.',
    },
    
    challenges: [
      {
        title: 'Hospital-Specific Customization',
        problem: 'Each hospital wants unique workflows. How flexible can template be without becoming unwieldy?',
        solution: 'Built configurable workflows. Hospital admins customize via UI (no code changes). Separate config per hospital.',
        learning: 'Customization != code changes. It\'s configuration at the right level.',
        result: '5 hospitals with distinct workflows, same codebase.',
      },
      {
        title: 'Patient Data Security',
        problem: 'Ensuring patients only see their data. Doctors only see their patients. Labs only see lab orders.',
        solution: 'RBAC middleware. Every query scoped to user role + hospital + patient relationship.',
        learning: 'Healthcare security isn\'t optional. It\'s non-negotiable.',
        result: 'Zero unauthorized access incidents across 5 hospitals.',
      },
      {
        title: 'Real-time Appointment Sync',
        problem: 'Doctor updates slot availability. Patient should see instantly. Lag = booking errors.',
        solution: 'WebSocket updates. Doctor changes slot → event → all patients see update instantly.',
        learning: 'Real-time in healthcare prevents double-booking and errors.',
        result: 'Zero double-booking incidents reported.',
      },
      {
        title: 'HIPAA Compliance Basics',
        problem: 'Healthcare data is sensitive. Need audit trail + encryption.',
        solution: 'Added logging for all patient data access. Encrypted sensitive fields. Documented compliance checklist.',
        learning: 'Compliance isn\'t optional in healthcare. It\'s table-stakes.',
        result: 'All 5 hospitals passed security audits.',
      },
    ],
    
    deepDives: [
      {
        title: 'RBAC Pattern for Healthcare',
        description: 'How to enforce role-based access at every layer.',
        codeBefore: 'db.patients.find({ hospital_id: hospitalId })',
        codeAfter: 'db.patients.find({ hospital_id: hospitalId, visible_to_roles: req.user.role, assigned_doctor: req.user._id })',
        why: 'Every query must check role + hospital + assignment. No shortcuts.',
      },
      {
        title: 'Template vs Custom Balance',
        description: 'How to keep code DRY while allowing customization.',
        codeBefore: 'Build 5 separate projects (1500 lines each = 7500 lines total)',
        codeAfter: 'Build 1 template (1500 lines) + 5 configs (100 lines each = 500 lines) = 2000 lines total',
        why: '73% code reduction. Easier to maintain. Easier to add new hospitals.',
      },
    ],
    
    outcome: {
      status: 'Live in Production',
      reflection: 'Building 5+ hospital websites taught me that healthcare workflows are complex but similar. The right template saves months. Security and real-time sync are non-negotiable.',
      ifBuildingAgain: [
        'Implement audit logging from day 1',
        'Add HIPAA compliance checklist from start',
        'Test with real hospital workflows earlier',
        'Build admin customization UI first, then templates',
      ],
      links: {
        deployment: 'Live on AWS EC2',
      },
    },
    
    currentStatus: {
      launched: 'Jun 2024',
      uptime: '99%+ sustained',
      activeUsers: '500+ across 5 hospitals',
    },
  },
},
{
  id: 'leads-management-dashboard',
  name: 'Leads Management Dashboard',
  slug: 'leads-management-dashboard',
  description: 'Insurance leads platform. Public landing page + Admin dashboard for agent onboarding + Leads tracking dashboard. QR-based lead capture. MVP MERN stack.',
  shortDescription: 'QR-based insurance leads capture MVP',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
  status: 'beta',
  year: '2024',
  complexity: 7,
  impact: 7,
  
  grid: {
    role: 'MERN Stack Developer',
    company: 'Primates', 
  nda: true,  
    metrics: 'Landing page, Admin dashboard, Leads tracking, QR capture',
    tags: ['React.js', 'Node.js', 'MongoDB', 'QR codes', 'Monolith'],
  },
  
  caseStudy: {
    timeline: 'Nov 2023 - Aug 2024',
    team: '2-person MERN team',
    
    problem: {
      context: 'Insurance company needs field agents to capture leads in public places. Manual lead entry = slow, errors, no tracking. No agent performance visibility.',
      pain: 'Agents scattered across locations. No unified lead capture system. Manual paper forms. No agent-to-lead attribution.',
      challenge: 'How to build system where agents in field capture leads via QR codes, admin tracks agents, and leads are centrally managed?',
      insight: 'QR codes remove friction. Physical + digital integration powerful for field sales.',
    },
    
    solution: {
      approach: 'Three-Interface Platform: Landing Page + Admin Dashboard + Leads Tracking',
      architecture: 'Public Landing Page (agent signup) → Admin Dashboard (agent onboarding + QR generation) → Leads Dashboard (track + filter leads) ← QR scans from field',
      techStack: {
        frontend: ['React.js', 'CSS'],
        backend: ['Node.js', 'Express.js', 'Monolith'],
        database: ['MongoDB'],
        features: ['QR code generation', 'Agent onboarding', 'Leads dashboard', 'Agent performance tracking', 'Lead filtering + search'],
      },
      decisions: [
        {
          title: 'QR Code for Lead Capture',
          description: 'Why QR codes instead of manual form?',
          why: 'Zero friction. Scan QR → instant lead captured. Agents don\'t explain, system records automatically.',
        },
        {
          title: 'Three Separate Interfaces',
          description: 'Why landing page + admin + leads dashboard?',
          why: 'Clear separation: public (agent signup), admin (control), leads (analytics). Each interface focused.',
        },
        {
          title: 'Agent-Scoped Lead Attribution',
          description: 'Why tie leads to agents?',
          why: 'Performance tracking. Know which agent captured which lead. Commission calculation. Accountability.',
        },
        {
          title: 'Monolith Backend for Speed',
          description: 'Why monolith for MVP?',
          why: 'Speed to market critical. Single codebase faster than microservices. Easier to iterate.',
        },
        {
          title: 'QR with Embedded Agent ID',
          description: 'How to know which agent scanned?',
          why: 'Each QR encodes agent_id. Scan decodes → system knows source. Automatic attribution.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Lead Capture', before: 'Manual paper forms', after: 'QR scan instant', impact: 'Zero friction' },
        { label: 'Agent Tracking', before: 'No visibility', after: 'Real-time dashboard', impact: 'Performance measured' },
        { label: 'Lead Organization', before: 'Spreadsheets', after: 'Centralized database', impact: 'Organized + searchable' },
        { label: 'QR Distribution', before: 'N/A', after: 'Unique per agent', impact: 'Field-ready in minutes' },
      ],
      adoption: {
        launch: 'Aug 2024',
        users: 'Insurance agents + admin team',
        uptime: 'MVP phase (server currently paused)',
      },
      learning: 'QR codes are powerful for removing friction in field work. Physical + digital integration beats purely digital workflows for on-the-go teams.',
    },
    
    challenges: [
      {
        title: 'QR Code Generation at Scale',
        problem: 'Need unique QR per agent. Generating + storing 100+ codes without bloating system.',
        solution: 'Generate QR on-demand. Store mapping in DB. Reuse template, regenerate new codes instantly.',
        learning: 'QR generation is cheap computationally. On-demand is faster than batch pre-generation.',
        result: 'Each agent gets unique QR instantly. No storage overhead.',
      },
      {
        title: 'Leads Attribution Accuracy',
        problem: 'QR scanned. How to guarantee correct agent attribution?',
        solution: 'Encode agent_id directly in QR. Decode on scan. Cross-verify with session data.',
        learning: 'QR encoding is powerful for embedding context, not just URLs.',
        result: 'Zero misattribution. Every lead tied to correct agent.',
      },
      {
        title: 'Agent Onboarding UX',
        problem: 'Agents in field need fast onboarding. Complex forms = barriers.',
        solution: 'Minimal form (name, email, phone). System generates QR. Print template. Deploy.',
        learning: 'Field workflows prioritize speed over comprehensiveness.',
        result: 'Agent onboarding in <5 minutes.',
      },
      {
        title: 'Server Maintenance Pause',
        problem: 'Client paused server due to internal priorities. System offline currently.',
        solution: 'Code complete and tested. Ready to redeploy when client resumes.',
        learning: 'Sometimes client needs shift. Quality code allows quick relaunch.',
        result: 'Can go live in hours when needed.',
      },
    ],
    
    deepDives: [
      {
        title: 'QR Code Context Encoding',
        description: 'How to embed agent identity in QR without URL parameters.',
        codeBefore: 'Generate generic QR → https://leads.com/capture → User manually selects agent',
        codeAfter: 'Generate QR with agent_id encoded → https://leads.com/capture?agent=abc123 → System auto-selects agent',
        why: 'Embedded context = automatic, zero-error attribution.',
      },
      {
        title: 'Agent-Scoped Lead Queries',
        description: 'How to track leads per agent efficiently.',
        codeBefore: 'fetch all leads → filter in frontend by agent',
        codeAfter: 'db.leads.find({ agent_id: req.user.agent_id, status: "new" }) → only agent\'s leads',
        why: 'Database-level filtering = faster, scalable, secure.',
      },
    ],
    
    outcome: {
      status: 'MVP - Production Code Ready',
      reflection: 'Building this taught me that QR codes are powerful for bridging physical and digital sales workflows. Field teams prioritize friction removal over feature richness. MVP with monolith backend shipped fast and proved concept.',
      ifBuildingAgain: [
        'Build v2 with microservices for scaling',
        'Add analytics dashboard for lead conversion funnels',
        'Implement bulk agent onboarding + CSV import',
        'Add real-time notifications for new leads',
      ],
      links: {
        deployment: 'MVP code complete (server paused - client maintenance)',
      },
    },
    
    currentStatus: {
      launched: 'Aug 2024',
      uptime: 'MVP complete',
      activeUsers: 'Admin testing + agent validation',
    },
  },
},
];