import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section className="band services" id="services">
      <div className="wrap">
        <h2>One studio for design, interiors and approvals</h2>
        <div className="acc">
          {services.map((s, i) => {
            const isOpen = open === i
            return (
              <div key={s.title} className={`acc__item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    id={`svc-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`svc-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="acc__title">{s.title}</span>
                    <span className="acc__sum">{s.summary}</span>
                    <span className="acc__icon" aria-hidden />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`svc-panel-${i}`}
                      role="region"
                      aria-labelledby={`svc-${i}`}
                      className="acc__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
