import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <p>{`© ${currentYear} Varun. All rights reserved.`}</p>
      <div className="social-icons">
        <MarkGithubIcon
          size={24}
          onClick={() => handleRedirect("https://github.com/mvreddy13")}
        />
        <MailIcon
          size={24}
          onClick={() => handleRedirect("mailto:varun.zenith@protonmail.com")}
        />
        <FaLinkedin
          size={24}
          onClick={() => handleRedirect("https://linkedin.com/in/mvreddy13")}
        />
      </div>
    </footer>
  );
}
