import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import { about, clients, firm, process, services, stats } from '../data/content'
import type { PageId } from './Header'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(value)
    const c = animate(0, value, {
      duration: 1.4,
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

const FEATURED_WORKS = [
  {
    title: 'Vision Aristo',
    tag: 'Residential',
    location: 'Pune · Vision Creative Group',
    summary: 'Multi-wing contemporary residential towers with articulated balconies and podium amenities.',
    src: '/projects/dsa/vision-aristo.jpg',
    wide: true,
  },
  {
    title: 'Swastik Twin Tower',
    tag: 'Residential · PCMC',
    location: 'Pimpri-Chinchwad · Swastik Builders',
    summary: 'Symmetrical twin high-rises anchored by a landscaped central podium and arrival court.',
    src: '/projects/dsa/swastik-twin-tower.jpg',
    wide: false,
  },
  {
    title: 'Vishnu Capitals',
    tag: 'Commercial',
    location: 'Pune Metropolitan Region',
    summary: 'Glazed double-level retail & office frontage with bold cantilevered upper corporate volume.',
    src: '/projects/dsarch-commercial.jpg',
    wide: false,
  },
  {
    title: 'Omkar Doke · MSR Capital',
    tag: 'Interior',
    location: 'Pune · Commercial Interior',
    summary: 'Warm wood-accented corporate office reception, workstations and recessed cove lighting.',
    src: '/projects/dsa/msr-capital-interior.jpg',
    wide: false,
  },
  {
    title: 'DSA Skylife Courtyard',
    tag: 'Landscape',
    location: 'Pimpri-Chinchwad, Pune',
    summary: 'Sculpted swimming pool deck, manicured lawn courts and shaded arrival walkway.',
    src: '/projects/dsa/landscape-1.jpg',
    wide: false,
  },
  {
    title: 'Vilas Patil Residence',
    tag: 'Bungalow',
    location: 'Pune · Private Villa',
    summary: 'Cantilevered concrete terraces, warm wooden soffits and private garden frontage.',
    src: '/projects/dsa/vilas-patil-bungalow.jpg',
    wide: true,
  },
]

export default function HomeOverview({
  onNavigate,
}: {
  onNavigate: (target: PageId | 'contact') => void
}) {
  const [spotlight, setSpotlight] = useState<(typeof FEATURED_WORKS)[number] | null>(null)

  return (
    <>
      {/* 1. Founder Quote & Studio Overview right under Front Page */}
      <section className="band about" aria-label="Founder quote and studio overview">
        <div className="wrap" style={{ marginBottom: 'clamp(44px, 5vw, 68px)' }}>
          <motion.figure
            className="quote quote--split"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.figure>
        </div>

        <div className="wrap about__split">
          <div className="about__copy">
            <span className="eyebrow">— Who We Are</span>
            <h2>Designing spaces that stand the test of time</h2>
            <p>{about.body[0]}</p>
            <p className="about__mission">
              <strong>Our mission.</strong> {about.mission}
            </p>
            <div className="about__cta">
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => onNavigate('about')}
              >
                About DSA &amp; Our Team →
              </button>
              <button
                type="button"
                className="btn btn--line"
                onClick={() => onNavigate('career')}
              >
                Careers at DSA
              </button>
            </div>
          </div>

          <div className="stat-grid">
            {stats.map((s, idx) => (
              <div key={s.label} className={`stat-card${idx === 1 ? ' stat-card--dark' : ''}`}>
                <div className="stat-card__top">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Three Clear Services */}
      <section className="band services" aria-label="Our services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">— What We Do</span>
              <h2>One studio for design, interiors &amp; approvals</h2>
            </div>
            <p>
              From first architectural sketch to PMC/PCMC sanctioning and on-site supervision —
              everything handled seamlessly under one roof.
            </p>
          </div>
          <div className="svc-cards">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                className="svc-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <span className="svc-card__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul>
                  {s.points.slice(0, 3).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eye-Catching Architectural Bento Showcase */}
      <section className="band projects-showcase" aria-label="Selected projects">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">— Selected Works</span>
              <h2>Built across Pune &amp; Pimpri-Chinchwad</h2>
            </div>
            <div className="section-head__cta">
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => onNavigate('projects')}
              >
                View Full Portfolio →
              </button>
            </div>
          </div>

          <div className="bento-grid">
            {FEATURED_WORKS.map((w, i) => (
              <motion.article
                key={w.title}
                className={`bento-card${w.wide ? ' bento-card--wide' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.38, delay: i * 0.05 }}
                onClick={() => setSpotlight(w)}
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${w.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSpotlight(w)
                  }
                }}
              >
                <img src={w.src} alt={w.title} loading="lazy" />
                <div className="bento-card__scrim" aria-hidden />
                <div className="bento-card__top">
                  <span className="bento-card__tag">{w.tag}</span>
                  <span className="bento-card__arrow" aria-hidden>↗</span>
                </div>
                <div className="bento-card__bottom">
                  <span className="bento-card__loc">{w.location}</span>
                  <h3>{w.title}</h3>
                  <p>{w.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact 5-Step Process & Moving Clientele Marquee */}
      <section className="band process" aria-label="Process and clientele">
        <div className="wrap">
          <span className="eyebrow">— How We Work</span>
          <h2>Five clear steps from plot to handover</h2>
          <ol className="steps">
            {process.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n" aria-hidden>{i + 1}</span>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>

          <div className="clients">
            <span className="eyebrow">— Clientele</span>
            <h3>Trusted by Pune developers &amp; builders</h3>
            <div className="client-marquee" aria-label="Client developer logos">
              <ul className="client-track">
                {[...clients, ...clients].map((c, idx) => (
                  <li key={`${c.name}-${idx}`} className="client-logo" aria-hidden={idx >= clients.length}>
                    <img src={c.logo} alt={idx < clients.length ? c.name : ''} loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Spotlight Modal */}
      <AnimatePresence>
        {spotlight && (
          <motion.div
            className="spotlight-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSpotlight(null)}
          >
            <motion.div
              className="spotlight-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="spot-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="spotlight-modal__close"
                onClick={() => setSpotlight(null)}
                aria-label="Close preview"
              >
                ✕
              </button>
              <div className="spotlight-modal__media">
                <img src={spotlight.src} alt={spotlight.title} />
              </div>
              <div className="spotlight-modal__body">
                <span className="eyebrow">{spotlight.tag} · {spotlight.location}</span>
                <h3 id="spot-title">{spotlight.title}</h3>
                <p>{spotlight.summary}</p>
                <div className="spotlight-modal__actions">
                  <button
                    type="button"
                    className="btn btn--dark"
                    onClick={() => {
                      setSpotlight(null)
                      onNavigate('projects')
                    }}
                  >
                    Browse Full Portfolio →
                  </button>
                  <button
                    type="button"
                    className="btn btn--sun"
                    onClick={() => {
                      setSpotlight(null)
                      onNavigate('contact')
                    }}
                  >
                    Enquire About Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
