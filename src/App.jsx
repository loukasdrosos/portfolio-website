import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="temporary-section">
          <h1>Portfolio website started</h1>
          <p>Navbar component is now working.</p>
        </section>
      </main>
    </div>
  )
}

export default App