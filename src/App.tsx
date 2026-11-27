import { useEffect, useState } from 'react'
import Header, { BrandLogo, type PageId } from './components/Header'
import Hero from './components/Hero'
import HomeOverview from './components/HomeOverview'
import About from './components/About'
import Team from './components/Team'
import Projects from './components/Projects'
import EventsAndBlog from './components/EventsAndBlog'
import Career from './components/Career'
import Contact from './components/Contact'
import { firm, nav } from './data/content'

function pageFromHash(): PageId {
  const h = window.location.hash.replace('#', '').toLowerCase()
  if (h === 'about' || h === 'team') return 'about'
  if (h === 'projects') return 'projects'
  if (h === 'events' || h === 'blog') return 'events'
  if (h === 'career') return 'career'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState<PageId>(pageFromHash)

  useEffect(() => {
    const onHash = () => setPage(pageFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (target: PageId | 'contact') => {
    if (target === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setPage(target)
    window.history.replaceState(null, '', target === 'home' ? '#home' : `#${target}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header activePage={page} onNavigate={navigate} />

      <main id="main">
        {page === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <HomeOverview onNavigate={navigate} />
          </>
        )}

        {page === 'about' && (
          <div className="subpage">
            <div className="wrap subpage__crumb">
              <button type="button" className="btn btn--line" onClick={() => navigate('home')}>
                ← Back to Home
              </button>
            </div>
            <About />
            <Team />
          </div>
        )}

        {page === 'projects' && (
          <div className="subpage">
            <div className="wrap subpage__crumb">
              <button type="button" className="btn btn--line" onClick={() => navigate('home')}>
                ← Back to Home
              </button>
            </div>
            <Projects />
          </div>
        )}

        {page === 'events' && (
          <div className="subpage">
            <div className="wrap subpage__crumb">
              <button type="button" className="btn btn--line" onClick={() => navigate('home')}>
                ← Back to Home
              </button>
            </div>
            <EventsAndBlog />
          </div>
        )}

        {page === 'career' && (
          <div className="subpage">
            <div className="wrap subpage__crumb">
              <button type="button" className="btn btn--line" onClick={() => navigate('home')}>
                ← Back to Home
              </button>
            </div>
            <Career />
          </div>
        )}

        <Contact />
      </main>

      <footer className="ftr">
        <div className="wrap ftr__row">
          <a
            href="#home"
            className="brand"
            onClick={(e) => {
              e.preventDefault()
              navigate('home')
            }}
          >
            <BrandLogo inverted />
          </a>
          <nav aria-label="Footer">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(n.id as PageId | 'contact')
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="wrap ftr__small">
          © {new Date().getFullYear()} {firm.name}, {firm.city}. {firm.tagline.join('. ')}.
        </p>
      </footer>
    </>
  )
}
