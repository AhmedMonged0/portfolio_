import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* الإطار الخارجي المتوهج */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full opacity-75 blur-sm"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* الإطار الداخلي */}
        <motion.div
          className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
            borderColor: "rgba(255, 215, 0, 0.8)"
          }}
        >
          {/* الصورة الشخصية */}
          <img
            src="/profile.png" // هنا هتحط مسار صورتك، تأكد إنها في مجلد public
            alt="صورتي الشخصية"
            className="w-full h-full object-cover"
          />
          
          {/* طبقة التأثير عند الـ hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* النص الذي يظهر عند الـ hover */}
          <motion.div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold opacity-0"
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            مرحباً بك!
          </motion.div>
        </motion.div>
        
        {/* الجسيمات المتحركة حول الصورة */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            style={{
              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 60}px`,
              left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 60}px`,
            }}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.6, 1, 0.6] : 0.3,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* تأثير النبضة */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [0.5, 0, 0.5] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </motion.div>
      
      {/* tooltip يظهر عند الـ hover */}
      <motion.div
        className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          متاح للعمل
        </div>
        {/* السهم */}
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.div>
  )
}

