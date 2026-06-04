import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const child = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const visualMotion = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-inner glass brand-font"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="lead ui-font" variants={child}>
          Hi, I&apos;m Gosukri — product designer &amp; developer
        </motion.div>
        <motion.h1 className="hero-title" variants={child}>
          Designing modern interfaces with a liquid-glass aesthetic.
        </motion.h1>
        <motion.p className="hero-sub ui-font" variants={child}>
          I build delightful UI experiences — animations, interactions, and
          components that feel alive. Scroll down to see selected projects and
          case studies.
        </motion.p>
        <motion.div className="hero-cta" variants={child}>
          <a className="btn" href="#work">
            See my work
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" {...visualMotion}>
        <div className="glass">
          <div className="hero-orb" />
        </div>
      </motion.div>
    </section>
  );
}
