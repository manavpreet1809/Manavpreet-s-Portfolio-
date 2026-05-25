import { useTilt } from '../utils/hooks'
import { MapPin, GraduationCap, Zap } from 'lucide-react'

const FOCUS = [
  'RAG & Retrieval Systems',
  'ML Evaluation',
  'Healthcare AI',
  'Chronic Disease Forecasting',
  'Full-Stack Engineering',
  'Business-Aware Engineering',
]

export default function About() {
  const ref = useTilt(10)

  return (
    <section
      ref={ref}
      className="bc bc-yellow noise span-1"
      style={{ gridColumn: 'span 1', minHeight: 380, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      id="about"
    >
      <div>
        {/* Label */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(8,8,16,.45)' }}>
            About Me
          </span>
          <a href="/Manavpreet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: 'rgba(8,8,16,.1)', cursor: 'none' }}>
            <span style={{ fontSize: 14, color: '#080810' }}>↗</span>
          </a>
        </div>

        {/* Headline */}
        <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.03em', color: '#080810', marginBottom: 16 }}>
          CS + Business.<br />Built together.
        </h2>

        {/* Combined degree framing */}
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(8,8,16,.72)', marginBottom: 13 }}>
          I am completing a combined degree in{' '}
          <strong style={{ color: '#080810' }}>Computer Science</strong> and{' '}
          <strong style={{ color: '#080810' }}>Business Technology Management</strong>{' '}
          at the University of Calgary. That combination shapes how I approach projects:
          I care about building systems that work technically, and make sense for the
          people, teams, and organizations using them.
        </p>

        {/* Technical work paragraph */}
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(8,8,16,.65)', marginBottom: 13 }}>
          At <strong style={{ color: '#080810' }}>Alberta Health Services</strong>, I work
          on AVA, an AI-powered RAG assistant for Health Link 811 triage nurses, focusing
          on retrieval quality, vector search evaluation, and cross-encoder reranking.
          At <strong style={{ color: '#080810' }}>DANSA Lab</strong>, I research chronic
          disease forecasting using longitudinal health data and Python-based ML workflows.
        </p>

        {/* How I work */}
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(8,8,16,.6)', marginBottom: 22 }}>
          I use Python, PyTorch, Hugging Face, and data analysis tools to build and
          evaluate ML systems. I care about whether a system retrieves the right
          information, can be measured clearly, and fits real organizational workflows.
        </p>

        {/* Focus tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {FOCUS.map(f => (
            <span key={f} style={{ padding: '4px 10px', borderRadius: 999, fontSize: 13, fontWeight: 600, background: 'rgba(8,8,16,.08)', color: '#080810', border: '1px solid rgba(8,8,16,.12)' }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Info row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#080810' }}>
          <MapPin size={13} /> Calgary, Alberta
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#080810' }}>
          <GraduationCap size={13} /> UofC, CS + BTM &apos;28
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#080810' }}>
          <Zap size={13} /> Currently @ AHS &amp; DANSA Lab
        </div>
      </div>
    </section>
  )
}
