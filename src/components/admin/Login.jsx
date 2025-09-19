import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { motion } from 'framer-motion'

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    const result = login(formData.username, formData.password)
    if (!result.success) setError(result.error)
    setIsLoading(false)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
        <Card className="glass-effect moving-border-card-blue">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gradient">لوحة الإدارة</CardTitle>
            <CardDescription>سجل دخولك للوصول إلى لوحة التحكم</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/70 mb-2">اسم المستخدم</label>
                <Input id="username" name="username" type="text" value={formData.username} onChange={handleChange} placeholder="admin" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">كلمة المرور</label>
                <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="admin123" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              {error && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm text-center">{error}</motion.div>)}
              <Button type="submit" disabled={isLoading} className="w-full btn-primary enhanced-glow">{isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


