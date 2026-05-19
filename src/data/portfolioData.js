export const personalInfo = {
  name: "Loukas Drosos",
  role: "Junior Software Developer",
  location: "Athens, Greece",
  email: "drossosl@gmail.com",
  github: "https://github.com/loukasdrosos",
  linkedin: "https://linkedin.com/in/loukas-drosos-b20a4657",
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
    "Java",
    "Python",
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
    image: "../src/images/portfolio.png",
    githubLink: "https://github.com/loukasdrosos/portfolio-website",
    demoLink: "#",
    demoLabel: "Live Website",
  },
  {
    title: "Earthquake Web Monitoring Application",
    type: "Full-Stack Project",
    description:
      "A web application that fetches earthquake data from an XML source, stores it in a database and displays it through a REST API and frontend.",
    tech: ["Python", "Django REST Framework", "React", "SQL"],
    imageText: "Earthquake Dashboard",
    image: "../src/images/Earthquakes.png",
    githubLink: "https://github.com/loukasdrosos/Earthquakes_Monitoring_Webapp_Production",
    demoLink: "https://earthquakes-monitoring-webapp.vercel.app/",
    demoLabel: "View Project",
  },
]

export const papers = [
  {
    title: "Comprehensive analysis of 5G NR: Overview of the Physical Layer, Network Security, and its vulnerabilities to Jamming Attacks",
    summary: `The objective of this thesis is the study of security issues in 5G, emphasizing on the 5G NR physical (PHY) layer and its vulnerabilities to jamming attacks. The thesis includes an overview of the 5G network and its security weaknesses, 5G NR and the 5G core network and an analysis of the 5G NR PHY layer. Moreover, the thesis explores the different types of jamming attacks and examines mitigation techniques that can make the PHY layer more resilient to attacks in the next generation of wireless networks.`,
    date: "2024",
    field: "5G Networks",
    pages: "92 pages",
    link: ".\\src\\pdfs\\Comprehensive analysis of 5G NR Overview of the Physical Layer, Network Security, and its vulnerabilities to Jamming Attacks.pdf",
  },
  {
    title: "Linear Time Minimum Spanning Tree Algorithms",
    summary: `The problem considered here is that of finding a minimum spanning tree in a connected graph. Two algorithms with linear-time time complexity have been presented in the minimum spanning tree problem history, a randomized linear-time algorithm was presented in 1995 by Karger, Klein and Tarjan, and a linear-time deterministic algorithm was presented in 2000 by Chazelle. The paper includes a detailed description of the two algorithms, their implementation and a comparison of their performance.`,
    date: "2024",
    field: "Algorithm Design",
    pages: "11 pages",
    link: ".\\src\\pdfs\\Linear Time Minimum Spanning Tree Algorithms.pdf",
  },
  {
    title: "Security of the Border Gateway Protocol",
    summary: `Technological advancements have made communication one of the most
    important achievements of today's world. The Border Gateway Protocol (BGP) is the
    standard interdomain routing protocol of the Internet, which means it has a crucial
    role in current communications. Despite its importance, the conception and
    development of BGP didn’t include any internal security mechanism, which has proven
    to be a major limitation. Security analyses in the last years have shown that the
    Internet routing infrastructure is prone to many vulnerabilities and attacks which can
    cause large scale outages. Since the adoption of BGP, several security features have
    been proposed, but only some minor tweaks have actually been implemented. In this
    paper, we conduct a review of current BGP threats and explore security proposals and
    standardization efforts, as well as their advantages and limitations`,
    date: "2024",
    field: "Network Security",
    pages: "19 pages",
    link: ".\\src\\pdfs\\Security of the Border Gateway Protocol.pdf",
  },
]

export const featuredProject = {
  label: "Full-Stack Project",
  title: "Tower of Light",
  description:
    "Tower of Light is a game project I created to explore game development, level design, player movement, puzzle mechanics and interactive storytelling. The project includes a downloadable Windows executable so users can try the game directly.",
  imageText: "Tower of Light Screenshot",
  image: "../src/images/ToL.png",
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
      value: "Java",
    },
  ],
  downloadLink: "https://loukasdrosos.itch.io/tower-of-light",
  githubLink: "https://github.com/loukasdrosos/Tower-of-Light",
}