import React, { useState, useEffect } from "react";
import "./App.css";
import Home from './Components/Home';
import Intro from './Components/Intro';
import Experience from './Components/Experience';
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const sections = [
  {
    id: 1,
    // backgroundColor: "#0001ff70",
    content: <div><Home /></div>,
    svg: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  },
  {
    id: 2,
    // backgroundColor: "rgb(239 216 68)",
    content: <div><Intro /></div>,
    svg: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  },
  {
    id: 3,
    // backgroundColor: "rgb(197 80 80)",
    content: <div><Experience /></div>,
    svg: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  },
  {
    id: 4,
    // backgroundColor: "rgb(153 153 51 / 82%)",
    content: <div><Skills /></div>,
    svg: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  },
  {
    id: 5,
    // backgroundColor: "#222",
    content: <div><Contact /></div>,
    svg: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleWheel = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }

    setTimeout(() => setIsScrolling(false), 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="app" style={{ backgroundColor: sections[currentSection]?.backgroundColor }}>
      <div className="navbar">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSection === index ? "active" : ""}`}
          ></div>
        ))}
      </div>

      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`section ${index === currentSection ? "visible" : ""}`}
        >
          <h1>{section.content}</h1>
          {index === 2 && (
            <div
              className="parallax"
              style={{
                transform: `translateY(${scrollPosition * 0.1}px)`,
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
