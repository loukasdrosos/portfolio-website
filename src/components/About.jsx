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
          <h3>Skills & Interests</h3>

          <div className="skills-list">
            {aboutInfo.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About