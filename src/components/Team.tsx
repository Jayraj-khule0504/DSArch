import { principalArchitect, teamMembers } from '../data/content'

export default function Team() {
  return (
    <section className="band team" id="team">
      <div className="wrap">
        <div className="team__head">
          <div>
            <span className="eyebrow">— Meet Our Team</span>
            <h2>Architects, engineers &amp; liaisoning specialists</h2>
          </div>
          <p>
            Our strength comes from hiring talented architects, interior designers, engineers and
            liaisoning officers — encouraging every partner to bring out thoughtful, buildable ideas.
          </p>
        </div>

        <article className="principal-card">
          <div className="principal-card__media">
            <img
              src={principalArchitect.photo}
              alt={`${principalArchitect.name} — ${principalArchitect.role}`}
              loading="lazy"
            />
          </div>
          <div className="principal-card__body">
            <span className="eyebrow">{principalArchitect.role}</span>
            <h3>{principalArchitect.name}</h3>
            <p>{principalArchitect.bio}</p>
          </div>
        </article>

        <div className="team-grid">
          {teamMembers.map((m) => (
            <article key={m.name} className="member-card">
              <div className="member-card__media">
                <img src={m.photo} alt={`${m.name} — ${m.role}`} loading="lazy" />
              </div>
              <div className="member-card__info">
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
