import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'tncy.dev'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
            tncy<span style={{ color: '#3b82f6' }}>.dev</span>
          </div>
          <div style={{ fontSize: 30, color: '#94a3b8' }}>
            Embedded Systems & IoT Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
