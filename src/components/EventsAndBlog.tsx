import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { blogPosts, eventsGallery, type BlogPost } from '../data/content'

export default function EventsAndBlog() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

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
                <img src={ev.src} alt={ev.title} loading="lazy" decoding="async" />
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
              <article
                key={post.id}
                className="blog-card blog-card--click"
                onClick={() => setActivePost(post)}
                tabIndex={0}
                role="button"
                aria-label={`Read ${post.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActivePost(post)
                  }
                }}
              >
                <div className="blog-card__media">
                  <img src={post.src} alt={post.title} loading="lazy" decoding="async" />
                  <span>{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <small className="blog-card__time">{post.readTime}</small>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="link">Read article →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* On-Site Article Reader Modal (no external redirect) */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            className="spotlight-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            <motion.article
              className="article-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="spotlight-modal__close"
                onClick={() => setActivePost(null)}
                aria-label="Close article"
              >
                ✕
              </button>
              <div className="article-modal__media">
                <img src={activePost.src} alt={activePost.title} />
              </div>
              <div className="article-modal__body">
                <span className="eyebrow">{activePost.category} · {activePost.readTime}</span>
                <h2 id="article-title">{activePost.title}</h2>
                <div className="article-modal__content">
                  {activePost.sections.map((sec, idx) => (
                    <div key={idx} className="article-modal__sec">
                      {sec.heading && <h3>{sec.heading}</h3>}
                      <p>{sec.body}</p>
                    </div>
                  ))}
                </div>
                <div className="article-modal__foot">
                  <a
                    href="#contact"
                    className="btn btn--dark"
                    onClick={() => setActivePost(null)}
                  >
                    Discuss a Project With Us →
                  </a>
                  <button
                    type="button"
                    className="btn btn--line"
                    onClick={() => setActivePost(null)}
                  >
                    Back to Blogs
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
