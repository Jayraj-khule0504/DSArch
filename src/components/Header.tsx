import { useEffect, useState } from 'react'
import { firm, nav } from '../data/content'

export type PageId = 'home' | 'about' | 'projects' | 'events' | 'career'

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      src="/dsa-logo.png"
      alt={firm.name}
      className={`brand__logo${inverted ? ' brand__logo--badge' : ''}`}
    />
  )
}

export default function Header({
  activePage,
  onNavigate,
}: {
  activePage: PageId
  onNavigate: (target: PageId | 'contact') => void
}) {
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

  const handleNav = (id: string) => {
    setOpen(false)
    onNavigate(id as PageId | 'contact')
  }

  return (
    <header className={`hdr${solid ? ' hdr--solid' : ''}${open ? ' hdr--open' : ''}`}>
      <div className="wrap hdr__inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home')
          }}
        >
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
              <a
                key={n.id}
                href={`#${n.id}`}
                className={activePage === n.id ? 'is-current' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(n.id)
                }}
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="nav__actions">
            <a
              href="#contact"
              className="btn btn--dark"
              onClick={(e) => {
                e.preventDefault()
                handleNav('contact')
              }}
            >
              Book consultation
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
