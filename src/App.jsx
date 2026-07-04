import React, { useEffect, useRef } from 'react';
import './App.css';
import Guidelines from "./components/Guidelines";
import Timeline from "./components/Timeline";
import About from "./sections/About";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hexGrid = document.querySelector('.hex-grid-overlay');
      if (hexGrid) {
        hexGrid.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="landing" aria-label="MAKEµ hackathon landing page">
      <BackgroundParticles />

      {/* Fixed geometric overlays */}
      <div className="hex-grid-overlay" aria-hidden="true" />
      <div className="corner-accent top-left" aria-hidden="true" />
      <div className="corner-accent top-right" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>

        {/* Top nav bar */}
        <nav className="top-nav" aria-label="Site navigation">
          <div className="nav-logo">
            <img src="/mulearn-idk.png" alt="µLEARN GECI logo" className="nav-logo-img" />
          </div>
          <a
            href="https://forms.gle/make-mu-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-register-btn"
            aria-label="Register for the hackathon"
          >
            <span className="nav-btn-label">REGISTER</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </a>
        </nav>

        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            <span>µLEARN GECI PRESENTS</span>
          </div>

          <h1 className="hero-title" aria-label="MAKEµ hackathon">
            <span className="title-line-1">MAKE</span>
            <span className="title-mu">µ</span>
          </h1>

          <p className="hero-subtitle">HACKATHON</p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="meta-accent">AUG 8–9</span> · 2026
            </span>
            <span className="meta-divider" aria-hidden="true">|</span>
            <span className="hero-meta-item">24 HRS</span>
            <span className="meta-divider" aria-hidden="true">|</span>
            <span className="hero-meta-item">GEC IDUKKI</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-bar">
            <div className="scroll-bar-fill" />
          </div>
        </div>

      </section>

      <Timeline />
      <About />
      <Guidelines />

      {/* Footer */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img src="/mulearn-idk.png" alt="µLEARN GECI" className="footer-logo" />
            <p className="footer-tagline">Built by builders. For builders.</p>
          </div>
          <div className="footer-right">
            <p className="footer-copy">© 2026 µLEARN GECI · MAKEµ Hackathon · GEC Idukki</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
