import PropTypes from "prop-types";

export default function NavBar({ heroRef, aboutRef, skillsRef }) {
  const handleClick = (section) => {
    document.querySelectorAll(".navbar-element").forEach((el) => {
      el.classList.remove("active");
    });

    const clickedElement = document.querySelector(
      `[data-section="${section}"]`
    );
    if (clickedElement) {
      clickedElement.classList.add("active");
    }

    // Scroll to the corresponding section using refs
    if (section === "home" && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "contact" && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="navbar">
        <button className="navbar-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <text
              x="50%"
              y="50%"
              fontFamily="Arial"
              fontSize="14"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="logo-text"
            >
              Varun
            </text>
          </svg>
        </button>
        <div className="navbar-inner">
          <a
            onClick={() => handleClick("home")}
            className="navbar-element"
            data-section="home"
          >
            Home
          </a>
          <a
            onClick={() => handleClick("about")}
            className="navbar-element"
            data-section="about"
          >
            About
          </a>
          <a
            onClick={() => handleClick("contact")}
            className="navbar-element"
            data-section="contact"
          >
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  heroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  skillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};
