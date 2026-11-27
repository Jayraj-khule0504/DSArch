import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { about, clients, process, services, stats } from '../data/content'
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
  { title: 'Vision Aristo', tag: 'Residential', src: '/projects/dsa/vision-aristo.jpg' },
  { title: 'Swastik Twin Tower', tag: 'Residential · PCMC', src: '/projects/dsa/swastik-twin-tower.jpg' },
  { title: 'Vishnu Capitals', tag: 'Commercial', src: '/projects/dsarch-commercial.jpg' },
  { title: 'Omkar Doke · MSR Capital', tag: 'Interior', src: '/projects/dsa/msr-capital-interior.jpg' },
  { title: 'DSA Skylife Courtyard', tag: 'Landscape', src: '/projects/dsa/landscape-1.jpg' },
  { title: 'Vilas Patil Residence', tag: 'Bungalow', src: '/projects/dsa/vilas-patil-bungalow.jpg' },
]

export default function HomeOverview({
  onNavigate,
}: {
  onNavigate: (target: PageId | 'contact') => void
}) {
  return (
    <>
      {/* 1. Simple About & Numbers */}
      <section className="band about" aria-label="Studio overview">
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
              <article key={s.title} className="svc-card">
                <span className="svc-card__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul>
                  {s.points.slice(0, 3).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Selected Projects Preview */}
      <section className="band projects" aria-label="Selected projects">
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
                View All 24 Projects →
              </button>
            </div>
          </div>

          <div className="portfolio-grid">
            {FEATURED_WORKS.map((w) => (
              <article
                key={w.title}
                className="project-card project-card--click"
                onClick={() => onNavigate('projects')}
              >
                <div className="project-card__media">
                  <img src={w.src} alt={w.title} loading="lazy" />
                  <span className="project-card__tag">{w.tag}</span>
                </div>
                <div className="project-card__body">
                  <h3>{w.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact 5-Step Process & Clientele */}
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
            <ul className="client-logos">
              {clients.map((c) => (
                <li key={c.name} className="client-logo">
                  <img src={c.logo} alt={c.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
