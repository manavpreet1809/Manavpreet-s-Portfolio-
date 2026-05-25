import { useTilt } from '../utils/hooks'
import { skillGroups } from '../data/skills'
import { Brain, BarChart3, Code2, Wrench, Briefcase } from 'lucide-react'

const ICON_MAP = { Brain, BarChart3, Code2, Wrench, Briefcase }

/* Cricket green, blue, cinema amber, crimson, purple — one per group */
const GROUP_COLORS = [
  { label: '#6EE7B7', icon: 'rgba(22,163,74,.15)'   },  // AI/ML     — cricket green
  { label: '#93C5FD', icon: 'rgba(37,99,235,.15)'   },  // Data      — blue
  { label: '#FCD34D', icon: 'rgba(217,119,6,.15)'   },  // Software  — cinema amber
  { label: '#F87171', icon: 'rgba(190,18,60,.15)'   },  // Testing   — crimson
  { label: '#C4B5FD', icon: 'rgba(124,58,237,.15)'  },  // BTM       — purple
]
const TAG_COLORS = ['tag-g', 'tag-b', 'tag-y', 'tag-r', 'tag-p']

export default function Skills() {
  const ref   = useTilt(6)
  const total = skillGroups.reduce((a, g) => a + g.skills.length, 0)

  return (
    <section
      ref={ref}
      className="bc bc-dark span-1"
      style={{ gridColumn: 'span 1', padding: 28 }}
      id="skills"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <span className="theme-label">The Playing XI</span>
        <span className="mono-label">{total} skills</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {skillGroups.map((group, gi) => {
          const Icon   = ICON_MAP[group.icon]
          const colors = GROUP_COLORS[gi] || GROUP_COLORS[0]
          const tagCls = TAG_COLORS[gi] || 'tag'

          return (
            <div key={group.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: colors.icon,
                }}>
                  {Icon && <Icon size={12} style={{ color: colors.label }} />}
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: colors.label, letterSpacing: '.01em' }}>
                  {group.label}
                </span>
              </div>

              {/* BTM group gets a subtle note */}
              {group.id === 'btm' && (
                <p style={{ fontSize: 12, color: 'var(--t3)', lineHeight: 1.6, marginBottom: 8 }}>
                  Foundation from combined CS + BTM degree — developing understanding of business, strategy, and organizational context.
                </p>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.skills.map(skill => (
                  <span key={skill} className={`tag ${tagCls}`} style={{ fontSize: 13 }}>{skill}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
