import { useEffect, useState } from 'react'
import { firm, nav } from '../data/content'

export function Mark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect x="2" y="2" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M8 24 V14 L16 8 L24 14 V24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M13 24 V18 H19 V24" fill="none" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`hdr${solid ? ' hdr--solid' : ''}${open ? ' hdr--open' : ''}`}>
      <div className="wrap hdr__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Mark />
          <span className="brand__text">
            <strong>{firm.short}</strong>
            <small>{firm.name.replace('DSA', '').trim()}</small>
          </span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr">Menu</span>
          <i /><i />
        </button>
        <nav id="site-nav" className="nav">
          <div className="nav__links">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
            ))}
          </div>
          <div className="nav__actions">
            <a href="#projects" className="btn btn--pill-white" onClick={() => setOpen(false)}>
              Explore projects
            </a>
            <a href="#contact" className="btn btn--dark" onClick={() => setOpen(false)}>
              Book consultation
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
