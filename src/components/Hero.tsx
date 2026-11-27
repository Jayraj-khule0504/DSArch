import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { firm } from '../data/content'

const SHOWCASE_VIEWS = [
  {
    id: 'residential',
    label: 'Vision Aristo',
    title: 'Vision Aristo · Residential Towers',
    meta: 'Vision Creative Group · Multi-wing residential complex with landscaped podium in Pune',
    src: '/projects/dsa/vision-aristo.jpg',
  },
  {
    id: 'twin',
    label: 'Swastik Twin Tower',
    title: 'Swastik Twin Tower · Pimpri-Chinchwad',
    meta: 'Swastik Builders & Developers · Twin residential high-rises with retail frontage',
    src: '/projects/dsa/swastik-twin-tower.jpg',
  },
  {
    id: 'commercial',
    label: 'Vishnu Capitals',
    title: 'Vishnu Capitals · Commercial Hub',
    meta: 'Mixed-use retail & corporate office elevation designed by Dream Space Architects',
    src: '/projects/dsarch-commercial.jpg',
  },
  {
    id: 'interior',
    label: 'MSR Capital Interior',
    title: 'Omkar Doke · MSR Capital Interior',
    meta: 'Executive corporate workspace interior with warm wood detailing and ambient lighting',
    src: '/projects/dsa/msr-capital-interior.jpg',
  },
  {
    id: 'landscape',
    label: 'Landscape Design',
    title: 'DSA Skylife · Courtyard & Pool',
    meta: 'Podium recreational deck, landscaped lawn and water feature designed for community living',
    src: '/projects/dsa/landscape-1.jpg',
  },
  {
    id: 'bungalow',
    label: 'Vilas Patil Bungalow',
    title: 'Vilas Patil Residence · Private Villa',
    meta: 'Cantilevered contemporary bungalow elevation with warm soffits and garden court',
    src: '/projects/dsa/vilas-patil-bungalow.jpg',
  },
] as const

export default function Hero() {
  const [activeId, setActiveId] = useState<(typeof SHOWCASE_VIEWS)[number]['id']>('residential')
  const current = SHOWCASE_VIEWS.find((v) => v.id === activeId)!

  return (
    <section className="hero-clean" id="top" aria-label="Dream Space Architects hero">
      {/* Architectural Elevation Drawing Background + Drafting Grid */}
      <div className="hero-clean__backdrop" aria-hidden>
        <div className="hero-clean__grid" />
        <img
          src="/hero-architecture-sketch.jpg"
          alt=""
          className="hero-clean__bg-img"
        />
        <div className="hero-clean__bg-wash" />
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
          Your vision deserves spaces built with precision, clarity, and lasting craft. At{' '}
          {firm.name}, we design residential towers, commercial hubs, bespoke interiors, and handle
          complete PMC &amp; PCMC approvals across Pune.
        </motion.p>

        <motion.div
          className="hero-clean__actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="btn btn--dark">Explore our work</a>
          <a href="#contact" className="btn btn--pill-white">Book consultation</a>
        </motion.div>

        {/* Official DSA Portfolio Highlights Showcase Card */}
        <motion.div
          className="hero-showcase"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-showcase__bar">
            <div className="hero-showcase__tabs" role="tablist" aria-label="DSA featured projects">
              {SHOWCASE_VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === v.id}
                  onClick={() => setActiveId(v.id)}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <span className="hero-showcase__coords">18.6343° N · 73.8008° E · PUNE</span>
          </div>

          <div className="hero-showcase__stage">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.title}
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.25 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            <div className="hero-showcase__caption">
              <div>
                <strong>{current.title}</strong>
                <span>{current.meta}</span>
              </div>
              <a href="#contact" className="btn btn--sun">Request Similar Project →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
