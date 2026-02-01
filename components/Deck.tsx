'use client'

import { useEffect, useMemo, useState } from 'react'
import { slides } from '@/lib/slides'

export default function Deck() {
  const [idx, setIdx] = useState(0)
  const s = useMemo(() => slides[idx], [idx])

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIdx((i) => (i + 1) % slides.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // touch swipe
  useEffect(() => {
    let x0: number | null = null
    const onTouchStart = (e: TouchEvent) => {
      x0 = e.touches[0]?.clientX ?? null
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (x0 == null) return
      const x1 = e.changedTouches[0]?.clientX ?? x0
      const dx = x1 - x0
      if (Math.abs(dx) > 60) {
        if (dx < 0) next()
        else prev()
      }
      x0 = null
    }
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <div className="deck" aria-label="Sponsor deck">
      <div className="slide" key={s.key}>
        <div>
          <div className="brand">
            <img className="logo" src="/logo.png" alt="Vibe Coding Colosseum" />
            <div className="tag">
              Sponsor Deck <span>Vibe Coding Colosseum</span>
            </div>
          </div>
          <h1 className="h1">{s.title}</h1>
          <div className="h2">{s.subtitle}</div>

          <div className="kpis">
            {s.kpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="v">{k.value}</div>
                <div className="l">{k.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Key points</h3>
          <ul className="bullets">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overlay" />

      <div className="nav">
        <button className="btn" onClick={prev}>
          ← Prev
        </button>
        <div className="meta">
          <div className="dots">
            {slides.map((_, i) => (
              <span key={i} className={i === idx ? 'dot on' : 'dot'} />
            ))}
          </div>
          <div style={{ marginTop: 6 }}>
            {idx + 1} / {slides.length} (← → or swipe)
          </div>
        </div>
        <button className="btn" onClick={next}>
          Next →
        </button>
      </div>
    </div>
  )
}
