import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CursorTrail() {
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    let rippleId = 0
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e) => {
      // حساب المسافة لتقليل عدد الموجات
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      )

      // إنشاء موجة فقط عند الحركة بمسافة كافية
      if (distance > 30) {
        const newRipple = {
          id: rippleId++,
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        }
        
        setRipples(prevRipples => {
          const updatedRipples = [...prevRipples, newRipple]
          return updatedRipples.slice(-3) // احتفظ بآخر 3 موجات فقط
        })

        lastX = e.clientX
        lastY = e.clientY
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setRipples(prevRipples => 
        prevRipples.filter(ripple => now - ripple.timestamp < 1500)
      )
    }, 300)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div className="cursor-trail-container fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ripples.map((ripple, index) => (
          <motion.div
            key={ripple.id}
            className="cursor-ripple absolute rounded-full border border-amber-400/30"
            style={{
              left: ripple.x - 15,
              top: ripple.y - 15,
              width: 30,
              height: 30,
            }}
            initial={{ 
              scale: 0, 
              opacity: 0.5,
              borderWidth: 2
            }}
            animate={{ 
              scale: [0, 1.5, 2.5],
              opacity: [0.5, 0.3, 0],
              borderWidth: [2, 1, 0.5]
            }}
            exit={{ 
              scale: 2.5, 
              opacity: 0 
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              delay: index * 0.05
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}