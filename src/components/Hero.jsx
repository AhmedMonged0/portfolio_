import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import { Button } from './ui/button'
import myPhoto from '../assets/myphoto.jpg'

export default function Hero() {
  return (
    <section className="portfolio-container relative min-h-screen flex items-center justify-center">
      {/* 3D Background Scene */}
      <div className="particle-bg">
        <Scene3D />
      </div>
      
      {/* Content Layer */}
      <div className="content-layer z-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 floating-element">
              Ahmed Monged
            </h1>
            <div className="text-lg md:text-xl text-white/90 leading-relaxed space-y-4">
              <p>
                مرحباً، أنا مطور ويب متخصص في تطوير التطبيقات الحديثة
              </p>
              <p>
                أعمل بتقنيات React, Node.js وأحب إنشاء تجارب مستخدم مميزة ومبتكرة
              </p>
              <p>
                شغوف بالتكنولوجيا والتطوير المستمر لمهاراتي في عالم البرمجة
              </p>
            </div>
          </motion.div>

          {/* Right Side - Photo and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-lg animate-pulse"></div>
                <img 
                  src={myPhoto} 
                  alt="Ahmed Monged" 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl floating-element"
                />
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                className="btn-primary enhanced-glow btn-pulse px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
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
          </motion.div>

        </div>
      </div>
    </section>
  )
}

