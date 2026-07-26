import React, { useEffect, useRef } from 'react';
import './Sponsors.css';

const supporters = [
  { name: 'NOVA TECH', role: 'TITLE PARTNER', initials: 'NT', color: '#00e5ff' },
  { name: 'PIXEL LABS', role: 'TECH PARTNER', initials: 'PL', color: '#ffab00' },
  { name: 'AURORA AI', role: 'AI PARTNER', initials: 'AA', color: '#00e5ff' },
  { name: 'HORIZON CORE', role: 'COMMUNITY PARTNER', initials: 'HC', color: '#ffab00' },
  { name: 'BYTE CRAFT', role: 'CREATIVE PARTNER', initials: 'BC', color: '#00e5ff' },
];

export default function Sponsors() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sp-section" aria-label="Sponsors and partners" ref={sectionRef}>
      <div className="sp-container">
        
        <div className="sp-header">
          <div className="sp-badge">
            <span className="sp-badge-dot"></span>
            NETWORK • ALLIANCE
          </div>
          <h2 className="sp-title">BACKED BY BOLD <span className="sp-accent">COLLABORATORS</span></h2>
          <p className="sp-description">
            These are placeholder supporters for the event page. Swap them with real partners once the sponsorship lineup is finalized.
          </p>
        </div>

        <div className="sp-grid">
          {supporters.map((item, idx) => (
            <div 
              className="sp-card" 
              key={item.name}
              style={{ '--accent': item.color, '--delay': `${idx * 0.1}s` }}
            >
              <div className="sp-card-glow"></div>
              <div className="sp-card-inner">
                <div className="sp-logo-box">
                  <span className="sp-initials">{item.initials}</span>
                  <div className="sp-logo-frame"></div>
                </div>
                <div className="sp-info">
                  <h3 className="sp-name">{item.name}</h3>
                  <span className="sp-role">{item.role}</span>
                </div>
              </div>
              <div className="sp-card-border"></div>
            </div>
          ))}
        </div>

        <div className="sp-footer">
          <p className="sp-footer-text">Interested in partnering? <a href="mailto:mulearn@gecidukki.ac.in" className="sp-link">Contact our team</a></p>
        </div>

      </div>
    </section>
  );
}
