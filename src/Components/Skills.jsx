import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

const useInView = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

function Skills() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const skills = [
    { icon: faHtml5, label: "HTML", description: "The foundation of everything web! Keeps your site from falling apart." },
    { icon: faCss3Alt, label: "CSS", description: "The art of making websites look as awesome as they work." },
    { icon: faJsSquare, label: "JavaScript", description: "Turning static pages into magical interactions!" },
    { icon: faReact, label: "React", description: "For when you need to make a website that’s also a brainiac." },
    { icon: faBootstrap, label: "Bootstrap", description: "Want to look good fast? Bootstrap’s your stylish friend." },
    { icon: faGitAlt, label: "Git", description: "Version control, because no one likes chaos!" },
    { icon: null, label: "MUI", description: "Material UI: Making React look modern with minimal effort." },
    { icon: null, label: "Next.js", description: "Fast, server-side rendering with a touch of React magic." },
    { icon: null, label: "Redux", description: "For when your app state needs to behave itself!" },
    { icon: null, label: "Responsive Web Design", description: "One size fits all—no more horizontal scrolling!" },
    { icon: null, label: "Cross Browser Compatibility", description: "Because not everyone uses Chrome… sadly." },
    { icon: null, label: "Styled Components", description: "CSS-in-JS. When you want to make styling as cool as JavaScript." },
];


  return (
    <div className="skillsContainer" ref={ref}>
      <motion.h2
        className="skillsHeader"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        My Super-Powered Skills 💪
      </motion.h2>
      <motion.p
        className="skillsSubheader"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
      >
        "Faster than a browser refresh, more powerful than a JavaScript closure!"
      </motion.p>
      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skillCard"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={
              isVisible
                ? { opacity: 1, rotateY: 0 }
                : { opacity: 0, rotateY: -90 }
            }
            transition={{
              duration: 1,
              delay: index * 0.2,
              type: "spring",
              stiffness: 120,
            }}
          >
            <div className="cardInner">
              <div className="cardFront1">
                <FontAwesomeIcon icon={skill.icon} style={{ fontSize: "3rem", color: "#fff" }} />
                <p>{skill.label}</p>
              </div>
              <div className="cardBack1">
                <p>{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
}

export default Skills;
