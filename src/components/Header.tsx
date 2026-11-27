import { useEffect, useState } from 'react'
import { firm, nav } from '../data/content'

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      src="/dsa-logo.png"
      alt={firm.name}
      className={`brand__logo${inverted ? ' brand__logo--badge' : ''}`}
    />
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
          <BrandLogo />
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
