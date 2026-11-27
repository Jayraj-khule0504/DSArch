import { motion } from 'framer-motion'
import { firm } from '../data/content'
import type { PageId } from './Header'

export default function Hero({
  onNavigate,
}: {
  onNavigate: (target: PageId | 'contact') => void
}) {
  return (
    <section className="hero-clean" id="top" aria-label="Dream Space Architects hero">
      <div className="hero-clean__backdrop" aria-hidden>
        <div className="hero-clean__grid" />
        <img
          src="/hero-architecture-sketch.jpg"
          alt=""
          className="hero-clean__bg-img"
        />
      </div>

      <div className="wrap hero-clean__inner">
        <motion.span
          className="hero-clean__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          Architecture · Interiors · PMC &amp; PCMC Approvals · {firm.city}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          SHAPING PUNE&apos;S
          <br />
          ARCHITECTURE TO
          <br />
          THE NEXT LEVEL.
        </motion.h1>

        <motion.p
          className="hero-clean__sub"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Residential towers, commercial hubs, interiors, and complete PMC &amp; PCMC approvals —
          designed with clarity by {firm.name} since 2008.
        </motion.p>

        <motion.div
          className="hero-clean__actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#projects"
            className="btn btn--dark"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('projects')
            }}
          >
            Explore our projects
          </a>
          <a
            href="#contact"
            className="btn btn--pill-white"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('contact')
            }}
          >
            Book consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
