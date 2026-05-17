import { featuredProject } from "../data/portfolioData"
import "./FeaturedProject.css"

function FeaturedProject() {
  return (
    <section id="featured-project" className="featured-section">
      <div className="featured-card">
        <div className="featured-visual">
          <div className="featured-image-placeholder">
            {featuredProject.imageText}
          </div>
        </div>

        <div className="featured-content">
          <p className="section-label">{featuredProject.label}</p>

          <h2>{featuredProject.title}</h2>

          <p className="featured-description">
            {featuredProject.description}
          </p>

          <div className="featured-details">
            {featuredProject.details.map((detail) => (
              <div key={detail.label}>
                <strong>{detail.label}</strong>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="featured-actions">
            <a href={featuredProject.downloadLink} className="download-button">
              Download Game
            </a>

            <a
              href={featuredProject.githubLink}
              className="outline-button"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <p className="download-note">
            {featuredProject.note}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject