import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="portfolio-container relative min-h-screen flex items-center justify-center">
      {/* 3D Background Scene */}
      <div className="particle-bg">
        <Scene3D />
      </div>
      
      {/* Content Layer */}
      <div className="content-layer text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4 floating-element">
            PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Ahmed Monged
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            className="glow-effect glass-effect px-8 py-4 text-lg font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            عرض المشاريع
          </Button>
          <Button 
            variant="outline" 
            className="glass-effect px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            تواصل معي
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

