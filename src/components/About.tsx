import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { about, firm, stats, values } from '../data/content'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(value)
    const c = animate(0, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => c.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="stat-card__num">
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

const STAT_ICONS = [
  <svg key="0" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 10.5L12 3l9 7.5V21H3V10.5z" />
    <path d="M9 21v-6h6v6" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.5" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15 14c2.4 0 5 1.4 5 4.5" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 9h12M8 5h8l1 4v5a5 5 0 01-10 0V9l1-4zM9 19h6" />
  </svg>,
]

export default function About() {
  return (
    <section className="band about" id="about">
      <div className="wrap about__split">
        <div className="about__copy">
          <span className="eyebrow">— Who we are</span>
          <h2>{about.title}</h2>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="about__mission">
            <strong>Our mission.</strong> {about.mission}
          </p>
          <div className="about__cta">
            <a href="#process" className="btn btn--dark">More About Us →</a>
            <a href="#projects" className="btn btn--line">View Projects</a>
          </div>
        </div>

        <div className="stat-grid" aria-label="Dream Space Architects in numbers">
          {stats.map((s, idx) => (
            <div key={s.label} className={`stat-card${idx === 1 ? ' stat-card--dark' : ''}`}>
              <div className="stat-card__top">
                <Counter value={s.value} suffix={s.suffix} />
                <span className="stat-card__icon" aria-hidden>{STAT_ICONS[idx]}</span>
              </div>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap about__quote-band">
        <figure className="quote">
          <blockquote>“{about.quote}”</blockquote>
          <p>{about.quoteNote}</p>
          <figcaption>{firm.founder} · Founder, {firm.name}</figcaption>
        </figure>
      </div>

      <div className="wrap values">
        <h3>What we hold to</h3>
        <ul>
          {values.map((v) => (
            <li key={v.title}>
              <strong>{v.title}</strong>
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
