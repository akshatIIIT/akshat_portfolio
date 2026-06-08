import React from 'react';
import { DATA } from '../data';

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-sub">
          My academic journey and the institutions that shaped my foundation.
        </p>

        <div className="edu-grid">
          {DATA.education.map((ed, i) => (
            <div className="edu-card fade-up" key={i}>
              <div className="edu-icon">{ed.icon}</div>
              <div className="edu-degree">{ed.degree}</div>
              <div className="edu-school">{ed.school}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                {ed.year} · {ed.grade}
              </div>
              <div className="edu-meta">
                {ed.badges.map((b, j) => (
                  <span className="edu-badge" key={j}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
