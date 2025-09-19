import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // تحقق من وجود جلسة نشطة
    const token = localStorage.getItem('admin_token')
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = (username, password) => {
    // بيانات الدخول الافتراضية (يمكن تغييرها لاحقاً)
    if (username === 'admin' && password === 'admin123') {
      const token = 'admin_token_' + Date.now()
      localStorage.setItem('admin_token', token)
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false, error: 'اسم المستخدم أو كلمة المرور غير صحيحة' }
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
