// import React from 'react';
// import { DATA } from '../data';

// export default function Projects() {
//   return (
//     <section id="projects" className="section" style={{ background: 'var(--bg-card)' }}>
//       <div className="section-inner">
//         <p className="section-label">What I've Built</p>
//         <h2 className="section-title">Featured Projects</h2>
//         <p className="section-sub">
//           A selection of projects spanning full-stack development, machine learning, and systems programming.
//         </p>

//         <div className="projects-grid">
//           {DATA.projects.map((p, i) => (
//             <div className="project-card fade-up" key={i}>
//               <div className="project-header">
//                 <span className="project-tag">{p.tag}</span>
//                 <div className="project-links">
//                   {p.github && (
//                     <a href={p.github} className="project-link" target="_blank" rel="noreferrer" title="GitHub">
//                       ⌥
//                     </a>
//                   )}
//                   {p.live && (
//                     <a href={p.live} className="project-link" target="_blank" rel="noreferrer" title="Live Demo">
//                       ↗
//                     </a>
//                   )}
//                 </div>
//               </div>

//               <h3 className="project-title">{p.title}</h3>
//               <p className="project-desc">{p.description}</p>

//               <div className="project-stack">
//                 {p.stack.map((s, j) => (
//                   <span className="stack-chip" key={j}>{s}</span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div style={{ textAlign: 'center', marginTop: '48px' }}>
//           <a href={DATA.github} className="btn-outline" target="_blank" rel="noreferrer">
//             View All on GitHub ↗
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { DATA } from '../data';

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          A selection of projects spanning full-stack development, machine learning, and systems programming.
        </p>

        <div className="projects-grid">
          {DATA.projects.map((p, i) => (
            <div className="project-card fade-up" key={i}>
              <div className="project-header">
                <span className="project-tag">{p.tag}</span>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} className="project-link" target="_blank" rel="noreferrer" title="GitHub">
                      <GitHubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} className="project-link" target="_blank" rel="noreferrer" title="Live Demo">
                      <LinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-stack">
                {p.stack.map((s, j) => (
                  <span className="stack-chip" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href={DATA.github} className="btn-outline" target="_blank" rel="noreferrer">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
