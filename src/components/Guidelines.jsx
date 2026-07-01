import React, { useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Clock3,
  Users,
  CheckCircle2,
  Lightbulb,
  Target,
  Layers,
  GitBranch,
  Boxes,
  Sparkles,
  FileText,
  FolderGit2,
  MonitorPlay,
  Video,
  BookOpen,
  ShieldAlert,
  Wifi,
  Coffee,
  BedDouble,
  LifeBuoy,
  Rocket,
} from "lucide-react";
import "./Guidelines.css";

/* ---------- static content -------------------------------------- */

const eligibility = [
  "Open to all students in GECI",
  "Teams of 2–3 members",
  "Cross-disciplinary collaboration encouraged",
];

const problemStatements = [
  "Choose from official problem statements",
  "Solve practical, industrial, or social challenges",
  "Focus on building a usable and impactful product",
];

const productRules = [
  { icon: Boxes, text: "Build a working prototype, MVP, or product" },
  { icon: ShieldAlert, text: "Existing projects are not allowed" },
  { icon: GitBranch, text: "Open-source libraries, frameworks, and APIs may be used" },
  { icon: Layers, text: "Focus on usability, scalability, and impact" },
  { icon: Target, text: "Demonstrate a clear problem–solution fit" },
];

const mentorship = [
  "Industry mentors available",
  "Alumni mentors available",
  "Seek feedback continuously",
  "Mentors guide but do not contribute to coding",
];

const submissions = [
  { icon: FileText, text: "Project title" },
  { icon: Target, text: "Problem statement" },
  { icon: Users, text: "Team details" },
  { icon: Boxes, text: "Working prototype" },
  { icon: FolderGit2, text: "Source code repository" },
  { icon: MonitorPlay, text: "Presentation / pitch deck" },
  { icon: Video, text: "Demo video (if required)" },
  { icon: BookOpen, text: "Documentation" },
];

const evaluation = [
  { label: "Innovation & Creativity", value: 20 },
  { label: "Product Development", value: 25 },
  { label: "Technical Implementation", value: 20 },
  { label: "Impact & Relevance", value: 20 },
  { label: "Presentation & Demonstration", value: 15 },
];

const conduct = [
  "Respect everyone",
  "No plagiarism",
  "No harassment",
  "Follow organizer instructions",
];

const facilities = [
  { icon: Wifi, text: "Internet" },
  { icon: Boxes, text: "Workspace" },
  { icon: LifeBuoy, text: "Mentor support" },
  { icon: Coffee, text: "Refreshments" },
  { icon: BedDouble, text: "Rest area" },
  { icon: ShieldAlert, text: "Emergency assistance" },
];

/* ---------- scroll-reveal hook ------------------------------------ */

function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".gl-reveal");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

/* ---------- small building blocks --------------------------------- */

function Eyebrow({ children }) {
  return (
    <p className="gl-eyebrow gl-reveal">
      <span className="gl-eyebrow-mu" aria-hidden="true"></span>
      {children}
    </p>
  );
}

function RingProgress({ value, label, delayMs }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  return (
    <div
      className="gl-ring-card gl-reveal"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="gl-ring" style={{ "--gl-pct": value }}>
        <svg viewBox="0 0 132 132" className="gl-ring-svg">
          <circle
            className="gl-ring-track"
            cx="66"
            cy="66"
            r={r}
            fill="none"
            strokeWidth="9"
          />
          <circle
            className="gl-ring-fill"
            cx="66"
            cy="66"
            r={r}
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            style={{
              "--gl-circumference": circumference,
              "--gl-offset": circumference - (circumference * value) / 100,
            }}
          />
        </svg>
        <div className="gl-ring-value">
          <span>{value}</span>
          <small>%</small>
        </div>
      </div>
      <p className="gl-ring-label">{label}</p>
    </div>
  );
}

/* ---------- main component ----------------------------------------- */

export default function Guidelines() {
  const rootRef = useReveal();

  return (
    <section className="guidelines" ref={rootRef} aria-label="Hackathon guidelines">
      <div className="gl-inner">
        {/* Heading */}
        <header className="gl-head">
          <Eyebrow></Eyebrow>
          <h2 className="gl-heading gl-reveal">Hackathon Guidelines</h2>
          <p className="gl-sub gl-reveal">
            Everything you need to know before participating in MakeMu 2026.
          </p>
        </header>

        {/* 1. Theme */}
        <article className="gl-card gl-feature gl-reveal">
          <div className="gl-feature-icon" aria-hidden="true">
            <Sparkles size={26} />
          </div>
          <h3 className="gl-card-title">From Idea to Product</h3>
          <p className="gl-card-text">
            MakeMu is a product-building hackathon that encourages
            participants to develop innovative and impactful solutions to
            real-world problems.
          </p>
        </article>

        {/* 2. Event details */}
        <div className="gl-grid gl-grid-2">
          <article className="gl-card gl-info gl-reveal">
            <div className="gl-info-icon" aria-hidden="true">
              <Calendar size={22} />
            </div>
            <div>
              <h4 className="gl-info-title">Date</h4>
              <p className="gl-info-text">August 8–9, 2026</p>
              <div className="gl-info-meta">
                <Clock3 size={15} aria-hidden="true" />
                <span>3:00 PM Aug 8 – 3:00 PM Aug 9</span>
              </div>
            </div>
          </article>

          <article className="gl-card gl-info gl-reveal">
            <div className="gl-info-icon" aria-hidden="true">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="gl-info-title">Venue</h4>
              <p className="gl-info-text">Government Engineering College Idukki</p>
            </div>
          </article>
        </div>

        {/* 3. Eligibility */}
        <article className="gl-card gl-reveal">
          <h3 className="gl-card-title gl-card-title--sm">Eligibility</h3>
          <ul className="gl-check-list">
            {eligibility.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* 4. Problem statements */}
        <article className="gl-card gl-reveal">
          <h3 className="gl-card-title gl-card-title--sm">
            <Lightbulb size={20} aria-hidden="true" className="gl-title-icon" />
            Problem Statements
          </h3>
          <ul className="gl-bullet-list">
            {problemStatements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {/* 5. Product development rules */}
        <div className="gl-section-label gl-reveal">
          <span>Product Development Rules</span>
        </div>
        <div className="gl-grid gl-grid-rules">
          {productRules.map(({ icon: Icon, text }) => (
            <article className="gl-card gl-rule gl-reveal" key={text}>
              <Icon size={20} aria-hidden="true" className="gl-rule-icon" />
              <p>{text}</p>
            </article>
          ))}
        </div>

        {/* 6. Mentorship */}
        <article className="gl-card gl-premium gl-reveal">
          <h3 className="gl-card-title gl-card-title--sm">Mentorship</h3>
          <ul className="gl-bullet-list gl-bullet-list--two-col">
            {mentorship.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {/* 7. Submission requirements */}
        <div className="gl-section-label gl-reveal">
          <span>Submission Requirements</span>
        </div>
        <div className="gl-grid gl-grid-submissions">
          {submissions.map(({ icon: Icon, text }) => (
            <div className="gl-chip gl-reveal" key={text}>
              <Icon size={17} aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* 8. Evaluation criteria */}
        <div className="gl-section-label gl-reveal">
          <span>Evaluation Criteria</span>
        </div>
        <div className="gl-grid gl-grid-eval">
          {evaluation.map((item, i) => (
            <RingProgress
              key={item.label}
              value={item.value}
              label={item.label}
              delayMs={i * 90}
            />
          ))}
        </div>

        {/* 9. Code of conduct */}
        <article className="gl-card gl-warning gl-reveal">
          <div className="gl-warning-head">
            <ShieldAlert size={20} aria-hidden="true" />
            <h3 className="gl-card-title gl-card-title--sm">Code of Conduct</h3>
          </div>
          <ul className="gl-bullet-list gl-bullet-list--two-col">
            {conduct.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {/* 10. Facilities */}
        <div className="gl-section-label gl-reveal">
          <span>Facilities Provided</span>
        </div>
        <div className="gl-grid gl-grid-facilities">
          {facilities.map(({ icon: Icon, text }) => (
            <div className="gl-facility gl-reveal" key={text}>
              <Icon size={22} aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* 11. Vision */}
        <article className="gl-card gl-vision gl-reveal">
          <Rocket size={26} aria-hidden="true" className="gl-vision-icon" />
          <h3 className="gl-card-title">Our Vision</h3>
          <p className="gl-card-text">
            MakeMu is not just about winning a competition. It is about
            learning through building, collaborating with others, and
            creating products that can make a meaningful impact on society.
          </p>
          <p className="gl-slogan">Build. Innovate. Impact.</p>
        </article>
      </div>
    </section>
  );
}
