import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let raf

    /* ── Stars ──────────────────────────────────── */
    const stars = Array.from({ length: 260 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
    }))

    /* ── Shooting stars ─────────────────────────── */
    let shoots = []
    const spawnShoot = () => {
      shoots.push({
        x: Math.random() * W * 0.75,
        y: Math.random() * H * 0.45,
        len: Math.random() * 120 + 60,
        vx: Math.random() * 5 + 4,
        vy: Math.random() * 3 + 2,
        alpha: 1,
      })
    }
    const si = setInterval(() => { if (Math.random() > 0.25) spawnShoot() }, 3800)

    /* ── Draw loop ──────────────────────────────── */
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // stars
      stars.forEach(s => {
        s.phase += s.speed
        const a = 0.35 + Math.sin(s.phase) * 0.35
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 225, 255, ${a})`
        ctx.fill()
      })

      // shooting stars
      shoots = shoots.filter(s => s.alpha > 0.02)
      shoots.forEach(s => {
        const ex = s.x - s.len * s.alpha
        const ey = s.y - (s.len * s.alpha) * 0.45
        const g  = ctx.createLinearGradient(s.x, s.y, ex, ey)
        g.addColorStop(0, `rgba(255,255,255,${s.alpha})`)
        g.addColorStop(0.4, `rgba(180,200,255,${s.alpha * 0.5})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = g
        ctx.lineWidth = 1.5
        ctx.stroke()
        s.x += s.vx; s.y += s.vy; s.alpha -= 0.018
      })

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      stars.forEach(s => { s.x = Math.random() * W; s.y = Math.random() * H })
    }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(raf); clearInterval(si); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
