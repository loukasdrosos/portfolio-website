import { aboutInfo } from "../data/portfolioData"
import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-content">
          <p className="section-label">{aboutInfo.label}</p>

          <h2>{aboutInfo.title}</h2>

          <p className="about-description">
            {aboutInfo.description}
          </p>
        </div>

        <div className="skills-card">
          <h3>Skills & Technologies</h3>

          <div className="skills-list">
            {aboutInfo.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-details-grid">
        <div className="timeline-card">
          <h3>Work Experience</h3>

          <div className="timeline-list">
            {aboutInfo.experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-dot"></div>

                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h4>{item.role}</h4>
                  <p className="timeline-company">
                    {item.company} · {item.location}
                  </p>
                  <p className="timeline-description">
                    {item.description}
                  </p>

                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="timeline-card">
          <h3>Education</h3>

          <div className="timeline-list">
            {aboutInfo.education.map((item) => (
              <article className="timeline-item" key={item.degree}>
                <div className="timeline-dot"></div>

                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h4>{item.degree}</h4>
                  <p className="timeline-company">{item.school}</p>
                  <p className="timeline-description">{item.grade}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About