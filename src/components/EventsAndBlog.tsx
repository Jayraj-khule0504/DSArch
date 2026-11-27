import { useState } from 'react'
import { blogPosts, eventsGallery } from '../data/content'

export default function EventsAndBlog() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section className="band events" id="events">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">— Studio Life &amp; Milestones</span>
              <h2>Events at Dream Space Architects</h2>
            </div>
            <p>
              Moments from studio celebrations, project launches and architectural workshops with our
              team and Pune partners.
            </p>
          </div>

          <div className="events-grid">
            {eventsGallery.map((ev) => (
              <button
                key={ev.src}
                type="button"
                className="event-tile"
                onClick={() => setLightbox(ev.src)}
                aria-label={`View ${ev.title}`}
              >
                <img src={ev.src} alt={ev.title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {lightbox && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
            <button type="button" className="lightbox__close" aria-label="Close photo">✕</button>
            <img src={lightbox} alt="Dream Space Architects event" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </section>

      <section className="band blog" id="blog">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">— Our Blog Space</span>
              <h2>Insights on architecture, space &amp; Pune urbanism</h2>
            </div>
            <p>
              Perspectives from our practice on daylighting, vernacular cooling, acoustics and
              designing efficient homes across India.
            </p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__media">
                  <img src={post.src} alt={post.title} loading="lazy" />
                  <span>{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Read article ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
