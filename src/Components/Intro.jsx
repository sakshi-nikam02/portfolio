import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Intro.css';

function Intro() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="introductionContainer" ref={ref}>
      {/* Intro Message */}
      <motion.h1
        className="introName"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hello There!
      </motion.h1>

      <motion.p
        className="introSubtitle"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I’m Sakshi Nikam, and this is my creative journey as a frontend developer.
      </motion.p>

      {/* Cards Container */}
      <div className="cardsContainer">
        {/* A Bit About Me Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="cardInner">
            <div className="cardFront">
              <h3>A Bit About Me...</h3>
            </div>
            <div className="cardBack">
              <p>
                I'm a passionate and creative frontend developer with a deep love for crafting unique and beautiful user interfaces. With a foundation in HTML, CSS, and JavaScript, I’ve grown to specialize in React and modern web technologies. I believe in making every line of code a piece of art.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fun Fact Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="cardInner">
            <div className="cardFront">
              <h3>Fun Fact 🤓</h3>
            </div>
            <div className="cardBack" crimson>
              <p>
                Fun Fact: I sometimes spend more time debugging my code than writing it. Debugging is my cardio. 😂
              </p>
            </div>
          </div>
        </motion.div>

        {/* My Journey Card */}
        <motion.div
          className="card"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="cardInner">
            <div className="cardFront">
              <h3>My Journey 🚀</h3>
            </div>
            <div className="cardBack">
              <p>
                My journey began with a fascination for design and user experiences. I dove deep into web development, and soon after, I discovered the power of React. Since then, I've been creating responsive, scalable, and interactive web apps that solve real-world problems. From websites to apps, my passion grows with each project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Personal Philosophy */}
      <motion.p
        className="personalPhilosophy"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        “Code is not just syntax; it’s creativity in motion.”
      </motion.p>

      <div>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
}

export default Intro;
