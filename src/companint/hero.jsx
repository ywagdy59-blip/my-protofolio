import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";

// Lazy-load the 3D scene: three.js is heavy, so keep it out of the
// initial bundle and let the rest of the hero render immediately.
const Scene = lazy(() => import("./scene"));

const Hero = () => {
  return (
    <section className="hero">
      {/* LEFT */}
      <div className="hero-content">
        <p className="hero-label">FRONT-END DEVELOPER</p>

        <h1 aria-label="Youssef Wagdy">
          YOUSSEF
          <span>WAGDY</span>
        </h1>

        <p className="hero-description">
          I build modern, interactive and responsive web experiences
          using React, JavaScript and modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <NavLink to="/projects" className="hero-btn primary">
            View Projects
          </NavLink>

          <NavLink to="/contact" className="hero-btn secondary">
            Contact Me
          </NavLink>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* RIGHT — class name matches .hero-visual in styles.css
          (previously "hero-3d", which the CSS never targeted) */}
      <div className="hero-visual">
        <Suspense fallback={<div className="hero-visual-fallback" />}>
          <Scene />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;