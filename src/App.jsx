import { useState } from 'react'
import './App.css'

const copy = {
  th: {
    lang: 'EN', switchLabel: 'เปลี่ยนเป็นภาษาอังกฤษ', home: 'หน้าแรกของนรวัฒน์',
    nav: ['เกี่ยวกับ', 'ทักษะ', 'ผลงาน', 'ติดต่อ'], contact: 'ติดต่อฉัน',
    available: 'พร้อมเรียนรู้และลงมือสร้าง', role: 'นักศึกษาวิทยาการคอมพิวเตอร์ · นักพัฒนาเว็บ',
    heroTitle: <>สร้างไอเดียให้<br /><em>เป็นสิ่งที่ใช้ได้จริง</em></>,
    heroText: 'ผมชื่อนรวัฒน์ ดูการดี นักศึกษาสาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ สนใจการพัฒนาเว็บไซต์ทั้ง Frontend และ Backend พร้อมเรียนรู้เทคโนโลยีใหม่อยู่เสมอ',
    workButton: 'ดูผลงานของฉัน', resumeButton: 'ดูข้อมูลการศึกษา',
    location: 'กรุงเทพฯ ประเทศไทย', status: 'เปิดรับโอกาสฝึกงาน',
    aboutKicker: 'โปรไฟล์และการศึกษา', aboutTitle: 'เรียนรู้ผ่านการลงมือสร้างจริง',
    aboutLead: 'เส้นทางการเรียนที่ค่อย ๆ พัฒนาจากพื้นฐานเว็บ ไปสู่ Frontend, Backend, Full Stack และ AI',
    aboutHeading: 'เกี่ยวกับฉัน', aboutText: 'สนใจการพัฒนาเว็บทั้งฝั่งผู้ใช้และฝั่งระบบ มีประสบการณ์ทำงานร่วมกับทีม ออกแบบ UX/UI และเตรียม Dataset สำหรับ Machine Learning',
    facts: [['ชื่อ-นามสกุล', 'นรวัฒน์ ดูการดี'], ['มหาวิทยาลัย', 'มหาวิทยาลัยศรีปทุม'], ['GPA', '3.47'], ['สาขา', 'วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์']],
    education: 'เส้นทางการศึกษา', educationYear: '2566 — ปัจจุบัน', educationTitle: 'ปริญญาตรี · Computer Science & Software Development', educationText: 'คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม',
    skillKicker: 'ความเชี่ยวชาญ', skillTitle: 'ความสามารถและเครื่องมือ', skillLead: 'ชุดทักษะที่ใช้สร้างโปรเจกต์ ตั้งแต่การออกแบบหน้าเว็บ ไปจนถึง API และ Database',
    skills: [['Frontend', 'พัฒนา UI ที่ Responsive ใช้งานง่าย และมี Interaction ที่เหมาะสม', 'React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Vite'], ['Backend', 'ออกแบบ REST API จัดการ Business Logic และเชื่อมต่อฐานข้อมูล', 'Node.js', 'Express.js', 'Python', 'REST API', 'SQL'], ['Data & Design', 'จัดการข้อมูล ออกแบบประสบการณ์ผู้ใช้ และเตรียมข้อมูลสำหรับ AI', 'MongoDB', 'MySQL', 'SQL Server', 'UX/UI Design', 'Dataset']],
    workKicker: 'ผลงานที่คัดสรร', workTitle: 'เส้นทางการพัฒนา', workLead: 'รวมผลงานหลักจากการเรียนรู้ ตั้งแต่ Web Application ไปจนถึง AI และระบบจัดการข้อมูล',
    projectLabel: 'โปรเจกต์การเรียน', details: 'ดูรายละเอียด',
    projects: [['Roadbot AI', 'AI Learning · Web Chatbot', 'ระบบผู้ช่วยวิเคราะห์ความเสี่ยงอุบัติเหตุและวางแผนการเดินทางอย่างปลอดภัยผ่านเว็บแชตบอต', ['Python', 'JavaScript', 'HTML / CSS', 'MySQL']], ['Shop Car', 'Full Stack · E-commerce', 'เว็บไซต์ขายอุปกรณ์แต่งรถยนต์ พร้อมระบบจัดการสินค้า คำสั่งซื้อ และข้อมูลผู้ใช้งาน', ['HTML / CSS', 'JavaScript', 'MySQL', 'Backend']], ['ค้นหาลานจอดรถ', 'Frontend · Database', 'ระบบตรวจสอบจำนวนที่จอดรถคงเหลือในแต่ละโซน พัฒนาด้วย React และ Express.js พร้อมฐานข้อมูล SQL Server', ['React', 'Express.js', 'SQL Server', 'UX/UI']], ['Tasknest', 'Full Stack · Productivity', 'เว็บจัดการงานสำหรับนักศึกษา รองรับการสร้าง แก้ไข ลบบอร์ด และติดตามงานร่วมกัน', ['React', 'Node.js', 'Express', 'MongoDB']], ['Long Tharm', 'UX/UI · Recipe Finder', 'ระบบค้นหาสูตรอาหารจากวัตถุดิบ รับผิดชอบการออกแบบ UX/UI และพัฒนา Frontend', ['React', 'HTML / CSS', 'JavaScript']]],
    contactKicker: 'มาคุยกัน', contactTitle: <>พร้อมสร้างโปรเจกต์<br /><em>ดี ๆ ไปด้วยกัน</em>ไหมครับ?</>, contactText: 'หากมีไอเดีย โปรเจกต์ หรือโอกาสฝึกงาน ผมยินดีรับฟังและพูดคุยครับ', emailLabel: 'ส่งอีเมลหา Norawat', footer: 'สร้างด้วย React · ออกแบบด้วยความตั้งใจ',
  },
  en: {
    lang: 'ไทย', switchLabel: 'Switch to Thai', home: 'Norawat home',
    nav: ['About', 'Skills', 'Work', 'Contact'], contact: 'Contact me',
    available: 'Ready to learn and build', role: 'Computer Science student · Web developer',
    heroTitle: <>Turning ideas into<br /><em>useful experiences.</em></>,
    heroText: "I'm Norawat Dookandee, a Computer Science and Software Development Innovation student focused on building Frontend and Backend web experiences while continuously learning new technologies.",
    workButton: 'View my work', resumeButton: 'View education',
    location: 'Bangkok, Thailand', status: 'Open to internship opportunities',
    aboutKicker: 'Profile & education', aboutTitle: 'Learning by building real things',
    aboutLead: 'A learning journey growing from the basics of web development into Frontend, Backend, Full Stack and AI.',
    aboutHeading: 'About me', aboutText: 'Interested in both user-facing and system-side development, with experience in team projects, UX/UI design and Machine Learning dataset preparation.',
    facts: [['Full name', 'Norawat Dookandee'], ['University', 'Sripatum University'], ['GPA', '3.47'], ['Major', 'Computer Science & Software Development']],
    education: 'Education', educationYear: '2023 — Present', educationTitle: "Bachelor's degree · Computer Science & Software Development", educationText: 'Faculty of Information Technology, Sripatum University',
    skillKicker: 'Expertise', skillTitle: 'Skills & tools', skillLead: 'A practical toolkit for building projects, from interface design to APIs and databases.',
    skills: [['Frontend', 'Building responsive, usable UIs with thoughtful interactions.', 'React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Vite'], ['Backend', 'Designing REST APIs, business logic and database connections.', 'Node.js', 'Express.js', 'Python', 'REST API', 'SQL'], ['Data & Design', 'Working with data, user experience and AI-ready datasets.', 'MongoDB', 'MySQL', 'SQL Server', 'UX/UI Design', 'Dataset']],
    workKicker: 'Selected work', workTitle: 'The development journey', workLead: 'A selection of learning projects, from web applications to AI and data-driven systems.',
    projectLabel: 'Learning project', details: 'View details',
    projects: [['Roadbot AI', 'AI Learning · Web Chatbot', 'A web chatbot that analyzes accident risks and plans safer journeys.', ['Python', 'JavaScript', 'HTML / CSS', 'MySQL']], ['Shop Car', 'Full Stack · E-commerce', 'An automotive accessories store with product, order and user management.', ['HTML / CSS', 'JavaScript', 'MySQL', 'Backend']], ['Parking Finder', 'Frontend · Database', 'A system for checking available parking spaces by zone using React, Express.js and SQL Server.', ['React', 'Express.js', 'SQL Server', 'UX/UI']], ['Tasknest', 'Full Stack · Productivity', 'A student task management app for creating, editing and tracking shared boards.', ['React', 'Node.js', 'Express', 'MongoDB']], ['Long Tharm', 'UX/UI · Recipe Finder', 'A recipe finder based on ingredients, with UX/UI design and frontend development.', ['React', 'HTML / CSS', 'JavaScript']]],
    contactKicker: "Let's talk", contactTitle: <>Ready to build something<br /><em>meaningful together?</em></>, contactText: 'Have an idea, project or internship opportunity? I would love to hear from you.', emailLabel: 'Email Norawat', footer: 'Built with React · Designed with intention',
  },
}

function App() {
  const [language, setLanguage] = useState('th')
  const t = copy[language]
  const email = 'mailto:hxuxbcud@gmail.com'

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label={t.home}><span className="brand-mark">N</span><span className="brand-name">Norawat<span>.</span></span></a>
        <nav aria-label={language === 'th' ? 'เมนูหลัก' : 'Main navigation'}>{t.nav.map((item, index) => <a href={`#${['about', 'skills', 'projects', 'contact'][index]}`} key={item}>{item}</a>)}</nav>
        <div className="topbar-actions"><button className="language-switch" type="button" onClick={() => setLanguage(language === 'th' ? 'en' : 'th')} aria-label={t.switchLabel}>{t.lang}</button><a className="nav-contact" href={email}>{t.contact} <span>↗</span></a></div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-copy"><div className="availability"><span className="status-dot" />{t.available}</div><p className="role">{t.role}</p><h1>{t.heroTitle}</h1><p className="hero-text">{t.heroText}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{t.workButton} <span>↗</span></a><a className="button button-ghost" href="#about">{t.resumeButton} <span>↓</span></a></div><div className="hero-meta"><span>{t.location}</span><span className="meta-line" /><span>{t.status}</span></div></div>
          <div className="hero-visual"><div className="code-window"><div className="window-bar"><span /><span /><span /><small>profile.jsx</small></div><div className="code-body"><span className="code-muted">const</span> profile = {'{'}<br />&nbsp;&nbsp;name: <b>'Norawat'</b>,<br />&nbsp;&nbsp;focus: <b>'Full Stack'</b>,<br />&nbsp;&nbsp;gpa: <b>3.47</b>,<br />&nbsp;&nbsp;status: <b>'learning'</b><br />{'}'}</div></div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="profile-card"><img src="/Geminieiei.jpg" alt={language === 'th' ? 'รูปโปรไฟล์ของนรวัฒน์' : 'Norawat profile'} /><span>{language === 'th' ? 'นักพัฒนา' : 'Developer'}</span></div><div className="visual-caption">SPU · CSI</div></div>
        </section>

        <section className="intro-section section-wrap" id="about"><div className="section-heading"><p className="section-kicker">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><p className="section-lead">{t.aboutLead}</p></div><div className="about-grid"><article className="info-card about-card"><div className="card-icon">✦</div><h3>{t.aboutHeading}</h3><p>{t.aboutText}</p><div className="fact-list">{t.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></article><article className="info-card education-card"><div className="card-icon">↗</div><h3>{t.education}</h3><div className="education-item"><span className="year">{t.educationYear}</span><h4>{t.educationTitle}</h4><p>{t.educationText}</p></div><div className="education-gpa"><strong>3.47</strong><span>GPA</span></div></article></div></section>

        <section className="skills-section section-wrap" id="skills"><div className="section-heading"><p className="section-kicker">{t.skillKicker}</p><h2>{t.skillTitle}</h2><p className="section-lead">{t.skillLead}</p></div><div className="skills-grid">{t.skills.map(([title, description, ...tags], index) => <article className="skill-card" key={title}><div className="skill-number">0{index + 1}</div><h3>{title}</h3><p>{description}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="projects-section section-wrap" id="projects"><div className="section-heading projects-heading"><p className="section-kicker">{t.workKicker}</p><h2>{t.workTitle}</h2><p className="section-lead">{t.workLead}</p></div><div className="project-grid">{t.projects.map(([title, type, description, tags], index) => <a className="project-card" href={`${email}?subject=${encodeURIComponent(title)}`} key={title}><div className="project-top"><span className="project-index">0{index + 1}</span><span>{t.projectLabel}</span><span className="project-arrow">↗</span></div><p className="project-type">{type}</p><h3>{title}</h3><p className="project-description">{description}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom">{t.details}<span>↗</span></div></a>)}</div></section>
      </main>

      <footer className="footer" id="contact"><div className="footer-inner"><div><p className="section-kicker">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p className="contact-text">{t.contactText}</p></div><div className="footer-contact"><a className="email-link" href={email}>{t.emailLabel} <span>↗</span></a><div className="contact-details"><a href="mailto:hxuxbcud@gmail.com">hxuxbcud@gmail.com</a><a href="tel:0991068322">099-106-8322</a></div></div></div><div className="footer-bottom"><span>© 2026 Norawat Dookandee</span><span>{t.footer}</span></div></footer>
    </div>
  )
}

export default App
