import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DecryptedText from "./DecryptedText";
import PixelCard from "./PixelCard";

const Hero = ({ heroRef, aboutRef, skillsRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "HTML",
    "CSS",
    "Typescript",
    "Tailwind CSS",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <PixelCard key={index} variant="pink" className="skill-card">
        <div className="skill-wrapper">
          <span className="skill-text">{skill}</span>
        </div>
      </PixelCard>
    ));
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
        <DecryptedText
          text="Hey, I'm Varun"
          speed={80}
          maxIterations={15}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          className="hero-unit-heading"
          parentClassName="inline-block"
          encryptedClassName="scrambled-text"
          animateOn="view"
        />
        <p>Full-Stack Developer | MERN Stack</p>
        <section className="about-section" ref={aboutRef}>
          <DecryptedText
            text="About Me"
            speed={150}
            maxIterations={30}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={false}
            className="about-title"
            parentClassName="inline-block"
            encryptedClassName="about-title-scrambled"
            animateOn="view"
          />
          <p className="about-text">
            Hey there! I’m Varun, a Full Stack Developer who loves turning ideas
            into seamless, pixel-perfect web apps. I thrive on building dynamic
            platforms using the MERN stack and crafting intuitive UIs with React
            and Tailwind CSS. Coding is my playground, where I experiment with
            animations, APIs, and databases to create tools that make life
            easier and more fun. When I’m not coding, you’ll find me playing
            video games or planning my next big project. Let’s build something
            amazing together!
          </p>
        </section>
        <h2 className="skills">Skills</h2>
        <div className="tech-stack" ref={skillsRef}>
          {renderSkills()}
        </div>
        {/* <button className="cta">View My Work</button> */}
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  heroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  skillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};
