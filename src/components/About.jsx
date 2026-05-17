import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-content">
          <p className="section-label">About Me</p>

          <h2>
            A junior developer focused on building clean and useful software.
          </h2>

          <p className="about-description">
            I enjoy working on full-stack applications, REST APIs, databases,
            scientific projects and game development. My goal is to keep
            improving as a developer by building real projects, writing clean
            code and learning how software is designed from start to finish.
          </p>
        </div>

        <div className="skills-card">
          <h3>Skills & Interests</h3>

          <div className="skills-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>C#</span>
            <span>.NET</span>
            <span>Django</span>
            <span>REST APIs</span>
            <span>SQL</span>
            <span>Git</span>
            <span>Game Development</span>
            <span>Scientific Research</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About