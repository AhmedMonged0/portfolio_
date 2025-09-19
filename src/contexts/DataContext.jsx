import { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

const defaultData = {
  profile: {
    name: 'Ahmed Monged',
    title: 'Frontend Developer',
    description: 'متخصص في تطوير واجهات المستخدم التفاعلية باستخدام أحدث التقنيات والأدوات',
    image: '/src/assets/myphoto.jpg',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS3', 'HTML5'],
    bio: [
      { icon: '💻', text: 'متخصص في تطوير واجهات المستخدم التفاعلية باستخدام أحدث التقنيات والأدوات' },
      { icon: '🚀', text: 'خبرة في بناء تطبيقات ويب سريعة ومتجاوبة مع تصميمات عصرية وأداء محسن' },
      { icon: '🎯', text: 'أركز على كتابة كود نظيف وقابل للصيانة مع تطبيق أفضل الممارسات التقنية' }
    ]
  },
  projects: [],
  timeline: [
    { year: '2024', title: 'التعليم الأكاديمي', description: 'دراسة علوم الحاسوب والتقنيات الحديثة', icon: '🎓' },
    { year: '2023', title: 'مطور ويب متقدم', description: 'تطوير مواقع ويب متقدمة باستخدام أحدث التقنيات', icon: '🚀' },
    { year: '2022', title: 'مطور فرونت إند', description: 'تخصص في تطوير واجهات المستخدم التفاعلية', icon: '💻' },
    { year: '2021', title: 'بداية رحلة البرمجة', description: 'تعلم أساسيات البرمجة وتطوير الويب', icon: '🌱' }
  ]
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    const savedData = localStorage.getItem('portfolio_data')
    if (savedData) {
      try { setData(JSON.parse(savedData)) } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data))
  }, [data])

  const updateProfile = (profileData) => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, ...profileData } }))
  }

  const addProject = (project) => {
    const newProject = { ...project, id: Date.now() }
    setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }))
  }

  const updateProject = (id, projectData) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...projectData } : p))
    }))
  }

  const deleteProject = (id) => {
    setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }))
  }

  const addTimelineItem = (item) => {
    setData(prev => ({ ...prev, timeline: [...prev.timeline, item] }))
  }

  const updateTimelineItem = (index, itemData) => {
    setData(prev => ({
      ...prev,
      timeline: prev.timeline.map((it, i) => (i === index ? { ...it, ...itemData } : it))
    }))
  }

  const deleteTimelineItem = (index) => {
    setData(prev => ({ ...prev, timeline: prev.timeline.filter((_, i) => i !== index) }))
  }

  const value = {
    data,
    updateProfile,
    addProject,
    updateProject,
    deleteProject,
    addTimelineItem,
    updateTimelineItem,
    deleteTimelineItem
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}


