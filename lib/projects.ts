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
      architecture: string; // ASCII or description
      techStack: {
        backend?: string[];
        frontend?: string[];
        database?: string[];
        infra?: string[];
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
    id: 'predict-x',
    name: 'Predict-X Analytics',
    slug: 'predict-x-analytics',
    description: 'Real-time analytics handling 100k+ daily events',
    shortDescription: 'Real-time event analytics with ML',
    thumbnail: 'https://picsum.photos/seed/predict-x/1200/800',
    status: 'live',
    year: '2024',
    complexity: 9,
    impact: 10,
    grid: {
      role: 'Architected entire system',
      metrics: '100k+ events/day, 95% improvement',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Kafka', 'ML'],
    },
    caseStudy: {
      timeline: '3 months',
      team: 'Solo + design/product input',
      problem: {
        context: 'Client spending 4h daily analyzing events manually.',
        pain: '$200k lost revenue per delayed hour of insight.',
        challenge: 'How do we give real-time insights into 100k+ daily events without adding massive infrastructure cost?',
        insight: 'The real problem wasn\'t data volume. It was insight speed. They needed anomalies surfaced, not raw data.',
      },
      solution: {
        approach: 'Real-time Pipeline with ML Anomaly Detection',
        architecture: `
Events → Kafka → Stream Processor → ML Model
         ↓          ↓                    ↓
     Indexing   Processing          Alerting
         ↓          ↓                    ↓
   PostgreSQL   Aggregation         Dashboard
        `,
        techStack: {
          backend: ['Node.js', 'Kafka', 'Stream Processing'],
          database: ['PostgreSQL (custom indexing)'],
          frontend: ['React', 'D3.js (real-time charts)'],
          ml: ['Python', 'TensorFlow'],
          infra: ['Docker', 'Kubernetes', 'AWS'],
        },
        decisions: [
          {
            title: 'Kafka vs RabbitMQ',
            description: 'Choosing the right message broker for high-throughput event streams.',
            why: 'Kafka provides durability, event replay capability, and horizontal scaling that RabbitMQ struggles with at this volume.'
          },
          {
            title: 'PostgreSQL vs MongoDB',
            description: 'Selecting a primary data store for complex analytical queries.',
            why: 'ACID guarantees and powerful indexing in PostgreSQL allowed for complex joins that were 10x faster than similar NoSQL implementations.'
          }
        ]
      },
      results: {
        metrics: [
          { label: 'Query Time', before: '4 hours', after: '15 minutes', impact: '95% faster' },
          { label: 'Reliability', before: 'Occasional misses', after: '99.9% uptime', impact: 'Zero data loss' },
          { label: 'Business Impact', before: '$200k lost/hr', after: '$50k monthly gain', impact: 'Immediate ROI' }
        ],
        adoption: {
          launch: 'Jan 2024',
          users: '500+ concurrent',
          uptime: '99.9% sustained'
        },
        learning: 'Turned manual event analysis from a bottleneck into a competitive advantage.'
      },
      challenges: [
        {
          title: 'Handling 100k+ Events/Sec',
          problem: 'Initial design maxed at 50k/sec due to database write contention.',
          solution: 'Implemented Kafka batching and optimized consumer groups to decouple ingestion from processing.',
          learning: 'Stream processing requires deep performance tuning, not just theoretical architecture.',
          result: 'Sustained 150k+ events/sec without latency spikes.'
        }
      ],
      deepDives: [
        {
          title: 'Query Optimization',
          description: 'Optimizing the core aggregation query that was the primary bottleneck.',
          codeBefore: `SELECT * FROM events \nWHERE timestamp > X \nAND type = 'error' \nGROUP BY severity`,
          codeAfter: `CREATE INDEX idx_events_ts_type ON events (timestamp, type);\n-- Aggregation pushed to stream layer\nSELECT severity, count(*) FROM materialized_view_errors\nWHERE timestamp > X`,
          why: 'Moving aggregation to the stream layer and using materialized views reduced query time from hours to seconds.'
        }
      ],
      outcome: {
        status: 'Live in Production',
        reflection: 'Building at scale teaches you humility. Theory only takes you 80% of the way; the rest is production iteration.',
        ifBuildingAgain: [
          'Start with event sourcing from day 1',
          'Use Kubernetes earlier for easier scaling',
          'Implement deeper observability from the start'
        ],
        links: {
          github: 'https://github.com/vinodkumar/predict-x',
          demo: 'https://predict-x-demo.com'
        }
      }
    }
  },
  {
    id: 'nexus-core',
    name: 'Nexus Core',
    slug: 'nexus-core',
    description: 'Distributed system management for enterprise infrastructure',
    shortDescription: 'Enterprise infra management platform',
    thumbnail: 'https://picsum.photos/seed/nexus/1200/800',
    status: 'beta',
    year: '2023',
    complexity: 8,
    impact: 8,
    grid: {
      role: 'Lead Architect',
      metrics: 'Managed 50+ clusters, 99.99% uptime',
      tags: ['Go', 'Kubernetes', 'gRPC', 'React'],
    },
    caseStudy: {
      timeline: '6 months',
      team: 'Team of 4',
      problem: {
        context: 'Enterprise clients managing 50+ Kubernetes clusters manually.',
        pain: 'Configuration drift and security vulnerabilities across clusters.',
        challenge: 'How to centralize management without creating a single point of failure?',
        insight: 'The solution wasn\'t just a dashboard; it was a state reconciliation engine.',
      },
      solution: {
        approach: 'gRPC-based State Reconciliation Engine',
        architecture: 'Central Controller ↔ gRPC Agents ↔ Cluster API',
        techStack: {
          backend: ['Go', 'gRPC', 'Kubernetes API'],
          database: ['Etcd', 'Redis'],
          frontend: ['React', 'Tailwind CSS'],
          infra: ['Helm', 'Terraform'],
        },
        decisions: [
          {
            title: 'gRPC vs REST',
            description: 'Communication protocol for cluster agents.',
            why: 'gRPC provided the low latency and streaming capabilities needed for real-time state synchronization.'
          }
        ]
      },
      results: {
        metrics: [
          { label: 'Config Sync', before: 'Manual (hours)', after: 'Automated (seconds)', impact: '99% faster' },
          { label: 'Security', before: 'Manual audits', after: 'Real-time scanning', impact: '100% coverage' }
        ],
        learning: 'Distributed state is hard. Reconciliation loops are the only way to ensure consistency.'
      },
      challenges: [
        {
          title: 'Network Partitioning',
          problem: 'Agents losing connection to central controller.',
          solution: 'Implemented local state caching and autonomous reconciliation on agents.',
          learning: 'Design for failure. The system must work even when disconnected.',
          result: 'Zero downtime during controller maintenance.'
        }
      ],
      outcome: {
        status: 'Beta Testing',
        reflection: 'Building for enterprise requires a different level of rigor in security and reliability.',
        ifBuildingAgain: [
          'Use a service mesh from the start',
          'Implement more granular RBAC earlier'
        ],
        links: {
          demo: 'https://nexus-core-demo.com'
        }
      }
    }
  }
];
