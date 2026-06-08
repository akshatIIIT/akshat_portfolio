import React, { useState } from 'react';
import { DATA } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Replace this with your preferred form handler:
    // e.g. Formspree: fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
    // For now, we'll just show a success state.
    const mailtoLink = `mailto:${DATA.email}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
    setSent(true);
  };

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: DATA.linkedin, handle: 'Connect on LinkedIn' },
    { icon: '🐙', label: 'GitHub', href: DATA.github, handle: 'View my code' },
    { icon: '✉️', label: 'Email', href: `mailto:${DATA.email}`, handle: DATA.email },
    ...(DATA.phone ? [{ icon: '📱', label: 'Phone', href: `tel:${DATA.phone}`, handle: DATA.phone }] : []),
    ...(DATA.twitter ? [{ icon: '🐦', label: 'Twitter', href: DATA.twitter, handle: '@handle' }] : []),
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-card)' }}>
      <div className="section-inner">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Open to opportunities</h3>
            <p>
              I'm actively looking for internships, full-time roles, and interesting projects.
              Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="contact-link-item" target="_blank" rel="noreferrer">
                  <span className="contact-link-icon">{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>{s.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.handle}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '12px' }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h4 style={{ fontSize: '20px', marginBottom: '8px' }}>Message sent!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Your mail client should have opened. I'll get back to you soon.
                </p>
                <button
                  className="btn-outline"
                  style={{ marginTop: '24px' }}
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <h4>Send a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text" name="name" placeholder="John Doe"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email" name="email" placeholder="john@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message" rows={5} placeholder="Hi Akshat, I'd love to connect about..."
                      value={form.message} onChange={handleChange} required
                    />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
