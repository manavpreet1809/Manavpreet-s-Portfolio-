import { useTilt } from '../utils/hooks'
import { experiences } from '../data/experience'
import { Calendar, MapPin } from 'lucide-react'

const COLORS = {
  'Co-op':     { card: 'bc-crimson', dot: '#F87171' },
  'Research':  { card: 'bc-blue',    dot: '#93C5FD' },
  'Part-time': { card: 'bc-dark2',   dot: '#6EE7B7' },
}

function ExpCard({ exp }) {
  const ref = useTilt(5)
  const c   = COLORS[exp.type] || COLORS['Part-time']
  const isLight = ['Co-op', 'Research'].includes(exp.type)

  return (
    <div
      ref={ref}
      className={`bc ${c.card}`}
      style={{ padding: 24, position: 'relative', overflow: 'hidden' }}
    >
      {/* Blob accent */}
      {isLight && (
        <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,.06)', filter: 'blur(40px)', top: -40, right: -40, pointerEvents: 'none' }} />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Type badge + current */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', background: 'rgba(255,255,255,.14)', padding: '3px 9px', borderRadius: 999, color: isLight ? '#fff' : 'var(--t2)' }}>
            {exp.type}
          </span>
          {exp.current && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: '"Courier New",Courier,monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#34D399' }}>
              <span className="status-dot" style={{ width: 5, height: 5 }} /> Live
            </span>
          )}
        </div>

        <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-.01em', marginBottom: 4, color: isLight ? '#fff' : 'var(--t1)' }}>
          {exp.title}
        </h3>
        <p style={{ fontSize: 15, fontWeight: 600, color: isLight ? 'rgba(255,255,255,.7)' : 'var(--crimson)', marginBottom: 4 }}>
          {exp.organization}
        </p>
        <p style={{ fontSize: 13, color: isLight ? 'rgba(255,255,255,.45)' : 'var(--t3)', marginBottom: 14 }}>
          {exp.team}
        </p>

        <p style={{ fontSize: 15, lineHeight: 1.75, color: isLight ? 'rgba(255,255,255,.82)' : '#C0CADF', marginBottom: 14 }}>
          {exp.description}
        </p>

        {/* Highlights (first 3) */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
          {exp.highlights.slice(0, 3).map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.65, color: isLight ? 'rgba(255,255,255,.78)' : '#B8C6DF' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.dot, marginTop: 6, flexShrink: 0 }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {exp.tags.map(t => (
            <span key={t} style={{ padding: '2px 9px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(255,255,255,.1)', color: isLight ? 'rgba(255,255,255,.7)' : 'var(--t2)', border: '1px solid rgba(255,255,255,.1)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Dates */}
        <div style={{ display: 'flex', gap: 14, fontSize: 13, color: isLight ? 'rgba(255,255,255,.4)' : 'var(--t3)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={10} /> {exp.dates}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} /> {exp.location}</span>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="span-2" style={{ gridColumn: 'span 2' }} id="experience">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <span className="theme-label">Innings Timeline</span>
          <span className="mono-label">{experiences.length} roles</span>
        </div>
        {/* Experience cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <ExpCard exp={experiences[0]} />
          <ExpCard exp={experiences[1]} />
        </div>
        <ExpCard exp={experiences[2]} />
      </div>
    </section>
  )
}
