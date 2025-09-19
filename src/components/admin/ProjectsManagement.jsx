import { useState } from 'react'
import { useData } from '../../contexts/DataContext'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ExternalLink, Github } from 'lucide-react'

export default function ProjectsManagement() {
  const { data, addProject, updateProject, deleteProject } = useData()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    liveUrl: '',
    githubUrl: ''
  })

  const handleAddProject = () => {
    setEditingProject(null)
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      liveUrl: '',
      githubUrl: ''
    })
    setIsDialogOpen(true)
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
    }

    if (editingProject) {
      updateProject(editingProject.id, projectData)
    } else {
      addProject(projectData)
    }

    setIsDialogOpen(false)
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      liveUrl: '',
      githubUrl: ''
    })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleDelete = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      deleteProject(id)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gradient">إدارة المشاريع</h2>
          <p className="text-white/70">إضافة وتعديل وحذف المشاريع</p>
        </div>
        <Button onClick={handleAddProject} className="btn-primary enhanced-glow">
          <Plus className="w-4 h-4 mr-2" />
          إضافة مشروع جديد
        </Button>
      </div>

      {/* قائمة المشاريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="glass-effect moving-border-card-blue h-full">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/70 line-clamp-3">
                  {project.description}
                </CardDescription>
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
                
                <div className="flex gap-2 mb-4">
                  <Button size="sm" variant="outline" asChild>
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

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEditProject(project)}
                    size="sm"
                    variant="outline"
                    className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-500/10"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    تعديل
                  </Button>
                  <Button
                    onClick={() => handleDelete(project.id)}
                    size="sm"
                    variant="outline"
                    className="border-red-500 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* نافذة إضافة/تعديل المشروع */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
            </DialogTitle>
            <DialogDescription>
              {editingProject ? 'قم بتعديل بيانات المشروع' : 'أدخل بيانات المشروع الجديد'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                عنوان المشروع
              </label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="عنوان المشروع"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                وصف المشروع
              </label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="وصف مفصل للمشروع"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                رابط الصورة
              </label>
              <Input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/src/assets/project1.png"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                التقنيات المستخدمة (مفصولة بفواصل)
              </label>
              <Input
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, JavaScript, CSS3, HTML5"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                رابط المشروع المباشر
              </label>
              <Input
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                رابط GitHub
              </label>
              <Input
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleSave} className="btn-primary enhanced-glow">
                {editingProject ? 'حفظ التغييرات' : 'إضافة المشروع'}
              </Button>
              <Button onClick={() => setIsDialogOpen(false)} variant="outline">
                إلغاء
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
