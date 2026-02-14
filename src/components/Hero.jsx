import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DecryptedText from "./DecryptedText";
import PixelCard from "./PixelCard";

const Hero = ({ heroRef, aboutRef, skillsRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skills = [
    "Java",
    "Typescript",
    "React",
    "Tailwind CSS",
    "Python",
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
        <p>Software Development Engineer | Amazon</p>
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
            Hey there! I'm Varun, a Software Development Engineer at Amazon
            where I work on testing and validating automated fulfillment systems
            and building AI-powered tools that analyze operational metrics. I
            enjoy solving complex problems across the full stack with Java,
            TypeScript, and React. When I'm not coding, you'll find me playing
            video games or traveling to explore new places. Let's connect!
          </p>
        </section>
        <h2 className="skills">Skills</h2>
        <div className="tech-stack" ref={skillsRef}>
          {renderSkills()}
        </div>
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
