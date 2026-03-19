export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  status: 'live' | 'beta' | 'archived';
  year: string;
  complexity: number; 
  impact: number; 
  company?: 'Freelance' | 'Tensys' | 'Primates' | 'Personal';
  type?: 'SaaS' | 'Healthcare' | 'Full-Stack' | 'Performance' | 'Marketplace';
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
        seo?:string[]
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
    description: 'Event-driven microservices platform for film production with 10+ independent services and real-time workflow synchronization via Kafka.',
    shortDescription: 'Decoupled microservices architecture for film workflows',
    thumbnail: '/projects/clapos/images/clap1.png',
    status: 'beta',
    year: '2025',
    company: 'Personal',  
    type: 'SaaS',                 
    complexity: 9,
    impact: 8,
    
    grid: {
      role: 'Full Stack Owner',
      company: 'Personal Project', 
      nda: false, 
      metrics: '10+ services live, Event-driven, Frontend production-ready',
      tags: ['Next.js', 'Kafka', 'Microservices', 'MongoDB', 'Node.js'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Present',
      team: 'Solo',
      
      problem: {
        context: 'Film production involves vendor booking, talent scheduling, location coordination, and equipment allocation—each typically managed in separate tools.',
        pain: 'Departments work in silos. Vendor updates don\'t sync to scheduling. No unified workflow. Information scattered across spreadsheets and email.',
        challenge: 'How to build a single system where 10+ independent workflows stay synchronized without tight coupling?',
        insight: 'The core problem isn\'t features—it\'s orchestration. Services must operate independently while reacting instantly to changes.',
      },
      
      solution: {
        approach: 'Event-driven microservices with Kafka as the central nervous system—services emit events, others listen and react.',
        architecture: 'Frontend (Vercel) → API Gateway → 10+ Microservices → Kafka Event Bus → MongoDB (per-service instances)',
        techStack: {
          
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['Apache Kafka', 'AWS S3', 'Cloudinary', 'Vercel', 'AWS EKS'],
        },
        decisions: [
          {
            title: 'Microservices over Monolith',
            description: 'Why split into independent services instead of one codebase?',
            why: 'Each film workflow (vendors, talent, locations, crew) has independent scaling needs. Monolith becomes a bottleneck when one service gets hammered.',
          },
          {
            title: 'Kafka Event Streaming',
            description: 'Why event-driven instead of REST calls?',
            why: 'Services don\'t call each other directly. Kafka provides durability (events persist), replay (recover from failures), and natural decoupling.',
          },
          {
            title: 'MongoDB per Service',
            description: 'Why isolated databases instead of a shared one?',
            why: 'Data isolation allows each service to scale independently and own its schema. Prevents cascading failures.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Services Built', before: '0', after: '10+ independent services', impact: 'Complete product surface' },
          { label: 'Architecture Type', before: 'Monolith planned', after: 'Event-driven (active)', impact: 'Zero direct service coupling' },
          { label: 'Frontend Status', before: 'Not started', after: 'Production-ready on Vercel', impact: 'Live and functional' },
        ],
        adoption: {
          launch: 'Frontend live',
          users: 'In active development',
          uptime: 'Backend infrastructure currently building',
        },
        learning: 'Event-driven architecture handles workflow complexity better than REST coupling. Infrastructure complexity is a real tax—observability matters from day 1.',
      },
      
      challenges: [
        {
          title: 'Service Decoupling',
          problem: 'Initial design had services calling each other directly—classic tight coupling.',
          solution: 'Switched to pure event-driven: services emit events to Kafka, others listen. No direct dependencies.',
          learning: 'True decoupling requires rethinking communication patterns entirely.',
          result: 'Services now scale independently. One service failure doesn\'t cascade.',
        },
        {
          title: 'Eventual Consistency',
          problem: 'With event-driven systems, data isn\'t immediately consistent everywhere. What if a service crashes mid-stream?',
          solution: 'Kafka event log is the source of truth. Services replay events from the log on recovery. Nothing lost.',
          learning: 'Distributed systems trade immediate consistency for resilience. That\'s the right trade.',
          result: 'Zero data loss even during service outages.',
        },
      ],
      
      deepDives: [
        {
          title: 'Event-Driven Communication Pattern',
          description: 'How independent services stay synchronized without calling each other.',
          codeBefore: 'Vendor Service → (REST call) Audition API → (REST call) Schedule API → Tight coupling, cascading failures',
          codeAfter: 'Vendor emits "vendor.created" → Kafka topic → Audition service listens → Schedule service listens → All react independently',
          why: 'Decoupling = independent scaling, failure isolation, simpler testing.',
        },
      ],
      
      outcome: {
        status: 'Frontend live, backend infrastructure in progress',
        reflection: 'Architecture scales before infrastructure. Event-driven systems add complexity, but they handle distributed workflows elegantly.',
        ifBuildingAgain: [
          'Implement event sourcing from day 1 (full audit trail)',
          'Plan Kubernetes deployment before coding',
          'Set up observability stack immediately (logging, tracing, metrics)',
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
    description: '5-language landing page (Arabic, English, French, Chinese, Mandarin) with RTL-first CSS, auto language detection, and real-time Zoho CRM lead capture.',
    shortDescription: 'Multilingual conversion-optimized landing page with RTL and CRM sync',
    thumbnail: '/projects/plusuae/images/main.png',
    status: 'live',
    year: '2025',
    complexity: 7,
    type:"Full-Stack",
    company:"Freelance",
    impact: 8,
    
    grid: {
      role: 'Full Stack Owner',
      company: 'Freelance', 
      nda: false,  
      metrics: '5 languages, RTL-first, Zero lost leads, Auto Zoho sync',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n', 'RTL', 'Zoho CRM', 'Shadcn UI'],
    },
    
    caseStudy: {
      timeline: 'Nov 1-7, 2025 (1 week turnaround)',
      team: 'Solo',
      
      problem: {
        context: 'UAE corporate client attracts international visitors from 5+ regions. English-only page causes bounce. Manual Zoho lead entry is error-prone.',
        pain: 'Non-English visitors leave immediately. Manual data entry creates duplicates and delays. No audit trail of who entered what.',
        challenge: 'Build a high-converting landing page in 5 languages where every visitor sees their native language, plus leads auto-sync to Zoho without manual work.',
        insight: 'Conversion = language + cultural messaging + frictionless CRM. Translation is not localization.',
      },
      
      solution: {
        approach: 'Auto-detected language with native messaging + real-time Zoho sync (no manual entry)',
        architecture: 'Visitor lands → Browser language detected → Native language + RTL rendering → Form fill → Instant Zoho lead creation → Client sees in CRM',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Custom i18n Context'],
          backend: ['Node.js', 'Express.js'],
          integration: ['Zoho CRM API', 'Real-time lead sync', 'Queue system with retry logic'],
          deployment: ['Vercel'],
        },
        decisions: [
          {
            title: 'Custom i18n + Auto Detection',
            description: 'Why build custom instead of using a library?',
            why: 'Off-the-shelf libraries don\'t handle auto-detection + RTL switching smoothly. Custom gave full control over the experience.',
          },
          {
            title: 'RTL-First CSS Design',
            description: 'How to support Arabic without breaking English layout?',
            why: 'Arabic = right-to-left text, margins, borders, everything. CSS variables + dynamic dir attribute handles both LTR and RTL seamlessly.',
          },
          {
            title: 'Real-time Zoho Sync',
            description: 'Why direct API instead of batching submissions?',
            why: 'Instant lead visibility in CRM. Client sees new leads in real-time, not hours later.',
          },
          {
            title: 'Native Messaging per Language',
            description: 'Why not just translate?',
            why: 'Each language needs cultural context. Arabic copy speaks to Arabic audiences. French copy resonates with French market. Word-for-word translation kills conversion.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Language Coverage', before: 'English only', after: '5 (Arabic, English, French, Chinese, Mandarin)', impact: 'Supports multilingual audience' },
          { label: 'RTL Support', before: 'Not supported', after: 'Full LTR ↔ RTL switching', impact: 'Arabic speakers engaged' },
          { label: 'Lead Capture', before: 'Manual Zoho entry (errors)', after: 'Auto-sync, real-time', impact: 'Zero manual work' },
          { label: 'Data Quality', before: 'Duplicates, delays', after: 'Perfect sync, instant', impact: 'Single source of truth' },
        ],
        adoption: {
          launch: 'Live Nov 2025',
          users: 'International visitor traffic + client team',
          uptime: '99%+ uptime',
        },
        learning: 'Conversion landing pages need three things: visitor\'s language, cultural messaging (not translation), and zero friction to your CRM.',
      },
      
      challenges: [
        {
          title: 'RTL Layout Without Breaking LTR',
          problem: 'CSS with margin-left, border-left breaks when Arabic activates RTL.',
          solution: 'Used CSS logical properties (margin-inline-start, border-inline-start). Dynamic dir attribute on html element.',
          learning: 'RTL requires architectural thinking from day 1, not bolted on after.',
          result: 'Seamless LTR ↔ RTL switching. No visual glitches.',
        },
        {
          title: 'Multilingual Content Quality',
          problem: 'Word-for-word translation sounds unnatural and doesn\'t convert.',
          solution: 'Worked with native speakers for each language. Adapted messaging and cultural references, not just words.',
          learning: 'Localization > translation. Cultural nuance drives conversion.',
          result: 'Each language feels native and authentic.',
        },
        {
          title: 'Zoho API Rate Limiting',
          problem: 'Multiple simultaneous form submissions hit Zoho limits. Leads lost.',
          solution: 'Implemented queue system: submit → queue → process with exponential backoff → retry on failure.',
          learning: 'External APIs have constraints. Design your system around them.',
          result: '100% lead capture success rate. Zero lost leads.',
        },
      ],
      
      deepDives: [
        {
          title: 'RTL CSS Pattern',
          description: 'How to write CSS that works for both LTR and RTL without duplication.',
          codeBefore: '.button { margin-left: 16px; border-left: 2px solid emerald; }',
          codeAfter: '.button { margin-inline-start: 16px; border-inline-start: 2px solid emerald; }',
          why: 'Logical properties (inline, block) instead of directional (left, right) = one codebase for all directions.',
        },
        {
          title: 'Zoho Sync with Reliability',
          description: 'How to reliably send leads without losing any.',
          codeBefore: 'Form submit → API call to Zoho → hope it works',
          codeAfter: 'Form submit → Add to queue → Process with retry logic → Zoho sync → Mark complete → Persistent storage',
          why: 'Queue prevents lost leads. Retry logic with backoff handles API failures gracefully.',
        },
      ],
      
      outcome: {
        status: 'Live in production',
        reflection: 'Conversion landing pages are won or lost on three fronts: language, messaging, and frictionless CRM sync. Get all three right.',
        ifBuildingAgain: [
          'Implement A/B testing framework for each language copy',
          'Add heatmap analytics to see visitor scroll depth by language',
          'Build multilingual SEO from start (hreflang tags)',
          'Test RTL with native Arabic speakers before launch',
        ],
        links: {
          demo: 'https://www.plusuae.ae',
        },
      },
    },
  },

  {
    id: 'jignu',
    name: 'Jignu',
    slug: 'jignu',
    description: 'Multi-tenant business directory MVP (JustDial-style) with production-grade security, shipped in 1.5 months.',
    shortDescription: 'Production multi-tenant MVP built in 1.5 months',
    thumbnail: '/projects/jignu/images/main.png',
    status: 'beta',
    year: '2025',
    complexity: 8,
    type:"SaaS",
    company:"Freelance",
    impact: 7,
    
    grid: {
      role: 'Full Stack Owner',
      company: 'Freelance', 
      nda: false,  
      metrics: '1.5 month sprint, Multi-tenant ready, 3 interfaces',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Multi-tenant'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Feb 2025 (1.5 month MVP sprint)',
      team: 'Solo',
      
      problem: {
        context: 'Client had a concept: business directory platform where companies list themselves, users discover listings, admin moderates content.',
        pain: 'Concept only. No product to show investors or early users. Needed a working MVP to test demand.',
        challenge: 'Build production-grade multi-tenant MVP in 1.5 months without cutting corners on security or scalability.',
        insight: 'MVP doesn\'t mean sloppy. Fast shipping with solid architecture prevents costly rewrites later.',
      },
      
      solution: {
        approach: 'Multi-tenant architecture from day 1, shipped fast',
        architecture: '3 interfaces: Company Dashboard (manage listings) → Admin Dashboard (moderate) → Public Website (discover, search, capture leads)',
        techStack: {
          frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
          backend: ['Node.js', 'Express.js', 'Monolith'],
          database: ['MongoDB'],
          infra: ['AWS EC2 (paused)', 'AWS S3'],
          security: ['Multi-tenant isolation', 'Tenant-scoped queries', 'JWT auth', 'Admin moderation'],
        },
        decisions: [
          {
            title: 'Monolith Backend for Speed',
            description: 'Why monolith instead of microservices for MVP?',
            why: 'Single deployment. Faster iteration. Easier debugging. Monolith is fine for MVP validation.',
          },
          {
            title: 'Multi-tenant from Day 1',
            description: 'Why build multi-tenant complexity into MVP?',
            why: 'Client\'s pitch: unlimited companies. Single-tenant requires complete rewrite at scale. Multi-tenant costs 20% more upfront but saves months later.',
          },
          {
            title: 'Tenant-Scoped Queries',
            description: 'How to isolate company data?',
            why: 'Every database query includes tenant_id filter. Prevents cross-tenant data leaks at the query level.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'MVP Delivery', before: 'Concept', after: '1.5 months shipped', impact: 'Time-to-market achieved' },
          { label: 'Dashboards', before: 'None', after: '3 complete', impact: 'Full feature set' },
          { label: 'Architecture', before: 'Planned', after: 'Multi-tenant ready', impact: 'Scales without rewrite' },
          { label: 'Security', before: 'Unsecure', after: 'Tenant isolation verified', impact: 'Production-ready' },
        ],
        adoption: {
          launch: 'Nov 2025',
          users: 'Client validation phase',
          uptime: '99%+ (when live)',
        },
        learning: 'MVP + quality + speed aren\'t mutually exclusive. Right architecture decisions multiply speed.',
      },
      
      challenges: [
        {
          title: 'Speed vs Security',
          problem: '1.5 months to build production multi-tenant. Pressure to cut security corners.',
          solution: 'Prioritized core features. Deferred visual polish. Security and architecture stayed firm.',
          learning: 'MVP is feature-complete and secure, not visually perfect.',
          result: 'Shipped secure, scalable MVP on time.',
        },
        {
          title: 'Tenant Data Isolation',
          problem: 'How to verify Company A can\'t see Company B data?',
          solution: 'Built tenant middleware. Created edge case test scenarios. Verified isolation.',
          learning: 'Security testing is essential even for MVP.',
          result: 'Zero cross-tenant data exposure in testing.',
        },
      ],
      
      deepDives: [
        {
          title: 'Tenant-Scoped Query Pattern',
          description: 'How to enforce isolation at the database level.',
          codeBefore: 'db.listings.find({ status: "active" })',
          codeAfter: 'db.listings.find({ status: "active", tenant_id: req.user.tenant_id })',
          why: 'Every query filtered by tenant_id. No exceptions. Query-level enforcement prevents data leaks.',
        },
      ],
      
      outcome: {
        status: 'MVP production-ready (server paused by client)',
        reflection: 'Speed and quality aren\'t opposites—they\'re enabled by good architecture. MVP means feature-complete and secure, not sloppy.',
        ifBuildingAgain: [
          'Add tenant isolation tests from day 1',
          'Build analytics to track company activity',
          'Set up automated deployment pipeline early',
          'Add observability (logs, traces) from start',
        ],
        links: {},
      },
    },
  },

  {
    id: 'wyka',
    name: 'Wyka',
    slug: 'wyka',
    description: 'Marketing automation platform with custom Canva integration, unified OAuth session management, and real-time data synchronization.',
    shortDescription: 'Cross-platform integration with real-time sync',
    thumbnail: '/projects/wyka/images/main.png',
    status: 'beta',
    type:"SaaS",
    company:"Freelance",
    year: '2025',
    complexity: 8,
    impact: 7,
    
    grid: {
      role: 'Full Stack Owner',
      company: 'Freelance', 
      nda: false,  
      metrics: 'Custom Canva app, Cross-platform auth, Real-time sync',
      tags: ['Next.js', 'OAuth', 'Passport.js', 'WebSockets', 'Canva'],
    },
    
    caseStudy: {
      timeline: 'Dec 2025 - Feb 2026',
      team: 'Solo',
      
      problem: {
        context: 'Marketing agents manage bulk client data in dashboard, then switch to Canva to manually recreate designs. Context switching wastes time.',
        pain: 'Agents enter data → switch to Canva → manually recreate in design tool. Repetitive, error-prone, fragmented workflow.',
        challenge: 'Auto-populate Canva designs with data from the dashboard without manual re-entry.',
        insight: 'Integration isn\'t about API plumbing. It\'s about unified context—data flows seamlessly between systems.',
      },
      
      solution: {
        approach: 'Custom Canva app with cross-platform OAuth + real-time sync',
        architecture: 'Agent Dashboard → OAuth Login → Custom Canva App → Design with auto-populated data',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'React.js'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          integration: ['OAuth', 'Passport.js', 'Canva API', 'WebSockets'],
          infra: ['Vercel'],
        },
        decisions: [
          {
            title: 'Custom Canva Marketplace',
            description: 'Why build a custom app instead of using standard Canva API?',
            why: 'Standard API doesn\'t support auto-populating agent data into designs. Custom app required.',
          },
          {
            title: 'OAuth + Passport.js',
            description: 'Why use both?',
            why: 'OAuth handles login flow. Passport manages session persistence across dashboard and Canva. Unified authentication.',
          },
          {
            title: 'Real-time Sync via WebSockets',
            description: 'How to keep data synchronized across platforms?',
            why: 'Data entered in dashboard needs instant availability in Canva. WebSocket + event emitters.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Data Flow', before: 'Manual entry in both systems', after: 'Auto-populated, real-time', impact: 'Workflow streamlined' },
          { label: 'Authentication', before: 'Separate logins', after: 'Unified OAuth', impact: 'Single sign-on' },
          { label: 'Status', before: 'Design phase', after: 'Live with agent usage', impact: 'Production active' },
        ],
        adoption: {
          launch: 'Nov 2025',
          users: 'Marketing agents actively using',
          uptime: '99%+ production',
        },
        learning: 'Integration is about eliminating friction. Seamless data flow > feature count.',
      },
      
      challenges: [
        {
          title: 'Cross-Platform Session Management',
          problem: 'Tokens expire. Sessions lost between dashboard and Canva app.',
          solution: 'Refresh token logic. Auto re-authenticate without user intervention.',
          learning: 'OAuth is stateless. You must manage state yourself.',
          result: 'Seamless session persistence across platforms.',
        },
        {
          title: 'Real-time Data Consistency',
          problem: 'Canva app showing stale data from dashboard.',
          solution: 'WebSocket connection with event emitters. Dashboard change → Canva listener → instant update.',
          learning: 'Real-time requires event-driven architecture.',
          result: 'Data updates in <100ms across platforms.',
        },
      ],
      
      deepDives: [
        {
          title: 'Cross-Platform Session Pattern',
          description: 'How to maintain sessions across independent apps.',
          codeBefore: 'Dashboard login separate. Canva login separate. Two sessions, two tokens.',
          codeAfter: 'OAuth login → Passport session → Valid in dashboard AND Canva app',
          why: 'Unified session = seamless experience.',
        },
      ],
      
      outcome: {
        status: 'Live in production',
        reflection: 'Integration is about user experience, not just API connectivity. Eliminate context-switching.',
        ifBuildingAgain: [
          'Implement event-based sync from start',
          'Add robust OAuth error handling early',
          'Test cross-platform session edge cases',
        ],
        links: {},
      },
    },
  },

  {
    id: 'hospital-saas',
    name: 'Hospital Management SaaS',
    slug: 'hospital-management-saas',
    description: 'Full-stack healthcare platform for 5+ hospitals handling 100+ daily appointments with 73% load time improvement, Figma-perfect design, and SEO-driven patient acquisition.',
    shortDescription: 'Full-stack SaaS managing 5+ hospitals and 100+ daily appointments',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
    status: 'live',
    year: '2024',
    type:"Healthcare",
    company:"Tensys",
    complexity: 9,
    impact: 9,
    grid: {
      role: 'Full Stack Developer',
      company: 'Tensys', 
      nda: true,  
      metrics: '5 hospitals, 100+ users/day, 73% faster load times, Page 1 SEO rankings',
      tags: ['Next.js', 'React Router', 'React PDF', 'Performance', 'Healthcare', 'SEO'],
    },
    
    caseStudy: {
      timeline: 'Sep 2024 - Oct 2025 (13 months)',
      team: '4-person frontend team + marketing team',
      
      problem: {
        context: '5 hospital clients managing appointments, patient history, invoices, profiles scattered across manual processes. Website needed for patient acquisition.',
        pain: 'Manual workflows cause errors. Slow load times cause bounce. No SEO means no patient discovery. Invoice generation manual.',
        challenge: 'Build full-stack SaaS (marketing pages + dashboards + APIs + invoices) handling 100+ daily appointments with Figma-perfect design and Google rankings.',
        insight: 'Healthcare SaaS wins on three fronts equally: speed (performance), precision (pixel-perfect design), discovery (SEO).',
      },
      
      solution: {
        approach: 'End-to-end ownership: Figma → code → API → production with token management and PDF invoicing',
        architecture: 'Next.js pages + React Router → Token-based auth → API Gateway → Dashboards → React PDF invoices',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'React Router DOM'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          optimization: ['Code splitting', 'Lazy loading', 'React PDF invoices', 'Image optimization'],
          seo: ['Helmet', 'Meta tags', 'OpenGraph', 'Structured data'],
          infra: ['AWS EC2', 'Redis', 'Vercel'],
        },
        decisions: [
          {
            title: 'End-to-End Ownership',
            description: 'Why build everything instead of dividing frontend/backend/DevOps?',
            why: 'Healthcare SaaS needs tight integration. Pages → auth → dashboards → invoices → PDFs. Single person owns consistency.',
          },
          {
            title: 'Token-Based Authentication',
            description: 'Why stateless auth instead of sessions?',
            why: 'Scales better. Token refresh on dashboard keeps users authenticated while maintaining security.',
          },
          {
            title: 'Pixel-Perfect Design',
            description: 'Why match Figma exactly?',
            why: 'Healthcare demands trust. Perfect UI signals professionalism and competence. Builds client confidence.',
          },
          {
            title: 'SEO from Day 1',
            description: 'Why prioritize search rankings for healthcare?',
            why: 'Hospitals acquire patients through search. Technical SEO (meta tags, structured data) + marketing = patient acquisition.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Load Time', before: '3 seconds', after: '800ms', impact: '73% faster load' },
          { label: 'Lighthouse Score', before: '50', after: '90+', impact: 'Production-grade' },
          { label: 'Design Accuracy', before: 'Approximate Figma', after: 'Pixel-perfect', impact: '100% fidelity' },
          { label: 'Concurrent Users', before: '10', after: '100+', impact: 'Zero degradation' },
          { label: 'SEO Performance', before: 'Not ranked', after: 'Page 1 keywords', impact: 'Patient acquisition' },
        ],
        adoption: {
          launch: 'Live across 5 hospitals',
          users: '100+ daily active users + patients',
          uptime: '99%+ production uptime',
        },
        learning: 'Healthcare SaaS requires equal investment in speed, design, and discoverability. All three drive patient outcomes.',
      },
      
      challenges: [
        {
          title: 'Figma-to-Code Pixel Perfection',
          problem: 'Design system complex. Components needed to match Figma exactly.',
          solution: 'Built component library with Tailwind design tokens. Tight designer-developer collaboration.',
          learning: 'Pixel-perfect UI requires discipline and communication.',
          result: '100% Figma fidelity across all pages.',
        },
        {
          title: 'Mobile-First at Scale',
          problem: 'Pages perfect on desktop, broken on phone/tablet.',
          solution: 'Built for mobile first. Tailwind breakpoints from start. Enhanced for desktop.',
          learning: 'Mobile-first prevents tech debt. Desktop-first creates it.',
          result: 'Works seamlessly across all devices.',
        },
        {
          title: 'Token Management UX',
          problem: 'Access tokens expire. Users kicked to login repeatedly.',
          solution: 'Refresh token logic. Automatic re-auth without user intervention.',
          learning: 'Token management directly impacts UX.',
          result: 'Seamless auth. Zero unexpected logouts.',
        },
        {
          title: 'Invoice PDF Performance',
          problem: 'Large invoices slow to generate. UI freezes.',
          solution: 'Lazy-loaded PDF sections. Asynchronous generation. Progress indication.',
          learning: 'PDF generation is computationally heavy. Offload wisely.',
          result: 'Invoices in <2 seconds. Responsive UI.',
        },
      ],
      
      deepDives: [
        {
          title: 'Component Library Architecture',
          description: 'How to build components matching Figma perfectly at scale.',
          codeBefore: 'Random component styles. Inconsistent across pages.',
          codeAfter: 'Component library with design tokens. Reusable + consistent everywhere.',
          why: 'Design consistency at scale requires architectural discipline.',
        },
        {
          title: 'Token Refresh Pattern',
          description: 'How to handle token expiry transparently.',
          codeBefore: 'Token expires → error → redirect to login → user loses context',
          codeAfter: 'Token expires → intercept → refresh silently → retry request → user continues',
          why: 'Seamless auth improves UX and security.',
        },
      ],
      
      outcome: {
        status: 'Live in production (NDA)',
        reflection: 'Healthcare SaaS success = performance + design + discovery. Perfect execution on all three fronts.',
        current: 'Live across 5 hospitals. 100+ daily users. Ongoing patient acquisition through SEO.',
        ifBuildingAgain: [
          'Implement design tokens from day 1 (not after)',
          'Build component library before pages',
          'Plan SEO architecture upfront',
          'Test with real hospital data early',
        ],
        links: {
          deployment: 'Live on AWS EC2 + Vercel',
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
    description: 'Multi-workflow appointment dashboard managing doctors, home visits, labs, nursing, physiotherapy with 90% image size reduction and sub-100ms filter performance.',
    shortDescription: 'Multi-specialty appointment management at scale',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    status: 'live',
    year: '2025',
    complexity: 9,
    type:"Healthcare",
    company:"Tensys",
    impact: 9,
    grid: {
      role: 'Full Stack Developer',
      company: 'Tensys', 
      nda: true,  
      metrics: '5+ workflows, 100k+ records, <100ms filters, 90% image compression',
      tags: ['Next.js', 'Performance', 'Dashboards', 'Image Compression', 'Server-side Pagination'],
    },
    
    caseStudy: {
      timeline: 'Sep 2024 - Oct 2025',
      team: '5-person team + marketing',
      
      problem: {
        context: 'Healthcare platform managing doctors, home visits, labs, nurses, physios in a single system. Each has distinct workflows.',
        pain: 'Manual appointment handling per specialty. No unified view. Bulk patient data (100k+) overwhelming. Slow uploads. Patient image metadata leaks.',
        challenge: 'Manage 5+ concurrent specialist workflows in one dashboard with sub-100ms performance, security, and admin control.',
        insight: 'Multi-specialty systems require unified orchestration. Performance and security must move together.',
      },
      
      solution: {
        approach: 'Multi-workflow dashboard with performance optimization and security at the architecture level',
        architecture: 'Frontend image compression → API server-side pagination → MongoDB (indexed) → Redis caching → Admin panel',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          optimization: ['Image compression', 'Server-side pagination', 'Query indexes', 'Excel export'],
          infra: ['AWS EC2', 'Redis', 'Vercel'],
        },
        decisions: [
          {
            title: 'Image Compression on Upload',
            description: 'Why compress before storage?',
            why: 'Uncompressed images leak patient metadata (location, device, timestamps). Compression + EXIF stripping = security + performance.',
          },
          {
            title: 'Server-Side Pagination',
            description: 'Why not load all data to client?',
            why: '100k+ healthcare records crash client-side pagination. Server-side pagination distributes data efficiently.',
          },
          {
            title: 'Indexed Query Performance',
            description: 'Why database-level filtering?',
            why: 'Doctors need to find specific patients fast. Indexed filters at DB level = <100ms queries.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Image Size', before: '5MB+ per image', after: '<500KB compressed', impact: '90% smaller + secure' },
          { label: 'Page Load', before: 'All data loaded', after: 'Server-side pagination', impact: 'Instant first load' },
          { label: 'Filter Speed', before: 'No filters', after: '<100ms indexed', impact: 'Instant search' },
          { label: 'Workflows', before: '1', after: '5+', impact: 'Unified orchestration' },
        ],
        adoption: {
          launch: 'Live',
          users: 'Multiple specialists across hospitals',
          uptime: '99%+ production',
        },
        learning: 'Scaling healthcare dashboards = performance + security moving together. Optimize both simultaneously.',
      },
      
      challenges: [
        {
          title: 'Patient Image Security',
          problem: 'Uncompressed images expose EXIF metadata (location, device, times).',
          solution: 'Compress on upload. Strip EXIF. Store only necessary dimensions.',
          learning: 'Image security isn\'t just file permissions.',
          result: '90% size reduction. Zero metadata leaks.',
        },
        {
          title: 'Bulk Data Handling',
          problem: 'Healthcare generates massive datasets. Client-side pagination crashes.',
          solution: 'Server-side pagination. Stream data in chunks to client.',
          learning: 'Pagination is architectural, not optional.',
          result: 'Handles 100k+ records without slowdown.',
        },
        {
          title: 'Multi-Workflow Sync',
          problem: '5 specialist workflows need unified view. Keeping sync is hard.',
          solution: 'Event-driven updates. One workflow change → others notified instantly.',
          learning: 'Multi-workflow systems need choreography, not orchestration.',
          result: 'All workflows in sync. Real-time updates.',
        },
      ],
      
      deepDives: [
        {
          title: 'Image Compression + Security',
          description: 'How to optimize while protecting patient privacy.',
          codeBefore: 'Upload full resolution. Metadata intact.',
          codeAfter: 'Compress to size. Strip EXIF. Store optimized only.',
          why: 'Patient images contain sensitive metadata. Compression + stripping = security + performance.',
        },
        {
          title: 'Server-Side Pagination Pattern',
          description: 'How to handle 100k+ healthcare records efficiently.',
          codeBefore: 'fetch all → send all to client → render',
          codeAfter: 'fetch page 1 (50 records) → send only page → client renders → load next on scroll',
          why: 'Massive datasets require server-side distribution.',
        },
      ],
      
      outcome: {
        status: 'Live in production (NDA)',
        reflection: 'Performance and security at scale go hand-in-hand. Every optimization must account for both.',
        ifBuildingAgain: [
          'Image compression from day 1',
          'Pagination architecture before building',
          'Audit logging for admin actions',
          'Real healthcare data testing early',
        ],
        links: {},
      },

      currentStatus: {
        launched: 'Sep 2024',
        uptime: '99%+ production',
        activeUsers: '100+ daily across hospitals',
      },
    },
  },

  {
    id: 'pg-accommodation',
    name: 'PG Accommodation Platform',
    slug: 'pg-accommodation-platform',
    description: 'Component-driven property management platform with mobile-first design, 75%+ code reuse, and seamless token refresh for 99%+ uptime.',
    shortDescription: 'Reusable component architecture at scale',
    thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
    status: 'live',
    year: '2024',
    complexity: 8,
    impact: 7,
    type:"Marketplace",
    company:"Tensys",
    grid: {
      role: 'Full Stack Developer',
      company: 'Tensys', 
      nda: true,  
      metrics: '75%+ component reuse, Mobile-first, 65% faster load',
      tags: ['Next.js', 'React Router DOM', 'TypeScript', 'Tailwind CSS', 'React PDF', 'JWT Auth'],
    },
    
    caseStudy: {
      timeline: 'Sep 2024 - Oct 2025 (pair programming)',
      team: '5-person team + marketing',
      problem: {
        context: 'PG owners manage multiple properties. Tenants apply online. Everything manual.',
        pain: 'Manual onboarding. Offline invoice generation. Notice tracking scattered. No unified tenant management.',
        challenge: 'Build scalable, mobile-first frontend where landlords and tenants manage everything seamlessly.',
        insight: 'Component-driven architecture + reusable patterns = scalable products without constant rewrites.',
      },
      
      solution: {
        approach: 'Reusable components composed into end-to-end pages with mobile-first responsiveness',
        architecture: 'Reusable components → page-level composition → responsive layouts (mobile, tablet, desktop)',
        techStack: {
          frontend: ['Next.js', 'React Router DOM', 'TypeScript', 'Tailwind CSS', 'React PDF', 'Helmet'],
          optimization: ['Code splitting', 'Lazy loading', 'Component memoization', 'Dynamic imports'],
          security: ['Access + Refresh tokens', 'Token validation middleware', 'Secure headers'],
          database: ['MongoDB'],
          infra: ['Vercel'],
        },
        decisions: [
          {
            title: 'Component-Driven Architecture',
            description: 'Why build reusable components instead of pages from scratch?',
            why: 'Reusable components = consistency + speed. Build once, use everywhere.',
          },
          {
            title: 'Mobile-First Design',
            description: 'Why start with mobile instead of desktop?',
            why: 'Tenants access on phones. Mobile-first ensures good UX on all devices. Scales up, not down.',
          },
          {
            title: 'Token Refresh for UX',
            description: 'Why two tokens instead of one?',
            why: 'Access token: short-lived. Refresh token: long-lived. Automatic refresh = seamless auth.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Page Load', before: 'No optimization', after: 'Code split + lazy load', impact: '65% faster' },
          { label: 'Component Reuse', before: '0%', after: '75%+', impact: 'Faster shipping' },
          { label: 'Responsive Coverage', before: 'Desktop-only', after: 'Mobile-first', impact: '100% devices' },
          { label: 'Invoice Generation', before: 'Manual', after: 'One-click download', impact: 'User autonomy' },
        ],
        adoption: {
          launch: 'Oct 2024',
          users: 'Landlords + tenants',
          uptime: '99%+ production',
        },
        learning: 'Component-driven + mobile-first = scalable frontend without rewrites.',
      },
      
      challenges: [
        {
          title: 'Data Transformation',
          problem: 'API returns format X. Components need format Y. Constant tweaking.',
          solution: 'Built transformation layer at boundary. Decouples API from components.',
          learning: 'Transformation at boundaries prevents component bloat.',
          result: 'Clean components. Easy backend swaps.',
        },
        {
          title: 'Token Management UX',
          problem: 'Access tokens expire. Users redirected to login constantly.',
          solution: 'Refresh token flow. Auto re-auth silently.',
          learning: 'Token management = user experience.',
          result: 'Zero unexpected logouts.',
        },
        {
          title: 'Reusability vs Flexibility',
          problem: 'Too generic = props hell. Too specific = not reusable.',
          solution: 'Compound components. Parent controls layout, children handle content.',
          learning: 'Reusability requires architectural thinking.',
          result: '75%+ code reuse.',
        },
      ],
      
      deepDives: [
        {
          title: 'Component Composition Pattern',
          description: 'How to compose pages from reusable components.',
          codeBefore: 'Page = one big file. Hard to reuse.',
          codeAfter: 'Page = <Header /> + <Form /> + <Table /> + <Footer />. Reusable.',
          why: 'Composition > duplication.',
        },
        {
          title: 'Token Refresh Pattern',
          description: 'How to handle expiry without disrupting user.',
          codeBefore: 'Token expires → error → redirect to login',
          codeAfter: 'Token expires → intercept → refresh → retry → continue',
          why: 'Seamless auth = better UX + security.',
        },
      ],
      
      outcome: {
        status: 'Live in production',
        reflection: 'Component-driven + mobile-first = scalable without rewrites. Build mobile, enhance desktop.',
        ifBuildingAgain: [
          'Component library testing from day 1',
          'Add Storybook for documentation',
          'Build design tokens early',
          'Analytics for component usage',
        ],
        links: {
          demo: '',
        },
      },
      
      currentStatus: {
        launched: 'Oct 2024',
        uptime: '99%+ production',
        activeUsers: 'Landlords + tenants',
      },
    },
  },

  {
    id: 'hospital-websites',
    name: 'Hospital Websites Series',
    slug: 'hospital-websites-series',
    description: '5+ production healthcare websites with patient portals, doctor dashboards, lab services, JWT + RBAC security, and 50% faster deployment cycles.',
    shortDescription: '5+ healthcare websites with reusable template architecture',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    status: 'live',
    year: '2023',
    complexity: 6,
    impact: 8,
    type:"Performance",
    company:"Primates",
    grid: {
      role: 'MERN Stack Developer',
      company: 'Primates', 
      nda: true,  
      metrics: '5+ live hospitals, 50% faster deployment, JWT + RBAC, 500+ users',
      tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Healthcare', 'AWS'],
    },
    
    caseStudy: {
      timeline: 'Nov 2023 - Aug 2024 (9 months)',
      team: '3-person team',
      
      problem: {
        context: 'Multiple hospitals need custom websites. Each has unique workflows but similar core requirements (patient booking, doctor management, lab tracking).',
        pain: 'Building from scratch each time = inefficient. Can\'t use generic template. Each hospital took 3-4 months.',
        challenge: 'Balance reusable templates with client-specific requirements without long dev cycles.',
        insight: 'Healthcare websites need standardization (speed) + customization (client needs). Right architecture makes both possible.',
      },
      
      solution: {
        approach: 'Reusable base template + client-specific configuration',
        architecture: 'Base template (patient portal, doctor dashboard, lab services) + client config + custom workflows',
        techStack: {
          frontend: ['React.js', 'TypeScript', 'Tailwind CSS'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          security: ['JWT auth', 'RBAC middleware'],
          infra: ['AWS EC2', 'Docker'],
          features: ['Patient booking', 'Doctor dashboards', 'Lab management', 'Appointment tracking'],
        },
        decisions: [
          {
            title: 'Reusable Base Template',
            description: 'Why not build from scratch for each hospital?',
            why: 'Standardized components (booking UI, auth flow, dashboard layout) cut dev time. Customization via config, not code.',
          },
          {
            title: 'JWT + RBAC Security',
            description: 'How to secure patient data across roles?',
            why: 'Patients see only their data. Doctors see only their patients. Labs see lab orders. RBAC middleware enforces at every call.',
          },
          {
            title: 'MongoDB Flexibility',
            description: 'Why MongoDB over PostgreSQL?',
            why: 'Each hospital has different workflows. Flexible schema handles different structures without migrations.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Websites Built', before: '0', after: '5+ live', impact: '5 hospital clients' },
          { label: 'Deployment Time', before: '3-4 months each', after: '6-8 weeks per client', impact: '50% faster' },
          { label: 'Code Reuse', before: '0%', after: '70%+', impact: 'Template savings' },
          { label: 'Concurrent Users', before: 'Unknown', after: '100+ per hospital', impact: 'Proven scale' },
        ],
        adoption: {
          launch: 'First Nov 2023, All 5 by Jun 2024',
          users: '500+ across 5 hospitals',
          uptime: '99%+ sustained',
        },
        learning: 'Balancing reuse and customization is an art. Architecture matters more than tech choices.',
      },
      
      challenges: [
        {
          title: 'Hospital Customization',
          problem: 'Each hospital wants unique workflows. How flexible without becoming unmaintainable?',
          solution: 'Built config-driven workflows. Admins customize via UI (no code changes).',
          learning: 'Customization != code changes. It\'s configuration at right level.',
          result: '5 distinct workflows, one codebase.',
        },
        {
          title: 'Patient Data Security',
          problem: 'Patients see only their data. Doctors see only their patients. Labs see lab orders.',
          solution: 'RBAC middleware. Every query scoped to role + hospital + patient relationship.',
          learning: 'Healthcare security is non-negotiable.',
          result: 'Zero unauthorized access incidents.',
        },
        {
          title: 'Real-time Sync',
          problem: 'Doctor updates slot availability. Patient should see instantly. Lag = double-bookings.',
          solution: 'WebSocket updates. Doctor change → event → all patients see instantly.',
          learning: 'Real-time in healthcare prevents errors.',
          result: 'Zero double-booking incidents.',
        },
      ],
      
      deepDives: [
        {
          title: 'RBAC Query Pattern',
          description: 'How to enforce role-based access at database level.',
          codeBefore: 'db.patients.find({ hospital_id: hospitalId })',
          codeAfter: 'db.patients.find({ hospital_id: hospitalId, visible_to_roles: req.user.role, assigned_doctor: req.user._id })',
          why: 'Every query checked. No shortcuts.',
        },
        {
          title: 'Template vs Custom Balance',
          description: 'How to keep code DRY while allowing customization.',
          codeBefore: '5 projects (1500 lines each = 7500 total)',
          codeAfter: '1 template (1500 lines) + 5 configs (100 lines each = 500) = 2000 total',
          why: '73% code reduction.',
        },
      ],
      
      outcome: {
        status: 'Live in production',
        reflection: 'Healthcare workflows are complex but similar. Right template saves months. Security and real-time sync are non-negotiable.',
        ifBuildingAgain: [
          'Audit logging from day 1',
          'HIPAA checklist from start',
          'Test with real hospital workflows early',
          'Build admin customization UI first',
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
    description: 'QR-based insurance lead capture MVP with agent onboarding dashboard, real-time leads tracking, and agent-scoped lead attribution.',
    shortDescription: 'QR-powered field sales lead capture',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    status: 'beta',
    year: '2024',
    complexity: 7,
    impact: 7,
    
    grid: {
      role: 'MERN Stack Developer',
      company: 'Primates', 
      nda: true,  
      metrics: '3 interfaces, QR capture, Real-time tracking, Agent attribution',
      tags: ['React.js', 'Node.js', 'MongoDB', 'QR codes', 'Monolith'],
    },
    
    caseStudy: {
      timeline: 'Nov 2023 - Aug 2024',
      team: '2-person MERN team',
      
      problem: {
        context: 'Insurance agents work in field, capturing leads in public places. Manual entry is slow, error-prone, no tracking.',
        pain: 'Agents scattered across locations. No unified capture system. Manual paper forms. No agent-to-lead attribution.',
        challenge: 'Build system where agents scan QR to capture leads, admin tracks agents, leads centrally managed.',
        insight: 'QR codes remove friction. Physical + digital integration powerful for field sales.',
      },
      
      solution: {
        approach: 'Three-interface platform: landing page (signup) + admin (onboarding) + leads dashboard (tracking)',
        architecture: 'Landing page → Admin dashboard → Leads dashboard ← QR scans from field',
        techStack: {
          frontend: ['React.js', 'CSS'],
          backend: ['Node.js', 'Express.js', 'Monolith'],
          database: ['MongoDB'],
          features: ['QR generation', 'Agent onboarding', 'Leads dashboard', 'Lead filtering', 'Agent performance tracking'],
        },
        decisions: [
          {
            title: 'QR Code Capture',
            description: 'Why QR codes instead of manual forms?',
            why: 'Zero friction. Scan QR → instant lead captured. No explanation needed.',
          },
          {
            title: 'Three Separate Interfaces',
            description: 'Why landing page + admin + leads dashboard?',
            why: 'Clear separation. Public (signup), admin (control), user (analytics). Each focused.',
          },
          {
            title: 'Monolith for MVP',
            description: 'Why monolith instead of microservices?',
            why: 'Speed to market critical. Single codebase faster. Easier iteration.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Lead Capture', before: 'Manual paper', after: 'QR instant', impact: 'Zero friction' },
          { label: 'Agent Tracking', before: 'No visibility', after: 'Real-time dashboard', impact: 'Performance measured' },
          { label: 'Lead Organization', before: 'Spreadsheets', after: 'Centralized DB', impact: 'Organized + searchable' },
        ],
        adoption: {
          launch: 'Aug 2024',
          users: 'Insurance agents + admin team',
          uptime: 'MVP phase (server paused)',
        },
        learning: 'QR codes are powerful for field workflows. Physical + digital beats purely digital.',
      },
      
      challenges: [
        {
          title: 'QR Generation at Scale',
          problem: 'Need unique QR per agent. Generating + storing 100+ codes efficiently.',
          solution: 'Generate on-demand. Store mapping in DB. Reuse template.',
          learning: 'QR generation cheap. On-demand faster than batch.',
          result: 'Each agent gets unique QR instantly.',
        },
        {
          title: 'Lead Attribution Accuracy',
          problem: 'QR scanned. Guarantee correct agent attribution?',
          solution: 'Encode agent_id in QR. Decode on scan. Cross-verify.',
          learning: 'QR encoding powerful for embedding context.',
          result: 'Zero misattribution.',
        },
      ],
      
      deepDives: [
        {
          title: 'QR Context Encoding',
          description: 'How to embed agent identity without URL parameters.',
          codeBefore: 'Generic QR → manual agent selection',
          codeAfter: 'QR with agent_id encoded → auto-select agent',
          why: 'Embedded context = automatic attribution.',
        },
      ],
      
      outcome: {
        status: 'MVP production-ready (server paused by client)',
        reflection: 'QR codes bridge physical and digital sales workflows. Field teams prioritize friction removal over features.',
        ifBuildingAgain: [
          'Build v2 with microservices for scale',
          'Add conversion funnel analytics',
          'Bulk agent onboarding + CSV import',
          'Real-time lead notifications',
        ],
        links: {
          deployment: 'MVP code complete (server paused)',
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