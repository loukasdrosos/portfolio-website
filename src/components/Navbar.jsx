import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">&lt;/&gt;</span>
        <span>Your Name</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#papers">Papers</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="/cv/your-cv.pdf" className="cv-button" download>
        Download CV
      </a>
    </header>
  )
}

export default Navbar