import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { SectionHeading } from "./SectionHeading";
import "./Section.css";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <SectionHeading eyebrow="Technical Stack" title="Skills" />

      <span className="corner-mark corner-mark--tl" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--tr" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--bl" aria-hidden="true">
        +
      </span>
      <span className="corner-mark corner-mark--br" aria-hidden="true">
        +
      </span>

      <div className="skills-content">
        <div className="skills-rows">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              className={`skills-row ${ci % 2 === 1 ? "skills-row--right" : "skills-row--left"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: ci * 0.05, duration: 0.5 }}
            >
              <span className="skills-row-category">{category.name}</span>

              <div className="skills-row-list">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skills-row-skill"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: ci * 0.05 + si * 0.02,
                      duration: 0.35,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
