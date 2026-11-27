import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectKinds, type ProjectItem, type ProjectKind } from '../data/content'

export default function Projects() {
  const [kind, setKind] = useState<ProjectKind>('residential')
  const [showAll, setShowAll] = useState(false)
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)

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
                <article
                  key={p.title}
                  className="project-card project-card--click"
                  onClick={() => setActiveProject(p)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Inspect ${p.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveProject(p)
                    }
                  }}
                >
                  <div className="project-card__media">
                    <img src={p.src} alt={`${p.title} — ${p.location}`} loading="lazy" />
                    <span className="project-card__tag">{p.scale}</span>
                    <span className="project-card__zoom" aria-hidden>↗</span>
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
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="spotlight-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="spotlight-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="proj-modal-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="spotlight-modal__close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project preview"
              >
                ✕
              </button>
              <div className="spotlight-modal__media">
                <img src={activeProject.src} alt={activeProject.title} />
              </div>
              <div className="spotlight-modal__body">
                <span className="eyebrow">{activeProject.scale} · {activeProject.location}</span>
                <h3 id="proj-modal-title">{activeProject.title}</h3>
                <p>{activeProject.summary}</p>
                <div className="spotlight-modal__actions">
                  <a
                    href="#contact"
                    className="btn btn--sun"
                    onClick={() => setActiveProject(null)}
                  >
                    Enquire About Similar Project →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
