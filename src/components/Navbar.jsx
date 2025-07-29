import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Navbar() {
  const navItems = [
    { href: "#projects", text: "المشاريع", delay: 0.2 },
    { href: "#about", text: "نبذة عني", delay: 0.3 },
    { href: "#contact", text: "التواصل", delay: 0.4 }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="navbar-button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.text}
          </motion.a>
        ))}
      </div>
    </nav>
  )
}


