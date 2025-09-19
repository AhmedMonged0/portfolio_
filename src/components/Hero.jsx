import { motion, useMotionValue, useTransform } from 'framer-motion'
import Scene3D from './Scene3D'
import { Button } from './ui/button'
import myPhoto from '../assets/myphoto.jpg'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullName = 'Ahmed Monged'
  
  // Mouse tracking للبوكس
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // تحويل حركة الماوس لزوايا ميل (زوايا معقولة)
  const rotateX = useTransform(mouseY, [-250, 250], [12, -12])
  const rotateY = useTransform(mouseX, [-250, 250], [-12, 12])
  
  // تحويل لـ shadow متحرك (أقل)
  const shadowX = useTransform(mouseX, [-250, 250], [-15, 15])
  const shadowY = useTransform(mouseY, [-250, 250], [-15, 15])
  
  // دالة تتبع الماوس (ببطء)
  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set(event.clientX - centerX, { type: "spring", damping: 30, stiffness: 150 })
    mouseY.set(event.clientY - centerY, { type: "spring", damping: 30, stiffness: 150 })
  }
  
  // إعادة تعيين الموضع عند مغادرة الماوس (ببطء)
  const handleMouseLeave = () => {
    mouseX.set(0, { type: "spring", damping: 25, stiffness: 100 })
    mouseY.set(0, { type: "spring", damping: 25, stiffness: 100 })
  }
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)
    
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="portfolio-container relative min-h-screen flex items-center justify-center py-20">
      {/* 3D Background Scene */}
      <div className="particle-bg">
        <Scene3D />
      </div>
      
      {/* Content Layer */}
      <div className="content-layer z-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            {/* Name with Interactive Frame */}
            <motion.div
              ref={cardRef}
              className="profile-info-card smooth-glass-card moving-border-card p-8 rounded-[2rem] mb-12 max-w-lg mx-auto lg:mx-0"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                boxShadow: `${shadowX}px ${shadowY}px 60px rgba(0,0,0,0.3), 0 0 40px rgba(255,215,0,0.2)`
              }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient mb-8 floating-element typing-name whitespace-nowrap text-center"
                style={{ 
                  lineHeight: '1.3',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem'
                }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <span>{typedText}</span>
                <span className="typing-cursor">|</span>
              </motion.h1>
              
              <motion.div 
                className="profession-badge inline-block mb-6 text-center w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="enhanced-badge px-6 py-3 text-lg rounded-full inline-block">
                  💻 Frontend Developer
                </span>
              </motion.div>

              <div className="bio-section space-y-5 mb-8 text-center">
                <motion.p
                  className="bio-paragraph text-base md:text-lg text-white/90 leading-relaxed text-center"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="bio-icon">💻</span>
                  متخصص في تطوير واجهات المستخدم التفاعلية باستخدام أحدث التقنيات والأدوات
                </motion.p>
                <motion.p
                  className="bio-paragraph text-base md:text-lg text-white/90 leading-relaxed text-center"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <span className="bio-icon">🚀</span>
                  خبرة في بناء تطبيقات ويب سريعة ومتجاوبة مع تصميمات عصرية وأداء محسن
                </motion.p>
                <motion.p
                  className="bio-paragraph text-base md:text-lg text-white/90 leading-relaxed text-center"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <span className="bio-icon">🎯</span>
                  أركز على كتابة كود نظيف وقابل للصيانة مع تطبيق أفضل الممارسات التقنية
                </motion.p>
              </div>

              {/* Skills Tags */}
              <motion.div 
                className="skills-tags flex flex-wrap gap-2 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {['React', 'JavaScript', 'Node.js', 'CSS3', 'HTML5'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag px-3 py-1.5 bg-accent/15 text-accent text-sm rounded-full border border-accent/25"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 215, 0, 0.25)',
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 + (index * 0.1) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
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
              <motion.div 
                className="profile-photo-container relative moving-border-card-orange rounded-full overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 60px rgba(255, 255, 255, 0.7), 
                    0 0 100px rgba(255, 255, 255, 0.5),
                    inset 0 0 40px rgba(255, 255, 255, 0.15),
                    0 20px 60px rgba(0, 0, 0, 0.45)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 40px rgba(255, 255, 255, 0.5), 
                    0 0 80px rgba(255, 255, 255, 0.35),
                    inset 0 0 30px rgba(255, 255, 255, 0.1),
                    0 15px 50px rgba(0, 0, 0, 0.4)
                  `;
                }}
              >
                {/* Photo */}
                <img 
                  src={myPhoto} 
                  alt="Ahmed Monged" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10"
                  style={{
                    border: '4px solid rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
            >
              <Button 
                className="btn-primary enhanced-glow btn-pulse px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                عرض المشاريع
              </Button>

              <Button 
                variant="outline" 
                className="glass-effect glow-effect px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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

