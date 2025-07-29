import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, FacebookIcon,   } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';


const contactInfo = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "ahmdmnjd806@gmail.com",
    href: "mailto:ahmdmnjd806@gmail.com"
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: "+20 1003061972",
    href: "tel:+201003061972"
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "بني سويف، مصر",
    href: "#"
  }
]

const socialLinks = [
  {
    icon: FacebookIcon,
    name: "Facebbok",
    href: "https://www.facebook.com/ahmed.monged.0",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/ahmed-monged-18a30b370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    color: "hover:text-blue-400"
  },
  {
    icon: FaWhatsapp,
    name: "whatsapp",
    href: "https://wa.me/201148220836",
    color: "hover:text-blue-300"
  }
]

function ContactCard({ info, index }) {
  const IconComponent = info.icon
  
  // تحديد اللون بناءً على الفهرس
  const getCardColorClass = (index) => {
    const colors = [
      'moving-border-card-cyan',
      'moving-border-card-green', 
      'moving-border-card-orange'
    ];
    return colors[index % colors.length];
  };

  const getGlowColor = (index) => {
    const glowColors = [
      'rgba(0, 212, 255, 0.3)',
      'rgba(46, 213, 115, 0.3)',
      'rgba(255, 165, 2, 0.3)'
    ];
    return glowColors[index % glowColors.length];
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card 
        className={`glass-effect h-full transform-gpu transition-all duration-300 hover:shadow-2xl ${getCardColorClass(index)}`}
        style={{
          boxShadow: `0 0 20px ${getGlowColor(index)}, 0 8px 32px rgba(0, 0, 0, 0.3)`,
          transition: 'all 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${getGlowColor(index)}, 0 12px 40px rgba(0, 0, 0, 0.4)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 20px ${getGlowColor(index)}, 0 8px 32px rgba(0, 0, 0, 0.3)`;
        }}
      >
        <CardContent className="p-6 text-center">
          <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
          <a 
            href={info.href}
            className="text-white/70 hover:text-primary transition-colors"
          >
            {info.value}
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SocialLink({ social, index }) {
  const IconComponent = social.icon
  
  // تحديد اللون بناءً على الفهرس
  const getSocialColorClass = (index) => {
    const colors = [
      'moving-border-card-red',
      'moving-border-card-blue', 
      'moving-border-card-teal'
    ];
    return colors[index % colors.length];
  };

  const getSocialGlowColor = (index) => {
    const glowColors = [
      'rgba(239, 68, 68, 0.4)',
      'rgba(74, 144, 226, 0.4)',
      'rgba(20, 184, 166, 0.4)'
    ];
    return glowColors[index % glowColors.length];
  };
  
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ 
        scale: 1.3, 
        rotate: 10,
        transition: { duration: 0.2, type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.9 }}
      className={`glass-effect p-4 rounded-full text-white transition-colors relative overflow-hidden ${social.color} ${getSocialColorClass(index)}`}
      style={{
        boxShadow: `0 0 20px ${getSocialGlowColor(index)}, 0 6px 25px rgba(0, 0, 0, 0.3)`,
        transition: 'all 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 35px ${getSocialGlowColor(index)}, 0 10px 35px rgba(0, 0, 0, 0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${getSocialGlowColor(index)}, 0 6px 25px rgba(0, 0, 0, 0.3)`;
      }}
    >
      <IconComponent className="w-6 h-6 relative z-10" />
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="portfolio-container py-20 px-4">
      <div className="content-layer max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">تواصل معي</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card 
              className="glass-effect moving-border-card-purple transform-gpu transition-all duration-300 hover:shadow-2xl"
              style={{
                boxShadow: `0 0 20px rgba(156, 136, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`,
                transition: 'all 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px rgba(156, 136, 255, 0.3), 0 12px 40px rgba(0, 0, 0, 0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px rgba(156, 136, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`;
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">أرسل رسالة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      الاسم
                    </label>
                    <Input 
                      placeholder="اسمك الكامل"
                      className="glass-effect border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input 
                      type="email"
                      placeholder="email@example.com"
                      className="glass-effect border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    الموضوع
                  </label>
                  <Input 
                    placeholder="موضوع الرسالة"
                    className="glass-effect border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    الرسالة
                  </label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="glass-effect border-primary/30 focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full glow-effect">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} index={index} />
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">تابعني على</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <SocialLink key={social.name} social={social} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card 
                className="glass-effect moving-border-card-pink text-center h-full transform-gpu transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: `0 0 20px rgba(236, 72, 153, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`,
                  transition: 'all 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px rgba(236, 72, 153, 0.3), 0 12px 40px rgba(0, 0, 0, 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(236, 72, 153, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)`;
                }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    مستعد لبدء مشروعك؟
                  </h3>
                  <p className="text-white/70 mb-6">
                    دعنا نعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
                  </p>
                  <Button className="btn-primary enhanced-glow btn-pulse px-8 py-3">
                    ابدأ مشروعك الآن
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

