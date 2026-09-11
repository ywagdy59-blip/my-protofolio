import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import cvFile from "../cv/Youssef_Wagdy_Professional_CV (1).docx (2).pdf";

const Navbar = () => {
  return (
    <nav className="site">
      <div className="wrap">

        {/* Logo */}
        <a href="/" className="brand">
          Youssef Wagdy
        </a>

        {/* Navigation Links */}
        <ul className="navlinks">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="nav-socials">
          <a
            href="https://github.com/ywagdy59-blip"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/2001557122676"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* CV Button */}
        <a
          href={cvFile}
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          Open CV
        </a>

      </div>
    </nav>
  );
};

export default Navbar;