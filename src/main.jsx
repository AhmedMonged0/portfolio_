import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminRouter from './components/admin/AdminRouter'
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin"
          element={
            <AuthProvider>
              <DataProvider>
                <AdminRouter />
              </DataProvider>
            </AuthProvider>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
