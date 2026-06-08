import React, { useState } from 'react';
import { DATA } from '../data';

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          Internships and roles where I've delivered real-world impact.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Left — tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'sticky', top: 'calc(var(--nav-h) + 24px)' }}>
            {DATA.experience.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  gap: '4px', padding: '16px 18px',
                  background: active === i ? 'var(--accent-light)' : 'var(--bg-card)',
                  border: `1.5px solid ${active === i ? 'var(--accent-mid)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.2s',
                  boxShadow: active === i ? '0 0 0 3px rgba(79,70,229,0.08)' : 'var(--shadow-sm)',
                }}
              >
                <span style={{
                  fontSize: '14px', fontWeight: '600',
                  color: active === i ? 'var(--accent-mid)' : 'var(--text-primary)',
                  lineHeight: 1.3,
                }}>
                  {exp.company.split('·')[0].trim()}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Right — detail card */}
          {DATA.experience.map((exp, i) => (
            <div
              key={i}
              style={{
                display: active === i ? 'block' : 'none',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-md)',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-mid)', flexShrink: 0,
                }}>
                  <BriefcaseIcon />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontSize: '12px', fontWeight: '600',
                      background: 'var(--accent-light)', color: 'var(--accent-mid)',
                      padding: '4px 12px', borderRadius: '99px',
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: '500' }}>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

              {/* Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {exp.points.map((pt, j) => (
                  <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: 'var(--accent-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent-mid)', flexShrink: 0, marginTop: '1px',
                    }}>
                      <CheckIcon />
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: 0 }}>
                      {pt}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills used — optional, pulled from exp.skills if defined */}
              {exp.skills && exp.skills.length > 0 && (
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Skills used
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((s, k) => (
                      <span key={k} style={{
                        fontSize: '12px', fontWeight: '500',
                        background: 'var(--bg)', border: '1px solid var(--border)',
                        borderRadius: '6px', padding: '4px 10px',
                        color: 'var(--text-secondary)', fontFamily: 'monospace',
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile accordion fallback */}
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
          @media (max-width: 700px) {
            .exp-tab-layout { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
