import React, { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';
import './Home.css';

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000); // Delay before showing the text
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-text">
        {showText && (
          <h1 className="main-text">
            Welcome to My World, <span>Where Code Meets Creativity!</span>
          </h1>
        )}
      </div>
      <div className="humor-text">
        <Typing
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          text={["Warning: Entering this site may result in excessive creativity, spontaneous humor, and a sudden urge to hire me."]}
        />
      </div>
      <div className="animated-circles">
        <div className="circle" style={{ animationDelay: '0s' }}></div>
        <div className="circle" style={{ animationDelay: '0.5s' }}></div>
        <div className="circle" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Home;
