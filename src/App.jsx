import { useState } from 'react'
import './App.css'
import heroImage from './assets/hero.png'
import profileImage from './assets/profile.jpg'

const content = {
  th: {
    switch: 'EN', nav: ['เรื่องราว', 'สกิล', 'โปรเจกต์'], hello: 'สวัสดี ผมนรวัฒน์',
    headline: <>พร้อมฝึกงาน <span>พร้อมสร้าง</span> ของจริง</>,
    intro: 'นักศึกษาระดับปริญญาตรีที่มีประสบการณ์ทำงานเป็นทีม พัฒนา Web Application และ Web Chatbot พร้อมเรียนรู้เทคโนโลยีใหม่เพื่อเติบโตไปกับองค์กร',
    cta: 'ดูผลงาน', note: 'OPEN FOR INTERNSHIP · 2026', role: 'Frontend · Web Application · UX/UI',
    storyLabel: '01 — เรื่องราว', storyTitle: 'เริ่มจากความสงสัย จบลงที่สิ่งที่ใช้ได้จริง',
    storyText: 'ผมเป็นนักศึกษาคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ สนใจการพัฒนาเว็บไซต์ฝั่ง Frontend และการออกแบบ UX/UI พร้อมมีประสบการณ์ทำงานร่วมกับทีม',
    facts: [['มหาวิทยาลัย', 'ศรีปทุม · บางเขน'], ['การศึกษา', 'ปริญญาตรี · GPA 3.47'], ['ถนัด', 'Frontend · UX/UI'], ['ติดต่อ', '099-106-8322']],
    skillLabel: '02 — เครื่องมือในมือ', skillTitle: <>คิดเป็นระบบ <span>สร้างเป็นภาพ</span></>, skillText: 'ผสมตรรกะของโค้ดเข้ากับความรู้สึกของการออกแบบ เพื่อให้ทุกหน้าจอมีทั้ง character และ purpose',
    skillGroups: [['01', 'FRONTEND', 'HTML, CSS, JavaScript, React, Tailwind CSS, Vite, Bootstrap'], ['02', 'BACKEND', 'Node.js, Express.js, REST API'], ['03', 'DATA + DESIGN', 'MongoDB, MySQL, Python, UX/UI, Figma, Dataset']],
    workLabel: '03 — Selected work', workTitle: 'สิ่งที่เคยสร้าง', all: 'ทั้งหมด', filters: ['ทั้งหมด', 'Web', 'AI'],
    projects: [['Roadbot AI', 'AI', 'Web Chatbot วิเคราะห์ความเสี่ยงอุบัติเหตุและวางแผนการเดินทางอย่างปลอดภัย เตรียม Dataset สำหรับ Machine Learning ร่วมกับทีม 4 คน', 'Python · JavaScript · HTML/CSS · MySQL'], ['Shop Car', 'Web', 'เว็บไซต์ขายอุปกรณ์แต่งรถยนต์ พร้อมระบบจัดการคำสั่งซื้อ สินค้า และข้อมูลผู้ใช้งานทั้ง Backend และ Frontend', 'HTML · CSS · JavaScript · MySQL'], ['Tasknest', 'Web', 'เว็บจัดการงานสำหรับนักศึกษา รองรับการสร้าง แก้ไข ลบบอร์ด และติดตามงานร่วมกัน', 'React · Tailwind CSS · Node.js · MongoDB · Figma'], ['ค้นหาลานจอดรถ', 'Web', 'ระบบเช็กจำนวนที่จอดรถคงเหลือในแต่ละโซน รับผิดชอบ UX/UI, Frontend และเอกสารร่วมกับทีม 4 คน', 'React · Express.js · SQL Server · Figma'], ['Long Tharm', 'Web', 'ระบบค้นหาสูตรอาหารจากวัตถุดิบ รับผิดชอบ UX/UI และ Frontend ร่วมกับทีม 7 คน', 'React · HTML/CSS · JavaScript · Figma']],
    contactLabel: 'กำลังมองหาที่ฝึกงาน', contactTitle: <>พร้อมเรียนรู้ <span>ไปกับทีมของคุณ</span></>, contactText: 'กำลังมองหา internship ที่ได้ลงมือทำจริง เรียนรู้จากทีมเก่ง ๆ และช่วยสร้าง product ที่มีความหมาย', email: 'คุยเรื่องฝึกงาน',
  },
  en: {
    switch: 'ไทย', nav: ['Story', 'Skills', 'Work'], hello: "Hi, I'm Norawat",
    headline: <>Ready to intern. <span>Ready to build</span> for real.</>,
    intro: 'A Computer Science student with team project experience building Web Applications and Web Chatbots, ready to learn new technologies and grow with an organization.',
    cta: 'View my work', note: 'OPEN FOR INTERNSHIP · 2026', role: 'Frontend · Backend · Product Design',
    storyLabel: '01 — The story', storyTitle: 'Curiosity in. Useful things out.',
    storyText: 'I study Computer Science and Software Development Innovation at Sripatum University. I focus on Frontend development and UX/UI design, with experience collaborating on Web Applications, Web Chatbots and Machine Learning datasets.',
    facts: [['University', 'Sripatum · Bangkhen'], ['Education', "Bachelor's · GPA 3.47"], ['Focus', 'Frontend · UX/UI'], ['Phone', '099-106-8322']],
    skillLabel: '02 — The toolkit', skillTitle: <>Think in systems. <span>Build in pixels.</span></>, skillText: 'Blending the logic of code with the feeling of design, so every screen has both character and purpose.',
    skillGroups: [['01', 'FRONTEND', 'HTML, CSS, JavaScript, React, Tailwind CSS, Vite, Bootstrap'], ['02', 'BACKEND', 'Node.js, Express.js, REST API'], ['03', 'DATA + DESIGN', 'MongoDB, MySQL, Python, UX/UI, Figma, Dataset']],
    workLabel: '03 — Selected work', workTitle: 'Things I made', all: 'All work', filters: ['All', 'Web', 'AI'],
    projects: [['Roadbot AI', 'AI', 'A web chatbot for accident risk analysis and safer route planning. Prepared a Machine Learning dataset with a team of four.', 'Python · JavaScript · HTML/CSS · MySQL'], ['Shop Car', 'Web', 'An automotive accessories store with backend order, product and user management.', 'HTML · CSS · JavaScript · MySQL'], ['Tasknest', 'Web', 'A student task management app for creating, editing, deleting and tracking shared boards.', 'React · Tailwind CSS · Node.js · MongoDB · Figma'], ['Parking Finder', 'Web', 'A zone-based parking availability system. Responsible for UX/UI, frontend and documentation in a team of four.', 'React · Express.js · SQL Server · Figma'], ['Long Tharm', 'Web', 'A recipe finder based on ingredients. Responsible for UX/UI and frontend with a team of seven.', 'React · HTML/CSS · JavaScript · Figma']],
    contactLabel: 'Looking for an intern?', contactTitle: <>Ready to learn. <span>Ready to contribute.</span></>, contactText: 'I am looking for an internship where I can learn from a great team, ship real work and help build meaningful products.', email: 'Talk about an internship',
  },
}

function Arrow() { return <span className="arrow">↗</span> }

function App() {
  const [language, setLanguage] = useState('th')
  const [filter, setFilter] = useState('ทั้งหมด')
  const t = content[language]
  const email = 'mailto:hxuxbcud@gmail.com'
  const visibleProjects = t.projects.filter(([, type]) => filter === t.filters[0] || type === filter)
  const switchLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th')
    setFilter(language === 'th' ? 'All' : 'ทั้งหมด')
  }

  return (
    <div className="site">
      <header className="topbar">
        <a className="wordmark" href="#top"><b>n.</b><span>norawat</span></a>
        <nav>{t.nav.map((item, i) => <a href={`#${['story', 'skills', 'work'][i]}`} key={item}>{item}</a>)}</nav>
        <div className="top-actions"><button onClick={switchLanguage}>{t.switch}</button><a href={email} className="say-hi">Let’s talk <Arrow /></a></div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow"><i /> {t.hello}</p>
            <h1>{t.headline}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-links"><a className="primary-link" href="#work">{t.cta} <Arrow /></a><span className="availability"><i /> {t.note}</span></div>
          </div>
          <div className="hero-art reveal-delay">
            <div className="art-grid" /><div className="art-ring ring-a" /><div className="art-ring ring-b" />
            <div className="hero-orb"><img className="hero-shape" src={heroImage} alt="" /><img className="profile-image" src={profileImage} alt="นรวัฒน์ ดูการดี" /><span>BUILD WITH PURPOSE</span></div>
            <div className="art-label">/ 01 <b>{t.role}</b></div>
          </div>
          <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
          <div className="hero-ticker"><span>AVAILABLE FOR INTERNSHIP</span><b>✳</b><span>AVAILABLE FOR INTERNSHIP</span><b>✳</b><span>AVAILABLE FOR INTERNSHIP</span></div>
        </section>

        <section className="story section" id="story">
          <div className="section-index">{t.storyLabel}</div>
          <div className="story-layout"><div><h2>{t.storyTitle}</h2><p className="body-copy">{t.storyText}</p><a className="text-link" href="#contact">{t.contactLabel} <Arrow /></a></div>
            <div className="fact-grid">{t.facts.map(([label, value]) => <div className="fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-index">{t.skillLabel}</div>
          <div className="skills-layout"><div><h2>{t.skillTitle}</h2><p className="body-copy">{t.skillText}</p></div><div className="skill-list">{t.skillGroups.map(([num, title, desc]) => <div className="skill-row" key={num}><span className="skill-num">{num}</span><b>{title}</b><span>{desc}</span><Arrow /></div>)}</div></div>
        </section>

        <section className="work section" id="work">
          <div className="work-heading"><div className="section-index">{t.workLabel}</div><h2>{t.workTitle}</h2><div className="filters">{t.filters.map(item => <button className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
          <div className="project-list">{visibleProjects.map(([title, type, desc, tech], i) => <a href={`${email}?subject=${encodeURIComponent(title)}`} className="project" key={title}><span className="project-no">0{i + 1}</span><div><small>{type} / PROJECT</small><h3>{title}</h3><p>{desc}</p></div><div className="project-tech">{tech}</div><Arrow /></a>)}</div>
        </section>
      </main>

      <footer className="contact section" id="contact"><div className="section-index">{t.contactLabel}</div><div className="contact-content"><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="contact-button" href={email}>{t.email} <Arrow /></a><div className="contact-details"><a href={email}>hxuxbcud@gmail.com</a><a href="tel:0991068322">099-106-8322</a><span>LINE: 11111111dan</span></div></div><div className="footer-line"><span>© 2026 NORAWAT DOOKANDEE</span><span>MADE WITH CURIOSITY <b>✳</b></span></div></footer>
    </div>
  )
}

export default App
