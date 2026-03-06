const styles = {
  root: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '21px',
    lineHeight: '1.75',
    background: '#ffffff',
    color: '#000000',
    WebkitFontSmoothing: 'antialiased',
  },
  wrap: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 4rem',
  },
  nav: {
    padding: '2.5rem 0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottom: '1px solid #c8c8c8',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  navName: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '1rem',
    fontWeight: 500,
    color: '#000000',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '1rem',
    color: '#2a2a2a',
    textDecoration: 'none',
    letterSpacing: '0.04em',
  },
  section: {
    padding: '5rem 0',
    borderBottom: '1px solid #c8c8c8',
  },
  heroSection: {
    padding: '10rem 0 8rem',
    borderBottom: '1px solid #c8c8c8',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '1rem',
    color: '#2a2a2a',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '2rem',
    display: 'block',
  },
  // Hero
  heroIntro: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    color: '#2a2a2a',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
  },
  heroName: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  },
  heroNameEm: {
    fontStyle: 'italic',
    color: '#2a2a2a',
  },
  heroBio: {
    color: '#2a2a2a',
    fontSize: '1rem',
    maxWidth: '560px',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
    textAlign: 'center',
  },
  heroLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  heroLinkPrimary: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.72rem',
    letterSpacing: '0.06em',
    color: '#000000',
    textDecoration: 'none',
    borderBottom: '1px solid #000000',
    paddingBottom: '2px',
  },
  heroLink: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.72rem',
    letterSpacing: '0.06em',
    color: '#2a2a2a',
    textDecoration: 'none',
    borderBottom: '1px solid #c8c8c8',
    paddingBottom: '2px',
  },
  // About
  aboutP: {
    color: '#2a2a2a',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  skillsBlock: { marginTop: '2.5rem' },
  skillsRow: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  skill: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.72rem',
    letterSpacing: '0.04em',
    color: '#2a2a2a',
    border: '1px solid #c8c8c8',
    padding: '0.3rem 0.75rem',
  },
  interestsBlock: { marginTop: '2.5rem' },
  interestItem: {
    padding: '1.5rem 0',
    borderBottom: '1px solid #c8c8c8',
  },
  interestName: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '1.05rem',
    fontWeight: 500,
    marginBottom: '0.4rem',
  },
  interestDesc: {
    fontSize: '0.92rem',
    color: '#2a2a2a',
    lineHeight: '1.8',
  },
  // Coursework
  courseList: { listStyle: 'none', margin: 0, padding: 0 },
  courseItem: {
    display: 'grid',
    gridTemplateColumns: '5rem 1fr',
    gap: '1.5rem',
    padding: '1.25rem 0',
    borderBottom: '1px solid #c8c8c8',
    alignItems: 'start',
  },
  courseCode: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.68rem',
    color: '#2a2a2a',
    letterSpacing: '0.06em',
    paddingTop: '0.1rem',
  },
  courseName: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '0.95rem',
    fontWeight: 500,
    marginBottom: '0.2rem',
  },
  courseDesc: {
    fontSize: '0.85rem',
    color: '#2a2a2a',
    lineHeight: '1.7',
  },
  // Publications
  pubItem: {
    padding: '1.75rem 0',
    borderBottom: '1px solid #c8c8c8',
  },
  pubTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.4',
    marginBottom: '0.35rem',
  },
  pubAuthors: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.7rem',
    color: '#2a2a2a',
    letterSpacing: '0.03em',
    marginBottom: '0.2rem',
  },
  pubVenue: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.7rem',
    color: '#2a2a2a',
    fontStyle: 'italic',
    marginBottom: '0.75rem',
    letterSpacing: '0.02em',
  },
  pubLinks: { display: 'flex', gap: '1rem' },
  pubLink: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.68rem',
    color: '#2a2a2a',
    textDecoration: 'none',
    borderBottom: '1px solid #c8c8c8',
    paddingBottom: '1px',
    letterSpacing: '0.04em',
  },
  // Blog
  blogPlaceholder: {
    padding: '3rem 0',
    color: '#2a2a2a',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.78rem',
    letterSpacing: '0.06em',
  },
  // Contact
  contactP: {
    color: '#2a2a2a',
    marginBottom: '2rem',
    fontSize: '1rem',
    maxWidth: '460px',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1.5rem',
    padding: '0.9rem 0',
    borderBottom: '1px solid #c8c8c8',
  },
  contactType: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.65rem',
    color: '#2a2a2a',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    width: '5rem',
    flexShrink: 0,
  },
  contactLink: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '0.95rem',
    color: '#000000',
    textDecoration: 'none',
    borderBottom: '1px solid #c8c8c8',
    paddingBottom: '1px',
  },
  // Footer
  footer: {
    padding: '2.5rem 0 3rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerP: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.65rem',
    color: '#2a2a2a',
    letterSpacing: '0.06em',
  },
}

const skills = [
  'Python', 'Java', 'C / C++', 'JavaScript',
  'React', 'Node.js', 'PostgreSQL', 'Docker',
  'AWS', 'Git', 'Linux', 'REST APIs',
]

const interests = [
  {
    name: 'Distributed Systems',
    desc: 'Consensus protocols, fault tolerance, and how large systems stay consistent under failure. Particularly interested in the gap between theoretical guarantees and what\'s practical to implement.',
  },
  {
    name: 'Programming Language Theory',
    desc: 'Type systems, compilers, and the design decisions that make languages feel the way they do. Currently reading through TAPL and experimenting with writing a small interpreter.',
  },
  {
    name: 'Systems for ML',
    desc: 'The infrastructure side of machine learning — efficient training pipelines, inference optimization, and what it takes to get models running well in production.',
  },
  {
    name: 'Open Source',
    desc: 'Contributing to projects I actually use and learning how large codebases are maintained and evolved over time.',
  },
]

const courses = [
  { code: 'CS 301', name: 'Data Structures & Algorithms', desc: 'Trees, graphs, sorting, dynamic programming, asymptotic analysis. Built a pathfinding visualizer as a final project.' },
  { code: 'CS 350', name: 'Operating Systems', desc: 'Processes, threads, memory management, file systems, concurrency. Implemented a basic shell and virtual memory system in C.' },
  { code: 'CS 420', name: 'Distributed Systems', desc: 'Consensus algorithms, fault tolerance, replication. Built a Raft-based key-value store.' },
  { code: 'CS 370', name: 'Database Systems', desc: 'Relational models, query optimization, indexing, transactions. Implemented a relational DB engine in Java.' },
  { code: 'CS 410', name: 'Computer Networks', desc: 'TCP/IP, DNS, HTTP, routing, security. Built a reliable transport protocol over UDP.' },
  { code: 'CS 450', name: 'Machine Learning', desc: 'Supervised/unsupervised learning, neural networks, model evaluation. Applied ML to a real-world dataset.' },
]

const publications = [
  {
    title: 'Your Paper Title Goes Here: A Study of Something Interesting',
    authors: 'Your Name, Co-author One, Co-author Two',
    venue: 'Conference or Journal Name, Year',
    links: [{ label: 'PDF ↗', href: '#' }, { label: 'arXiv ↗', href: '#' }, { label: 'Code ↗', href: '#' }],
  },
  {
    title: 'Another Paper or Workshop Paper Title',
    authors: 'Your Name, Co-author One',
    venue: 'Workshop Name @ Conference, Year',
    links: [{ label: 'PDF ↗', href: '#' }, { label: 'Poster ↗', href: '#' }],
  },
]

export default function App() {
  return (
    <div style={styles.root}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />

      <div style={styles.wrap}>

        {/* NAV */}
        <nav style={styles.nav}>
          <a href="#hero" style={styles.navName}>Grace Yu</a>
          <ul style={styles.navLinks}>
            {['about', 'courses', 'publications', 'blog', 'contact'].map(s => (
              <li key={s}>
                <a href={`#${s}`} style={styles.navLink}>{s}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <section id="hero" style={styles.heroSection}>
          <p style={styles.heroIntro}>CS Student · [University] · Class of 20XX</p>
          <h1 style={styles.heroName}>
            Grace Yu
          </h1>
          <p style={styles.heroBio}>
            Currently interested in the foundations + applications of intelligence,
            building cool technology, strategy consulting, and quantitative finance.
          </p>
          <div style={styles.heroLinks}>
            <a href="#about" style={styles.heroLinkPrimary}>About</a>
            <a href="mailto:you@example.com" style={styles.heroLink}>Email</a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" style={styles.heroLink}>LinkedIn</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={styles.section}>
          <span style={styles.label}>About</span>
          <p style={styles.aboutP}>Hi, I'm Grace Yu — a [year] year CS student at [University] focused on systems and software engineering.</p>
          <p style={styles.aboutP}>I care about writing clean, thoughtful code and understanding how things work at a deeper level. Outside of class I contribute to open source, work on side projects, and occasionally write about things I'm learning.</p>
          <p style={styles.aboutP}>Currently looking for <strong>Summer 2025 internships</strong> in software engineering or backend roles.</p>
          <p style={{ ...styles.aboutP, marginBottom: '2rem' }}>
            <strong>Skills:</strong> {skills.join(' · ')}
          </p>
          {interests.map((item, i) => (
            <div key={i} style={{
              ...styles.interestItem,
              borderTop: i === 0 ? '1px solid #c8c8c8' : 'none',
            }}>
              <p style={styles.interestName}>{item.name}</p>
              <p style={styles.interestDesc}>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* COURSEWORK */}
        <section id="courses" style={styles.section}>
          <span style={styles.label}>Coursework</span>
          <ul style={styles.courseList}>
            {courses.map((c, i) => (
              <li key={i} style={{
                ...styles.courseItem,
                borderTop: i === 0 ? '1px solid #c8c8c8' : 'none',
              }}>
                <span style={styles.courseCode}>{c.code}</span>
                <div>
                  <p style={styles.courseName}>{c.name}</p>
                  <p style={styles.courseDesc}>{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" style={styles.section}>
          <span style={styles.label}>Publications</span>
          {publications.map((pub, i) => (
            <div key={i} style={{
              ...styles.pubItem,
              borderTop: i === 0 ? '1px solid #c8c8c8' : 'none',
            }}>
              <p style={styles.pubTitle}>{pub.title}</p>
              <p style={styles.pubAuthors}>{pub.authors}</p>
              <p style={styles.pubVenue}>{pub.venue}</p>
              <div style={styles.pubLinks}>
                {pub.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={styles.pubLink}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* BLOG */}
        <section id="blog" style={styles.section}>
          <span style={styles.label}>Writing</span>
          {/* Add blog posts here when ready:
          <a href="/blog/post-slug" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            ...
          </a>
          */}
          <p style={styles.blogPlaceholder}>No posts yet — coming soon.</p>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <span style={styles.label}>Contact</span>
          <p style={styles.contactP}>Looking for internship and new grad opportunities. If you have a role, a project, or just want to talk — reach out.</p>
          <div>
            <div style={{ ...styles.contactRow, borderTop: '1px solid #c8c8c8' }}>
              <span style={styles.contactType}>Email</span>
              <a href="mailto:you@example.com" style={styles.contactLink}>you@example.com</a>
            </div>
            <div style={styles.contactRow}>
              <span style={styles.contactType}>LinkedIn</span>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" style={styles.contactLink}>linkedin.com/in/yourhandle</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p style={styles.footerP}>Grace Yu</p>
          <p style={styles.footerP}>2025</p>
        </footer>

      </div>
    </div>
  )
}