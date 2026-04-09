import { motion } from "framer-motion";
import { education } from "../data/education";
import { SectionHeading } from "./SectionHeading";
import "./Section.css";
import "./Education.css";

export function Education() {
  return (
    <section id="education" className="education section">
      <SectionHeading eyebrow="Academic Background" title="Education" />

      <div className="education-content">
        <div className="education-timeline">
          <div className="education-line" aria-hidden="true" />

          {education.map((item, i) => (
            <motion.div
              key={`${item.degree}-${item.major}-${item.year}`}
              className="education-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <div className="education-item-dot" />

              <div className="education-item-body">
                <div className="education-item-top">
                  <h3 className="education-item-degree">{item.degree}</h3>
                </div>
                <p className="education-item-major">{item.major}</p>
                <p className="education-item-institution">{item.institution}</p>

                <div
                  className="education-item-meta"
                  aria-label="Academic results"
                >
                  <div className="education-item-stat">
                    <span className="education-item-stat-label">Grade</span>
                    <span className="education-item-stat-value">
                      {item.grade}
                    </span>
                  </div>
                  <div className="education-item-stat">
                    <span className="education-item-stat-label">WAM</span>
                    <span className="education-item-stat-value">
                      {item.wam}
                    </span>
                  </div>
                </div>

                <div className="education-item-awards">
                  {item.awards.map((award) => (
                    <span key={award} className="award">
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
