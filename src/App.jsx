import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectsSection from "./components/ProjectsSection"
import PapersSection from "./components/PapersSection"
import FeaturedProject from "./components/FeaturedProject"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <FeaturedProject />
        <PapersSection />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App