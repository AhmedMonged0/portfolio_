import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.a
          href="#projects"
          className="navbar-button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          المشاريع
        </motion.a>
        <motion.a
          href="#about"
          className="navbar-button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          نبذة عني
        </motion.a>
        <motion.a
          href="#contact"
          className="navbar-button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          التواصل
        </motion.a>
      </div>
    </nav>
  )
}


