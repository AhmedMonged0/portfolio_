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
    const token = localStorage.getItem('admin_token')
    if (token) setIsAuthenticated(true)
    setIsLoading(false)
  }, [])

  const login = (username, password) => {
    const configuredUser = import.meta.env.VITE_ADMIN_USER || 'admin'
    const configuredPass = import.meta.env.VITE_ADMIN_PASS || 'admin123'

    if (username === configuredUser && password === configuredPass) {
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

  const value = { isAuthenticated, isLoading, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


