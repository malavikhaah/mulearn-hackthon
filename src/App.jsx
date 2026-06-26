import React from 'react';
import './App.css';
import Guidelines from "./components/Guidelines";


function App() {
  return (
    
      <main className="landing" aria-label="Makeμ hackathon landing page">
      <div className="texture" aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />

      <section className="hero-only">
        <div className="mu-field" aria-hidden="true">
          <span>μ</span>
        </div>

        <div className="host-pill">
          <img src="/mulearn-idk.png" alt="μLearn IDK" />
        </div>

        <h1 className="main-title" aria-label="MAKE μ">
          <span className="title-word">MAKE-</span>
          <span className="title-mu">μ</span>
        </h1>
        <p className="sub-title">Hackathon</p>

        <div className="scroll-cue">
          <span>Scroll to begin</span>
          <i />
        </div>
      </section>

      <Guidelines/>
    </main>
    
  );
}

export default App;
