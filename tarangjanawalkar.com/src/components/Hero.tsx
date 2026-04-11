import "./Hero.css";

import { motion } from "framer-motion";

const EASE_ACCEL: [number, number, number, number] = [0.55, 0.06, 0.98, 0.45];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name" aria-label="Tarang Janawalkar">
          <motion.span
            className="hero-name-line"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.95, ease: EASE_ACCEL }}
          >
            TARANG
          </motion.span>
          <motion.span
            className="hero-name-line"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.95, ease: EASE_ACCEL }}
          >
            JANAWALKAR
          </motion.span>
        </h1>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <span className="hero-role">
            Software Engineer &amp; Mathematician
          </span>
        </motion.div>
      </div>

      <div className="hero-bookmark-wrap">
        <motion.a
          href="https://farm.tarangjanawalkar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-bookmark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7 }}
          aria-label="AuraFarmer — now live"
        >
          <span className="hero-bookmark-name">🌽 AuraFarmer</span>
          <span className="hero-bookmark-live">now live</span>
        </motion.a>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
