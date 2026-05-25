import { useEffect, useRef } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'
import StarField  from './components/StarField'

/* ── Custom cursor ─────────────────────────────── */
function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -200, y: -200 })
  const ring    = useRef({ x: -200, y: -200 })
  const raf     = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const rng  = ringRef.current

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px' }
    }

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.11
      ring.current.y += (pos.current.y - ring.current.y) * 0.11
      if (rng) { rng.style.left = ring.current.x + 'px'; rng.style.top = ring.current.y + 'px' }
      raf.current = requestAnimationFrame(tick)
    }

    const onEnter = () => { dot?.classList.add('big'); rng?.classList.add('big') }
    const onLeave = () => { dot?.classList.remove('big'); rng?.classList.remove('big') }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    // attach enter/leave to interactive elements (re-query every second to catch dynamic renders)
    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
    const iv = setInterval(attach, 1200)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      clearInterval(iv)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cur" />
      <div ref={ringRef} className="cur-ring" />
    </>
  )
}

/* ── App ───────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
      <StarField />
      <Cursor />
      <Navbar />
      <main className="bento">
        {/* Row 1 — Hero (2 cols) + About (1 col) */}
        <Hero />
        <About />

        {/* Row 2 — Experience (2 cols) + Skills (1 col) */}
        <Experience />
        <Skills />

        {/* Row 3 — Projects full width */}
        <Projects />

        {/* Row 4 — Contact (2 cols) + Education (1 col) */}
        <Contact />
        <Education />
      </main>
    </div>
  )
}
