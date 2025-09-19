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
  const [isLoading, setIsLoading] = useState(false)

  const login = (username, password) => {
    const configuredUser = import.meta.env.VITE_ADMIN_USER || 'admin'
    const configuredPass = import.meta.env.VITE_ADMIN_PASS || 'admin123'

    if (username === configuredUser && password === configuredPass) {
      // لا نقوم بالحفظ في المتصفح لضمان طلب تسجيل الدخول في كل زيارة
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false, error: 'اسم المستخدم أو كلمة المرور غير صحيحة' }
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const value = { isAuthenticated, isLoading, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


