import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    transition: 'background .3s, border-color .3s, backdrop-filter .3s',
    background: scrolled ? 'rgba(6,6,15,.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(18px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : '1px solid transparent',
  }

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 14px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: 15, fontWeight: 700, color: 'var(--t1)', letterSpacing: '.02em' }}>
          <span style={{ color: 'var(--t3)' }}>&lt;</span>
          Manavpreet
          <span style={{ color: 'var(--crimson)' }}> /&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 6 }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              style={{ padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'var(--t2)', transition: 'color .2s, background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--t1)'; e.currentTarget.style.background = 'rgba(255,255,255,.06)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--t2)'; e.currentTarget.style.background = 'transparent' }}
            >{l.label}</a>
          ))}
        </div>

        {/* Resume button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="/Manavpreet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn btn-p hidden md:inline-flex"
            style={{ padding: '7px 16px', fontSize: 13 }}>
            <Download size={12} /> Resume
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden"
            style={{ padding: 8, borderRadius: 8, background: 'rgba(255,255,255,.07)', border: '1px solid var(--border)', color: 'var(--t1)', cursor: 'none' }}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(6,6,15,.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--border)', padding: '16px 14px 20px' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '11px 14px', borderRadius: 10, fontSize: 16, fontWeight: 500, color: 'var(--t2)', marginBottom: 4 }}>
              {l.label}
            </a>
          ))}
          <a href="/Manavpreet_Singh_Resume.pdf" download
            className="btn btn-p" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
            <Download size={14} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
