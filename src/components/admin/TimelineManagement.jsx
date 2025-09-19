import { useState } from 'react'
import { useData } from '../../contexts/DataContext'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent } from '../ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function TimelineManagement() {
  const { data, addTimelineItem, updateTimelineItem, deleteTimelineItem } = useData()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({ year: '', title: '', description: '', icon: '' })

  const handleAddItem = () => {
    setEditingIndex(null)
    setFormData({ year: '', title: '', description: '', icon: '' })
    setIsDialogOpen(true)
  }

  const handleEditItem = (index) => {
    const item = data.timeline[index]
    setEditingIndex(index)
    setFormData({ year: item.year, title: item.title, description: item.description, icon: item.icon })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingIndex !== null) updateTimelineItem(editingIndex, formData)
    else addTimelineItem(formData)
    setIsDialogOpen(false)
    setFormData({ year: '', title: '', description: '', icon: '' })
  }

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleDelete = (index) => {
    if (window.confirm('هل أنت متأكد من حذف هذا العنصر؟')) deleteTimelineItem(index)
  }

  const moveItem = (index, direction) => {
    const items = [...data.timeline]
    if (direction === 'up' && index > 0) [items[index - 1], items[index]] = [items[index], items[index - 1]]
    if (direction === 'down' && index < items.length - 1) [items[index + 1], items[index]] = [items[index], items[index + 1]]
    items.forEach((it, i) => updateTimelineItem(i, it))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gradient">إدارة الجدول الزمني</h2>
          <p className="text-white/70">إضافة وتعديل وحذف عناصر الجدول الزمني</p>
        </div>
        <Button onClick={handleAddItem} className="btn-primary enhanced-glow"><Plus className="w-4 h-4 mr-2" />إضافة عنصر جديد</Button>
      </div>

      <div className="space-y-4">
        {data.timeline.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
            <Card className="glass-effect moving-border-card-purple">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">{item.icon}</div>
                    {index < data.timeline.length - 1 && (<div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent mt-2"></div>)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => moveItem(index, 'up')} size="sm" variant="outline" disabled={index === 0} className="border-blue-500 text-blue-400 hover:bg-blue-500/10">↑</Button>
                    <Button onClick={() => moveItem(index, 'down')} size="sm" variant="outline" disabled={index === data.timeline.length - 1} className="border-blue-500 text-blue-400 hover:bg-blue-500/10">↓</Button>
                    <Button onClick={() => handleEditItem(index)} size="sm" variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"><Edit className="w-4 h-4" /></Button>
                    <Button onClick={() => handleDelete(index)} size="sm" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingIndex !== null ? 'تعديل العنصر' : 'إضافة عنصر جديد'}</DialogTitle>
            <DialogDescription>{editingIndex !== null ? 'قم بتعديل بيانات العنصر' : 'أدخل بيانات العنصر الجديد'}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">السنة</label>
              <Input name="year" value={formData.year} onChange={handleChange} placeholder="2024" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">العنوان</label>
              <Input name="title" value={formData.title} onChange={handleChange} placeholder="عنوان الحدث" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">الوصف</label>
              <Textarea name="description" value={formData.description} onChange={handleChange} placeholder="وصف مفصل للحدث" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">الأيقونة (Emoji)</label>
              <Input name="icon" value={formData.icon} onChange={handleChange} placeholder="🎓" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div className="flex gap-2 pt-4">
              <Button onClick={handleSave} className="btn-primary enhanced-glow">{editingIndex !== null ? 'حفظ التغييرات' : 'إضافة العنصر'}</Button>
              <Button onClick={() => setIsDialogOpen(false)} variant="outline">إلغاء</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


