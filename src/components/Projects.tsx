import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectKinds, type ProjectKind } from '../data/content'

export default function Projects() {
  const [kind, setKind] = useState<ProjectKind>('residential')
  const info = projectKinds.find((k) => k.key === kind)!

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
                onClick={() => setKind(k.key)}
              >
                {k.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={kind}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`tab-${kind}`}
            className="portfolio-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="portfolio-cards">
              {info.projects.map((p) => (
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

            <div className="portfolio-aside">
              <span className="eyebrow eyebrow--light">{info.label} Practice</span>
              <h3>{info.label}</h3>
              <p>{info.text}</p>
              <div className="portfolio-aside__actions">
                <a href="#contact" className="btn btn--sun">
                  Discuss a {info.label.toLowerCase()} project
                </a>
                <a href="#process" className="link">
                  See our 5-step process →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Signature Real-Project Showcase Strip using the uploaded client photos */}
        <div className="showcase-strip" aria-label="Featured architectural renders">
          <figure>
            <img src="/client-project/tower-exterior.jpg" alt="22-story residential tower twilight elevation" loading="lazy" />
            <figcaption>22-Story Tower Elevation</figcaption>
          </figure>
          <figure>
            <img src="/client-project/ground-lounge.jpg" alt="Ground floor arrival lounge" loading="lazy" />
            <figcaption>Ground Floor Arrival Lounge</figcaption>
          </figure>
          <figure>
            <img src="/client-project/living-dining.jpg" alt="Luxury living and dining interior" loading="lazy" />
            <figcaption>Living &amp; Dining · 585 sq.ft</figcaption>
          </figure>
          <figure>
            <img src="/client-project/sky-deck.jpg" alt="Private sky deck balcony view" loading="lazy" />
            <figcaption>Main Sky Deck · 26′-11″</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
