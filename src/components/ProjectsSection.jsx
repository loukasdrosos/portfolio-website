import { projects } from "../data/portfolioData"
import ProjectCard from "./ProjectCard"
import "./ProjectsSection.css"

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p className="section-label">Projects</p>

        <div>
          <h2>Selected work</h2>
          <p>
            A collection of projects that show my work in frontend development,
            backend APIs, scientific applications and game development.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection