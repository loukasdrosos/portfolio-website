import ProjectCard from "./ProjectCard"
import "./ProjectsSection.css"

const projects = [
  {
    title: "Personal Portfolio Website",
    type: "Frontend Project",
    description:
      "A clean, responsive and reusable portfolio website built with React to showcase projects, scientific papers and downloadable work.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    imageText: "Portfolio Website",
    githubLink: "https://github.com/yourusername/portfolio-website",
    demoLink: "#",
    demoLabel: "Live Website",
  },
  {
    title: "Tower of Light",
    type: "Game Development",
    description:
      "A game project featuring custom mechanics, level design and a downloadable Windows executable.",
    tech: ["Unity", "C#", "Game Design"],
    imageText: "Tower of Light",
    githubLink: "https://github.com/yourusername/tower-of-light",
    demoLink: "#",
    demoLabel: "Download Game",
  },
  {
    title: "Earthquake Data Website",
    type: "Full-Stack Project",
    description:
      "A web application that fetches earthquake data from an XML source, stores it in a database and displays it through a REST API and frontend.",
    tech: ["Django", "Django REST Framework", "React", "MySQL"],
    imageText: "Earthquake Dashboard",
    githubLink: "https://github.com/yourusername/earthquake-data-website",
    demoLink: "#",
    demoLabel: "View Project",
  },
  {
    title: "Contact Upload Middleware",
    type: "Backend/API Project",
    description:
      "A middleware API designed to receive contact data, validate it and upload it to an external campaign management system.",
    tech: ["C#", ".NET", "REST API", "Serilog"],
    imageText: "Middleware API",
    githubLink: "https://github.com/yourusername/contact-upload-middleware",
    demoLink: "#",
    demoLabel: "View Project",
  },
]

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