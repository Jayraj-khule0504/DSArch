import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
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
          <span className="eyebrow">— About DSA · Since 2008</span>
          <h2>{about.title}</h2>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="about__mission">
            <strong>Our vision.</strong> {about.vision}
          </p>
          <p className="about__mission">
            <strong>Our mission.</strong> {about.mission}
          </p>
          <div className="about__cta">
            <a href="#team" className="btn btn--dark">Meet Our Team →</a>
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

      {/* Our Journey — Proud Legacy & Growth Since 2008 */}
      <div className="wrap journey-stage">
        <div className="journey-stage__grid-bg" aria-hidden />

        <div className="journey__head">
          <div>
            <span className="eyebrow eyebrow--gold">— Proud Legacy · Working Since 2008</span>
            <h3>
              From a <span>100 sq.ft</span> first desk to a <span>2,750 sq.ft</span> landmark
              studio in Pimpri
            </h3>
          </div>
          <div className="journey__badge-box">
            <span className="journey__since">SINCE 2008</span>
            <p className="journey__intro">{about.journeyIntro}</p>
          </div>
        </div>

        {/* Visual Studio Scale Progression Meter */}
        <div className="journey-meter" aria-label="Studio expansion from 100 sq.ft in 2008 to 2,750 sq.ft today">
          <div className="journey-meter__labels">
            <span><strong>2008</strong> · 100 sq.ft Desk</span>
            <span>200 sq.ft First Studio</span>
            <span>750 sq.ft · Morwadi</span>
            <span className="is-peak"><strong>Today</strong> · 2,750 sq.ft · MSR Capital, Pimpri</span>
          </div>
          <div className="journey-meter__track">
            <motion.div
              className="journey-meter__fill"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <ol className="journey__story">
          {about.journey.map((j, idx) => (
            <motion.li
              key={j.step}
              className={`journey-card${idx === about.journey.length - 1 ? ' journey-card--crown' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.42, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="journey-card__ghost" aria-hidden>0{idx + 1}</span>
              <div className="journey-card__rail">
                <span className="journey__num">0{idx + 1}</span>
                <span className="journey-card__era">{j.era}</span>
              </div>
              <div className="journey-card__body">
                <span className="journey-card__scale">{j.scale}</span>
                <h4>{j.step}</h4>
                <p>{j.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="journey-footer">
          <div>
            <strong>27.5×</strong>
            <span>Studio Growth Since 2008</span>
          </div>
          <div>
            <strong>812+</strong>
            <span>Buildings &amp; Interiors Delivered</span>
          </div>
          <div>
            <strong>8,580+</strong>
            <span>Families &amp; Clients Served</span>
          </div>
        </div>
      </div>

      <div className="wrap about__quote-band">
        <figure className="quote quote--split">
          <div className="quote__body">
            <blockquote>“{about.quote}”</blockquote>
            <p>{about.quoteNote}</p>
            <figcaption>— {firm.founder} · Principal Architect, {firm.name}</figcaption>
          </div>
          <img
            src="/founder-mahendra.jpg"
            alt={`${firm.founder}, founder of ${firm.name}, drafting architectural plans`}
            className="quote__photo"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="wrap values">
        <h3>Core Values</h3>
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
