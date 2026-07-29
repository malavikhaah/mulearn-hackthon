import React, { useEffect, useRef } from 'react';
import './PreEvents.css';

const events = [
  {
    title: 'Problem Statement Hunt',
    label: '29 July',
    description: 'Explore challenge statements and identify the strongest problem to solve before the hackathon starts.',
  },
  {
    title: 'Find Your Teammate',
    label: '03 August',
    description: 'Connect with fellow participants and form your dream hackathon team.',
  },
  {
    title: 'GitHub Session',
    label: '04 August',
    description: 'Learn repository workflows, version control best practices, and collaboration strategies.',
  },
  {
    title: 'DSA Competition',
    label: '05 August',
    description: 'Sharpen algorithm skills with a timed coding contest that tests speed and logic.',
  },
  {
    title: 'AI Tools Intro',
    label: '06 August',
    description: 'Discover AI tools that help speed up ideation, prototyping, and presentation workflows.',
  },
];

export default function PreEvents() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pe-section fade-in-section" ref={sectionRef} aria-label="Pre-events schedule">
      <div className="pe-inner">
        <div className="pe-tag" aria-hidden="true">
          <span className="pe-tag-line" />
          <span className="pe-tag-text">02 / PRE EVENTS</span>
        </div>

        <div className="pe-heading-block">
          <h2 className="pe-heading">PRE-EVENTS</h2>
          <p className="pe-subtitle">
            Warm up for MAKEµ with the sessions that help you prepare, connect, and compete.
          </p>
        </div>

        <div className="pe-timeline" role="list" aria-label="Pre-event timeline">
          <div className="pe-line" aria-hidden="true" />
          {events.map((event, idx) => (
            <article
              key={event.title}
              className={`pe-item ${idx % 2 === 0 ? 'pe-item--left' : 'pe-item--right'}`}
              role="listitem"
            >
              <div className="pe-item-card">
                <span className="pe-item-label">{event.label}</span>
                <h3 className="pe-item-title">{event.title}</h3>
                <p className="pe-item-description">{event.description}</p>
              </div>
              <span className="pe-item-node" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
