import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
}
