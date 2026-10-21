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
            Full-Stack
            <span>MERN Developer</span>
          </h2>

          <p className="about-text">
            I'm a Full-Stack MERN Developer focused on building responsive web
            applications from the user interface to the server and database.
            I enjoy turning ideas into useful, reliable products.
          </p>

          <p className="about-text">
            My stack includes MongoDB, Express.js, React and Node.js. I also
            work with JavaScript, REST APIs, and responsive web design while
            continuing to grow through hands-on projects.
          </p>

          {/* Info */}

          <div className="about-info">
            <div className="about-info-item">
              <span>ROLE</span>
              <strong>Full-Stack MERN Developer</strong>
            </div>

            <div className="about-info-item">
              <span>STACK</span>
              <strong>MongoDB / Express / React / Node.js</strong>
            </div>

            <div className="about-info-item">
              <span>FOCUS</span>
              <strong>End-to-End Web Applications</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;