import React, { useEffect, useRef } from 'react';
import './App.css';
import Guidelines from "./components/Guidelines";
import Timeline from "./components/Timeline";
import About from "./sections/About";
import PreEvents from "./sections/PreEvents";
import Sponsors from "./sections/Sponsors";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);

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

  useEffect(() => {
    const section = contactRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
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
            href="https://forms.gle/5yZW9axdN79i9LXC7"
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
      <PreEvents />
      <Guidelines />
      <Sponsors />

      <section className="contact-section fade-in-section" ref={contactRef} aria-label="Contact information">
        <div className="contact-shell">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="contact-badge">CONTACT • MAKEµ 2026</div>
              <div className="contact-eyebrow" aria-hidden="true">
                <span className="contact-dot" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="contact-title">Have questions about MAKEµ 2026?</h2>
              <p className="contact-text">
                Interested in participating, partnering, sponsoring, or mentoring? We’d love to hear from you.
                Whether you’re a student or alumnus, feel free to reach out. Our team is here to help and explore opportunities to collaborate.
              </p>
              <div className="social-links" aria-label="Social media links">
                <a
                  href="https://www.linkedin.com/company/mulearn-geci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn / µLearn-GECI
                </a>
                <a
                  href="https://www.instagram.com/mulearn.geci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram / mulearn.geci
                </a>
              </div>
            </div>

            <div className="contact-card" aria-label="Contact details">
              <div className="contact-card-top" aria-hidden="true" />
              <div className="contact-card-title">REACH US</div>

              <div className="contact-item">
                <div className="contact-item-head">
                  <span className="contact-icon" aria-hidden="true">V</span>
                  <span className="contact-label">Venue</span>
                </div>
                <p className="contact-value">
                  Government Engineering College Idukki
                  <br />
                  Painavu, Idukki, Kerala – 685603
                </p>
              </div>

              <div className="contact-item">
                <div className="contact-item-head">
                  <span className="contact-icon" aria-hidden="true">E</span>
                  <span className="contact-label">Email</span>
                </div>
                <a href="mailto:mulearn@gecidukki.ac.in" className="contact-value contact-link">
                  mulearn@gecidukki.ac.in
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-item-head">
                  <span className="contact-icon" aria-hidden="true">P</span>
                  <span className="contact-label">Phone</span>
                </div>
                <a href="tel:+916282089432" className="contact-value contact-link">
                  +91 6282089432
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
