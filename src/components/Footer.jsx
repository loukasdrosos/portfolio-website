import { personalInfo } from "../data/portfolioData"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {personalInfo.name}. Built with React.</p>
    </footer>
  )
}

export default Footer