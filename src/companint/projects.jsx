import { projects } from "../js/data";

// رابط ممكن يتعطل لو مفيش URL
const ProjectLink = ({ href, label }) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label} ↗
    </a>
  ) : (
    <span className="link-disabled" aria-disabled="true">
      {label}
    </span>
  );

const Projects = () => {
  const list = Array.isArray(projects) ? projects : [];

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      {/* HEADER */}
      <div className="projects-header">
        <span aria-hidden="true">04</span>
        <p>SELECTED WORK</p>
      </div>

      {/* CONTENT */}
      <div className="projects-content">
        <p className="projects-label">PROJECTS</p>

        <h2 id="projects-title">
          Work in
          <span> progress.</span>
        </h2>

        <p className="projects-description">
          I'm building full-stack applications with React, Node.js, Express.js
          and MongoDB. Project details and demos will appear here as they are
          ready.
        </p>

        {/* PROJECT GRID */}
        {list.length === 0 ? (
          <p className="projects-empty">No projects yet. Coming soon.</p>
        ) : (
          <div className="projects-grid">
            {list.map((project, index) => {
              const isLive = project.status?.toUpperCase() === "LIVE";

              return (
                <article
                  className="project-card"
                  key={project.id ?? project.title}
                >
                  <div className="project-card-top">
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.status && (
                      <span
                        className={isLive ? "status status-live" : "status"}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>

                  {project.image && (
                    <div className="project-preview">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        width="640"
                        height="360"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                  <div className="project-card-center">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    {project.tags?.length > 0 && (
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="project-card-bottom">
                    <ProjectLink href={project.liveUrl} label="Live" />
                    <ProjectLink href={project.githubUrl} label="GitHub" />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;