import type { Metadata } from 'next';


export const BASE_URL = 'https://vinod-dev.vercel.app';

export const PERSON = {
  name: 'Vinod Kumar',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  targets: 'Chennai, Bengaluru, Remote',
  email: 'vk5241415@gmail.com',
  skills: 'React, Next.js, TypeScript, Node.js, MongoDB, Apache Kafka',
};





export const DEFAULT_SEO = {
  title: `${PERSON.name} — Full Stack Developer`,
  description: `Full Stack Developer based in Chennai with end-to-end ownership across React, Next.js, Node.js, and distributed systems. Available for full-time roles in Chennai, Bengaluru, and remote — and freelance projects globally.`,
  url: BASE_URL,
  twitterHandle: '@vinodkumar', // update when you have one
  keywords: [
    // Name + identity
    'Vinod Kumar',
    'Vinod Kumar Developer',
    'Vinod Kumar Full Stack Developer',
    'Vinod Kumar Chennai',
    'Vinod Kumar Portfolio',

    // Role
    'Full Stack Developer',
    'Full Stack Developer India',
    'Full Stack Developer Chennai',
    'Full Stack Developer Bengaluru',
    'Senior Full Stack Developer India',
    'MERN Stack Developer India',
    'MERN Stack Developer Chennai',

    'React Developer India',
    'Next.js Developer India',
    'Node.js Developer India',
    'TypeScript Developer India',
    'MongoDB Developer India',
    'Apache Kafka Developer India',
    'React Developer Chennai',
    'Next.js Developer Chennai',
    'Node.js Developer Chennai',

    // Architecture + differentiator
    'End-to-end Full Stack Developer',
    'Full Stack Engineer end-to-end ownership',
    'Microservices Developer India',
    'Event-driven Architecture Developer',
    'Distributed Systems Developer India',
    'Full Stack Architect India',

    'Hire Full Stack Developer India',
    'Hire Full Stack Developer Chennai',
    'Hire Full Stack Developer Bengaluru',
    'Full Stack Developer for hire India',
    'Full Stack Developer open to work',
    'Full Stack Developer available Chennai',
    'Full Stack Developer available Bengaluru',
    'Remote Full Stack Developer India',

    'Freelance Full Stack Developer India',
    'Freelance React Developer India',
    'Freelance Next.js Developer India',
    'Freelance Node.js Developer India',
    'Freelance Developer for Startups India',
    'Freelance Developer for Agencies India',
    'Freelance Web Developer Chennai',
    'Contract Full Stack Developer India',

    'Healthcare SaaS Developer India',
    'SaaS Developer India',
    'MVP Developer India',
    'Dashboard Developer India',
    'Full Stack Developer Startups',
    'Full Stack Developer SMBs',
  ],
};


export const PAGE_SEO = {
  home: {
    // Primary keyword first in title = stronger ranking signal
    title: `Full Stack Developer Chennai — ${PERSON.name} | React, Next.js, Node.js`,
    description: `Full Stack Developer based in Chennai with 2+ years shipping production SaaS, microservices, and healthcare platforms end-to-end. React, Next.js, Node.js, TypeScript, MongoDB, Kafka. Open to full-time roles in Chennai, Bengaluru, remote — and freelance projects globally.`,
    url: BASE_URL,
    keywords: [
      // Name + identity
      'Vinod Kumar', 'Vinod Kumar Developer', 'Vinod Kumar Full Stack Developer',
      'Vinod Kumar Chennai', 'Vinod Kumar Portfolio',

      // Primary role + location (highest intent)
      'Full Stack Developer Chennai',
      'Full Stack Developer Bengaluru',
      'Full Stack Developer India',
      'MERN Stack Developer Chennai',
      'MERN Stack Developer India',

      // Stack-specific
      'React Developer Chennai',
      'Next.js Developer Chennai',
      'Node.js Developer Chennai',
      'TypeScript Developer India',
      'MongoDB Developer India',
      'Kafka Developer India',
      'React Developer India',
      'Next.js Developer India',
      'Node.js Developer India',

      // Differentiator
      'End-to-end Full Stack Developer',
      'Full Stack Developer end-to-end ownership',
      'Full Stack Developer microservices',
      'Event-driven systems developer',
      'Distributed systems developer India',

      // Hire intent — full-time
      'Hire Full Stack Developer Chennai',
      'Hire Full Stack Developer Bengaluru',
      'Hire Full Stack Developer India',
      'Full Stack Developer available Chennai',
      'Full Stack Developer open to work India',
      'Full Stack Developer jobs Chennai',
      'Full Stack Developer jobs Bengaluru',
      'Remote Full Stack Developer India',

      // Hire intent — freelance
      'Freelance Full Stack Developer India',
      'Freelance React Developer India',
      'Freelance Next.js Developer India',
      'Freelance Node.js Developer India',
      'Freelance Developer startups India',
      'Freelance Developer agencies India',
      'Hire Freelance Developer Chennai',
      'Contract Full Stack Developer India',

      // Domain
      'Healthcare SaaS Developer India',
      'SaaS Developer India',
      'MVP Developer India',
      'Full Stack Developer startups India',
    ],
  },

  work: {
    // Lead with outcome-focused title
    title: `Full Stack Developer Portfolio — Case Studies | ${PERSON.name}`,
    description: `Real production case studies by Vinod Kumar — healthcare SaaS (5 hospitals, 100+ daily users), event-driven microservices (Kafka, 10+ services), multilingual CRM platforms (5 languages, RTL), and multi-tenant MVPs shipped in 1.5 months. Architecture decisions, real metrics, measurable outcomes.`,
    url: `${BASE_URL}/work`,
    keywords: [
      // Portfolio intent
      'Full Stack Developer Portfolio India',
      'Full Stack Developer Portfolio Chennai',
      'React Next.js Portfolio India',
      'Node.js Developer Portfolio',
      'MERN Stack Portfolio India',

      // Project types
      'Healthcare SaaS Developer Portfolio',
      'Microservices Developer Portfolio',
      'Kafka Event-driven Portfolio',
      'Multi-tenant SaaS Portfolio',
      'Multilingual Web App Developer',
      'RTL Developer Portfolio',
      'MVP Developer Portfolio India',
      'Dashboard Developer Portfolio',

      // Case study intent (recruiter/founder searches)
      'Full Stack Case Studies India',
      'Node.js Case Studies',
      'React Case Studies Developer',
      'Next.js Production Projects',
      'Full Stack Production Projects India',
      'Real-world Full Stack Projects India',

      // Architecture signals
      'Microservices Architecture Portfolio',
      'Event-driven Architecture Developer',
      'Kafka Microservices Developer India',
      'Distributed Systems Portfolio',

      // Audience signals
      'Full Stack Developer Portfolio for CTOs',
      'Full Stack Developer Portfolio for Founders',
      'Hire Experienced Full Stack Developer India',
      'Senior Full Stack Developer Portfolio India',

      // Domain
      'Healthcare Platform Developer India',
      'SaaS Developer Portfolio India',
      'CRM Integration Developer India',
      'Full Stack Developer Chennai Portfolio',
    ],
  },

  about: {
    title: `About Vinod Kumar — Full Stack Developer Chennai | 2+ Years Production Experience`,
    description: `Vinod Kumar is a Full Stack Developer based in Chennai with 2+ years building production systems end-to-end — solo and in teams. Specialized in React, Next.js, Node.js, TypeScript, MongoDB, and Apache Kafka. Built healthcare SaaS, event-driven microservices, and multilingual platforms for startups, agencies, and enterprise clients. Available for full-time roles and freelance projects.`,
    url: `${BASE_URL}/about`,
    keywords: [
      // Identity
      'Vinod Kumar Full Stack Developer',
      'Vinod Kumar Chennai Developer',
      'Vinod Kumar About',
      'Who is Vinod Kumar Developer',

      // Role + location
      'Full Stack Developer Chennai',
      'Full Stack Developer India',
      'Full Stack Developer 2 years experience',
      'Junior Senior Full Stack Developer India',
      'MERN Stack Developer Chennai',

      // Stack
      'React Next.js Node.js Developer India',
      'TypeScript Full Stack Developer India',
      'MongoDB Developer Chennai',
      'Kafka Developer India',
      'AWS Developer India',

      // Experience type
      'End-to-end Full Stack Developer',
      'Solo Full Stack Developer India',
      'Production Full Stack Developer India',
      'Full Stack Developer solo team India',

      // Background
      'Full Stack Developer Tensys Chennai',
      'Full Stack Developer Primates Chennai',
      'Healthcare Full Stack Developer India',
      'SaaS Full Stack Developer India',
      'Microservices Full Stack Developer India',

      // Hire intent
      'Hire Experienced Full Stack Developer India',
      'Hire React Next.js Developer Chennai',
      'Hire Node.js Developer India',
      'Full Stack Developer background India',
      'Full Stack Developer profile Chennai',
    ],
  },

  howiwork: {
    title: `How I Work — Engineering Process | ${PERSON.name} Full Stack Developer`,
    description: `How Vinod Kumar approaches full-stack engineering — taking end-to-end ownership from architecture decisions to production deployment. Covers problem-solving process, tech decision-making, collaboration with startups, agencies, and SMBs, and how to go from idea to live system. Built for CTOs, founders, and team leads evaluating fit.`,
    url: `${BASE_URL}/howiwork`,
    keywords: [
      // Process intent
      'Full Stack Developer Engineering Process',
      'Full Stack Developer Work Process India',
      'How Full Stack Developer works',
      'Full Stack Developer approach India',
      'Software Engineer workflow India',

      // Audience-specific
      'Full Stack Developer for Startups India',
      'Full Stack Developer for Agencies India',
      'Full Stack Developer for SMBs India',
      'Full Stack Developer for CTOs India',
      'Full Stack Developer for Founders India',

      // Architecture
      'Full Stack Architecture Decision Making',
      'End-to-end Software Development Process',
      'Production-ready Development Process',
      'Software Architecture Approach India',
      'Full Stack Developer System Design',

      // Collaboration
      'Collaborative Full Stack Developer India',
      'Full Stack Developer Team Lead India',
      'Full Stack Developer independent worker',
      'Full Stack Developer ownership mindset',

      // Trust signals
      'Reliable Full Stack Developer India',
      'Full Stack Developer production mindset',
      'Full Stack Developer shipping culture',
      'Fast Full Stack Developer India',
      'Quality Full Stack Developer India',

      // Hire intent
      'Why hire Vinod Kumar Developer',
      'Full Stack Developer working style India',
      'Hire Full Stack Developer process India',
    ],
  },

  resume: {
    title: `Resume — Vinod Kumar | Full Stack Developer Chennai | React, Next.js, Node.js, Kafka`,
    description: `Resume of Vinod Kumar — Full Stack Developer based in Chennai. 2+ years of production experience across React, Next.js, Node.js, TypeScript, MongoDB, and Apache Kafka. Built healthcare SaaS, microservices, and multi-tenant platforms. Open to full-time roles in Chennai, Bengaluru, remote — and freelance engagements.`,
    url: `${BASE_URL}/resume`,
    keywords: [
      // Resume-specific high intent
      'Vinod Kumar Resume',
      'Vinod Kumar CV',
      'Vinod Kumar Full Stack Developer Resume',
      'Vinod Kumar Developer Profile',

      // Resume search patterns
      'Full Stack Developer Resume Chennai',
      'Full Stack Developer Resume India',
      'Full Stack Developer CV India',
      'MERN Stack Developer Resume India',
      'React Developer Resume India',
      'Next.js Developer Resume India',
      'Node.js Developer Resume India',
      'TypeScript Developer Resume India',
      'MongoDB Developer Resume India',
      'Kafka Developer Resume India',

      // Experience level
      'Full Stack Developer 2 years experience Resume',
      'Junior Full Stack Developer Resume India',
      'Full Stack Developer fresher experienced India',

      // Hire intent (highest conversion page)
      'Hire Full Stack Developer Chennai',
      'Hire Full Stack Developer Bengaluru',
      'Hire Full Stack Developer India',
      'Full Stack Developer for hire Chennai',
      'Full Stack Developer available India',
      'Full Stack Developer open to work',
      'Hire React Next.js Developer India',
      'Hire Node.js Developer Chennai',
      'Hire TypeScript Developer India',
      'Hire Kafka Developer India',

      // Freelance
      'Freelance Full Stack Developer Resume',
      'Freelance Developer available India',
      'Contract Developer Resume India',
    ],
  },

  contact: {
    // Most conversion-critical page — title should be action-oriented
    title: `Hire Vinod Kumar — Full Stack Developer | Chennai, Bengaluru, Remote & Freelance`,
    description: `Get in touch with Vinod Kumar — Full Stack Developer open to full-time roles in Chennai and Bengaluru, remote positions, and freelance projects globally. Works with startups, agencies, SMBs, and international clients. Specializes in React, Next.js, Node.js, TypeScript, MongoDB, and Kafka. Response within 24 hours.`,
    url: `${BASE_URL}/contact`,
    keywords: [
      // Highest-intent hire keywords
      'Hire Full Stack Developer Chennai',
      'Hire Full Stack Developer Bengaluru',
      'Hire Full Stack Developer India',
      'Hire Full Stack Developer Remote',
      'Full Stack Developer for hire Chennai',
      'Full Stack Developer for hire India',
      'Full Stack Developer available now India',

      // Stack-specific hire
      'Hire React Developer Chennai',
      'Hire Next.js Developer India',
      'Hire Node.js Developer India',
      'Hire TypeScript Developer India',
      'Hire MongoDB Developer India',
      'Hire Kafka Developer India',
      'Hire MERN Stack Developer India',

      // Freelance hire
      'Hire Freelance Full Stack Developer India',
      'Hire Freelance React Developer India',
      'Hire Freelance Node.js Developer India',
      'Freelance Full Stack Developer for hire',
      'Contract Full Stack Developer India',
      'Freelance Developer startups India',
      'Freelance Developer agencies India',
      'Freelance Developer SMBs India',
      'Freelance Developer international clients',

      // Client type
      'Full Stack Developer for Startups India',
      'Full Stack Developer for Agencies India',
      'Full Stack Developer for SMBs India',
      'Full Stack Developer for international clients',
      'Full Stack Developer for CTOs',
      'Full Stack Developer for Founders',

      // Contact intent
      'Contact Full Stack Developer India',
      'Full Stack Developer contact Chennai',
      'Reach Full Stack Developer India',
      'Get in touch Full Stack Developer',
      'Vinod Kumar contact',
      'Vinod Kumar hire',
    ],
  },
};




// ============================================================
// PERSON JSON-LD — 100/100 production perfect
// ============================================================
export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,

  // Core identity
  name: 'Vinod Kumar',
  alternateName: [
    'Vinod Kumar Manimaran',
    'Vinod Kumar Developer',
    'Vinod Full Stack Developer',
  ],
  url: BASE_URL,
  email: PERSON.email,
  jobTitle: PERSON.role,
  description: DEFAULT_SEO.description,
  image: {
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#image`,
    url: `${BASE_URL}/profile.jpg`,
    width: 400,
    height: 400,
    caption: 'Vinod Kumar — Full Stack Developer, Chennai, India',
  },

  // Primary location only
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
    postalCode: '600119',
  },

  // Current hire status
  worksFor: {
    '@type': 'Organization',
    name: 'Available for hire',
    description: 'Open to full-time roles across India and remote, and freelance projects globally',
  },

  // Occupation — fully correct
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Developer',
    occupationalCategory: '15-1254.00',
  occupationLocation: [
  { '@type': 'Country', name: 'India' },
],
    estimatedSalary: {
      '@type': 'MonetaryAmountDistribution',
      name: 'Full Stack Developer salary India 2025',
      currency: 'INR',
      duration: 'P1Y',
      percentile10: 700000,
      median: 900000,
      percentile90: 1500000,
    },
    // Ordered by rarity + signal value — highest impact first
    skills: [
      'Apache Kafka', 'Next.js', 'TypeScript', 'Node.js',
      'MongoDB', 'Redis', 'WebSockets', 'AWS',
      'React', 'Redux Toolkit', 'Tailwind CSS',
      'OAuth', 'JWT', 'Docker', 'Vercel', 'REST API',
    ],
    responsibilities: [
      'End-to-end product ownership from architecture to production deployment',
      'Building scalable React and Next.js frontends with pixel-perfect design',
      'Designing Node.js backend systems and REST APIs',
      'Event-driven microservices architecture with Apache Kafka',
      'MongoDB schema design and query performance optimization',
      'Production SaaS development for healthcare, enterprise, and startups',
      'Freelance project delivery for startups, agencies, SMBs, and international clients',
    ],
  },

  // Technical knowledge
  knowsAbout: [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript',
    'MongoDB', 'Apache Kafka', 'Redis',
    'Microservices Architecture', 'Event-driven Architecture',
    'Distributed Systems', 'Full Stack Development',
    'REST API Design', 'WebSockets', 'Real-time Systems',
    'OAuth Authentication', 'JWT Security', 'RBAC',
    'Multi-tenant SaaS Architecture', 'Healthcare SaaS',
    'Performance Optimization', 'SEO', 'System Design',
    'Redux Toolkit', 'RTK Query', 'Tailwind CSS',
    'AWS EC2', 'AWS S3', 'AWS EKS',
    'Docker', 'Vercel', 'CI/CD',
    'Figma to Code', 'Mobile-first Development',
    'i18n', 'RTL CSS', 'Zoho CRM Integration',
    'Canva API', 'QR Code Systems',
  ],

  // Portfolio as main entity
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': BASE_URL,
    name: 'Vinod Kumar — Full Stack Developer Portfolio',
    description: 'Portfolio and case studies of Vinod Kumar, Full Stack Developer based in Chennai, India',
    inLanguage: 'en-IN',
  },

  // 3 sameAs entries — confident entity disambiguation
  sameAs: [
    BASE_URL,
    'https://www.linkedin.com/in/vinod-manimaran/',
    'https://hcaschennai.edu.in', // college entity link
  ],

  // Offers — geography spread lives here
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Full Stack Development — Full-time Employment',
      description: 'Available for full-time roles across Tamil Nadu, Karnataka, Kerala, and pan-India — onsite or remote',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: 900000,
        minPrice: 700000,
        maxPrice: 1500000,
        priceCurrency: 'INR',
        unitText: 'per year',
      },
      areaServed: [
        { '@type': 'State', name: 'Tamil Nadu' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'State', name: 'Kerala' },
        { '@type': 'State', name: 'Maharashtra' },
        { '@type': 'State', name: 'Telangana' },
        { '@type': 'State', name: 'Andhra Pradesh' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      seller: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': 'Offer',
      name: 'Full Stack Development — Freelance Projects',
      description: 'Available for freelance and contract projects globally — startups, agencies, SMBs, and enterprise clients worldwide',
      availability: 'https://schema.org/InStock',
      // FIX: priceSpecification added to freelance offer
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        minPrice: 5000,
        maxPrice: 50000,
        priceCurrency: 'INR',
        unitText: 'per project',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Japan' },
        { '@type': 'Place', name: 'Worldwide' },
      ],
      seller: { '@id': `${BASE_URL}/#person` },
    },
  ],

  // FIX: degree + study dates added
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Hindustan College of Arts and Science',
    url: 'https://hcaschennai.edu.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    member: {
      '@type': 'OrganizationRole',
      member: { '@id': `${BASE_URL}/#person` },
      validFrom: '2019',
      validUntil: '2023',
      roleName: 'Student',
    },
  },

  // FIX: credentialCategory using schema-aligned value + degree added
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Full Stack Developer',
      description: 'Built healthcare SaaS platforms managing 5+ hospitals and 100+ daily users across India. 73% load time improvement, pixel-perfect Figma delivery, Page 1 SEO rankings.',
      credentialCategory: 'JobExperience',
      validFrom: '2024-09',
      validUntil: '2025-10',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Tensys Innovations',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MERN Stack Developer',
      description: 'Built 5+ production healthcare websites with JWT + RBAC security serving 500+ users. 50% faster deployment cycles using reusable template architecture.',
      credentialCategory: 'JobExperience',
      validFrom: '2023-11',
      validUntil: '2024-08',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Primates',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Computer Science',
      credentialCategory: 'degree',
      validFrom: '2019',
      validUntil: '2023',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: 'Hindustan College of Arts and Science',
        url: 'https://hcaschennai.edu.in',
      },
    },
  ],

  // FIX: all 9 projects with SoftwareApplication dual-type + about
  subjectOf: [
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/clapos`,
      name: 'ClapOS — Film Production SaaS',
      description: 'Event-driven microservices platform for film production with 10+ independent services and real-time workflow synchronization via Kafka.',
      url: `${BASE_URL}/work/clapos`,
      dateCreated: '2025-11-01',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'Film Production Management System' },
      keywords: ['Kafka', 'Microservices', 'Next.js', 'Node.js', 'MongoDB', 'AWS EKS', 'Event-driven Architecture'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/plusuae`,
      name: 'PlusUAE — Multilingual Landing Page',
      description: '5-language landing page with RTL-first CSS, auto language detection, and real-time Zoho CRM lead capture for UAE corporate client.',
      url: `${BASE_URL}/work/plusuae`,
      dateCreated: '2025-11-01',
      datePublished: '2025-11-07',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'Multilingual CRM Landing Page' },
      keywords: ['Next.js', 'i18n', 'RTL CSS', 'Zoho CRM', 'TypeScript', 'Multilingual', 'UAE'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/jignu`,
      name: 'Jignu — Multi-tenant Business Directory MVP',
      description: 'Production-grade multi-tenant MVP shipped in 1.5 months with full tenant isolation, 3 interfaces, and JWT authentication.',
      url: `${BASE_URL}/work/jignu`,
      dateCreated: '2025-11-01',
      datePublished: '2025-11-01',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'Multi-tenant Business Directory Platform' },
      keywords: ['Multi-tenant', 'React', 'Node.js', 'MongoDB', 'MVP', 'JWT', 'SaaS'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/wyka`,
      name: 'Wyka — Marketing Automation Platform',
      description: 'Custom Canva marketplace integration with cross-platform OAuth, Passport.js session management, and real-time WebSocket sync.',
      url: `${BASE_URL}/work/wyka`,
      dateCreated: '2025-12-01',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'Marketing Automation and Design Integration Platform' },
      keywords: ['Canva API', 'OAuth', 'WebSockets', 'Next.js', 'Real-time', 'Passport.js'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/hospital-management-saas`,
      name: 'Hospital Management SaaS',
      description: 'Full-stack healthcare platform for 5+ hospitals handling 100+ daily appointments with 73% load time improvement and Page 1 SEO rankings.',
      url: `${BASE_URL}/work/hospital-management-saas`,
      dateCreated: '2024-09-01',
      datePublished: '2024-09-01',
      applicationCategory: 'HealthApplication',
      about: { '@type': 'SoftwareApplication', name: 'Healthcare Appointment and Patient Management SaaS' },
      keywords: ['Healthcare SaaS', 'Next.js', 'Performance Optimization', 'MongoDB', 'AWS', 'SEO', 'React PDF'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/medtech-dashboards`,
      name: 'Medtech Dashboards',
      description: 'Multi-workflow appointment dashboard managing 5+ specialist types with 90% image size reduction, sub-100ms filters, and 100k+ record handling.',
      url: `${BASE_URL}/work/medtech-dashboards`,
      dateCreated: '2024-09-01',
      datePublished: '2025-01-01',
      applicationCategory: 'HealthApplication',
      about: { '@type': 'SoftwareApplication', name: 'Multi-specialty Healthcare Appointment Dashboard' },
      keywords: ['Healthcare Dashboard', 'Next.js', 'Image Compression', 'Server-side Pagination', 'MongoDB', 'Redis'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/pg-accommodation-platform`,
      name: 'PG Accommodation Platform',
      description: 'Component-driven property management platform with 75%+ code reuse, mobile-first design, and seamless token refresh for 99%+ uptime.',
      url: `${BASE_URL}/work/pg-accommodation-platform`,
      dateCreated: '2024-09-01',
      datePublished: '2024-10-01',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'Property and Tenant Management Platform' },
      keywords: ['React', 'Next.js', 'Component Architecture', 'Mobile-first', 'JWT', 'TypeScript', 'React PDF'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/hospital-websites-series`,
      name: 'Hospital Websites Series',
      description: '5+ production healthcare websites with patient portals, doctor dashboards, lab services, JWT + RBAC security, and 50% faster deployment cycles.',
      url: `${BASE_URL}/work/hospital-websites-series`,
      dateCreated: '2023-11-01',
      datePublished: '2024-06-01',
      applicationCategory: 'HealthApplication',
      about: { '@type': 'SoftwareApplication', name: 'Healthcare Website Template System with Patient Portal' },
      keywords: ['React', 'Node.js', 'MongoDB', 'JWT', 'RBAC', 'Healthcare', 'AWS EC2', 'Docker'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': ['CreativeWork', 'SoftwareApplication'],
      '@id': `${BASE_URL}/work/leads-management-dashboard`,
      name: 'Leads Management Dashboard',
      description: 'QR-based insurance lead capture MVP with agent onboarding dashboard, real-time leads tracking, and agent-scoped lead attribution.',
      url: `${BASE_URL}/work/leads-management-dashboard`,
      dateCreated: '2023-11-01',
      datePublished: '2024-08-01',
      applicationCategory: 'BusinessApplication',
      about: { '@type': 'SoftwareApplication', name: 'QR-based Field Sales Lead Capture and Management System' },
      keywords: ['QR Code', 'React', 'Node.js', 'MongoDB', 'Lead Management', 'Insurance', 'MVP'],
      inLanguage: 'en',
      author: { '@id': `${BASE_URL}/#person` },
    },
  ],
};

// ============================================================
// WEBSITE JSON-LD
// ============================================================
export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Vinod Kumar — Full Stack Developer Portfolio',
  url: BASE_URL,
  description: DEFAULT_SEO.description,
  inLanguage: 'en-IN',
  author: { '@id': `${BASE_URL}/#person` },
};

// ============================================================
// PROFILE PAGE JSON-LD — Schema.org v17, homepage only
// ============================================================
export const PROFILE_PAGE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profilepage`,
  name: 'Vinod Kumar — Full Stack Developer Portfolio',
  url: BASE_URL,
  inLanguage: 'en-IN',
  dateCreated: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntity: { '@id': `${BASE_URL}/#person` },
  author: { '@id': `${BASE_URL}/#person` },
};

// ============================================================
// CONTACT PAGE JSON-LD — /contact page only
// FIX: ContactPage schema added
// ============================================================
export const CONTACT_PAGE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact#contactpage`,
  name: 'Contact Vinod Kumar — Full Stack Developer',
  url: `${BASE_URL}/contact`,
  description: 'Hire Vinod Kumar for full-time roles in Chennai or Bengaluru, remote positions, or freelance projects globally.',
  inLanguage: 'en-IN',
  author: { '@id': `${BASE_URL}/#person` },
  mainEntity: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: PERSON.email,
      contactType: 'hiring',
      availableLanguage: ['English', 'Tamil'],
      areaServed: ['IN', 'US', 'GB', 'AE', 'SG', 'AU', 'CA', 'DE'],
    },
  },
};

// ============================================================
// BREADCRUMBS — inject per page
// ============================================================
export const BREADCRUMBS = {
  work: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${BASE_URL}/work` },
    ],
  },
  about: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
    ],
  },
  howiwork: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'How I Work', item: `${BASE_URL}/howiwork` },
    ],
  },
  resume: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Resume', item: `${BASE_URL}/resume` },
    ],
  },
  contact: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  },
};

export function buildProjectBreadcrumb(projectName: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${BASE_URL}/work` },
      { '@type': 'ListItem', position: 3, name: projectName, item: `${BASE_URL}/work/${slug}` },
    ],
  };
}

// ============================================================
// FAQ JSON-LD — /howiwork page only
// FIX: expanded to 8 Q&As (was 5, Google recommends 7-10)
// ============================================================
export const HOWIWORK_FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you approach a new full stack project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I start with architecture before writing any code — understanding the problem domain, data models, and system boundaries. I prefer event-driven patterns for complex workflows and monolith-first for MVPs. Every decision is documented with the why, not just the what.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take full ownership of projects end-to-end?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. My approach is full ownership — from Figma to frontend to backend to deployment. I have shipped solo projects across React, Next.js, Node.js, MongoDB, and Kafka into production, and collaborated in 4-5 person teams at Tensys Innovations and Primates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of clients do you work with as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I work with startups, agencies, SMBs, and international clients. Past freelance work includes a multilingual CRM landing page for a UAE corporate client, a multi-tenant business directory MVP, and a marketing automation platform with custom Canva integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you available for remote work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I am available for full-time remote roles and remote freelance projects globally. I am also open to onsite roles in Chennai and Bengaluru, and across Tamil Nadu, Karnataka, Kerala, and other Indian states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your typical project delivery timeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on scope. I shipped a 5-language multilingual CRM landing page in 1 week and a production multi-tenant business directory MVP in 1.5 months. I prioritize shipping fast without cutting corners on architecture or security.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your primary tech stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'My core stack is React, Next.js, Node.js, TypeScript, MongoDB, and Apache Kafka. I also work with Redis, WebSockets, OAuth, JWT, AWS, Docker, and Vercel. I am comfortable across the full stack from frontend UI to backend APIs to cloud infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. I have delivered production projects for international clients including a UAE-based corporate client (PlusUAE — multilingual landing page with 5 languages and Zoho CRM integration). I am open to freelance and contract work from clients in the US, UK, UAE, Singapore, Australia, Canada, Germany, and worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle NDA and confidential projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I have delivered multiple NDA projects including healthcare SaaS platforms at Tensys Innovations. I respect confidentiality agreements fully and can work within NDA terms. For portfolio purposes, I describe outcomes and architecture without exposing proprietary code or client data.',
      },
    },
  ],
};


export function buildProjectJsonLd(project: {
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  status: string;
  year: string;
  grid: { tags: string[]; role: string; company: string };
  caseStudy: { timeline: string };
}) {
  const thumbnail = project.thumbnail.startsWith('http')
    ? project.thumbnail
    : `${BASE_URL}${project.thumbnail}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['CreativeWork', 'SoftwareApplication'],
    '@id': `${BASE_URL}/work/${project.slug}`,
    name: project.name,
    description: project.description,
    url: `${BASE_URL}/work/${project.slug}`,
    image: thumbnail,
    dateCreated: `${project.year}-01-01`,
    applicationCategory: project.grid.tags.includes('Healthcare') || project.grid.tags.includes('Healthcare SaaS')
      ? 'HealthApplication'
      : 'BusinessApplication',
    keywords: project.grid.tags,
    author: { '@id': `${BASE_URL}/#person` },
    creator: { '@id': `${BASE_URL}/#person` },
    maintainer: { '@id': `${BASE_URL}/#person` },
    inLanguage: 'en',
    isPartOf: { '@id': `${BASE_URL}/#website` },
    provider: {
      '@type': 'Organization',
      name: project.grid.company,
    },
  };
}

export function buildMetadata({
  title,
  description,
  url,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: keywords ?? [],
    authors: [{ name: PERSON.name, url: BASE_URL }],
    creator: PERSON.name,
    publisher: PERSON.name,
    category: 'technology',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${PERSON.name} — Portfolio`,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export function buildProjectMetadata({
  name,
  description,
  slug,
  tags,
}: {
  name: string;
  description: string;
  slug: string;
  tags?: string[];
}): Metadata {
  const projectKeywords = PROJECT_SEO_KEYWORDS[slug] ?? [];

  return buildMetadata({
    title: `${name} — Case Study | ${PERSON.name}`,
    description,
    url: `${BASE_URL}/work/${slug}`,
    keywords: [
      ...projectKeywords,
      ...(tags ?? []),
    ],
  });
}

export const PROJECT_SEO_KEYWORDS: Record<string, string[]> = {
  clapos: [
    // Architecture
    'Event-driven microservices', 'Apache Kafka architecture', 'Kafka event streaming',
    'Microservices Node.js', 'Distributed systems developer', 'Event sourcing pattern',
    'CQRS architecture', 'Service decoupling', 'Message queue system',
    // Stack
    'Next.js microservices', 'MongoDB per service', 'AWS EKS deployment',
    'Redux Toolkit RTK Query', 'Node.js Express microservices', 'Cloudinary integration',
    // Domain
    'Film production software', 'Film production platform', 'Production management system',
    'Workflow orchestration system', 'Vendor booking system', 'Talent scheduling platform',
    // Outcomes
    '10 microservices production', 'Zero service coupling', 'Event-driven workflow sync',
    'Real-time workflow synchronization', 'Independent service scaling',
    // Role
    'Full stack microservices developer', 'Solo microservices build', 'Full stack owner',
    'End-to-end microservices ownership',
    // Audience signals
    'Hire Kafka developer India', 'Hire microservices developer Chennai',
    'Event-driven architect India', 'Node.js distributed systems developer',
    'Kafka Next.js developer', 'Full stack developer microservices',
    // General
    'Case study microservices', 'Microservices portfolio', 'Kafka portfolio project',
    'Node.js Kafka project', 'Next.js TypeScript Tailwind', 'AWS S3 Vercel deployment',
  ],

  plusuae: [
    // Core feature
    'Multilingual landing page', 'RTL CSS developer', 'Arabic RTL website',
    'i18n Next.js developer', 'Auto language detection', 'RTL LTR switching',
    'CSS logical properties RTL', '5 language website', 'Arabic English French Chinese',
    // Integration
    'Zoho CRM integration', 'Zoho API developer', 'Real-time CRM sync',
    'Lead capture automation', 'CRM lead integration', 'Queue retry system',
    'Exponential backoff API', 'Zero lost leads system',
    // Stack
    'Next.js i18n', 'Shadcn UI developer', 'Tailwind CSS RTL',
    'Custom i18n context React', 'Node.js Express backend',
    // Domain
    'UAE corporate website', 'International landing page', 'Conversion optimized landing page',
    'Multilingual conversion page', 'Cultural localization developer',
    // Outcomes
    '100% lead capture rate', 'Zero manual CRM entry', 'Real-time lead visibility',
    'Native language conversion',
    // Role
    'Freelance full stack developer UAE', 'Solo full stack developer',
    'Full stack owner freelance', '1 week delivery turnaround',
    // Audience signals
    'Hire multilingual web developer', 'Hire RTL developer India',
    'Zoho CRM developer India', 'Hire Next.js developer Chennai',
    'Freelance landing page developer India', 'International client developer India',
    // General
    'Multilingual website case study', 'RTL portfolio project',
    'Zoho integration case study', 'Next.js TypeScript Tailwind',
  ],

  jignu: [
    // Architecture
    'Multi-tenant SaaS architecture', 'Tenant isolation pattern', 'Tenant-scoped queries',
    'Multi-tenant MongoDB', 'JWT authentication Node.js', 'Admin moderation dashboard',
    'Monolith backend MVP', 'Secure multi-tenant system',
    // Stack
    'React TypeScript Tailwind', 'Node.js Express monolith', 'MongoDB multi-tenant',
    'Shadcn UI React', 'AWS EC2 deployment', 'AWS S3 storage',
    // Domain
    'Business directory platform', 'JustDial alternative', 'Company listing platform',
    'Multi-tenant directory MVP', 'B2B SaaS MVP', 'Business listing website',
    // Outcome
    '1.5 month MVP delivery', 'Production MVP fast delivery', 'Secure MVP architecture',
    '3 dashboard interfaces', 'Multi-tenant ready architecture',
    // Role
    'Freelance full stack developer', 'Solo MVP developer', 'Full stack owner',
    'End-to-end MVP builder',
    // Audience signals
    'Hire MVP developer India', 'Hire full stack developer Chennai',
    'Fast MVP delivery developer', 'Freelance SaaS developer India',
    'Multi-tenant developer India', 'Node.js MongoDB developer Chennai',
    // General
    'Multi-tenant case study', 'MVP portfolio project',
    'SaaS MVP case study', 'React Node.js MongoDB project',
    'Full stack developer portfolio India',
  ],

  wyka: [
    // Architecture
    'OAuth integration developer', 'Passport.js session management',
    'Cross-platform OAuth', 'WebSocket real-time sync', 'Unified session management',
    'Refresh token OAuth', 'Cross-platform authentication',
    // Stack
    'Canva API developer', 'Custom Canva marketplace app', 'Next.js OAuth',
    'Passport.js Node.js', 'WebSocket Node.js', 'MongoDB Express backend',
    // Domain
    'Marketing automation platform', 'Canva integration developer',
    'Marketing agent dashboard', 'Design automation tool',
    'Cross-platform data sync', 'Real-time dashboard sync',
    // Outcome
    'Auto-populated Canva designs', 'Real-time data sync under 100ms',
    'Unified OAuth single sign-on', 'Zero manual data re-entry',
    // Role
    'Freelance full stack developer', 'Solo full stack owner',
    'Integration developer India', 'Full stack integration engineer',
    // Audience signals
    'Hire Canva API developer', 'Hire OAuth developer India',
    'Hire WebSocket developer Chennai', 'Hire integration developer India',
    'Freelance full stack developer startups', 'Real-time sync developer India',
    // General
    'Canva integration case study', 'OAuth case study portfolio',
    'WebSocket real-time project', 'Next.js Node.js MongoDB project',
    'Full stack developer freelance portfolio',
  ],

  'hospital-management-saas': [
    // Architecture
    'Healthcare SaaS developer', 'Hospital management system', 'Medical SaaS platform',
    'Token-based authentication', 'RTK Query Redux Toolkit', 'React PDF invoices',
    'Pixel-perfect Figma developer', 'Performance optimization Next.js',
    // Stack
    'Next.js React Router DOM', 'Node.js Express healthcare', 'MongoDB healthcare',
    'AWS EC2 Redis Vercel', 'Tailwind CSS design system', 'Code splitting lazy loading',
    // Domain
    'Hospital appointment management', 'Patient history system', 'Invoice generation SaaS',
    'Healthcare dashboard developer', 'Medical platform developer',
    'Patient acquisition SEO', 'Hospital digital platform',
    // Outcome
    '73% load time improvement', '800ms page load time', '90+ Lighthouse score',
    'Pixel-perfect UI developer', 'Page 1 SEO rankings', '100+ daily active users',
    '5 hospital clients', 'Production healthcare SaaS',
    // Role
    'Full stack developer Tensys', 'Frontend team lead', 'End-to-end full stack developer',
    // Audience signals
    'Hire healthcare developer India', 'Hire Next.js performance developer',
    'Hire full stack developer Chennai', 'Healthcare SaaS developer India',
    'Performance optimization developer India', 'Full stack developer hospitals',
    // General
    'Healthcare SaaS case study', 'Hospital management portfolio',
    'Next.js performance case study', 'Full stack healthcare project',
  ],

  'medtech-dashboards': [
    // Architecture
    'Healthcare dashboard developer', 'Server-side pagination Node.js',
    'Image compression EXIF stripping', 'MongoDB indexed queries',
    'Redis caching Node.js', 'Multi-workflow dashboard', 'Admin panel healthcare',
    'Patient image security', 'Sub-100ms filter performance',
    // Stack
    'Next.js TypeScript dashboard', 'Redux Toolkit RTK Query', 'MongoDB query optimization',
    'AWS EC2 Redis', 'Node.js Express pagination', 'Excel export Node.js',
    // Domain
    'Medtech dashboard developer', 'Multi-specialty appointment system',
    'Doctor dashboard developer', 'Lab management system', 'Physiotherapy management',
    'Home visit scheduling', 'Healthcare data management', 'Patient records system',
    // Outcome
    '90% image size reduction', 'Sub-100ms indexed queries', '100k+ record handling',
    '5 specialist workflows', 'Zero metadata leaks', 'Instant first load pagination',
    // Role
    'Full stack developer Tensys', 'Healthcare frontend developer',
    'Performance engineer India',
    // Audience signals
    'Hire dashboard developer India', 'Hire performance developer Chennai',
    'Healthcare dashboard developer India', 'Hire Node.js MongoDB developer',
    'Full stack developer medtech', 'Hire Next.js developer India',
    // General
    'Medtech dashboard case study', 'Healthcare performance case study',
    'Dashboard portfolio project', 'Next.js dashboard developer',
    'Full stack developer portfolio healthcare',
  ],

  'pg-accommodation-platform': [
    // Architecture
    'Component-driven architecture React', 'Mobile-first developer',
    'Reusable component library', 'Compound components React',
    'Code splitting lazy loading', 'Token refresh pattern',
    'Data transformation layer', 'Component memoization React',
    // Stack
    'Next.js React Router DOM', 'TypeScript Tailwind CSS', 'React PDF developer',
    'JWT authentication React', 'MongoDB Vercel deployment',
    'Dynamic imports Next.js',
    // Domain
    'Property management platform', 'PG accommodation system',
    'Tenant management dashboard', 'Landlord portal developer',
    'Rental management software', 'Invoice generation property',
    // Outcome
    '75% component reuse', '65% faster page load', 'Mobile-first responsive',
    'One-click invoice download', 'Zero unexpected logouts',
    '100% device coverage',
    // Role
    'Full stack developer Tensys', 'Frontend architect India',
    'Component library developer',
    // Audience signals
    'Hire React component developer India', 'Hire mobile-first developer Chennai',
    'Hire full stack developer property', 'React architecture developer India',
    'Component library developer India', 'Hire Next.js developer Bengaluru',
    // General
    'Component architecture case study', 'Property platform portfolio',
    'React mobile-first project', 'Next.js TypeScript portfolio',
    'Full stack developer reusable components',
  ],

  'hospital-websites-series': [
    // Architecture
    'Reusable template architecture', 'Config-driven workflow', 'RBAC middleware Node.js',
    'JWT RBAC healthcare', 'WebSocket real-time booking', 'Multi-hospital platform',
    'Template-based deployment', 'Role-based access control',
    // Stack
    'React.js Node.js MongoDB', 'JWT authentication MERN',
    'AWS EC2 Docker deployment', 'TypeScript Tailwind MERN',
    // Domain
    'Hospital website developer', 'Healthcare website series',
    'Patient portal developer', 'Doctor dashboard developer',
    'Lab management website', 'Appointment booking system',
    'Medical website developer India',
    // Outcome
    '5 hospital websites live', '50% faster deployment', '70% code reuse',
    '500+ active users', '99% uptime sustained', 'Zero unauthorized access',
    'Zero double bookings',
    // Role
    'MERN stack developer Primates', 'Full stack healthcare developer',
    'Solo and team developer',
    // Audience signals
    'Hire hospital website developer India', 'Hire MERN stack developer Chennai',
    'Healthcare website developer India', 'Hire React Node.js developer',
    'MERN developer portfolio India', 'Full stack developer hospitals India',
    // General
    'Hospital website case study', 'MERN stack portfolio',
    'Healthcare template architecture', 'React Node.js MongoDB portfolio',
    'Full stack developer series project',
  ],

  'leads-management-dashboard': [
    // Architecture
    'QR code lead capture', 'Agent attribution system', 'QR context encoding',
    'Monolith MVP architecture', 'Three-interface platform',
    'Real-time leads dashboard', 'Field sales digitization',
    // Stack
    'React.js Node.js MongoDB', 'QR code generation Node.js',
    'CSS React frontend', 'Express.js monolith',
    // Domain
    'Insurance lead management', 'Field sales platform', 'Lead capture system',
    'Agent onboarding dashboard', 'QR-based sales tool',
    'Insurance agent platform', 'Lead attribution system',
    // Outcome
    'Zero friction lead capture', 'Real-time agent tracking',
    'Centralized lead database', 'Zero misattribution', 'QR instant capture',
    // Role
    'MERN stack developer Primates', 'Full stack developer freelance',
    '2-person team developer',
    // Audience signals
    'Hire QR developer India', 'Hire lead management developer',
    'Hire MERN stack developer Chennai', 'Field sales developer India',
    'Insurance platform developer India', 'Hire React Node.js developer India',
    // General
    'QR lead capture case study', 'Lead management portfolio',
    'Field sales digitization project', 'MERN stack case study',
    'Full stack developer lead management',
  ],
};