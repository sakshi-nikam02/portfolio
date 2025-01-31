import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add("animate");
        } else {
          contactRef.current.classList.remove("animate");
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-page" ref={contactRef}>
      <h1 className="contact-title">Stay in Touch!</h1>
      <p className="contact-subtitle">
        Have questions, ideas, or just want to share memes? Reach out!
      </p>

      <div className="contact-info">
        <p>
          📧 <strong>Email:</strong> <a href="mailto:sakshi.nikam27@gmail.com">sakshi.nikam27@gmail.com</a>
        </p>
        <p>
          📞 <strong>Phone:</strong> <a href="tel:+917020850141">+91 7020850141</a>
        </p>
        <p>
          💼 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/sakshi-nikam-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sakshi-nikam-02
          </a>
        </p>
      </div>

      <p className="contact-footer">
        PS: If you spot a bug in my portfolio, it's probably an "easter egg." 😉
      </p>

      <div>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
};

export default Contact;
