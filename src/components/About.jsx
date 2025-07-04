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
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="flex-1">
        <Card className="glass-effect glow-effect">
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
          <Card className="glass-effect glow-effect">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
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
            {['React', 'JavaScript', 'Three.js', 'Node.js', 'CSS3', 'HTML5', 'Git', 'MongoDB'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="glass-effect glow-effect p-4 text-center rounded-lg"
              >
                <span className="text-primary font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

