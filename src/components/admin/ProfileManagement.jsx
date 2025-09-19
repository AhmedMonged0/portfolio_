import { useState } from 'react'
import { useData } from '../../contexts/DataContext'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { motion } from 'framer-motion'
import { Save, Plus, Trash2, Edit } from 'lucide-react'

export default function ProfileManagement() {
  const { data, updateProfile } = useData()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: data.profile.name,
    title: data.profile.title,
    description: data.profile.description,
    image: data.profile.image,
    skills: data.profile.skills.join(', '),
    bio: data.profile.bio
  })

  const handleSave = () => {
    const updatedProfile = {
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
    }
    updateProfile(updatedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: data.profile.name,
      title: data.profile.title,
      description: data.profile.description,
      image: data.profile.image,
      skills: data.profile.skills.join(', '),
      bio: data.profile.bio
    })
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const addBioItem = () => {
    setFormData(prev => ({
      ...prev,
      bio: [...prev.bio, { icon: '💻', text: '' }]
    }))
  }

  const updateBioItem = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      bio: prev.bio.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeBioItem = (index) => {
    setFormData(prev => ({
      ...prev,
      bio: prev.bio.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="space-y-6">
      <Card className="glass-effect moving-border-card-blue">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>إدارة الملف الشخصي</CardTitle>
              <CardDescription>
                تعديل المعلومات الشخصية والمهارات
              </CardDescription>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "outline" : "default"}
              className={isEditing ? "border-yellow-500 text-yellow-400" : ""}
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'إلغاء التعديل' : 'تعديل'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* الصورة الشخصية */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              الصورة الشخصية
            </label>
            <div className="flex items-center gap-4">
              <img 
                src={formData.image} 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/50"
              />
              <Input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="رابط الصورة"
                disabled={!isEditing}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>

          {/* الاسم */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              الاسم
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم الكامل"
              disabled={!isEditing}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          {/* المسمى الوظيفي */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              المسمى الوظيفي
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="المسمى الوظيفي"
              disabled={!isEditing}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          {/* الوصف */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              الوصف
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="وصف مختصر"
              disabled={!isEditing}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              rows={3}
            />
          </div>

          {/* المهارات */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              المهارات (مفصولة بفواصل)
            </label>
            <Input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, JavaScript, Node.js, CSS3, HTML5"
              disabled={!isEditing}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          {/* البايو */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-white/70">
                البايو
              </label>
              {isEditing && (
                <Button
                  onClick={addBioItem}
                  size="sm"
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  إضافة
                </Button>
              )}
            </div>
            <div className="space-y-3">
              {formData.bio.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-center"
                >
                  <Input
                    value={item.icon}
                    onChange={(e) => updateBioItem(index, 'icon', e.target.value)}
                    placeholder="الأيقونة"
                    disabled={!isEditing}
                    className="w-20 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Input
                    value={item.text}
                    onChange={(e) => updateBioItem(index, 'text', e.target.value)}
                    placeholder="النص"
                    disabled={!isEditing}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  {isEditing && (
                    <Button
                      onClick={() => removeBioItem(index)}
                      size="sm"
                      variant="outline"
                      className="border-red-500 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* أزرار الحفظ */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 pt-4"
            >
              <Button onClick={handleSave} className="btn-primary enhanced-glow">
                <Save className="w-4 h-4 mr-2" />
                حفظ التغييرات
              </Button>
              <Button onClick={handleCancel} variant="outline">
                إلغاء
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
