import { useRef } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useScramble, useTilt, useCountUp } from '../utils/hooks'
import { useInView } from 'framer-motion'

function StatChip({ value, label, suffix = '', color, trigger }) {
  const num   = parseInt(value)
  const count = useCountUp(num, { duration: 1400, trigger })
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <span style={{
        fontFamily: '"Courier New",Courier,monospace',
        fontSize: 28, fontWeight: 700, lineHeight: 1, letterSpacing: '-.03em', color,
      }}>
        {isNaN(num) ? value : count}{suffix}
      </span>
      <span style={{
        fontSize: 12, color: 'var(--t3)', letterSpacing: '.06em',
        textTransform: 'uppercase', fontFamily: '"Courier New",Courier,monospace', lineHeight: 1.4,
      }}>
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const tiltRef   = useTilt(6)
  const statsRef  = useRef(null)
  const inView    = useInView(statsRef, { once: true })
  const firstName = useScramble('Manavpreet', { delay: 200 })
  const lastName  = useScramble('Singh',      { delay: 600 })

  return (
    <section
      ref={tiltRef}
      className="bc bc-dark span-2"
      style={{
        gridColumn: 'span 2', minHeight: 380, padding: 36,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden',
      }}
      id="hero"
    >
      {/* Blobs */}
      <div className="blob" style={{ width: 320, height: 320, background: 'rgba(190,18,60,.13)',  top: '-80px',  right: '-60px' }} />
      <div className="blob" style={{ width: 220, height: 220, background: 'rgba(22,163,74,.07)', bottom: '-40px', left: '8%',   animationDelay: '3s'  }} />
      <div className="blob" style={{ width: 180, height: 180, background: 'rgba(217,119,6,.06)', bottom: '22%',  right: '20%',  animationDelay: '7s'  }} />
      <div className="blob" style={{ width: 160, height: 160, background: 'rgba(37,99,235,.07)',  top: '30%',    left: '60%',   animationDelay: '11s' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Status badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.2)', marginBottom: 24 }}>
          <span className="status-dot" />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#34D399', letterSpacing: '.04em', fontFamily: '"Courier New",Courier,monospace' }}>
            OPEN TO CO-OP &amp; RESEARCH
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.8rem)', fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em', marginBottom: 14 }}>
          <span className="grad-text" style={{ display: 'block' }}>{firstName}</span>
          <span style={{ color: 'var(--t1)', display: 'block' }}>{lastName}</span>
        </h1>

        {/* Professional title bar — cinema amber + blue + grey */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 22 }}>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 13, color: 'var(--cinema)', letterSpacing: '.05em' }}>
            ML / AI Engineer
          </span>
          <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 15 }}>·</span>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 13, color: '#93C5FD', letterSpacing: '.05em' }}>
            Full-Stack Developer
          </span>
          <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 15 }}>·</span>
          <span style={{ fontFamily: '"Courier New",Courier,monospace', fontSize: 13, color: 'var(--t3)', letterSpacing: '.05em' }}>
            CS &amp; BTM @ UofC &apos;28
          </span>
        </div>

        {/* Subtitle — accurate, grounded, no buzzwords */}
        <p style={{ fontSize: 17, color: 'var(--t2)', maxWidth: 540, lineHeight: 1.8, marginBottom: 26 }}>
          I build machine learning and software systems that make complex information
          easier to search, evaluate, and use. From improving RAG retrieval quality at{' '}
          <span style={{ color: 'var(--t1)', fontWeight: 600 }}>Alberta Health Services</span>{' '}
          to forecasting chronic disease trends at{' '}
          <span style={{ color: 'var(--t1)', fontWeight: 600 }}>DANSA Lab</span>{' '}
          With a combined CS and Business Technology Management perspective.
        </p>

        {/* Domain tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 30 }}>
          {['RAG & Retrieval Systems', 'Cross-Encoder Reranking', 'Healthcare AI', 'ML Evaluation', 'Full-Stack Dev'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* CTA + social */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <a href="#projects" className="btn btn-p">View Projects <ArrowRight size={14} /></a>
          <a href="/Manavpreet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-o">
            <Download size={14} /> View Resume
          </a>
          <div style={{ display: 'flex', gap: 6, marginLeft: 4 }}>
            {[
              { icon: Github,   href: 'https://github.com/manavpreet1809',             label: 'GitHub'   },
              { icon: Linkedin, href: 'https://ca.linkedin.com/in/mmanavpreet-singh/', label: 'LinkedIn' },
              { icon: Mail,     href: 'mailto:manavpreetsingh0101@gmail.com',           label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer" aria-label={label} className="chip">
                <Icon size={14} style={{ color: 'var(--t2)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Career Scorecard */}
      <div ref={statsRef} style={{ position: 'relative', zIndex: 1, marginTop: 8 }}>
        <div className="scoreboard">
          <div className="scoreboard-header">
            <span className="scoreboard-title">Career Scorecard</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: '"Courier New",Courier,monospace', fontSize: 10, color: 'var(--cricket)', letterSpacing: '.08em' }}>
              <span className="status-dot" style={{ width: 5, height: 5 }} /> Live
            </span>
          </div>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            <StatChip value="2"  suffix="+" label="Yrs in Tech"     color="#34D399"       trigger={inView} />
            <StatChip value="3"  suffix=""  label="Active Roles"    color="var(--cinema)" trigger={inView} />
            <StatChip value="4"  suffix=""  label="Projects Built"  color="#93C5FD"       trigger={inView} />
            <StatChip value="20" suffix="+" label="Technologies"    color="#FDE68A"       trigger={inView} />
          </div>
        </div>
      </div>
    </section>
  )
}
