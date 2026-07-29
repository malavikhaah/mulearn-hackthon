import React, { useEffect, useRef } from 'react';
import './Sponsors.css';

const supporters = [
  { name: 'MALABAR GOLD & DIAMONDS', logo: '/assets/logos/malabar-gold.png', color: '#540b33' },
  { name: 'LUMINAR TECHNOLAB', logo: '/assets/logos/luminar-technolab.png', color: '#812990' } 
];
export default function Sponsors() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(centerY - cardCenter);
        const range = window.innerHeight * 0.8;
        const normalizedDist = Math.min(distanceFromCenter / range, 1);

        const scale = 1.02 - (normalizedDist * 0.02);
        const opacity = 1 - (normalizedDist * 0.45);

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sp-section" id="sponsors">
      <div className="sp-container">
        <div className="sp-badge">04 / STRATEGIC_ALLIANCE</div>

        <header className="sp-header">
          <h2 className="sp-title">POWERED BY <span className="sp-accent">INDUSTRY_LEADERS</span></h2>
          <p className="sp-description">We collaborate with leading companies and innovators to power the next wave of products and experiences.</p>
        </header>

        <div className="sp-grid">
          {supporters.map((s, i) => (
            <article
              key={s.name}
              className="sp-card"
              ref={el => cardsRef.current[i] = el}
              style={{ ['--accent']: s.color }}
              aria-label={`${s.name} - ${s.role}`}
            >
              <div className="sp-card-glow" aria-hidden="true" />
              <div className="sp-card-border" aria-hidden="true" />

              <div className="sp-card-inner">
                <div className="sp-logo-box">
                  <div className="sp-logo-frame" />
                  <img className="sp-logo" src={s.logo} alt={`${s.name} logo`} />
                </div>

                <div className="sp-info">
                  <h3 className="sp-name">{s.name}</h3>
                  <span className="sp-role">{s.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
