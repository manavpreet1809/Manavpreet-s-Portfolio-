import { useTilt } from '../utils/hooks'
import { projects } from '../data/projects'
import { Github, ArrowUpRight, Briefcase, FlaskConical, Star } from 'lucide-react'

/* Per-card accent palette */
const ACCENTS = [
  { border: 'rgba(224,22,63,.5)',   blob: 'rgba(224,22,63,.18)',  bg: 'rgba(224,22,63,.06)',   tag: 'tag-r', dot: '#FF6B8A', prob: 'rgba(224,22,63,.18)',  probBorder: 'rgba(224,22,63,.3)',  probLabel: '#FF8FAA', scene: 'rgba(224,22,63,.4)'  },
  { border: 'rgba(6,182,212,.5)',   blob: 'rgba(6,182,212,.18)',  bg: 'rgba(6,182,212,.05)',   tag: 'tag-t', dot: '#22D3EE', prob: 'rgba(6,182,212,.14)',  probBorder: 'rgba(6,182,212,.3)',  probLabel: '#67E8F9', scene: 'rgba(6,182,212,.4)'  },
  { border: 'rgba(59,130,246,.5)',  blob: 'rgba(59,130,246,.18)', bg: 'rgba(59,130,246,.05)',  tag: 'tag-b', dot: '#60A5FA', prob: 'rgba(59,130,246,.14)', probBorder: 'rgba(59,130,246,.3)', probLabel: '#93C5FD', scene: 'rgba(59,130,246,.4)'  },
  { border: 'rgba(16,185,129,.5)',  blob: 'rgba(16,185,129,.18)', bg: 'rgba(16,185,129,.05)',  tag: 'tag-g', dot: '#34D399', prob: 'rgba(16,185,129,.14)', probBorder: 'rgba(16,185,129,.3)', probLabel: '#6EE7B7', scene: 'rgba(16,185,129,.4)'  },
]

const ROMAN = ['I', 'II', 'III', 'IV']
const TYPE_ICONS = { work: Briefcase, research: FlaskConical }

function ProjectCard({ project, accent, index }) {
  const ref      = useTilt(7)
  const TypeIcon = TYPE_ICONS[project.type]

  return (
    <div
      ref={ref}
      className="bc"
      style={{
        background: `linear-gradient(145deg, #0E0E1D 0%, ${accent.bg} 100%)`,
        border: `1px solid ${accent.border}`,
        padding: 28, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
      }}
    >
      {/* Blob */}
      <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: accent.blob, filter: 'blur(70px)', top: -70, right: -50, pointerEvents: 'none' }} />

      {/* Scene number — top right */}
      <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: '"Courier New",Courier,monospace', fontSize: 10, letterSpacing: '.18em', color: accent.scene, textTransform: 'uppercase', zIndex: 2 }}>
        SCENE {ROMAN[index % 4]}
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Badges row */}
        <div style={{ display: 'flex', gap: 7, marginBottom: 16, flexWrap: 'wrap', paddingRight: 60 }}>
          {/* Director's cut badge for featured */}
          {project.featured && (
            <span className={`tag ${accent.tag}`} style={{ fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Star size={8} style={{ fill: 'currentColor' }} /> Director&apos;s Cut
            </span>
          )}
          {TypeIcon && (
            <span className={`tag ${accent.tag}`} style={{ fontSize: 11 }}>
              <TypeIcon size={9} style={{ marginRight: 3 }} />
              {project.type === 'work' ? 'Work' : project.type === 'research' ? 'Research' : 'Project'}
            </span>
          )}
          <span className="tag" style={{ fontSize: 11 }}>{project.category}</span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.02em', color: '#FFFFFF', marginBottom: 14, lineHeight: 1.25 }}>
          {project.title}
        </h3>

        {/* Problem block */}
        {project.problem && (
          <div style={{ marginBottom: 16, padding: '12px 16px', borderRadius: 12, background: accent.prob, border: `1px solid ${accent.probBorder}` }}>
            <p style={{ fontSize: 12, fontFamily: '"Courier New",Courier,monospace', letterSpacing: '.14em', textTransform: 'uppercase', color: accent.probLabel, marginBottom: 7, fontWeight: 700 }}>
              The Problem
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#D4DCEF' }}>{project.problem}</p>
          </div>
        )}

        {/* Description */}
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#C8D3E8', marginBottom: 16 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18, flex: 1 }}>
          {project.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.65, color: '#B8C6DF' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent.dot, marginTop: 6, flexShrink: 0, boxShadow: `0 0 6px ${accent.dot}` }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {project.technologies.map(t => (
            <span key={t} className={`tag ${accent.tag}`} style={{ fontSize: 12 }}>{t}</span>
          ))}
        </div>

        {/* Footer — GitHub link or status note */}
        <div style={{ borderTop: `1px solid ${accent.probBorder}`, paddingTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          {project.github && project.github !== '#' ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-o" style={{ padding: '9px 18px', fontSize: 13, borderColor: accent.border, flex: 1, justifyContent: 'center' }}>
              <Github size={13} /> View on GitHub <ArrowUpRight size={11} />
            </a>
          ) : (
            <span style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--t3)' }}>
              {project.type === 'work' || project.type === 'research'
                ? 'Proprietary. Code not publicly available.'
                : 'Repository coming soon.'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)
  const allCards = [...featured, ...others]

  return (
    <section className="span-3" style={{ gridColumn: 'span 3' }} id="projects">

      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, padding: '0 4px' }}>
        <span className="theme-label">Match Highlights</span>
        <span className="mono-label">{projects.length} builds</span>
      </div>

      {/* Film-strip divider */}
      <div className="film-strip-row" style={{ marginBottom: 14 }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="film-strip-dot" />
        ))}
      </div>

      {/* 2-col featured */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} accent={ACCENTS[i % 4]} index={i} />
        ))}
      </div>

      {/* 2-col others */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {others.map((p, i) => (
          <ProjectCard key={p.id} project={p} accent={ACCENTS[(i + 2) % 4]} index={i + featured.length} />
        ))}
      </div>
    </section>
  )
}
