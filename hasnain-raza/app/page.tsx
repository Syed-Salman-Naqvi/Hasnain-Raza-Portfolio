"use client";

import { useState } from "react";

const email = "hasnainrazab@gmail.com";
const phone = "923102929689";
const whatsapp = "https://wa.me/923102929689";
const linkedin = "https://www.linkedin.com/in/hasnain-raza-224083265";
const facebook = "https://www.facebook.com/share/1E1UPo5jhE/";

const skills = [
  { title: "International Business", detail: "B2B outreach · Export operations · Distributor research" },
  { title: "Business Operations", detail: "Export documentation · Supply chain coordination · MS Excel" },
  { title: "Creative Communication", detail: "Graphic design · Visual communication · Digital assets" },
  { title: "Technology", detail: "IT fundamentals · Microsoft Office · Photoshop · Illustrator · Canva" },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={`portfolio ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hasnain Raza home"><span className="brand-mark">H<span>R</span>.</span><span className="brand-name">HASNAIN RAZA<small>INTERNATIONAL BUSINESS · CREATIVE</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "CLOSE −" : "MENU +"}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {["About", "Experience", "Education", "Skills", "Work", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">{theme === "dark" ? "☼ LIGHT" : "◐ DARK"}</button>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> KARACHI, PAKISTAN <span className="eyebrow-divider">/</span> OPEN TO OPPORTUNITIES</p>
          <h1>HASNAIN<br /><span>RAZA</span><i>.</i></h1>
          <p className="hero-role">International Relations Student <span>·</span> International Business <span>·</span> Graphic Design</p>
          <p className="hero-intro">Connecting global business ambition with clear communication, practical technology, and thoughtful visual design.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Let&apos;s work together <span>↗</span></a><a className="button button-secondary" href="#work">Explore my work <span>↓</span></a></div>
          <div className="hero-meta"><span><b>01</b> BUSINESS & TRADE</span><span><b>02</b> STRATEGY & RESEARCH</span><span><b>03</b> CREATIVE EXECUTION</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-frame">
            <div className="frame-top"><span>PERSONAL PROFILE</span><span>HR / 2026</span></div>
            <div className="monogram-art" aria-label="Hasnain Raza monogram artwork"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><span className="monogram-h">H</span><span className="monogram-r">R</span><span className="monogram-index">KHI<br />24°51&apos;N</span><span className="monogram-side">INTERNATIONAL PERSPECTIVE</span></div>
            <div className="frame-bottom"><span>BUSINESS MINDED.</span><span>GLOBALLY CURIOUS.</span></div>
          </div>
          <div className="floating-note"><span className="note-icon">↗</span><span>BRIDGING IDEAS<br /><b>ACROSS BORDERS</b></span></div>
          <span className="hero-index">PORTFOLIO <b>— 2026</b></span>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="strip-label">MY FOCUS</span><p>Global trade <i>✳</i> Business operations <i>✳</i> Cross-cultural communication <i>✳</i> Visual storytelling</p></div></section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading"><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Business perspective.<br /><em>Creative mindset.</em></h2></div>
        <div className="about-grid"><div className="about-lead"><p>I&apos;m an International Relations student at the University of Karachi with hands-on experience in international business at Hamdard Pakistan.</p><p>I bring together corporate business understanding, IT skills, and graphic design to support meaningful communication and global business growth.</p><a className="text-link" href={`mailto:${email}`}>A little more about me <span>↗</span></a></div><div className="about-details"><div className="detail-row"><span>BASED IN</span><b>Karachi, Pakistan</b></div><div className="detail-row"><span>CAREER DIRECTION</span><b>International Business & Global Trade</b></div><div className="detail-row"><span>ALSO AVAILABLE FOR</span><b>Freelance Graphic Design</b></div><div className="detail-row"><span>WORKING STYLE</span><b>Detail-oriented · Collaborative · Curious</b></div></div></div>
        <div className="principles-grid"><div><span>01</span><h3>Think globally</h3><p>Understand markets, people, and opportunities beyond borders.</p></div><div><span>02</span><h3>Work precisely</h3><p>Bring structure to outreach, documentation, and daily operations.</p></div><div><span>03</span><h3>Communicate clearly</h3><p>Make ideas easier to understand through design and storytelling.</p></div></div>
      </section>

      <section className="dark-band"><div className="section-wrap band-inner"><p className="eyebrow">A DISTINCT COMBINATION</p><p className="band-statement">I combine <span>international relations</span>, business operations, and creative design to help ideas move from strategy to execution.</p></div></section>

      <section className="content-section section-wrap" id="experience">
        <div className="section-heading"><p className="eyebrow">02 / EXPERIENCE</p><h2>Learning by <em>doing.</em></h2><p className="heading-note">Practical experience across business outreach, operations, and creative work.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">INTERN EXPERIENCE</div><div className="timeline-main"><div className="timeline-title"><h3>International Business Intern</h3><span className="pill">BUSINESS</span></div><p className="company">Hamdard Pakistan <span>· Karachi, Pakistan</span></p><ul><li>Conducted B2B outreach to prospective North American distributors to support FMCG export expansion.</li><li>Supported export documentation and supply-chain coordination, using MS Excel to organize information.</li><li>Contributed to research and communication workflows for international business development.</li></ul><div className="tag-list"><span>B2B Outreach</span><span>Export Operations</span><span>MS Excel</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">INDEPENDENT WORK</div><div className="timeline-main"><div className="timeline-title"><h3>Freelance Graphic Designer</h3><span className="pill">CREATIVE</span></div><p className="company">Freelance <span>· Karachi, Pakistan</span></p><ul><li>Designed digital assets tailored to individual client needs and visual goals.</li><li>Managed design projects from initial concept and revisions through final delivery.</li><li>Balanced visual quality, clear communication, and project timelines.</li></ul><div className="tag-list"><span>Graphic Design</span><span>Visual Communication</span><span>Client Management</span></div></div></article>
        </div>
      </section>

      <section className="content-section education-section" id="education"><div className="section-wrap"><div className="section-heading"><p className="eyebrow">03 / EDUCATION</p><h2>Building a wider <em>worldview.</em></h2></div><div className="education-grid"><article className="education-card education-featured"><span className="edu-years">2024 — 2028</span><span className="edu-type">BACHELOR&apos;S DEGREE</span><h3>BS International Relations</h3><p>University of Karachi</p><span className="edu-location">Karachi, Pakistan</span><span className="edu-number">01</span></article><article className="education-card"><span className="edu-years">2023 — 2026</span><span className="edu-type">PROFESSIONAL CERTIFICATION</span><h3>Certification in Information Technology</h3><p>Governor Sindh IT Initiative</p><span className="edu-location">Karachi, Pakistan</span><span className="edu-number">02</span></article><article className="education-card"><span className="edu-years">2022 — 2024</span><span className="edu-type">INTERMEDIATE</span><h3>Pre-Engineering</h3><p>Government Degree High School Shaikh Zaid</p><span className="edu-number">03</span></article><article className="education-card"><span className="edu-years">2015 — 2020</span><span className="edu-type">MATRICULATION</span><h3>Science</h3><p>Telecom Foundation School</p><span className="edu-number">04</span></article></div><div className="cert-note"><span>ALSO COMPLETED</span><p>English Language Proficiency Course</p></div></div></section>

      <section className="content-section section-wrap" id="skills"><div className="section-heading"><p className="eyebrow">04 / CAPABILITIES</p><h2>A versatile set of <em>skills.</em></h2><p className="heading-note">A mix of business coordination, technology, and visual communication.</p></div><div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.title}><span className="skill-index">0{index + 1}</span><div><h3>{skill.title}</h3><p>{skill.detail}</p></div><span className="skill-arrow">↗</span></article>)}</div><div className="tools-row"><span>TOOLS I WORK WITH</span><div><b>MS OFFICE</b><b>EXCEL</b><b>PHOTOSHOP</b><b>ILLUSTRATOR</b><b>CANVA</b></div></div></section>

      <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading"><p className="eyebrow">05 / SELECTED WORK</p><h2>Ideas put into <em>action.</em></h2><p className="heading-note">A closer look at the business and creative work I contribute to.</p></div><div className="projects-grid"><article className="project-card project-business"><div className="project-art"><div className="art-label">INTERNATIONAL BUSINESS / 01</div><div className="globe-graphic"><span>GLOBAL<br />REACH</span><i /></div><div className="art-footer">RESEARCH <span>→</span> OUTREACH <span>→</span> GROWTH</div></div><div className="project-info"><div><span className="project-type">BUSINESS DEVELOPMENT</span><h3>B2B Outreach Campaign</h3></div><p>Research and outreach to North American distributors in support of FMCG export expansion at Hamdard Pakistan.</p><div className="project-tags"><span>Distributor Research</span><span>Export</span><span>B2B</span></div></div></article><article className="project-card project-design"><div className="project-art"><div className="art-label">VISUAL COMMUNICATION / 02</div><div className="design-sheet"><span className="sheet-kicker">DESIGN WITH PURPOSE</span><strong>IDEAS<br /><em>INTO</em><br />IMPACT.</strong><span className="sheet-circle" /><span className="sheet-footer">CONCEPT · CRAFT · DELIVERY</span></div><div className="art-footer">BRIEF <span>→</span> DESIGN <span>→</span> DELIVER</div></div><div className="project-info"><div><span className="project-type">CREATIVE DESIGN</span><h3>Freelance Graphic Design</h3></div><p>Client-focused digital assets developed from early concepts through feedback, refinement, and final delivery.</p><div className="project-tags"><span>Photoshop</span><span>Illustrator</span><span>Canva</span></div></div></article></div><p className="project-disclaimer">Project summaries are provided for context. Detailed samples can be shared on request.</p></div></section>

      <section className="content-section section-wrap" id="services"><div className="section-heading"><p className="eyebrow">06 / HOW I CAN HELP</p><h2>Useful support.<br /><em>Thoughtful execution.</em></h2></div><div className="services-list"><article><span>01</span><div><h3>Graphic Design & Visual Communication</h3><p>Creative design solutions for brands and businesses, shaped around the message, audience, and visual direction.</p></div><a href={`mailto:${email}?subject=Graphic%20Design%20Inquiry`} aria-label="Ask about graphic design">↗</a></article><article><span>02</span><div><h3>International Business Support</h3><p>Support with B2B prospect research, distributor outreach, export documentation, and logistics coordination.</p></div><a href={`mailto:${email}?subject=International%20Business%20Support`} aria-label="Ask about international business support">↗</a></article></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><p className="eyebrow">07 / CONTACT</p><h2>Have a goal in mind?<br /><em>Let&apos;s talk.</em></h2><p>I&apos;m open to international business and operations opportunities, as well as freelance graphic design projects. Let&apos;s see what we can build together.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Message me on WhatsApp <span>↗</span></a></div><div className="contact-details"><a href={`mailto:${email}`}><span>EMAIL</span><b>{email}</b><i>↗</i></a><a href={whatsapp} target="_blank" rel="noreferrer"><span>PHONE / WHATSAPP</span><b>+92 310 2929689</b><i>↗</i></a><a href={linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>Connect professionally</b><i>↗</i></a><a href={facebook} target="_blank" rel="noreferrer"><span>FACEBOOK</span><b>View profile</b><i>↗</i></a></div></div></section>

      <footer className="site-footer section-wrap"><a className="footer-brand" href="#home">HR<span>.</span></a><p>HASNAIN RAZA <span>— BUSINESS, RELATIONS & DESIGN</span></p><a href="#home">BACK TO TOP ↑</a><small>© 2026 HASNAIN RAZA. BUILT WITH INTENTION.</small></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Hasnain on WhatsApp"><span>✆</span><b>LET&apos;S CHAT</b></a>
    </main>
  );
}
