import { clients, process, testimonials } from '../data/content'

export default function Process() {
  return (
    <>
      {/* Dramatic Full-Width CTA Banner matching the uploaded image */}
      <section className="cta-banner" aria-label="Start your architectural project">
        <img
          src="/projects/residential-tower.jpg"
          alt="Illuminated modern residential architecture at dusk"
          className="cta-banner__bg"
          loading="lazy"
        />
        <div className="cta-banner__scrim" aria-hidden />
        <div className="wrap cta-banner__inner">
          <div>
            <span className="eyebrow eyebrow--light">— Let’s Build Together</span>
            <h2>Your Dream Building, Ready to Visualize Today!</h2>
          </div>
          <div className="cta-banner__right">
            <p>
              Walk through your project in real-time 3D before construction starts — with full
              PMC/PCMC liaisoning and site supervision included.
            </p>
            <div className="cta-banner__actions">
              <a href="#contact" className="btn btn--light">Get in Touch →</a>
              <a href="#projects" className="btn btn--ghost">Explore Projects</a>
            </div>
          </div>
        </div>
      </section>

      <section className="band process" id="process">
        <div className="wrap">
          <span className="eyebrow">— How we work</span>
          <h2>Five clear steps from plot to handover</h2>
          <ol className="steps">
            {process.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n" aria-hidden>{i + 1}</span>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>

          <div className="testimonials">
            <div className="testimonials__head">
              <div>
                <span className="eyebrow">— Client Stories</span>
                <h3>What Clients Love About Us</h3>
              </div>
              <p>
                Developers, builders and homeowners across Pune trust Dream Space Architects for
                clarity in 3D, speed in approvals and precision on site.
              </p>
            </div>
            <div className="testimonials__grid">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="t-card">
                  <p>“{t.quote}”</p>
                  <footer>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="clients">
            <h3>Trusted by Pune developers &amp; families</h3>
            <ul>
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
