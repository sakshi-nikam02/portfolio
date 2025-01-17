import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { FaBuilding, FaReact, FaAward } from "react-icons/fa";

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

const Experience = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2 }); // Adjust threshold as needed

    const experiences = [
        {
            id: 1,
            company: "Accenture",
            role: "Advanced App Engineering Analyst",
            duration: "October 2021 - Present",
            achievements: [
                "Developed advanced features to enhance user experience.",
                "Created reusable components to streamline development.",
                "Boosted performance and earned the 'Sparkling Star Award'.",
            ],
            icon: <FaReact />,
        },
        {
            id: 2,
            company: "Stacklab",
            role: "UI Developer",
            duration: "April 2021 - September 2021",
            achievements: [
                "Designed and developed responsive web applications.",
                "Collaborated effectively with teams to meet client goals.",
            ],
            icon: <FaBuilding />,
        },
        {
            id: 3,
            company: "Amazon",
            role: "Customer Service Associate",
            duration: "July 2018 - March 2021",
            achievements: [
                "Built and maintained productive customer relationships.",
                "Resolved queries to ensure high customer satisfaction.",
            ],
            icon: <FaAward />,
        },
    ];

    return (
        <div className="experience" ref={ref}>
            <h1 className="section-title">Professional Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        className="timeline-item"
                        key={exp.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="timeline-dot">
                            <div className="icon">{exp.icon}</div>
                        </div>
                        <div className="timeline-content">
                            <h2 className="role">{exp.role}</h2>
                            <h3 className="company">
                                {exp.company} <span className="duration">({exp.duration})</span>
                            </h3>
                            <ul className="achievements">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
