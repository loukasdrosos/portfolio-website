import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">Junior Software Developer</p>

        <h1>
          I build software that solves <span>real problems.</span>
        </h1>

        <p className="hero-description">
          Passionate about building efficient, scalable and meaningful solutions
          through code. Interested in full-stack development, data, scientific
          research and game development.
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
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com">
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
            <strong>Athens, Greece</strong>
            <span>Location</span>
          </div>

          <div>
            <strong>BSc Geophysics</strong>
            <span>Background</span>
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