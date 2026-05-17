import { heroInfo, personalInfo } from "../data/portfolioData"
import "./Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">{heroInfo.label}</p>

        <h1>
          {heroInfo.title.split("real problems.")[0]}
          <span>real problems.</span>
        </h1>

        <p className="hero-description">
          {heroInfo.description}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href={`mailto:${personalInfo.email}`}>
            Email
          </a>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="profile-card">
          <div className="profile-placeholder">
            Your Photo
          </div>
        </div>

        <div className="hero-info-card">
          <div>
            <strong>{personalInfo.location}</strong>
            <span>Location</span>
          </div>

          <div>
            <strong>Junior Developer</strong>
            <span>Role</span>
          </div>

          <div>
            <strong>Always Learning</strong>
            <span>Mindset</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero