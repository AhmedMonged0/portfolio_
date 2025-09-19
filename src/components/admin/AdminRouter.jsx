import { useAuth } from '../../contexts/AuthContext'
import Login from './Login'
import AdminDashboard from './AdminDashboard'

export default function AdminRouter() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <AdminDashboard /> : <Login />
}


