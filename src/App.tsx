import Header, { BrandLogo } from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import EventsAndBlog from './components/EventsAndBlog'
import Career from './components/Career'
import Contact from './components/Contact'
import { firm, nav } from './data/content'

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Team />
        <Services />
        <Projects />
        <Process />
        <EventsAndBlog />
        <Career />
        <Contact />
      </main>
      <footer className="ftr">
        <div className="wrap ftr__row">
          <a href="#top" className="brand"><BrandLogo inverted /></a>
          <nav aria-label="Footer">{nav.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        </div>
        <p className="wrap ftr__small">© {new Date().getFullYear()} {firm.name}, {firm.city}. {firm.tagline.join('. ')}.</p>
      </footer>
    </>
  )
}
