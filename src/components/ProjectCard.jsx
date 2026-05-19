import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <article className="project-card">
    <div className="project-image">
      <img src={project.image} alt={`${project.title} preview`} />
    </div>

      <div className="project-content">
        <p className="project-type">{project.type}</p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech-list">
          {project.tech.map((techItem) => (
            <span key={techItem}>{techItem}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.githubLink} target="_blank">
            GitHub
          </a>

          <a href={project.demoLink} target="_blank">
            {project.demoLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard