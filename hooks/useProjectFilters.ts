/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Project } from '@/lib/projects';

export type FilterCategory = 'company' | 'type' | 'status' | 'year' | 'tech';

export type FilterState = {
  company: string[];
  type: string[];
  status: string[];
  year: string[];
  tech: string[];
};

const INITIAL_STATE: FilterState = {
  company: [],
  type: [],
  status: [],
  year: [],
  tech: [],
};

// ✅ SHORT PARAM MAPPING
const PARAM_KEYS = {
  company: 'c',
  type: 't',
  status: 's',
  year: 'y',
  tech: 'tech',
} as const;

const REVERSE_PARAM_KEYS = {
  c: 'company',
  t: 'type',
  s: 'status',
  y: 'year',
  tech: 'tech',
} as const;

// ✅ CONVERT DISPLAY VALUES TO LOWERCASE SLUGS (for URLs)
const displayToSlug = (displayName: string): string => {
  return displayName.toLowerCase().replace(/\s+/g, '');
};

// ✅ CONVERT SLUGS BACK TO DISPLAY VALUES
const slugToDisplay = (slug: string, category: FilterCategory): string => {
  const displayMappings: Record<FilterCategory, Record<string, string>> = {
    company: {
      'personalprovject': 'Personal Project',
      'freelance': 'Freelance',
      'tensys': 'Tensys',
      'primates': 'Primates',
    },
    type: {
      'saas': 'SaaS',
      'healthcare': 'Healthcare',
      'fullstack': 'Full-Stack',
      'marketplace': 'Marketplace',
      'performance': 'Performance',
    },
    status: {
      'live': 'Live',
      'beta': 'Beta',
      'archived': 'Archived',
    },
    year: {
      '2024': '2024',
      '2025': '2025',
      '2023': '2023',
    },
    tech: {
      'nextjs': 'Next.js',
      'react': 'React.js',
      'reactrouter': 'React Router',
      'reactrouterdom': 'React Router DOM',
      'reactpdf': 'React PDF',
      'nodejs': 'Node.js',
      'expressjs': 'Express.js',
      'mongodb': 'MongoDB',
      'typescript': 'TypeScript',
      'tailwindcss': 'Tailwind CSS',
      'apachekafka': 'Apache Kafka',
      'microservices': 'Microservices',
      'oauth': 'OAuth',
      'passportjs': 'Passport.js',
      'websockets': 'WebSockets',
      'canva': 'Canva',
      'i18n': 'i18n',
      'rtl': 'RTL',
      'zohocrm': 'Zoho CRM',
      'shadcnui': 'Shadcn UI',
      'reduxtoolkit': 'Redux Toolkit',
      'rtkquery': 'RTK Query',
      'helmet': 'Helmet',
      'aws': 'AWS',
      'awsec2': 'AWS EC2',
      'awss3': 'AWS S3',
      'awseks': 'AWS EKS',
      'vercel': 'Vercel',
      'redis': 'Redis',
      'cloudinary': 'Cloudinary',
      'docker': 'Docker',
      'performance': 'Performance',
      'dashboards': 'Dashboards',
      'imagecompression': 'Image Compression',
      'serverpagination': 'Server-side Pagination',
      'jwt': 'JWT',
      'rbac': 'RBAC',
      'seo': 'SEO',
      'qrcodes': 'QR codes',
      'jwtauth': 'JWT Auth',
      'monolith': 'Monolith',
      'multitenant': 'Multi-tenant',
    },
  };

  return displayMappings[category][slug] || slug;
};

export function useProjectFilters(projects: Project[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ PARSE URL PARAMS ON MOUNT
  const [filters, setFilters] = useState<FilterState>(() => {
    const state = { ...INITIAL_STATE };

    // Parse each param: c=freelance-tensys → company: ['Freelance', 'Tensys']
    Object.entries(PARAM_KEYS).forEach(([category, paramKey]) => {
      const paramValue = searchParams.get(paramKey);
      if (paramValue) {
        const slugs = paramValue.split('-'); // 'freelance-tensys' → ['freelance', 'tensys']
        const displayValues = slugs.map(slug => slugToDisplay(slug, category as FilterCategory));
        state[category as FilterCategory] = displayValues;
      }
    });

    return state;
  });

  const [sortBy, setSortBy] = useState<'recent' | 'oldest' | 'complexity' | 'impact'>('recent');

  // ✅ UPDATE URL WHEN FILTERS CHANGE
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([category, values]) => {
      if (values.length > 0) {
        // Convert display values to slugs: ['Freelance', 'Tensys'] → 'freelance-tensys'
        const slugs = values.map(v => displayToSlug(v)).join('-');
        const paramKey = PARAM_KEYS[category as FilterCategory];
        params.set(paramKey, slugs);
      }
    });

    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    router.replace(url, { scroll: false });
  }, [filters, pathname, router]);

  // ✅ TOGGLE FILTER
  const toggleFilter = (category: FilterCategory, value: string) => {
    if (value === 'All') {
      setFilters(prev => ({ ...prev, [category]: [] }));
      return;
    }

    setFilters(prev => {
      const current = prev[category];
      const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: next };
    });
  };

  // ✅ CLEAR ALL FILTERS
  const clearAll = () => setFilters(INITIAL_STATE);

  // ✅ FILTER PROJECTS
  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesCompany =
          filters.company.length === 0 || filters.company.includes((project as any).company);
        const matchesType =
          filters.type.length === 0 || filters.type.includes((project as any).type);
        const matchesStatus =
          filters.status.length === 0 || filters.status.includes(project.status);
        const matchesYear =
          filters.year.length === 0 || filters.year.includes(project.year);
        const matchesTech =
          filters.tech.length === 0 || filters.tech.some(t => project.grid.tags.includes(t));

        return matchesCompany && matchesType && matchesStatus && matchesYear && matchesTech;
      })
      .sort((a, b) => {
        if (sortBy === 'recent') return parseInt(b.year) - parseInt(a.year);
        if (sortBy === 'oldest') return parseInt(a.year) - parseInt(b.year);
        if (sortBy === 'complexity') return b.complexity - a.complexity;
        if (sortBy === 'impact') return b.impact - a.impact;
        return 0;
      });
  }, [projects, filters, sortBy]);

  return {
    filters,
    toggleFilter,
    clearAll,
    filteredProjects,
    sortBy,
    setSortBy,
    totalCount: filteredProjects.length,
  };
}