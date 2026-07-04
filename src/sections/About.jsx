import React from 'react';
import "./About.css";

function About() {
  return (
    <section className="ab-section" aria-label="About the event and community">
      <div className="ab-inner">

        {/* Section tag */}
        <div className="ab-tag" aria-hidden="true">
          <span className="ab-tag-line" />
          <span className="ab-tag-text">02 / ABOUT</span>
        </div>

        <div className="ab-grid">

          {/* Card 1 — About µLEARN GECI */}
          <article className="ab-card ab-card--primary" aria-label="About µLEARN GECI">
            <div className="ab-card-number" aria-hidden="true">01</div>
            <h3 className="ab-card-title">ABOUT µLEARN GECI</h3>
            <div className="ab-card-divider" aria-hidden="true" />
            <p className="ab-card-text">
              µLEARN GECI is a student-driven learning community at Government Engineering College
              Idukki focused on peer learning, skill development, and real-world problem-solving.
              Through learning circles, bootcamps, and technology programs, we help students identify
              their strengths, explore emerging technologies, and build impactful projects.
            </p>
            <p className="ab-card-text">
              Our community has grown into one of the most active student groups on campus, fostering
              a culture of innovation, collaboration, and continuous learning among students from all
              departments.
            </p>
            <a 
              href="/brochure.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ab-card-btn" 
              aria-label="View event brochure"
            >
              VIEW BROCHURE
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1V10M7 10L3 6.5M7 10L11 6.5M2 13H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </article>

          {/* Card 2 — About MAKEµ */}
          <article className="ab-card ab-card--secondary" aria-label="About MAKEµ Hackathon">
            <div className="ab-card-number" aria-hidden="true">02</div>
            <h3 className="ab-card-title">ABOUT MAKEµ</h3>
            <div className="ab-card-divider ab-card-divider--amber" aria-hidden="true" />
            <p className="ab-card-text">
              MAKEµ is a 24-hour product-building hackathon organized by µLEARN GECI. It challenges
              students to transform innovative ideas into functional solutions that address real-world
              problems.
            </p>
            <p className="ab-card-text">
              Participants collaborate with peers, receive mentorship from alumni and industry
              professionals, and build products with meaningful impact. By the end of the event, each
              team presents a working prototype, MVP, or product that demonstrates innovation,
              practicality, and real-world impact.
            </p>
            <div className="ab-stats" role="list" aria-label="Event statistics">
              {[
                { value: "24H",  label: "Hack Duration" },
                { value: "2–4",  label: "Team Size"     },
                { value: "100+", label: "Participants"  },
              ].map(({ value, label }) => (
                <div className="ab-stat" key={label} role="listitem">
                  <span className="ab-stat-value">{value}</span>
                  <span className="ab-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default About;