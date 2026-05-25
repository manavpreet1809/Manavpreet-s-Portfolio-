import { useTilt } from '../utils/hooks'
import { GraduationCap, Calendar, BookOpen, Briefcase } from 'lucide-react'

const CS_COURSES = [
  'Data Structures & Algorithms',
  'Software Engineering',
  'Computing Machinery',
  'Information Security & Privacy',
]

const BTM_COURSES = [
  'Economics',
  'Statistics',
  'Accounting Fundamentals',
  'Strategy & Global Management',
  'Management Studies',
  'Business Technology Management',
  'IT Ethics',
]

export default function Education() {
  const ref = useTilt(8)
  return (
    <section ref={ref} className="bc bc-purple span-1" style={{ gridColumn: 'span 1', padding: 28 }} id="education">
      <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,.06)', filter: 'blur(40px)', top: -40, right: -20, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={18} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>Education</span>
        </div>

        {/* University */}
        <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginBottom: 6 }}>University of Calgary</h3>

        {/* Degrees — both clearly listed */}
        <p style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.9)', marginBottom: 2 }}>B.Sc. Computer Science</p>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.65)', marginBottom: 2 }}>B.Comm. Business Technology Management</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
          <Calendar size={11} /> Sept 2023 – Apr 2028
        </div>

        {/* Combined degree note */}
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,.6)', marginBottom: 18 }}>
          Combined degree program — building technical systems with a foundation in business strategy, economics, data, and organizational context.
        </p>

        {/* CS Coursework */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <BookOpen size={11} style={{ color: 'rgba(255,255,255,.4)' }} />
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>CS Coursework</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {CS_COURSES.map(c => (
            <span key={c} style={{ padding: '3px 9px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.75)', border: '1px solid rgba(255,255,255,.12)' }}>{c}</span>
          ))}
        </div>

        {/* Business Coursework */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <Briefcase size={11} style={{ color: 'rgba(255,255,255,.4)' }} />
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>BTM Coursework</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {BTM_COURSES.map(c => (
            <span key={c} style={{ padding: '3px 9px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: 'rgba(196,181,253,.12)', color: 'rgba(196,181,253,.75)', border: '1px solid rgba(196,181,253,.15)' }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
