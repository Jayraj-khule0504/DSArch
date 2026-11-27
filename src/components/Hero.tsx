import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { firm } from '../data/content'

const SHOWCASE_VIEWS = [
  {
    id: 'tower',
    label: 'Tower Elevation',
    title: 'DSA Signature Tower · 22 Floors',
    meta: 'Symmetrical dual-wing residential tower with sky-bridge atrium & arrival gatehouse',
    src: '/client-project/tower-exterior.jpg',
  },
  {
    id: 'floor3d',
    label: '3D Floor Plan',
    title: '4 BHK Isometric Cutaway · 3,930 sq.ft SBU',
    meta: '2,078 sq.ft Carpet · 360 sq.ft Balcony · 4 Corner Bedrooms & Main Sky Deck',
    src: '/client-project/floorplan-3d.jpg',
  },
  {
    id: 'floor2d',
    label: '2D Blueprint',
    title: 'Dimensioned Architectural Plan',
    meta: "Living & Dining 26'-1\" × 25'-4\" · Main Deck 26'-11\" × 7'-6\" · 4'-10\" Wide Passage",
    src: '/client-project/floorplan-2d.jpg',
  },
  {
    id: 'lounge',
    label: 'Ground Lounge',
    title: 'Lounge | Ground Floor Arrival',
    meta: 'Double-height sculpted ceiling cove lobby overlooking landscaped drop-off court',
    src: '/client-project/ground-lounge.jpg',
  },
  {
    id: 'living',
    label: 'Living & Dining',
    title: 'Panoramic Living & Dining Hall',
    meta: '585 sq.ft open living-dining flowing onto sunset terrace sliders',
    src: '/client-project/living-dining.jpg',
  },
  {
    id: 'deck',
    label: 'Sky Deck',
    title: 'Private Cantilevered Sky Deck',
    meta: '26′-11″ × 7′-6″ timber-decked balcony overlooking the city skyline',
    src: '/client-project/sky-deck.jpg',
  },
] as const

export default function Hero() {
  const [activeId, setActiveId] = useState<(typeof SHOWCASE_VIEWS)[number]['id']>('tower')
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

        {/* Clean Architectural Building & Floor Plan Structure Showcase */}
        <motion.div
          className="hero-showcase"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-showcase__bar">
            <div className="hero-showcase__tabs" role="tablist" aria-label="Building views">
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
                className={
                  current.id === 'floor3d' || current.id === 'floor2d'
                    ? 'is-plan'
                    : ''
                }
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
