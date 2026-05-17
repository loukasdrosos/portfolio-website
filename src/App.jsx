import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectsSection from "./components/ProjectsSection"

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App