import React, { useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { DATA } from './data';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          © {year} {DATA.name}. Built with React.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {DATA.github && <a href={DATA.github} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }} target="_blank" rel="noreferrer">GitHub</a>}
          {DATA.linkedin && <a href={DATA.linkedin} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }} target="_blank" rel="noreferrer">LinkedIn</a>}
          {DATA.email && <a href={`mailto:${DATA.email}`} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>Email</a>}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Scroll-triggered fade-up animations
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
