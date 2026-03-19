import { ImageResponse } from 'next/og';
import { projects } from '@/lib/projects';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const PROJECT_METRICS: Record<string, { 
  problem: string; 
  solution: string; 
  metric1: string; 
  metric1Label: string;
  metric2: string; 
  metric2Label: string;
  tech1: string;
  tech2: string;
  impact: string;
}> = {
  'clapos': {
    problem: 'Manual service orchestration',
    solution: 'Event-driven Kafka architecture',
    metric1: '10+',
    metric1Label: 'Microservices',
    metric2: 'Async',
    metric2Label: 'Processing',
    tech1: 'Apache Kafka',
    tech2: 'TypeScript',
    impact: 'Scalable event-driven system',
  },
  'plusuae': {
    problem: 'No online presence',
    solution: 'Multi-language B2B Landing Page',
    metric1: '200+',
    metric1Label: 'Active users',
    metric2: '5',
    metric2Label: 'Languages',
    tech1: 'Next.js',
    tech2: 'Zoho CRM',
    impact: 'Live in production',
  },
  'jignu': {
    problem: 'Manual vendor coordination',
    solution: 'Multi-tenant marketplace MVP',
    metric1: '3',
    metric1Label: 'Dashboards built',
    metric2: 'Multi-tenant',
    metric2Label: 'Architecture',
    tech1: 'React',
    tech2: 'MongoDB',
    impact: 'Production-ready MVP',
  },
  'wyka': {
    problem: 'Fragmented content creation',
    solution: 'Unified Canva integration',
    metric1: 'Live',
    metric1Label: 'With agents',
    metric2: 'OAuth',
    metric2Label: 'Authentication',
    tech1: 'React.js',
    tech2: 'Node.js',
    impact: 'Active user adoption',
  },
  'hospital-management': {
    problem: '3+ second page loads',
    solution: 'Optimized 800ms load time',
    metric1: '73%',
    metric1Label: 'Performance gain',
    metric2: '100+',
    metric2Label: 'Daily users',
    tech1: 'Next.js',
    tech2: 'Redux Toolkit',
    impact: '5 hospitals in production',
  },
  'medtech-dashboards': {
    problem: 'Fragmented medical workflows',
    solution: 'Unified in-house dashboard',
    metric1: '90%',
    metric1Label: 'Image compression',
    metric2: '100K+',
    metric2Label: 'Records handled',
    tech1: 'Next.js',
    tech2: 'RTK Query',
    impact: 'Multi-specialty adoption',
  },
  'pg-accommodation': {
    problem: 'Scattered PG management',
    solution: 'Centralized tenant/landlord platform',
    metric1: '75%',
    metric1Label: 'Code reuse',
    metric2: '100%',
    metric2Label: 'Mobile responsive',
    tech1: 'React',
    tech2: 'Tailwind CSS',
    impact: 'Component-based scaling',
  },
  'hospital-websites': {
    problem: 'Slow deployment cycles',
    solution: 'Reusable hospital templates',
    metric1: '50%',
    metric1Label: 'Faster deployment',
    metric2: '5+',
    metric2Label: 'Hospitals deployed',
    tech1: 'React',
    tech2: 'Node.js',
    impact: 'Template-driven scaling',
  },
  'leads-management': {
    problem: 'Manual lead capture process',
    solution: 'QR-based automation system',
    metric1: 'Real-time',
    metric1Label: 'Lead sync',
    metric2: '3',
    metric2Label: 'Interfaces',
    tech1: 'React',
    tech2: 'QR Codes',
    impact: 'Agent-ready automation',
  },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return new ImageResponse(<div>Not Found</div>, { ...size });

  const metrics = PROJECT_METRICS[slug] || {
    problem: 'Problem solved',
    solution: 'Solution delivered',
    metric1: '?', metric1Label: 'Metric 1',
    metric2: '?', metric2Label: 'Metric 2',
    tech1: 'Tech 1', tech2: 'Tech 2',
    impact: 'Real impact',
  };

  const statusColor = project.status === 'live' ? '#34d399' : '#f59e0b';
  const statusBg = project.status === 'live' ? '#10b98115' : '#f59e0b15';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#000',
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0),
            linear-gradient(135deg, #000000 0%, #080808 100%)
          `,
          backgroundSize: '32px 32px, 100% 100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* TOP SECTION: Project Identity */}
        <div style={{ display: 'flex', height: '22%', borderBottom: '1px solid #222', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '12px', color: '#34d399', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>{project.type || 'System'}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#333' }} />
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 600, letterSpacing: '1px' }}>{project.company || 'Freelance'}</span>
            </div>
            <span style={{ fontSize: '48px', fontWeight: 900, color: '#fff', letterSpacing: '-2px' }}>{project.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 20px', background: statusBg, border: `1px solid ${statusColor}40`, borderRadius: '12px', boxShadow: `0 0 20px ${statusColor}10` }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: statusColor, boxShadow: `0 0 10px ${statusColor}` }} />
            <span style={{ fontSize: '14px', color: statusColor, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>{project.status}</span>
          </div>
        </div>

        {/* MIDDLE SECTION: The Logic (Problem -> Solution) */}
        <div style={{ display: 'flex', height: '38%', borderBottom: '1px solid #222', alignItems: 'center', padding: '0 60px', gap: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>[ 01 ] Problem</span>
            <span style={{ fontSize: '34px', fontWeight: 800, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px' }}>{metrics.problem}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '40px', color: '#34d399', filter: 'drop-shadow(0 0 10px #34d39940)' }}>→</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>[ 02 ] Solution</span>
            <span style={{ fontSize: '34px', fontWeight: 800, color: '#34d399', lineHeight: 1.2, letterSpacing: '-0.5px', textShadow: '0 0 30px #34d39920' }}>{metrics.solution}</span>
          </div>
        </div>

        {/* BOTTOM SECTION: Metrics & Tech */}
        <div style={{ display: 'flex', height: '25%', borderBottom: '1px solid #222', alignItems: 'center', justifyContent: 'space-around', padding: '0 60px' }}>
          {[
            { val: metrics.metric1, label: metrics.metric1Label },
            { val: metrics.metric2, label: metrics.metric2Label },
            { val: metrics.tech1, label: 'Frontend', color: '#22d3ee' },
            { val: metrics.tech2, label: 'Backend', color: '#22d3ee' }
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: m.color || '#34d399' }}>{m.val}</span>
              <span style={{ fontSize: '10px', color: '#555', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* FOOTER: Impact Bar */}
        <div style={{ display: 'flex', height: '15%', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', background: '#080808' }}>
          <span style={{ fontSize: '13px', color: '#fff', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Impact: <span style={{ color: '#34d399' }}>{metrics.impact}</span>
          </span>
          <span style={{ fontSize: '11px', color: '#444', fontWeight: 600 }}>vinod-dev.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}