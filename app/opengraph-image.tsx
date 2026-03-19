import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vinod Kumar — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
  style={{
    width: '1200px',
    height: '630px',
    background: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    padding: '80px',
    gap: '60px',
    border: '1px solid #1a1a1a',
    position: 'relative', // ← ADD THIS
  }}
>
  {/* Left — photo */}
  <img
    alt='Profile'
    src="https://vinod-dev.vercel.app/profile.jpg"
    style={{
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #10b981',
    }}
  />

  {/* Divider */}
  <div style={{ width: '1px', height: '180px', background: '#1f1f1f', display: 'flex' }} />

  {/* Right — text */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <span style={{ fontSize: '52px', fontWeight: 900, color: '#ffffff', letterSpacing: '-2px', lineHeight: 1 }}>
      Vinod Kumar
    </span>
    <span style={{ fontSize: '22px', fontWeight: 600, color: '#10b981', letterSpacing: '4px', textTransform: 'uppercase' }}>
      Full Stack Developer
    </span>
    <span style={{ fontSize: '16px', color: '#525252', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '8px' }}>
      React · Next.js · Node.js · Kafka
    </span>
    <span style={{ fontSize: '14px', color: '#404040', letterSpacing: '1px', marginTop: '4px' }}>
      Chennai · Bengaluru · Remote
    </span>
  </div>

  {/* CTA strip — last child, anchored to bottom */}
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '52px',
      background: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span style={{ fontSize: '16px', fontWeight: 900, color: '#000000', letterSpacing: '4px', textTransform: 'uppercase' }}>
      View Portfolio → vinod-dev.vercel.app
    </span>
  </div>
</div>
    ),
    { ...size }
  );
}