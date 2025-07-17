import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const profileImg = require('../assets/myphoto.jpg'); // تأكد من وجود الصورة بهذا الاسم

const about = `I am Ahmed Monged, a dedicated web developer with a strong focus on building modern user interfaces and high-impact landing pages. My passion lies in transforming ideas into interactive, visually appealing, and user-friendly websites. I strive to deliver clean code, creative solutions, and seamless digital experiences for every project I work on.`;

const skills = [
  'HTML5, CSS3, JavaScript (ES6+)',
  'React.js & modern frontend frameworks',
  'Responsive Web Design',
  'Landing Page Development',
  'UI/UX Principles',
  'Version Control (Git)',
  'Performance Optimization',
];

const HeroSection = () => (
  <section className="hero-section position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', background: 'linear-gradient(120deg, #181c2f 60%, #23294a 100%)' }}>
    <div className="container position-relative" style={{zIndex:2}}>
      <div className="row align-items-center flex-row-reverse">
        {/* Right: Profile Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src={profileImg} alt="Ahmed Monged" style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: '50%', border: '6px solid #FFD600', boxShadow: '0 0 40px #0008' }} />
          </motion.div>
        </div>
        {/* Left: About & Skills */}
        <div className="col-md-7 text-md-start text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="display-4 fw-bold mb-2" style={{ color: '#FFD600' }}>
            Ahmed Monged
          </motion.h1>
          <motion.h3 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-3" style={{ color: '#fff', fontWeight: 400, fontSize: '1.5rem' }}>
            Web Developer & Landing Page Specialist
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="lead mb-3" style={{ color: '#eee' }}>
            {about}
          </motion.p>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="list-unstyled mb-4">
            {skills.map((skill, idx) => (
              <li key={idx} style={{ color: '#FFD600', fontWeight: 500, marginBottom: 4 }}>
                • {skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
    {/* Overlay */}
    <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.45)', zIndex:1}}></div>
  </section>
);

export default HeroSection; 