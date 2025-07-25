import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import project1Image from '../assets/project1.png'
import project2Image from '../assets/project2.png'
import project3Image from '../assets/project3.png'
import project4Image from '../assets/project4.png'

const projects = [
  {
    id: 1,
    title: "Store",
    description: "موقع تجارة إلكترونية بسيط يتيح تصفح المنتجات وإضافتها إلى السلة، مع واجهة استخدام سلسة وتصميم جذاب يناسب تجربة المستخدم.",
    image: project1Image,
    technologies: ["HTML", "Css", "JS", "React JS"],
    liveUrl: "https://project-1-blush-beta.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Dashboard", 
    description: "لوحة تحكم تفاعلية لعرض البيانات والتحليلات بطريقة بصرية واضحة باستخدام الرسوم البيانية، تُستخدم لمراقبة الأداء واتخاذ القرارات.",
    image: project2Image,
    technologies: ["HTML", "Css", "Three.js", "React.js"],
    liveUrl: "https://dashboard-chi-nine-28.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Future Store",
    description: "منصة تسوق مستقبلية تعتمد على واجهات حديثة وتفاعلية، توفّر تجربة شراء سهلة ومريحة مع مزايا تحليلية وإحصائيات أداء متقدمة.",
    image: project3Image, 
    technologies: ["HTML", "Css", "Three.js", "React.js"],
    liveUrl: "https://future-store-ebon.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Building_Company",
    description: "موقع شركة إنشاءات يعرض خدمات الشركة ومشاريعها السابقة بتصميم احترافي وواجهة مستخدم سهلة التنقل.",
    image: project4Image, 
    technologies: ["HTML", "Css", "JavaScript"],
    liveUrl: "https://building-company-blond.vercel.app/",
    githubUrl: "#"
  },



]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <Card className="glass-effect glow-effect h-full transform-gpu transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardTitle className="text-xl font-bold text-primary">{project.title}</CardTitle>
          <CardDescription className="text-white/70">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                عرض المشروع
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="portfolio-container py-20 px-4">
      <div className="content-layer max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">المشاريع التجريبية</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            مجموعة من المشاريع التجريبية التي تعكس مهاراتي وخبرتي في التطوير
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button className="glow-effect px-8 py-4 text-lg">
            عرض المزيد من المشاريع
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

