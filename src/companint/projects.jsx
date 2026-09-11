import { projects } from "../js/data";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      {/* HEADER */}
      <div className="projects-header">
        <span aria-hidden="true">04</span>
        <p>SELECTED WORK</p>
      </div>

      {/* CONTENT */}
      <div className="projects-content">
        <p className="projects-label">PROJECTS</p>

        <h2>
          Work in
          <span> progress.</span>
        </h2>

        <p className="projects-description">
          I'm currently building and refining real-world frontend projects. New
          work will be added here soon.
        </p>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    project.status === "LIVE" ? "status status-live" : "status"
                  }
                >
                  {project.status}
                </span>
              </div>

              <div className="project-card-center">
                <div className="project-icon" aria-hidden="true">
                  +
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-bottom">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </a>
                ) : (
                  <span className="link-disabled">Live</span>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="link-disabled">GitHub</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
