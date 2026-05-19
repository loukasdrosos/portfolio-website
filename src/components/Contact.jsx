import { personalInfo } from "../data/portfolioData"
import "./Contact.css"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-content">
          <p className="section-label">Contact</p>

          <h2>Let’s connect</h2>

          <p className="contact-description">
            I am open to software developer opportunities, collaborations
            and interesting projects. Feel free to contact me or connect with me
            online.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-button primary-contact"
          >
            Email Me
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact