import React from 'react';
import { DATA } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner">
        <p className="section-label">Recognition & Milestones</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-sub">
          Competitions, certifications, scholarships, and moments I'm proud of.
        </p>

        <div className="achievements-grid">
          {DATA.achievements.map((a, i) => (
            <div className="achievement-card fade-up" key={i}>
              <div className="achievement-icon">{a.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.description}</div>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '10px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--accent-mid)',
                      textDecoration: 'none',
                      border: '1px solid var(--accent-mid)',
                      borderRadius: '99px',
                      padding: '4px 12px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-light)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
