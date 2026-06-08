import React from 'react';
import { DATA } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-sub">
          Technologies and tools I've worked with across projects, internships, and coursework.
        </p>

        <div className="skills-grid">
          {DATA.skillGroups.map((group, i) => (
            <div className="skill-group fade-up" key={i}>
              <div className="skill-group-icon">{group.icon}</div>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.skills.map((s, j) => (
                  <span className="skill-tag" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
