import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CursorTrail from './components/CursorTrail'
import AdminRouter from './components/admin/AdminRouter'
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Settings } from 'lucide-react'
import './App.css'

function App() {
  const [showAdmin, setShowAdmin] = useState(false)

  if (showAdmin) {
    return (
      <AuthProvider>
        <DataProvider>
          <AdminRouter />
        </DataProvider>
      </AuthProvider>
    )
  }

  return (
    <DataProvider>
      <div className="min-h-screen">
        <CursorTrail />
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        
        {/* Admin Button */}
        <Button
          onClick={() => setShowAdmin(true)}
          className="fixed bottom-6 right-6 z-50 glass-effect moving-border-card-purple"
          size="sm"
        >
          <Settings className="w-4 h-4 mr-2" />
          لوحة الإدارة
        </Button>
      </div>
    </DataProvider>
  )
}

export default App
