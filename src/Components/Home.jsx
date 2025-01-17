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
    <div className="home-container">
      <div className="welcome-container">
        <div className="welcome-text">
          {showText && (
            <h1 className="main-text">
              Welcome to My World, <span>Where Code Meets Creativity!</span>
            </h1>
          )}
        </div>

        {/* Humor text with typing effect */}
        <div className="humor-text">
          <Typing
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            text={["Heads up: A burst of creativity and a hiring urge might follow your visit!"]}
          />
        </div>

        <div class="warning-container">
          <div class="warning-text">
            <span>Warning: This site is currently more of a desktop show!</span> <br />
            Mobile responsiveness is under construction — it's coming soon! <span>📱🔧</span>
          </div>
        </div>

        {/* Animated circles */}
        <div className="animated-circles">
          <div className="circle" style={{ animationDelay: '0s' }}></div>
          <div className="circle" style={{ animationDelay: '0.5s' }}></div>
          <div className="circle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
