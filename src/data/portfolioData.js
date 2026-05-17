export const personalInfo = {
  name: "Your Name",
  role: "Junior Software Developer",
  location: "Athens, Greece",
  email: "youremail@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  cv: "/cv/your-cv.pdf",
}

export const heroInfo = {
  label: "Junior Software Developer",
  title: "I build software that solves real problems.",
  description:
    "Passionate about building efficient, scalable and meaningful solutions through code. Interested in full-stack development, data, scientific research and game development.",
}

export const aboutInfo = {
  label: "About Me",
  title: "A junior developer focused on building clean and useful software.",
  description:
    "I enjoy working on full-stack applications, REST APIs, databases, scientific projects and game development. My goal is to keep improving as a developer by building real projects, writing clean code and learning how software is designed from start to finish.",
  skills: [
    "React",
    "JavaScript",
    "C#",
    ".NET",
    "Django",
    "REST APIs",
    "SQL",
    "Git",
    "Game Development",
    "Scientific Research",
  ],
}

export const projects = [
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

export const papers = [
  {
    title: "First Scientific Paper Title",
    summary:
      "A short summary of the first scientific paper. Describe the subject, the problem studied and the main result or method.",
    date: "2024",
    field: "Scientific Research",
    pages: "12 pages",
    link: "/papers/paper-1.pdf",
  },
  {
    title: "Second Scientific Paper Title",
    summary:
      "A short summary of the second scientific paper. Keep it simple and understandable for non-specialist visitors.",
    date: "2023",
    field: "Data Analysis",
    pages: "9 pages",
    link: "/papers/paper-2.pdf",
  },
  {
    title: "Third Scientific Paper Title",
    summary:
      "A short summary of the third scientific paper. Explain why the work matters and what tools or methods were used.",
    date: "2023",
    field: "Geophysics",
    pages: "10 pages",
    link: "/papers/paper-3.pdf",
  },
]

export const featuredProject = {
  label: "Featured Project",
  title: "Tower of Light",
  description:
    "Tower of Light is a game project I created to explore game development, level design, player movement, puzzle mechanics and interactive storytelling. The project includes a downloadable Windows executable so users can try the game directly.",
  imageText: "Tower of Light Screenshot",
  details: [
    {
      label: "Type",
      value: "Game Project",
    },
    {
      label: "Platform",
      value: "Windows",
    },
    {
      label: "Built With",
      value: "Unity / C#",
    },
  ],
  downloadLink: "#",
  githubLink: "https://github.com/yourusername/tower-of-light",
  note:
    "Recommended: host the executable on GitHub Releases or Itch.io and link the button to that download page.",
}