import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'


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
    icon: Linkedin, 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/ahmedmenged1234",
    color: "hover:text-blue-400"
  },
  {
    icon: FaFacebook,
    name: "Facebook", 
    href: "https://facebook.com/ahmedmenged1234",
    color: "hover:text-blue-600"
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    href: "https://wa.me/201234567890", // ← غيّر الرقم لرقمك
    color: "hover:text-green-500"
  }
];


function ContactCard({ info, index }) {
  const IconComponent = info.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="glass-effect glow-effect h-full">
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
  
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.2 }}
      className={`glass-effect glow-effect p-4 rounded-full text-white transition-colors ${social.color}`}
    >
      <IconComponent className="w-6 h-6" />
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
            <Card className="glass-effect glow-effect">
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
              <Card className="glass-effect glow-effect text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    مستعد لبدء مشروعك؟
                  </h3>
                  <p className="text-white/70 mb-6">
                    دعنا نعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
                  </p>
                  <Button className="glow-effect px-8 py-3">
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

