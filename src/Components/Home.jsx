import React, { useEffect } from "react";
import './Home.css';
import mee from '../assets/mee.png';

const HomePage = () => {
  useEffect(() => {
    const textAnimations = document.querySelectorAll(".animate-text");
    textAnimations.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add("fade-in");
      }, index * 400);
    });
  }, []);

  return (
    <div className="homepage">
      <div className="content">
        <div className="intro">
          <div className="text-content animate-text">

            <h1 data-testId="headerText">Hey there, I'm <span className="highlight" style={{ color: 'yellow', fontSize: '3.3rem' }}>Sakshi</span>!</h1>
            <div className="highlight">
              <p>Your local Frontend Developer (and part-time code therapist for buggy JavaScript).</p>
              <p>With 4 years of experience, I’ve mastered:</p>
              <p>Writing code that works (and fixing it when it doesn’t).</p>
              <p>Arguing with CSS until it listens.</p>
              <p>Making websites so fun they’re borderline addictive.</p>
              <p style={{ color: 'white',fontSize:'1.3rem' }}>My curly hair handles more tangles than your JSON files.</p>
            </div>

            <div className="call-to-action">
              <p>Let's build something amazing together!</p>
              <h1>Hire Me</h1>
            </div>
          </div>
          <div className="image-container animate-text">
            <img
              src={mee}
              alt="Frontend Developer"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div className="background-animation">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
};

export default HomePage;
