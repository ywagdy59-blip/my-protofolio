import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import cvFile from "../cv/Youssef_Wagdy_Professional_CV (1).docx (2).pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site">
      <div className="wrap">
        {/* Logo */}
        <a href="/" className="brand">
          Youssef Wagdy
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-menu${menuOpen ? " is-open" : ""}`}>
          <ul className="navlinks">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
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

            <a
              href={cvFile}
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Open CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
