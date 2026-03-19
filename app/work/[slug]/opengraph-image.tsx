import { ImageResponse } from 'next/og';
import { projects } from '@/lib/projects';
import { BASE_URL } from '@/lib/seo';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return new ImageResponse(
      <div style={{ background: '#000', width: '1200px', height: '630px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontSize: '32px' }}>Project Not Found</span>
      </div>,
      { ...size }
    );
  }

  // Resolve thumbnail — local paths need absolute URL
  const thumbnail = project.thumbnail.startsWith('http')
    ? project.thumbnail
    : `${BASE_URL}${project.thumbnail}`;

  // Status color
  const statusColor: Record<string, string> = {
    live: '#10b981',
    beta: '#f59e0b',
    wip: '#6366f1',
  };
  const dotColor = statusColor[project.status] ?? '#525252';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background thumbnail — blurred overlay */}
        <img
          src={thumbnail}
          title="Bg"
          alt='Bg'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.08,
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #000000 60%, #0a1a0f 100%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '60px 80px',
          }}
        >
          {/* Top — author + status */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', color: '#525252', letterSpacing: '2px', textTransform: 'uppercase' }}>
              vinod-dev.vercel.app
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColor, display: 'flex' }} />
              <span style={{ fontSize: '14px', color: dotColor, letterSpacing: '2px', textTransform: 'uppercase' }}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Middle — project name + description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span
              style={{
                fontSize: '72px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-3px',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              {project.name}
            </span>
            <span
              style={{
                fontSize: '20px',
                color: '#737373',
                lineHeight: 1.5,
                maxWidth: '800px',
              }}
            >
              {project.shortDescription}
            </span>
          </div>

          {/* Bottom — tags + author */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            {/* Tags */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {project.grid.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '6px 14px',
                    background: '#0a0a0a',
                    border: '1px solid #1f1f1f',
                    borderRadius: '999px',
                    fontSize: '13px',
                    color: '#737373',
                    letterSpacing: '1px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="https://vinod-dev.vercel.app/profile.jpg"
                title='Author'
                alt='Author'
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #10b981',
                }}
              />
              <span style={{ fontSize: '14px', color: '#525252', letterSpacing: '1px' }}>
                Vinod Kumar
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}