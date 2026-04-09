import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { SectionHeading } from "./SectionHeading";
import "./Section.css";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="project-content">
        <div className="project-list">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={project.title}
                className={`project-feature${i % 2 !== 0 ? " project-feature--right" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75 }}
              >
                {/* Large decorative number */}
                <div className="project-feature-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="project-feature-content">
                  <div className="project-feature-header">
                    {project.subtitle && (
                      <span className="project-feature-subtitle">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="project-feature-title">{project.title}</h3>

                  {project.meta && project.meta.length > 0 && (
                    <div className="project-feature-meta">
                      {project.meta.map((m) => (
                        <p key={m.label} className="project-feature-meta-item">
                          <span className="project-feature-meta-label">
                            {m.label}:
                          </span>{" "}
                          {m.value}
                        </p>
                      ))}
                    </div>
                  )}

                  <p className="project-feature-description">
                    {project.description}
                  </p>

                  <div className="project-feature-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="project-feature-links">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="project-feature-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
