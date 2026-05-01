import { useEffect, useState } from 'react'
import './styling/index.css'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
      root.setAttribute('data-theme', storedTheme)
      return
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const initialTheme = prefersLight ? 'light' : 'dark'
    setTheme(initialTheme)
    root.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  const experience = [
    {
      period: 'Dec. 2023 - Present',
      title: 'Technical Lead',
      company: 'Compass Education',
      description:
        'Leading a cross-functional team delivering resilient platform features, with a focus on architecture, API quality, and measurable product outcomes.',
      stack: ['.NET', 'React', 'SQL', 'AWS', 'GCP', 'CI/CD'],
    },
    {
      period: 'Sep. 2022 - Dec. 2023',
      title: 'Software Engineer',
      company: 'Compass Education',
      description:
        'As a full stack engineer I worked across multiple teams during this role, handling changes and bug fixes for a variety of different modules, using many different technologies.<br/><br/>Disconnected Apps Team:<br/> - Modules worked on: Photos, Push Notifications, Kiosk, Door Access<br/><br/>Payments Team:<br/>- Modules worked on: Billing Management, Canteen Ordering/Management, CompassPay, Financial Management',
      stack: ['.NET', 'React', 'AWS', 'CI/CD', 'SQL'],
    },
    {
      period: 'Sep. 2021 - Aug. 2022',
      title: 'Graduate Software Engineer',
      company: 'Compass Education',
      description:
        'My Graduate Year as a Developer <br/>- Upskilling myself in many areas of the product and technologies (React, ASP.NET Framework, ExtJS, SQL, MongoDB & GraphQL)<br/>- I took ownership and became an expert in the MSP photos module<br/>- Became an expert in the companies notification services',
      stack: ['.NET', 'React', 'SQL'],
    },
    {
      period: 'Nov. 2018 - Sep. 2021',
      title: 'Inventory Controller / Programmer',
      company: 'Ladelle Group',
      description: '',
      stack: ['Python', 'tkinter', 'Excel'],
    },
  ]

  return (
    <main className="page">
      <div className="page-glow" aria-hidden="true" />
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar-content">
            
            <div className="sidebar-subheader">
            
              <img
                className="sidebar-sloth"
                src="https://raw.githubusercontent.com/MatthewGadsden/MatthewGadsden/main/images/sloth.png"
                alt="Pixel art sloth"
              />
              <h1>Matthew Gadsden</h1>
              
            </div>
            <p className="role">Technical Lead / Full-Stack Engineer</p>
            <p className="tagline">I build dependable digital products for the web.</p>
            <nav className="section-nav" aria-label="Sections">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
            </nav>
          </div>

          <div className="socials">
            <a href="https://github.com/MatthewGadsden" target="_blank" rel="noreferrer" aria-label="GitHub">
              gh
            </a>
            <a href="https://linkedin.com/in/matthewgadsden" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="mailto:matthewjgadsden@gmail.com" aria-label="Email">
              @
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? 'lt' : 'dk'}
            </button>
          </div>
        </aside>

        <div className="content">
          <section id="about">
            <p>
              I am a hands-on engineer with an appetite for practical product work. I focus on turning
              ambiguous requirements into clear, maintainable software with thoughtful UX and strong
              technical foundations.
            </p>
            <p>
              My day-to-day spans architecture, backend services, front-end implementation, and mentoring.
              I enjoy balancing speed and quality, so teams can ship confidently without creating long-term
              maintenance drag.
            </p>
            <p>
              Outside of work, I enjoy tinkering with small side projects, learning new technologies, and
              refining workflows that make teams more effective.
            </p>
          </section>

          <section id="experience">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.period}-${item.title}`}>
                <div className="meta">{item.period}</div>
                <div>
                  <h3>
                    {item.title}
                  </h3>
                  <span className="company">{item.company}</span>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  <ul className="stack">
                    {item.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section id="projects">
            <article className="project-card">
              <h3>Platform Reliability Program</h3>
              <p>
                Introduced observability and performance improvements that reduced incident noise and
                improved response confidence for critical platform services.
              </p>
            </article>
            <article className="project-card">
              <h3>Workflow Automation Toolkit</h3>
              <p>
                Built internal tooling to automate repetitive engineering tasks, reducing setup and release
                overhead across multiple teams.
              </p>
            </article>
            <article className="project-card">
              <h3>Customer Experience Improvements</h3>
              <p>
                Delivered UX and API enhancements that simplified key user journeys while improving
                performance and maintainability.
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
