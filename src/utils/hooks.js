import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?'

/** Scramble-then-resolve text animation */
export function useScramble(finalText, { delay = 0, fps = 25 } = {}) {
  const [text, setText] = useState(finalText)
  const done = useRef(false)

  useEffect(() => {
    done.current = false
    const t = setTimeout(() => {
      let frame = 0
      const total = fps
      const id = setInterval(() => {
        frame++
        const progress = frame / total
        setText(
          finalText.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i / finalText.length < progress) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join('')
        )
        if (frame >= total) { setText(finalText); clearInterval(id); done.current = true }
      }, 40)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [finalText, delay, fps])

  return text
}

/** 3-D card tilt on mouse-move */
export function useTilt(intensity = 9) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width  - 0.5
      const y = (e.clientY - r.top)  / r.height - 0.5
      el.style.transition = 'transform .08s ease'
      el.style.transform  = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.015,1.015,1.015)`
    }
    const onLeave = () => {
      el.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)'
      el.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [intensity])
  return ref
}

/** Count-up animation */
export function useCountUp(target, { duration = 1400, trigger = false } = {}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return count
}
