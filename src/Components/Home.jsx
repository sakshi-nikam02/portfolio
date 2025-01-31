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

          <h1 data-testId = "headerText">Hey there, I'm <span className="highlight" style={{color:'yellow',fontSize:'3.3rem'}}>Sakshi</span>!</h1>
          <p className="highlight">Your local Frontend Developer (and part-time code therapist for buggy JavaScript).</p>
          <p className="highlight">With 4 years of experience, I’ve mastered:</p>
          <p className="highlight">Writing code that works (and fixing it when it doesn’t).</p>
          <p className="highlight">Arguing with CSS until it listens.</p>
          <p className="highlight">Making websites so fun they’re borderline addictive.</p>
          <p className="highlight" style={{color:'white'}}>My curly hair handles more tangles than your JSON files.</p>
           
           
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
