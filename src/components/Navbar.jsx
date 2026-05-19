import { personalInfo } from "../data/portfolioData"
import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">LD</span>
        <span>{personalInfo.name}</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#papers">Papers</a>
      </nav>

      <a href="#contact" className="button">
          Contact Me
      </a>
    </header>
  )
}

export default Navbar