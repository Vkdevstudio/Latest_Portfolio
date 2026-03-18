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
        backend?: string[];
        frontend?: string[];
        database?: string[];
        infra?: string[];
        optimization?:string[]
        features?:string[]
        ml?: string[];
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
      ifBuildingAgain: string[];
      links: {
        github?: string;
        demo?: string;
        blog?: string;
      };
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
    thumbnail: '/projects/clapos/images/architecture.png',
    status: 'beta',
    year: '2025',
    complexity: 9,
    impact: 8,
    
    grid: {
      role: 'Full Stack Owner',
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
          github: 'https://github.com/vinodkumar/clapos',
          demo: 'https://clapos.vercel.app',
        },
      },
    },
  },

  {
    id: 'plusuae',
    name: 'PlusUAE',
    slug: 'plusuae',
    description: 'Multilingual SaaS for UAE clients. 5 languages. RTL. Zoho CRM. Live & in daily use.',
    shortDescription: 'Multilingual platform with CRM integration',
    thumbnail: '/projects/plusuae/images/dashboard.png',
    status: 'live',
    year: '2025',
    complexity: 7,
    impact: 8,
    
    grid: {
      role: 'Full Stack Owner',
      metrics: '5 languages, RTL, CRM integrated, Live',
      tags: ['Next.js', 'i18n', 'RTL', 'Zoho CRM', 'Multilingual'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Present',
      team: 'Solo',
      
      problem: {
        context: 'UAE corporate client needs lead generation platform for international visitors.',
        pain: 'Visitors don\'t speak English only. No CRM integration = manual Zoho data entry.',
        challenge: 'How to build multilingual (Arabic, English, French, Chinese, Mandarin) platform with auto-Zoho sync?',
        insight: 'Multilingual isn\'t just translation. RTL requires architectural rethinking for layout and design.',
      },
      
      solution: {
        approach: 'Custom i18n with RTL Support + Zoho CRM Direct Integration',
        architecture: 'Next.js Frontend → Custom i18n Context → Zoho CRM API → Real-time data sync',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Custom i18n Context'],
          backend: ['Node.js', 'Express.js'],
          infra: ['Zoho CRM API', 'Vercel'],
        },
        decisions: [
          {
            title: 'Custom i18n over i18next',
            description: 'Why build custom instead of using library?',
            why: 'Off-the-shelf i18n didn\'t handle RTL switching smoothly. Custom Context gave full control.',
          },
          {
            title: 'RTL Layout Switching',
            description: 'How to flip layout for Arabic without breaking CSS?',
            why: 'Not just text direction. Everything reverses. CSS variables + dynamic classes solved this.',
          },
          {
            title: 'Zoho CRM Direct Integration',
            description: 'Why direct API instead of webhooks?',
            why: 'Real-time lead capture. Every form submission = instant Zoho contact creation.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Languages Live', before: '1 (English)', after: '5 (with Arabic RTL)', impact: 'Global reach enabled' },
          { label: 'CRM Integration', before: 'Manual entry', after: 'Real-time auto-sync', impact: 'Zero manual work' },
          { label: 'Status', before: 'Development', after: 'Live & active daily', impact: 'In client production use' },
        ],
        adoption: {
          launch: 'Nov 2025',
          users: 'UAE corporate client + visitors',
          uptime: '99%+',
        },
        learning: 'Multilingual design requires thinking differently about UX. It\'s not just text replacement.',
      },
      
      challenges: [
        {
          title: 'RTL Layout Complexity',
          problem: 'Arabic text flips direction. CSS that works LTR breaks RTL.',
          solution: 'CSS variables for directions. Dynamic direction attribute based on language.',
          learning: 'RTL isn\'t an afterthought. It\'s architectural from day 1.',
          result: 'Seamless switching between LTR and RTL languages.',
        },
        {
          title: 'Zoho API Rate Limiting',
          problem: 'Multiple form submissions hitting Zoho rate limits.',
          solution: 'Implemented batching + queue system for submissions.',
          learning: 'External APIs have constraints. Design for them.',
          result: 'Zero failed submissions. Batch processing maintained.',
        },
      ],
      
      deepDives: [
        {
          title: 'RTL Layout Implementation',
          description: 'How to handle Arabic and other RTL languages.',
          codeBefore: 'CSS: margin-left, border-left (LTR only)',
          codeAfter: 'CSS variables: margin-inline-start, border-inline-start (direction-agnostic)',
          why: 'Direction-agnostic CSS works for both LTR and RTL languages.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Building multilingual taught me that localization is more than translation. It\'s cultural UX design.',
        ifBuildingAgain: [
          'Plan RTL layout design from start',
          'Test with real Arabic speakers early',
          'Build CRM integration testing suite earlier',
        ],
        links: {
          demo: 'https://plusuae.vercel.app',
        },
      },
    },
  },

  {
    id: 'jignu',
    name: 'Jignu',
    slug: 'jignu',
    description: 'Business directory platform. Multi-tenant. Company-scoped isolation.',
    shortDescription: 'Multi-tenant business directory',
    thumbnail: '/projects/jignu/images/dashboard.png',
    status: 'live',
    year: '2025',
    complexity: 8,
    impact: 7,
    
    grid: {
      role: 'Full Stack Owner',
      metrics: 'Multi-tenant, 3 dashboards, Data isolation',
      tags: ['Next.js', 'Multi-tenant', 'MongoDB', 'Architecture'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Present',
      team: 'Solo',
      
      problem: {
        context: 'Business directory (JustDial-style). Companies list. Users discover. Admin moderates.',
        pain: 'Data isolation critical. Company A shouldn\'t see Company B leads. Admin needs tools.',
        challenge: 'How to build multi-tenant where each company\'s data is completely isolated?',
        insight: 'Multi-tenancy is about architecture. Data isolation enforced at every layer.',
      },
      
      solution: {
        approach: 'Multi-tenant Architecture with Tenant-Scoped Data Isolation',
        architecture: 'Company Dashboard → Admin Dashboard → Public Website (all tenant-scoped)',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['JWT Auth', 'Vercel'],
        },
        decisions: [
          {
            title: 'Tenant-Scoped Queries',
            description: 'How to isolate data at database level?',
            why: 'Every query includes tenant_id filter. No query returns cross-company data.',
          },
          {
            title: 'MongoDB for Multi-tenant',
            description: 'Why MongoDB over PostgreSQL?',
            why: 'Flexible schema for different company types. Easy tenant filtering on all queries.',
          },
          {
            title: '3 Dashboard Architecture',
            description: 'Company vs Admin vs Public separation?',
            why: 'Each role has different permissions. Clear data boundaries prevent leaks.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Dashboards Built', before: '0', after: '3 (Company, Admin, Public)', impact: 'Full platform complete' },
          { label: 'Data Isolation', before: 'No isolation', after: 'Complete tenant-scoped', impact: 'Secure by design' },
          { label: 'Status', before: 'Design phase', after: 'Live & working', impact: 'Production ready' },
        ],
        adoption: {
          launch: 'Nov 2025',
          users: 'Multiple companies active',
          uptime: '99%+',
        },
        learning: 'Multi-tenancy requires thinking about security at design time, not afterthought.',
      },
      
      challenges: [
        {
          title: 'Data Isolation Verification',
          problem: 'How to ensure Company A can\'t access Company B data?',
          solution: 'Added tenant verification middleware. Every request checks tenant_id vs JWT.',
          learning: 'Security bugs come from edge cases. Test them explicitly.',
          result: 'Zero cross-tenant data leaks in testing.',
        },
      ],
      
      deepDives: [
        {
          title: 'Tenant-Scoped Query Pattern',
          description: 'How to enforce tenant isolation at database level.',
          codeBefore: 'db.listings.find({ status: "approved" })',
          codeAfter: 'db.listings.find({ status: "approved", tenant_id: req.user.tenant_id })',
          why: 'Every query must filter by tenant_id. No exceptions.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Building multi-tenant taught me that security and architecture are inseparable.',
        ifBuildingAgain: [
          'Implement tenant isolation tests from day 1',
          'Add audit logging for tenant access',
          'Test edge cases around data boundaries',
        ],
        links: {
          demo: 'https://jignu.vercel.app',
        },
      },
    },
  },

  {
    id: 'wyka',
    name: 'Wyka',
    slug: 'wyka',
    description: 'Marketing automation for agents. Custom Canva marketplace. OAuth + Passport.js auth.',
    shortDescription: 'Marketing automation with Canva integration',
    thumbnail: '/projects/wyka/images/dashboard.png',
    status: 'live',
    year: '2025',
    complexity: 8,
    impact: 7,
    
    grid: {
      role: 'Full Stack Owner',
      metrics: 'Custom marketplace, Real-time sync, OAuth cross-platform',
      tags: ['Next.js', 'OAuth', 'Passport.js', 'Real-time', 'Canva'],
    },
    
    caseStudy: {
      timeline: 'Nov 2025 - Present',
      team: 'Solo',
      
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
          demo: 'https://wyka.vercel.app',
        },
      },
    },
  },

  {
    id: 'hospital-saas',
    name: 'Hospital Management SaaS',
    slug: 'hospital-management-saas',
    description: '5+ hospital clients. 100+ daily appointments. 73% performance improvement.',
    shortDescription: 'Healthcare platform for 5+ hospital clients',
    thumbnail: '/projects/hospital/images/dashboard.png',
    status: 'live',
    year: '2024',
    complexity: 8,
    impact: 9,
    
    grid: {
      role: 'Frontend Owner',
      metrics: '5 clients, 100+ users/day, 73% faster',
      tags: ['Next.js', 'Performance', 'Healthcare', 'Multi-client'],
    },
    
    caseStudy: {
      timeline: 'Sep 2024 - Oct 2025',
      team: '4-person frontend team',
      
      problem: {
        context: '5 hospitals manually managing appointments. Receptionists, doctors, labs all separate.',
        pain: 'Manual processes = errors. No real-time. Load times 3 seconds = users bouncing.',
        challenge: 'How to build appointment system handling 100+ daily appointments without slowdown?',
        insight: 'Performance isn\'t nice-to-have in healthcare. Slow UX = errors = revenue loss.',
      },
      
      solution: {
        approach: 'Real-time Dashboard with Performance Optimization',
        architecture: 'Next.js (code-split) → API Gateway → MongoDB (indexed) → Redis caching',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['AWS EC2', 'Redis', 'Vercel'],
        },
        decisions: [
          {
            title: 'Code Splitting & Lazy Loading',
            description: 'Why break bundle into pieces?',
            why: 'Initial load was 3 seconds. Splitting by route reduced first paint by 73%.',
          },
          {
            title: 'Redux for State Management',
            description: 'Why centralized state?',
            why: 'Multiple dashboards need synchronized data. Redux made this reliable.',
          },
          {
            title: 'Zod + React Hook Form Validation',
            description: 'Why frontend validation?',
            why: 'Invalid data prevented at source. 85% reduction in backend errors.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Load Time', before: '3 seconds', after: '800ms', impact: '73% faster' },
          { label: 'Lighthouse Score', before: '50', after: '90+', impact: 'Production-ready' },
          { label: 'Data Quality', before: '15% invalid', after: '~2% invalid', impact: '85% improvement' },
          { label: 'Concurrent Users', before: '10 users', after: '100+ users', impact: 'Sustained no degradation' },
        ],
        adoption: {
          launch: 'Live across 5 hospitals',
          users: '100+ daily active',
          uptime: '99%+ production',
        },
        learning: 'Performance optimization is about understanding the bottleneck, not premature tuning.',
      },
      
      challenges: [
        {
          title: '3 Second Load Time Bottleneck',
          problem: 'Users waiting 3 seconds. Bouncing to competitors.',
          solution: 'Profiled with DevTools. Found: large bundle + unoptimized images. Implemented code splitting + compression.',
          learning: 'Always profile before optimizing. Guessing wastes time.',
          result: 'Load time 3s → 800ms. Lighthouse 50 → 90+.',
        },
        {
          title: 'Data Quality Issues',
          problem: 'Receptionists entering invalid appointments.',
          solution: 'Zod + React Hook Form validation on frontend.',
          learning: 'Validation at source > fixing in backend.',
          result: '85% reduction in invalid backend data.',
        },
        {
          title: 'Scaling to 100+ Concurrent Users',
          problem: 'System worked for 10. Broke at 100+.',
          solution: 'Caching, connection pooling, database indexes.',
          learning: 'Real load reveals problems.',
          result: 'Sustained 100+ concurrent without degradation.',
        },
      ],
      
      deepDives: [
        {
          title: 'Performance Optimization Journey',
          description: 'From 3 seconds to 800ms load time.',
          codeBefore: 'Full React bundle (500KB) + unoptimized images',
          codeAfter: 'Code-split by route (80KB initial) + compressed images + caching',
          why: 'Healthcare users can\'t wait. Every 100ms is a bounce risk.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Working on healthcare taught me performance isn\'t a feature—it\'s a requirement.',
        ifBuildingAgain: [
          'Implement monitoring from day 1',
          'Profile on production load earlier',
          'Test with real healthcare workflows early',
        ],
        links: {
          demo: 'https://hospital-saaS.com',
        },
      },
    },
  },
  {
  id: 'medtech-dashboards',
  name: 'Medtech Dashboards',
  slug: 'medtech-dashboards',
  description: 'Multi-workflow appointment management. Doctor visits, home visits, labs, nursing, physiotherapy. Admin dashboard with onboarding, content management, transactions, earnings.',
  shortDescription: 'Multi-specialty appointment & workflow management',
  thumbnail: '/projects/medtech/images/dashboard.png',
  status: 'live',
  year: '2024',
  complexity: 9,
  impact: 9,
  
  grid: {
    role: 'Full Stack Engineer',
    metrics: 'Multi-workflow, Transactions, Earnings, Real-time',
    tags: ['Next.js', 'Performance', 'Dashboards', 'Image Compression', 'Server-side Pagination'],
  },
  
  caseStudy: {
    timeline: 'Sep 2024 - Oct 2025',
    team: '5-person team',
    
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
      links: {
        github: 'Live on AWS EC2 (NDA)',
      },
    },
  },
},

  {
    id: 'pg-accommodation',
    name: 'PG Accommodation Platform',
    slug: 'pg-accommodation-platform',
    description: 'Multi-tenant property management. Tenant onboarding, booking, notice tracking, PDF invoices.',
    shortDescription: 'Multi-tenant property management',
    thumbnail: '/projects/pg/images/dashboard.png',
    status: 'live',
    year: '2024',
    complexity: 7,
    impact: 6,
    
    grid: {
      role: 'Full Stack Engineer',
      metrics: 'Multi-tenant, Booking, PDF generation',
      tags: ['Next.js', 'React PDF', 'Multi-tenant', 'MongoDB'],
    },
    
    caseStudy: {
      timeline: 'Sep 2024 - Oct 2025',
      team: 'Pair programming',
      
      problem: {
        context: 'PG owners managing multiple properties. Tenants applying online. Manual processes everywhere.',
        pain: 'Manual onboarding forms. Invoice generation offline. Notice tracking scattered.',
        challenge: 'How to streamline tenant onboarding, booking, and invoice generation?',
        insight: 'Automation in property management saves hours of manual work per cycle.',
      },
      
      solution: {
        approach: 'Multi-tenant Platform with Automated Workflows',
        architecture: 'Landlord Dashboard → Tenant Onboarding → Booking → PDF Invoice Generation',
        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React PDF'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['Vercel'],
        },
        decisions: [
          {
            title: 'React PDF for Invoice Generation',
            description: 'Why client-side instead of server?',
            why: 'Client-side = instant download. Server-side would add latency.',
          },
          {
            title: 'Multi-tenant Data Model',
            description: 'How to isolate landlord data?',
            why: 'Each landlord only sees their tenants. Queries filtered by landlord_id.',
          },
          {
            title: 'MongoDB Flexibility',
            description: 'Why MongoDB?',
            why: 'Different property types, different structures. Schema flexibility needed.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Onboarding', before: 'Manual forms', after: 'Automated workflow', impact: '60% faster' },
          { label: 'Invoice Generation', before: 'Manual PDF creation', after: 'Instant download', impact: 'Zero manual work' },
          { label: 'Notice Tracking', before: 'Email/spreadsheet', after: 'Automated dashboard', impact: 'No missed dates' },
        ],
        adoption: {
          launch: 'Live',
          users: 'Property owners + tenants',
          uptime: '99%+',
        },
        learning: 'Automation in admin workflows saves tremendous time.',
      },
      
      challenges: [
        {
          title: 'PDF Generation Performance',
          problem: 'Large invoices slow to generate.',
          solution: 'Optimized React PDF, lazy load heavy components.',
          learning: 'PDF generation can be slow if not optimized.',
          result: 'Invoices generate in <2 seconds.',
        },
      ],
      
      deepDives: [
        {
          title: 'React PDF Optimization',
          description: 'How to generate PDFs without blocking UI.',
          codeBefore: 'Generate all PDF content immediately. Users wait.',
          codeAfter: 'Lazy load PDF sections. Generate asynchronously.',
          why: 'Large PDFs block UI. Lazy loading keeps app responsive.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Building this taught me good UX in property management matters to business efficiency.',
        ifBuildingAgain: [
          'Implement invoice caching',
          'Add bulk invoice generation',
          'Test with large property portfolios',
        ],
        links: {
          demo: 'https://pg-accommodation.com',
        },
      },
    },
  },

  {
    id: 'hospital-websites',
    name: 'Hospital Websites Series',
    slug: 'hospital-websites-series',
    description: '5+ production healthcare websites. Patient portals, doctor dashboards, lab services.',
    shortDescription: '5+ healthcare websites built end-to-end',
    thumbnail: '/projects/hospitals/images/portal.png',
    status: 'live',
    year: '2024',
    complexity: 6,
    impact: 8,
    
    grid: {
      role: 'MERN Developer',
      metrics: '5+ websites, 5+ clients, JWT + RBAC',
      tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'AWS'],
    },
    
    caseStudy: {
      timeline: 'Nov 2023 - Aug 2024',
      team: '3-person team',
      
      problem: {
        context: 'Multiple hospitals need custom websites. Each has unique workflows but similar requirements.',
        pain: 'Building from scratch each time = inefficient. But customization needed.',
        challenge: 'How to balance reusable templates with client-specific healthcare requirements?',
        insight: 'Healthcare websites need both standardization (speed) and customization (client needs).',
      },
      
      solution: {
        approach: 'Reusable Component Library + Client-Specific Customization',
        architecture: 'Base Template (Patient Portal, Doctor Dashboard, Lab) + Client Branding',
        techStack: {
          frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          backend: ['Node.js', 'Express.js'],
          database: ['MongoDB'],
          infra: ['AWS EC2', 'Docker'],
        },
        decisions: [
          {
            title: 'Reusable Base Template',
            description: 'Why not build from scratch each time?',
            why: 'Speed to market. Each hospital deploys in weeks, not months.',
          },
          {
            title: 'JWT + RBAC Security',
            description: 'How to secure patient data?',
            why: 'Patient, Doctor, Admin roles with different access. JWT tokens stateless, scalable.',
          },
          {
            title: 'MongoDB Flexibility',
            description: 'Why MongoDB for varied needs?',
            why: 'Schema flexibility allows different hospital structures. No migrations needed.',
          },
        ],
      },
      
      results: {
        metrics: [
          { label: 'Websites Built', before: '0', after: '5+', impact: '5 hospital clients live' },
          { label: 'Time to Deploy', before: '3-4 months', after: '6-8 weeks', impact: '50% faster' },
          { label: 'Security', before: 'None', after: 'JWT + RBAC', impact: 'Zero breaches' },
          { label: 'Code Reuse', before: '0%', after: '70%+', impact: 'Efficiency gained' },
        ],
        adoption: {
          launch: 'First: Nov 2023, All 5: Jun 2024',
          users: '100+ users per hospital',
          uptime: '99%+ across all',
        },
        learning: 'Balancing reuse and customization is an art. Too rigid = inflexible. Too flexible = slow.',
      },
      
      challenges: [
        {
          title: 'Hospital-Specific Customization',
          problem: 'Each hospital wants unique workflows. Template too rigid?',
          solution: 'Built configurable workflows. Admins customize without code changes.',
          learning: 'Customization != code changes. It\'s configuration.',
          result: '5 hospitals with distinct workflows, same codebase.',
        },
        {
          title: 'Data Access Control',
          problem: 'Patients only see their data. Doctors only see their patients.',
          solution: 'RBAC middleware. Every query scoped to user role and hospital.',
          learning: 'Security isn\'t optional in healthcare.',
          result: 'Zero unauthorized access incidents.',
        },
      ],
      
      deepDives: [
        {
          title: 'RBAC Pattern for Healthcare',
          description: 'How to implement role-based access control for sensitive data.',
          codeBefore: 'db.patients.find({})',
          codeAfter: 'db.patients.find({ hospital_id: req.user.hospital_id, visible_to_roles: req.user.role })',
          why: 'Every query must check role and hospital. Security by query design.',
        },
      ],
      
      outcome: {
        status: 'Live in Production',
        reflection: 'Building 5+ hospital websites taught me healthcare workflows and HIPAA compliance.',
        ifBuildingAgain: [
          'Implement audit logging from start',
          'Add HIPAA compliance checklist',
          'Test with real hospital workflows early',
        ],
        links: {
          github: 'Live on AWS EC2',
        },
      },
    },
  },
  {
  id: 'leads-management-dashboard',
  name: 'Leads Management Dashboard',
  slug: 'leads-management-dashboard',
  description: 'Insurance leads capture platform. Agent onboarding with QR codes. Leads management dashboard. Agent data storage. Monolith MERN stack.',
  shortDescription: 'QR-based leads capture for insurance agents',
  thumbnail: '/projects/leads/images/dashboard.png',
  status: 'live',
  year: '2024',
  complexity: 7,
  impact: 7,
  
  grid: {
    role: 'Full Stack Developer',
    metrics: 'QR-based capture, Agent onboarding, Leads management',
    tags: ['React.js', 'Node.js', 'MongoDB', 'QR codes', 'Monolith'],
  },
  
  caseStudy: {
    timeline: 'Nov 2023 - Aug 2024',
    team: '2-person team',
    
    problem: {
      context: 'Insurance company needs field agents to capture leads in public places. Manual lead entry = slow, errors, no tracking.',
      pain: 'Agents scattered. No unified lead capture. No agent performance tracking. Manual paper forms.',
      challenge: 'How to get agents into field with QR codes that capture leads and tie them to agent data?',
      insight: 'QR codes bypass friction. Physical + digital integration needed.',
    },
    
    solution: {
      approach: 'QR-Based Lead Capture with Agent Dashboard + Leads Management',
      architecture: 'Agent Onboarding → Generate QR Code → Public templates with QR → QR scan → Lead captured → Dashboard displays',
      techStack: {
        frontend: ['React.js', 'CSS'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        features: ['QR code generation', 'Agent onboarding', 'Leads dashboard', 'Agent dashboard'],
      },
      decisions: [
        {
          title: 'QR Code for Lead Capture',
          description: 'Why QR codes instead of manual form?',
          why: 'Zero friction. Scan QR → instant lead capture. Agent doesn\'t need to explain.',
        },
        {
          title: 'Agent Data Storage with Agent',
          description: 'Why store data at agent level?',
          why: 'Agent context matters. Every lead tied to agent who captured it. Performance tracking.',
        },
        {
          title: 'Monolith Backend',
          description: 'Why monolith instead of microservices?',
          why: 'v0 product. Speed matters. Single codebase faster to ship than distributed system.',
        },
        {
          title: 'Leads Dashboard',
          description: 'Who needs the leads?',
          why: 'Insurance company tracks all leads in one view. Filter by agent, status, date.',
        },
        {
          title: 'Agent Dashboard',
          description: 'Who needs agent data?',
          why: 'Admin tracks agent performance. Lead count, conversion rate, etc.',
        },
      ],
    },
    
    results: {
      metrics: [
        { label: 'Lead Capture', before: 'Manual forms', after: 'QR scan instant', impact: 'Zero friction' },
        { label: 'Agent Tracking', before: 'No visibility', after: 'Dashboard visibility', impact: 'Performance tracked' },
        { label: 'Lead Management', before: 'Spreadsheets', after: 'Centralized dashboard', impact: 'Organized' },
        { label: 'QR Distribution', before: 'N/A', after: 'One per agent + templates', impact: 'Field-ready' },
      ],
      adoption: {
        launch: 'Live',
        users: 'Insurance agents + admin',
        uptime: '99%+',
      },
      learning: 'QR codes remove friction. Physical + digital integration powerful for field work.',
    },
    
    challenges: [
      {
        title: 'QR Code Generation at Scale',
        problem: 'Need unique QR per agent. Generating and storing 100+ codes.',
        solution: 'Generate on demand. Store QR mapping in database. Reuse template.',
        learning: 'QR generation isn\'t expensive. Do it on the fly.',
        result: 'Each agent gets unique QR instantly.',
      },
      {
        title: 'Tying Leads to Agents',
        problem: 'QR scanned. How do we know which agent?',
        solution: 'Each QR encodes agent_id. Scan decodes agent_id. Lead tied to agent.',
        learning: 'QR encoding is powerful for context.',
        result: 'Every lead has agent attribution.',
      },
      {
        title: 'Agent Onboarding UX',
        problem: 'Agents in field. Need simple onboarding.',
        solution: 'Minimal form. Generate QR. Print template. Deploy.',
        learning: 'Field workflows need simplicity.',
        result: 'Agent onboarding in <5 minutes.',
      },
    ],
    
    deepDives: [
      {
        title: 'QR Code Encoding Pattern',
        description: 'How to encode agent context in QR code.',
        codeBefore: 'Generate generic QR pointing to website',
        codeAfter: 'Generate QR with agent_id embedded → scan → system knows which agent',
        why: 'QR context = automatic attribution.',
      },
      {
        title: 'Agent Data Scoping',
        description: 'How to track leads per agent.',
        codeBefore: 'All leads in one list',
        codeAfter: 'Query leads filtered by agent_id',
        why: 'Agent-scoped queries = performance tracking.',
      },
    ],
    
    outcome: {
      status: 'Live in Production (v0)',
      reflection: 'Building this taught me QR codes are powerful for bridging physical and digital. Field work needs friction removal.',
      ifBuildingAgain: [
        'Build v1 with microservices',
        'Add analytics for lead conversion',
        'Implement bulk agent onboarding',
      ],
      links: {
        github: 'Live production',
      },
    },
  },
},
];
