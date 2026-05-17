import { personalInfo } from "../data/portfolioData"
import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">&lt;/&gt;</span>
        <span>{personalInfo.name}</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#papers">Papers</a>
        <a href="#featured-project">Tower of Light</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href={personalInfo.cv} className="cv-button" download>
        Download CV
      </a>
    </header>
  )
}

export default Navbar