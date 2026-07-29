import React, { useState, useEffect, useRef } from "react";
import "./Timeline.css";

export default function Timeline() {
  const targetDate = new Date("August 8, 2026 15:00:00").getTime();
  const sectionRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="tl-section fade-in-section" 
      aria-label="Event countdown and details"
      ref={sectionRef}
    >
      <div className="tl-inner">

        {/* Section tag */}
        <div className="tl-tag" aria-hidden="true">
          <span className="tl-tag-line" />
          <span className="tl-tag-text">01 / EVENT</span>
        </div>

        {/* Main date heading */}
        <div className="tl-date-block">
          <h2 className="tl-date">
            AUG <span className="tl-date-accent">8–9</span>
          </h2>
          <p className="tl-year">2026</p>
        </div>

        <p className="tl-quote">
          24 HOURS OF PURE PRODUCT BUILDING &amp; INNOVATION
        </p>

        {/* Countdown */}
        <div className="tl-countdown" role="timer" aria-label="Countdown to event">
          {[
            { value: timeLeft.days,    label: "DAYS"  },
            { value: timeLeft.hours,   label: "HRS"   },
            { value: timeLeft.minutes, label: "MINS"  },
            { value: timeLeft.seconds, label: "SECS"  },
          ].map(({ value, label }, i) => (
            <div className="tl-count-cell" key={label}>
              {i > 0 && <span className="tl-colon" aria-hidden="true">:</span>}
              <div className="tl-count-box">
                <span className="tl-count-value">{value}</span>
                <span className="tl-count-label">{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://forms.gle/5yZW9axdN79i9LXC7"
          target="_blank"
          rel="noopener noreferrer"
          className="tl-cta"
          aria-label="Register for the hackathon"
        >
          <span className="tl-cta-inner">
            <span>REGISTER NOW</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="tl-cta-bg" aria-hidden="true" />
        </a>

        {/* Location */}
        <div className="tl-location">
          <span className="tl-location-label">BATTLEGROUND LOCATION</span>
          <a
            href="https://maps.app.goo.gl/g69Fk6y4zB153XzN9"
            target="_blank"
            rel="noopener noreferrer"
            className="tl-location-name"
            aria-label="View location on map: Government Engineering College Idukki"
          >
            GOVERNMENT ENGINEERING COLLEGE IDUKKI
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="tl-loc-icon">
              <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 1C4.24 1 2 3.24 2 6C2 9.75 7 13 7 13C7 13 12 9.75 12 6C12 3.24 9.76 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
