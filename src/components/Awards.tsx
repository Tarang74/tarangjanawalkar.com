import { motion } from "framer-motion";
import { awards } from "../data/awards";
import { SectionHeading } from "./SectionHeading";
import "./Section.css";
import "./Awards.css";

export function Awards() {
  return (
    <section id="awards" className="awards section">
      <SectionHeading eyebrow="Recognition" title="Awards" />

      <div className="awards-content">
        <div className="awards-list" aria-label="Awards and recognition">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="award-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
            >
              <div className="award-row-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="award-row-head">
                <p className="award-row-title">
                  {award.title.replace(/\s*\(x10\)$/, "")}
                  {award.title.includes("(x10)") && (
                    <span className="award-row-suffix">x10</span>
                  )}
                </p>
              </div>
              <p className="award-row-year">{award.year}</p>
              <p className="award-row-description">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
