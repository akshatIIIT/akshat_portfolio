import React from 'react';
import { DATA } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Left — text */}
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {DATA.status}
          </div>

          <h1 className="hero-name">
            {DATA.name.split(' ')[0]}<br />
            <span className="accent">{DATA.name.split(' ').slice(1).join(' ')}.</span>
          </h1>

          <p className="hero-role">
            {DATA.role} · {DATA.institution}
          </p>

          <p className="hero-bio">{DATA.bio}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get in Touch →
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            {DATA.resume && DATA.resume !== '#' && (
              <a href={DATA.resume} className="btn-outline" target="_blank" rel="noreferrer">
                Resume ↗
              </a>
            )}
          </div>
        </div>

        {/* Right — avatar + floating chips */}
        <div className="hero-img-wrap">
          {/* <div className="hero-img-bg">
            {DATA.initials}
          </div> */}
          <img src="/photos.jpeg" alt="Akshat Raj" style={{ width: '320px', height: '320px', borderRadius: '40% 60% 50% 50% / 50% 50% 60% 40%', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} />

          <div className="hero-floating-chip chip-top">
            <span className="chip-icon">🎓</span>
            {DATA.batch}
          </div>

          <div className="hero-floating-chip chip-bottom">
            <span className="chip-icon">📍</span>
            {DATA.location}
          </div>
        </div>
      </div>
    </section>
  );
}
