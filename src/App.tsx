import './styling/index.css'
import happierPathThumb from './assets/projects/happierpath.jpg'
import rustZero2ProdThumb from './assets/projects/rust-zero2prod.svg'
import warehouseManagerThumb from './assets/projects/warehouse-manager.png'

function App() {
	const experience = [
		{
			period: 'Jul. 2026 - Present',
			title: 'Development Manager',
			company: 'Compass Education',
			description: 'Leading the Core Product Team at Compass Education.',
			stack: [],
		},
		{
			period: 'Dec. 2023 - Jul. 2026',
			title: 'Technical Lead',
			company: 'Compass Education',
			description:
				'Leading a cross-functional team delivering resilient platform features, with a focus on architecture, API quality, and measurable product outcomes.',
			stack: ['.NET', 'React', 'SQL', 'AWS', 'GCP', 'CI/CD'],
		},
		{
			period: 'Sep. 2022 - Dec. 2023',
			title: 'Full Stack Software Engineer',
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
			company: 'The Ladelle Group',
			description:
				'I worked here part-time in tandem with completing my Computer Science degree at Monash University, managing inventory and building ad hoc programs to meet the business\'s needs.<br/><br/>The largest of these was Warehouse Manager, a Python desktop app that automates custom work orders for warehouse staff and reports on the state of the warehouse and its product lines, using data exported from the WISE warehouse system.',
			stack: ['Python', 'tkinter', 'Excel'],
		},
	]

	const projects = [
		{
			title: 'Warehouse Manager',
			repo: 'MatthewGadsden/WarehouseManager',
			thumbnail: { src: warehouseManagerThumb, alt: 'Warehouse Manager distro program screen', fit: 'cover' },
			description:
				'A desktop tool, built while working at The Ladelle Group, that automates custom work orders for warehouse staff and reports on the state of the warehouse and its product lines. It works from data exported from the WISE warehouse system, with a Tkinter UI so less technical staff could use it.',
			stack: ['Python', 'Tkinter', 'pandas'],
		},
		{
			title: 'Zero To Production API',
			repo: 'MatthewGadsden/rust-zero2prod',
			thumbnail: { src: rustZero2ProdThumb, alt: 'Rust logo', fit: 'contain' },
			description:
				'A production-style backend API built while working through Zero To Production in Rust: an Actix Web server backed by PostgreSQL through SQLx migrations, with integration tests and a GitHub Actions pipeline that runs them against a Postgres service container.',
			stack: ['Rust', 'Actix Web', 'PostgreSQL', 'SQLx', 'Docker', 'GitHub Actions'],
		},
		{
			title: 'HappierPath',
			repo: 'jamesr981/HappierPath',
			thumbnail: { src: happierPathThumb, alt: 'HappierPath popup open over a Wikipedia page', fit: 'cover' },
			contribution: true,
			description:
				'A Manifest V3 browser extension for Chrome and Firefox that bookmarks URL paths instead of full addresses, so the same admin tools can be opened across hundreds of sites that share a route structure. I contributed the extension options page and syncing saved paths to your browser account with a local storage fallback, merged upstream in v4.3.0.',
			stack: ['TypeScript', 'React', 'Vite', 'WebExtensions'],
		},
	]

	return (
		<main className="page">
			<div className="page-backdrop" aria-hidden="true" />
			<div className="column-backdrop" aria-hidden="true">
				<div className="wrapper">
					<div className="column-backdrop-panel" />
				</div>
			</div>
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
						<p className="role">Development Manager / Full-Stack Engineer</p>
						<p className="tagline">I build dependable digital products for the web.</p>
						<nav className="section-nav" aria-label="Sections">
							<a href="#about">About</a>
							<a href="#experience">Experience</a>
							<a href="#projects">Projects</a>
						</nav>
					</div>

					<div className="socials">
						<a href="https://github.com/MatthewGadsden" target="_blank" rel="noreferrer" aria-label="GitHub">
							<svg className="social-icon" viewBox="0 0 16 16" aria-hidden="true">
								<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
							</svg>
						</a>
						<a href="https://linkedin.com/in/matthewgadsden" target="_blank" rel="noreferrer" aria-label="LinkedIn">
							<svg className="social-icon" viewBox="2.5 2.5 19 19" aria-hidden="true">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
							</svg>
						</a>
						<a href="mailto:me@matthewgadsden.com" aria-label="Email">
							<svg className="social-icon" viewBox="0 0 16 16" aria-hidden="true">
								<path d="M0 4.6 8 9.6l8-5V3.5A1.5 1.5 0 0 0 14.5 2h-13A1.5 1.5 0 0 0 0 3.5Z" />
								<path d="M0 6.4v6.1A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.4l-8 5Z" />
							</svg>
						</a>
					</div>
				</aside>

				<div className="content">
					<section id="about">
						<u>
							<h3 className="thin">About Me</h3>
						</u>
						<p>
							I am a Development Manager at Compass Education, where I lead the Core Product Team working on
							the School Management Platform. I joined Compass as a graduate in 2021 and have grown from
							full-stack engineering into technical leadership and now management.
						</p>
						<p>
							I have a Bachelor of Computer Science from Monash University and a keen interest in the entire
							software development life cycle. Along the way I have owned the Photos Module, which provides
							photo ordering for hundreds of schools across Australia, and worked across the payments and
							disconnected apps teams.
						</p>
						<p>
							Outside of work, I enjoy tinkering with small side projects, learning new technologies, and
							refining workflows that make teams more effective.
						</p>
					</section>

					<section id="experience">
						<u>
							<h3 className="thin">Experience</h3>
						</u>
						{experience.map((item) => (
							<article className="experience-item" key={`${item.period}-${item.title}`}>
								<div className="meta">{item.period}</div>
								<div>
									<h3>
										{item.title}
									</h3>
									<span className="company">{item.company}</span>
									{item.description && <p dangerouslySetInnerHTML={{ __html: item.description }} />}
									{item.stack.length > 0 && (
										<ul className="stack">
											{item.stack.map((tech) => (
												<li key={tech}>{tech}</li>
											))}
										</ul>
									)}
								</div>
							</article>
						))}
					</section>

					<section id="projects">
						<u>
							<h3 className="thin">Projects</h3>
						</u>
						{projects.map((project) => (
							<article className="project-card" key={project.repo}>
								<img
									className={`project-thumb project-thumb-${project.thumbnail.fit}`}
									src={project.thumbnail.src}
									alt={project.thumbnail.alt}
									loading="lazy"
								/>
								<div className="project-body">
									<h3>
										<a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer">
											{project.title}
										</a>
										{project.contribution && <span className="project-badge">Contribution</span>}
									</h3>
									<div className="meta">{project.repo}</div>
									<p>{project.description}</p>
									<ul className="stack">
										{project.stack.map((tech) => (
											<li key={tech}>{tech}</li>
										))}
									</ul>
								</div>
							</article>
						))}
						<button type="button" className="more-projects">
							See more projects...
						</button>
					</section>
				</div>
			</div>
		</main>
	)
}

export default App
