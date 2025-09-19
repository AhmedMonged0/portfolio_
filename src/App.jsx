import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CursorTrail from './components/CursorTrail'
import './App.css'
// Admin UI is routed via /admin in main.jsx

function App() {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
