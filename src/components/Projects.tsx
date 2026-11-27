import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectKinds, type ProjectKind } from '../data/content'

export default function Projects() {
  const [kind, setKind] = useState<ProjectKind>('residential')
  const [showAll, setShowAll] = useState(false)

  const info = projectKinds.find((k) => k.key === kind)!
  const visibleProjects =
    !showAll && info.projects.length > 6 ? info.projects.slice(0, 6) : info.projects

  return (
    <section className="band projects" id="projects">
      <div className="wrap">
        <div className="projects__head">
          <div>
            <span className="eyebrow">— Portfolio</span>
            <h2>Architectural &amp; interior works across Pune</h2>
          </div>
          <div className="chips" role="tablist" aria-label="Project type">
            {projectKinds.map((k) => (
              <button
                key={k.key}
                role="tab"
                id={`tab-${k.key}`}
                aria-selected={kind === k.key}
                aria-controls="project-panel"
                onClick={() => {
                  setKind(k.key)
                  setShowAll(false)
                }}
              >
                {k.label} ({k.projects.length})
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-banner">
          <div>
            <span className="eyebrow eyebrow--light">{info.label} Practice</span>
            <h3>{info.label} Projects</h3>
            <p>{info.text}</p>
          </div>
          <div className="portfolio-banner__actions">
            <a href="#contact" className="btn btn--sun">
              Discuss a {info.label.toLowerCase()} project
            </a>
            <a href="#process" className="link">
              See our 5-step process →
            </a>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={kind}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`tab-${kind}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="portfolio-grid">
              {visibleProjects.map((p) => (
                <article key={p.title} className="project-card">
                  <div className="project-card__media">
                    <img src={p.src} alt={`${p.title} — ${p.location}`} loading="lazy" />
                    <span className="project-card__tag">{p.scale}</span>
                  </div>
                  <div className="project-card__body">
                    <span className="project-card__loc">{p.location}</span>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                  </div>
                </article>
              ))}
            </div>

            {info.projects.length > 6 && (
              <div className="portfolio-more">
                <button
                  type="button"
                  className="btn btn--line"
                  onClick={() => setShowAll((s) => !s)}
                >
                  {showAll
                    ? `Show Fewer ${info.label} Projects`
                    : `View All ${info.projects.length} ${info.label} Projects ↓`}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="showcase-strip" aria-label="Featured architectural renders">
          <figure>
            <img src="/projects/dsa/vision-aristo.jpg" alt="Vision Aristo residential elevation" loading="lazy" />
            <figcaption>Vision Aristo · Residential</figcaption>
          </figure>
          <figure>
            <img src="/projects/dsa/swastik-twin-tower.jpg" alt="Swastik Twin Tower elevation" loading="lazy" />
            <figcaption>Swastik Twin Tower · PCMC</figcaption>
          </figure>
          <figure>
            <img src="/projects/dsarch-commercial.jpg" alt="Vishnu Capitals commercial building" loading="lazy" />
            <figcaption>Vishnu Capitals · Commercial</figcaption>
          </figure>
          <figure>
            <img src="/projects/dsa/vilas-patil-bungalow.jpg" alt="Vilas Patil private bungalow" loading="lazy" />
            <figcaption>Vilas Patil · Bungalow</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
