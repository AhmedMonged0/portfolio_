import { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

// البيانات الافتراضية
const defaultData = {
  profile: {
    name: 'Ahmed Monged',
    title: 'Frontend Developer',
    description: 'متخصص في تطوير واجهات المستخدم التفاعلية باستخدام أحدث التقنيات والأدوات',
    image: '/src/assets/myphoto.jpg',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS3', 'HTML5'],
    bio: [
      {
        icon: '💻',
        text: 'متخصص في تطوير واجهات المستخدم التفاعلية باستخدام أحدث التقنيات والأدوات'
      },
      {
        icon: '🚀',
        text: 'خبرة في بناء تطبيقات ويب سريعة ومتجاوبة مع تصميمات عصرية وأداء محسن'
      },
      {
        icon: '🎯',
        text: 'أركز على كتابة كود نظيف وقابل للصيانة مع تطبيق أفضل الممارسات التقنية'
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Store",
      description: "موقع تجارة إلكترونية بسيط يتيح تصفح المنتجات وإضافتها إلى السلة، مع واجهة استخدام سلسة وتصميم جذاب يناسب تجربة المستخدم.",
      image: "/src/assets/project1.png",
      technologies: ["HTML", "Css", "JS", "React JS"],
      liveUrl: "https://project-1-blush-beta.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Dashboard", 
      description: "لوحة تحكم تفاعلية لعرض البيانات والتحليلات بطريقة بصرية واضحة باستخدام الرسوم البيانية، تُستخدم لمراقبة الأداء واتخاذ القرارات.",
      image: "/src/assets/project2.png",
      technologies: ["HTML", "Css", "Three.js", "React.js"],
      liveUrl: "https://dashboard-chi-nine-28.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Future Store",
      description: "منصة تسوق مستقبلية تعتمد على واجهات حديثة وتفاعلية، توفّر تجربة شراء سهلة ومريحة مع مزايا تحليلية وإحصائيات أداء متقدمة.",
      image: "/src/assets/project3.png", 
      technologies: ["HTML", "Css", "Three.js", "React.js"],
      liveUrl: "https://future-store-ebon.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Building_Company",
      description: "موقع شركة إنشاءات يعرض خدمات الشركة ومشاريعها السابقة بتصميم احترافي وواجهة مستخدم سهلة التنقل.",
      image: "/src/assets/project4.png", 
      technologies: ["HTML", "Css", "JavaScript"],
      liveUrl: "https://building-company-blond.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "airline",
      description: "موقع إلكتروني تفاعلي لشركة طيران يتيح للمستخدمين استكشاف الوجهات، معرفة الخدمات، وحجز الرحلات بسهولة. التصميم عصري ومتجاوب ليعمل بسلاسة على جميع الأجهزة.",
      image: "/src/assets/project5.png", 
      technologies: ["HTML", "Css", "JavaScript", "React"],
      liveUrl: "https://airline-tan.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "CyberByte",
      description: "منصة متخصصة لبيع أجهزة الكمبيوتر وملحقاتها، تشمل معالجات، كروت شاشة، ذاكرة، أقراص صلبة، وكل ما يخص أجهزة الكمبيوتر مع عروض حصرية وأسعار تنافسية.",
      image: "/src/assets/project6.png", 
      technologies: ["HTML", "Css", "JavaScript", "React", "Node.js"],
      liveUrl: "https://cyberbyte-liart.vercel.app/",
      githubUrl: "#"
    }
  ],
  timeline: [
    {
      year: "2024",
      title: "التعليم الأكاديمي",
      description: "دراسة علوم الحاسوب والتقنيات الحديثة",
      icon: "🎓"
    },
    {
      year: "2023",
      title: "مطور ويب متقدم",
      description: "تطوير مواقع ويب متقدمة باستخدام أحدث التقنيات",
      icon: "🚀"
    },
    {
      year: "2022", 
      title: "مطور فرونت إند",
      description: "تخصص في تطوير واجهات المستخدم التفاعلية",
      icon: "💻"
    },
    {
      year: "2021",
      title: "بداية رحلة البرمجة",
      description: "تعلم أساسيات البرمجة وتطوير الويب",
      icon: "🌱"
    }
  ]
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData)

  // تحميل البيانات من localStorage عند بدء التطبيق
  useEffect(() => {
    const savedData = localStorage.getItem('portfolio_data')
    if (savedData) {
      try {
        setData(JSON.parse(savedData))
      } catch (error) {
        console.error('خطأ في تحميل البيانات:', error)
      }
    }
  }, [])

  // حفظ البيانات في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data))
  }, [data])

  // إدارة الملف الشخصي
  const updateProfile = (profileData) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...profileData }
    }))
  }

  // إدارة المشاريع
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now() // ID فريد
    }
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }))
  }

  const updateProject = (id, projectData) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, ...projectData } : project
      )
    }))
  }

  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  // إدارة الجدول الزمني
  const addTimelineItem = (item) => {
    setData(prev => ({
      ...prev,
      timeline: [...prev.timeline, item]
    }))
  }

  const updateTimelineItem = (index, itemData) => {
    setData(prev => ({
      ...prev,
      timeline: prev.timeline.map((item, i) => 
        i === index ? { ...item, ...itemData } : item
      )
    }))
  }

  const deleteTimelineItem = (index) => {
    setData(prev => ({
      ...prev,
      timeline: prev.timeline.filter((_, i) => i !== index)
    }))
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
