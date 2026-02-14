import PropTypes from "prop-types";
import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer({ contactRef }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={contactRef}>
      <p>{`© ${currentYear} Varun. All rights reserved.`}</p>
      <div className="social-icons">
        <a href="https://github.com/mvreddy13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <MarkGithubIcon size={24} />
        </a>
        <a href="mailto:varun.zenith@protonmail.com" aria-label="Email">
          <MailIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/mvreddy13" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};
