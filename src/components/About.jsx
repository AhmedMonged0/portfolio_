import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'

const timeline = [


  {
    year: "2024",
    title: "التعليم الأكاديمي",
    description: "دراسة علوم الحاسوب والتقنيات الحديثة",
    icon: "🎓"
  },

  {
    year: "2023",
    title: "مطور ويب متقدم",
    description: "تطوير مواقع ويب متقدمة باستخدام أحدث التقنيات",
    icon: "🚀"
  },
  {
    year: "2022", 
    title: "مطور فرونت إند",
    description: "تخصص في تطوير واجهات المستخدم التفاعلية",
    icon: "💻"
  },
  {
    year: "2021",
    title: "بداية رحلة البرمجة",
    description: "تعلم أساسيات البرمجة وتطوير الويب",
    icon: "🌱"
  }
]

function TimelineItem({ item, index }) {
  // تحديد اللون بناءً على الفهرس
  const getCardColorClass = (index) => {
    const colors = [
      'moving-border-card-pink',
      'moving-border-card-red', 
      'moving-border-card-teal',
      'moving-border-card-purple'
    ];
    return colors[index % colors.length];
  };

  const getGlowColor = (index) => {
    const glowColors = [
      'rgba(236, 72, 153, 0.3)',
      'rgba(239, 68, 68, 0.3)',
      'rgba(20, 184, 166, 0.3)',
      'rgba(156, 136, 255, 0.3)'
    ];
    return glowColors[index % glowColors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="flex-1">
        <Card 
          className={`glass-effect h-full transform-gpu transition-all duration-300 hover:shadow-2xl ${getCardColorClass(index)}`}
          style={{
            boxShadow: `0 0 20px ${getGlowColor(index)}, 0 8px 32px rgba(0, 0, 0, 0.3)`,
            transition: 'all 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 40px ${getGlowColor(index)}, 0 12px 40px rgba(0, 0, 0, 0.4)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px ${getGlowColor(index)}, 0 8px 32px rgba(0, 0, 0, 0.3)`;
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <span className="text-primary/70 font-semibold">{item.year}</span>
              </div>
            </div>
            <p className="text-white/70">{item.description}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full glow-effect"></div>
        {index < timeline.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent"></div>
        )}
      </div>
      
      <div className="flex-1"></div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="portfolio-container py-20 px-4">
      <div className="content-layer max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">نبذة عني</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            رحلتي في عالم التطوير والتقنية
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card 
            className="glass-effect moving-border-card-blue h-full transform-gpu transition-all duration-300 hover:shadow-2xl"
            style={{
              boxShadow: `0 0 20px rgba(74, 144, 226, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`,
              transition: 'all 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 40px rgba(74, 144, 226, 0.3), 0 12px 40px rgba(0, 0, 0, 0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px rgba(74, 144, 226, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`;
            }}
          >
            <CardContent className="p-8 text-center">
              <motion.div 
                className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl moving-border-card-cyan relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(56, 189, 248, 0.3) 50%, rgba(14, 165, 233, 0.2) 100%)',
                  border: '3px solid rgba(0, 212, 255, 0.5)',
                  boxShadow: `
                    0 0 30px rgba(0, 212, 255, 0.6), 
                    0 0 60px rgba(0, 212, 255, 0.4),
                    inset 0 0 20px rgba(0, 212, 255, 0.1),
                    0 8px 32px rgba(0, 0, 0, 0.3)
                  `,
                  transition: 'all 0.3s ease, box-shadow 0.3s ease'
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 10,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 50px rgba(0, 212, 255, 0.8), 
                    0 0 80px rgba(0, 212, 255, 0.6),
                    inset 0 0 30px rgba(0, 212, 255, 0.2),
                    0 12px 40px rgba(0, 0, 0, 0.4)
                  `;
                  e.currentTarget.style.border = '3px solid rgba(0, 212, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 30px rgba(0, 212, 255, 0.6), 
                    0 0 60px rgba(0, 212, 255, 0.4),
                    inset 0 0 20px rgba(0, 212, 255, 0.1),
                    0 8px 32px rgba(0, 0, 0, 0.3)
                  `;
                  e.currentTarget.style.border = '3px solid rgba(0, 212, 255, 0.5)';
                }}
              >
                <span className="relative z-10 drop-shadow-lg">👨‍💻</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-4">مطور ويب متخصص</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Web developer focused on modern UI development using React and Three.js, with a passion for performance, interactivity, and elegant design.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-primary mb-8">المهارات التقنية</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'JavaScript', 'Three.js', 'Node.js', 'CSS3', 'HTML5', 'Git', 'MongoDB'].map((skill, index) => {
              const getSkillVariant = (skill, index) => {
                // ترتيب منطقي للألوان: ذهبي، أزرق، بنفسجي، سماوي
                const variants = ['skill-button', 'skill-button-blue', 'skill-button-purple', 'skill-button-cyan'];
                return variants[index % 4];
              };

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotateY: 10,
                    rotateX: 5,
                    transition: { duration: 0.2, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${getSkillVariant(skill, index)} glass-effect glow-effect p-4 text-center rounded-lg cursor-pointer relative overflow-hidden`}
                >
                  <motion.div
                    className="skill-bg-animation"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.5, 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.span 
                    className="font-semibold relative z-10"
                    whileHover={{ 
                      textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

