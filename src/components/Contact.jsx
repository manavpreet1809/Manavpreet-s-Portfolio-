import { useTilt } from '../utils/hooks'
import { Mail, Linkedin, Github, Phone, Send, ArrowUpRight } from 'lucide-react'

const ITEMS = [
  { icon: Mail,     label: 'Email',    value: 'manavpreetsingh0101@gmail.com', href: 'mailto:manavpreetsingh0101@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'ca.linkedin.com/in/mmanavpreet-singh/', href: 'https://ca.linkedin.com/in/mmanavpreet-singh/' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/manavpreet1809', href: 'https://github.com/manavpreet1809' },
  { icon: Phone,    label: 'Phone',    value: '+1 825-734-5118', href: 'tel:+18257345118' },
]

export default function Contact() {
  const ref = useTilt(5)

  return (
    <section
      ref={ref}
      className="bc bc-dark span-2"
      style={{ gridColumn: 'span 2', padding: 36, overflow: 'hidden' }}
      id="contact"
    >
      {/* Blob */}
      <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: 'rgba(124,58,237,.1)', filter: 'blur(80px)', bottom: -60, right: -40, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="theme-label" style={{ display: 'inline-flex', marginBottom: 16 }}>Credits</span>

        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-.03em', color: 'var(--t1)', marginBottom: 10 }}>
          Let&apos;s connect.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--t2)', maxWidth: 480, marginBottom: 28 }}>
          Open to co-op, internship, research, and software development opportunities.
          Whether you need an AI/ML engineer, software developer, or research collaborator, reach out.
        </p>

        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          <a href="mailto:manavpreetsingh0101@gmail.com" className="btn btn-p">
            <Send size={13} /> Say Hello
          </a>
          <a href="https://ca.linkedin.com/in/mmanavpreet-singh/" target="_blank" rel="noopener noreferrer"
            className="btn btn-o">
            <Linkedin size={13} /> LinkedIn <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Contact cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {ITEMS.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href}
              target={href.startsWith('mailto') || href.startsWith('tel') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="bc bc-dark2"
              style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, transition: 'border-color .2s, background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,.4)'; e.currentTarget.style.background = 'rgba(124,58,237,.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--s2)' }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,.07)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} style={{ color: 'var(--t2)' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 12, fontFamily: '"Courier New",Courier,monospace', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 2 }}>{label}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--t1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
