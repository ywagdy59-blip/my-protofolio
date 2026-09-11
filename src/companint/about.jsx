const About = () => {
  return (
    <section className="about" id="about">
      {/* Section Header */}
      <div className="about-header">
        <span className="about-number" aria-hidden="true">
          01
        </span>
        <p className="about-label">ABOUT ME</p>
      </div>

      <div className="about-container">
        {/* =========================
            IMAGE
        ========================= */}

        <div className="about-image-wrapper">
          <div className="about-image-border"></div>

          {/* Temporary placeholder — swap src to "/images/youssef.jpg"
              once your real photo is in the public/images folder.
              Note: no "/public" prefix — files in /public are served
              from the root, so "/public/images/..." 404s. */}
          <img
            src="/images/youssef.png"
            alt="Youssef Wagdy"
            className="about-image"
          />

          <span className="about-image-number" aria-hidden="true">
            01 / 01
          </span>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="about-content">
          <p className="about-intro">I'M YOUSSEF WAGDY</p>

          <h2>
            Front-End
            <span>Developer</span>
          </h2>

          <p className="about-text">
            I'm a passionate Front-End Developer focused on creating modern,
            responsive and interactive web experiences. I enjoy turning ideas
            and designs into clean and functional websites.
          </p>

          <p className="about-text">
            I work with HTML, CSS, JavaScript and React, and I'm constantly
            improving my skills by building real-world projects and learning
            modern frontend technologies.
          </p>

          {/* Info */}

          <div className="about-info">
            <div className="about-info-item">
              <span>ROLE</span>
              <strong>Front-End Developer</strong>
            </div>

            <div className="about-info-item">
              <span>STACK</span>
              <strong>React / JavaScript</strong>
            </div>

            <div className="about-info-item">
              <span>FOCUS</span>
              <strong>Web Development</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;