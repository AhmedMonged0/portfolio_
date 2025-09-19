import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useData } from '../../contexts/DataContext'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { motion } from 'framer-motion'
import { LogOut, User, FolderOpen, Calendar, Settings } from 'lucide-react'
import ProfileManagement from './ProfileManagement'
import ProjectsManagement from './ProjectsManagement'
import TimelineManagement from './TimelineManagement'

export default function AdminDashboard() {
  const { logout } = useAuth()
  const { data } = useData()
  const [activeTab, setActiveTab] = useState('profile')

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gradient">لوحة الإدارة</h1>
            <p className="text-white/70">إدارة محتوى الموقع الشخصي</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="glass-effect border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            تسجيل الخروج
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass-effect">
            <TabsTrigger 
              value="profile" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <User className="w-4 h-4" />
              الملف الشخصي
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <FolderOpen className="w-4 h-4" />
              المشاريع
            </TabsTrigger>
            <TabsTrigger 
              value="timeline" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Calendar className="w-4 h-4" />
              الجدول الزمني
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Settings className="w-4 h-4" />
              الإعدادات
            </TabsTrigger>
          </TabsList>

          {/* Profile Management */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProfileManagement />
            </motion.div>
          </TabsContent>

          {/* Projects Management */}
          <TabsContent value="projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectsManagement />
            </motion.div>
          </TabsContent>

          {/* Timeline Management */}
          <TabsContent value="timeline">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TimelineManagement />
            </motion.div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-effect moving-border-card-purple">
                <CardHeader>
                  <CardTitle>إعدادات النظام</CardTitle>
                  <CardDescription>
                    إدارة إعدادات الموقع العامة
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-blue-300 mb-2">معلومات النظام</h3>
                    <p className="text-sm text-white/70">
                      إصدار النظام: 1.0.0<br />
                      آخر تحديث: {new Date().toLocaleDateString('ar-EG')}<br />
                      عدد المشاريع: {data.projects.length}<br />
                      عناصر الجدول الزمني: {data.timeline.length}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <h3 className="font-semibold text-yellow-300 mb-2">ملاحظات مهمة</h3>
                    <ul className="text-sm text-white/70 space-y-1">
                      <li>• جميع التغييرات يتم حفظها تلقائياً في المتصفح</li>
                      <li>• لاستعادة البيانات الافتراضية، احذف البيانات من localStorage</li>
                      <li>• تأكد من رفع الصور إلى مجلد public/assets</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
