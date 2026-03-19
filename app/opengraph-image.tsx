/* eslint-disable react/no-unescaped-entities */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vinod Kumar — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * FIXED VERSION:
 * 1. Removed all zIndex properties to avoid "unitless" errors (DOM order handles layering).
 * 2. Ensured every <div> has "display: flex" for Satori compatibility.
 * 3. Replaced blur filters with radial gradients for better rendering stability.
 */

export default async function Image() {
  const emerald = '#10b981';
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
          color: '#fff',
        }}
      >
        {/* Layer 1: Background Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            backgroundImage: 'radial-gradient(circle at 2px 2px, #111 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.4,
          }}
        />

        {/* Layer 2: Emerald Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-150px',
            width: '600px',
            height: '600px',
            display: 'flex',
            background: `radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 70%)`,
          }}
        />

        {/* Layer 3: Top Accent Line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: emerald, display: 'flex' }} />

        {/* Layer 4: Main Content Area (Removed zIndex, DOM order handles layering) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            padding: '0 80px',
            position: 'relative',
          }}
        >
          {/* Left Section: Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Status Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: emerald, 
                boxShadow: `0 0 15px ${emerald}`,
                display: 'flex'
              }} />
              <span style={{ 
                fontSize: '13px', 
                fontWeight: 800, 
                color: emerald, 
                textTransform: 'uppercase', 
                letterSpacing: '5px' 
              }}>
                Available for Hire
              </span>
            </div>
            
            {/* Massive Editorial Name */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontSize: '100px', 
                fontWeight: 900, 
                color: '#fff', 
                letterSpacing: '-5px', 
                lineHeight: 0.85,
                marginBottom: '10px',
                display: 'flex'
              }}>
                Vinod
              </span>
              <span style={{ 
                fontSize: '100px', 
                fontWeight: 900, 
                color: '#fff', 
                letterSpacing: '-5px', 
                lineHeight: 0.85,
                display: 'flex'
              }}>
                Kumar
              </span>
            </div>
            
            {/* Role & Subtitle */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32px', gap: '6px' }}>
              <span style={{ fontSize: '26px', fontWeight: 600, color: '#fff', opacity: 0.95, display: 'flex' }}>
                Full Stack Developer
              </span>
              <span style={{ fontSize: '16px', color: '#777', letterSpacing: '0.5px', fontWeight: 500, display: 'flex' }}>
                Building scalable systems with Next.js, Node.js & Kafka
              </span>
            </div>
          </div>

          {/* Right Section: Visual & Tech */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '40px' }}>
            {/* Profile with Offset Frame */}
            <div style={{ position: 'relative', display: 'flex' }}>
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                left: '15px', 
                width: '260px', 
                height: '260px', 
                border: `2px solid ${emerald}`, 
                borderRadius: '32px', 
                opacity: 0.2,
                display: 'flex'
              }} />
              <img
                alt='Profile'
                src="https://vinod-dev.vercel.app/profile.jpg"
                style={{
                  width: '260px',
                  height: '260px',
                  borderRadius: '32px',
                  objectFit: 'cover',
                  border: '1px solid #222',
                  position: 'relative',
                }}
              />
            </div>

            {/* Tech Pills */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB'
].map((tech) => (
                <span 
                  key={tech} 
                  style={{ 
                    padding: '8px 16px', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '8px', 
                    fontSize: '13px', 
                    fontWeight: 700, 
                    color: '#aaa',
                    display: 'flex'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Metadata & CTA */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '30px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: emerald, display: 'flex' }}>
              →
            </span>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff', letterSpacing: '1px', display: 'flex' }}>
              vinod-dev.vercel.app
            </span>
          </div>
          
          <span style={{ 
            fontSize: '11px', 
            fontWeight: 800, 
            color: '#444', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            display: 'flex'
          }}>
            Chennai //  Remote
          </span>
        </div>

        {/* Version/Build Label */}
        <div style={{ position: 'absolute', top: '30px', right: '30px', opacity: 0.1, display: 'flex' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#fff' }}>
            EST. 2026 // 
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}