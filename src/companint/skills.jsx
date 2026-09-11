import { skills } from "../js/data";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      {/* SECTION HEADER */}
      <div className="skills-header">
        <span aria-hidden="true">03</span>
        <p>MY SKILLS</p>
      </div>

      {/* INTRO */}
      <div className="skills-intro">
        <p className="skills-label">TECHNOLOGIES &amp; TOOLS</p>

        <h2>
          What I use to
          <span> build.</span>
        </h2>

        <p className="skills-description">
          A collection of technologies and tools I use to build modern,
          responsive and interactive web experiences.
        </p>
      </div>

      {/* SKILLS */}
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <div className="skill-card-top">
              <span aria-hidden="true">{skill.number}</span>
              <span className="skill-arrow" aria-hidden="true">
                ↗️
              </span>
            </div>

            <h3>{skill.title}</h3>

            <div className="technology-list">
              {skill.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* CURRENTLY LEARNING */}
      <div className="learning">
        <div>
          <span className="learning-number" aria-hidden="true">
            04
          </span>
          <p className="learning-label">CURRENTLY LEARNING</p>
        </div>

        <div className="learning-content">
          <h3>
            Always learning.
            <span> Always building.</span>
          </h3>

          <p>
            Currently improving my knowledge of Next.js, Three.js, React Three
            Fiber and modern frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;