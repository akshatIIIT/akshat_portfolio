import React, { useState, useEffect } from 'react';
import { DATA } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Skills', 'Projects', 'Experience', 'Education', 'Achievements', 'Contact'];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        {DATA.initials}<span>.</span>
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
        <li>
          <a href={DATA.resume} className="nav-cta" target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </li>
      </ul>

      <button
        className="nav-mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0,
          background: 'rgba(249,248,245,0.97)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: '16px',
          zIndex: 99,
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontSize: '16px', fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
