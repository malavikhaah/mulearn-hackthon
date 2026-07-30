import React, { useEffect, useRef } from "react";
import "./Guidelines.css";

const rules = [
  {
    id: "01",
    title: "TEAM SIZE",
    text: "Each team must consist of 2 to 3 members. Solo entries are not permitted.",
  },
  {
    id: "02",
    title: "HACK DURATION",
    text: "Participants will have 24 hours to design, build, and demo their solution.",
  },
  {
    id: "03",
    title: "ORIGINAL WORK",
    text: "All projects must be developed during the hackathon. Pre-built solutions are strictly not allowed.",
  },
  {
    id: "04",
    title: "BRING YOUR EQUIPMENT",
    text: "Participants must bring their own laptops, chargers, and development tools. Internet access will be provided on-site.",
  },
  {
    id: "05",
    title: "FOOD & REFRESHMENTS",
    text: "Meals and refreshments will be provided for all registered participants throughout the event.",
  },
];

export default function Guidelines() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gl-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gl-section" aria-label="Hackathon guidelines">
      <div className="gl-inner">

        {/* Section tag */}
        <div className="gl-tag" aria-hidden="true">
          <span className="gl-tag-line" />
          <span className="gl-tag-text">03 / GUIDELINES</span>
        </div>

        {/* Heading */}
        <div className="gl-heading-block">
          <h2 className="gl-heading">
            HACK<span className="gl-heading-accent">ATHON</span>
            <br />
            RULES
          </h2>
          <p className="gl-heading-sub">
            Read carefully before you register. Violation of any rule may result in disqualification.
          </p>
        </div>

        {/* Rules list */}
        <ul className="gl-list" aria-label="List of hackathon rules">
          {rules.map((rule, idx) => (
            <li
              key={rule.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              className="gl-item gl-hidden"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <span className="gl-item-id" aria-hidden="true">{rule.id}</span>
              <div className="gl-item-body">
                <h3 className="gl-item-title">{rule.title}</h3>
                <p className="gl-item-text">{rule.text}</p>
              </div>
              <span className="gl-item-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
