import { motion } from "framer-motion";
import { useGlassPointer } from "./useGlassPointer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const child = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const visualMotion = {
  initial: { opacity: 0, scale: 0.95, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
};

export default function Hero() {
  const glass = useGlassPointer(8);
  return (
    <section className="hero">
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="lead" variants={child}>
          Product designer &amp; developer
        </motion.span>
        <motion.h1 className="hero-title" variants={child}>
          Designing modern interfaces with a{" "}
          <span className="gradient-text">liquid-glass</span> aesthetic.
        </motion.h1>
        <motion.p className="hero-sub" variants={child}>
          I build delightful UI experiences — animations, interactions, and
          components that feel alive. Scroll down to see selected projects and
          case studies.
        </motion.p>
        <motion.div className="hero-cta" variants={child}>
          <a className="btn" href="#work">
            See my work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </motion.div>
        <motion.div className="hero-meta" variants={child}>
          <div>
            <strong>10+</strong>
            <span>digital launches</span>
          </div>
          <div>
            <strong>6</strong>
            <span>brand systems</span>
          </div>
          <div>
            <strong>5y</strong>
            <span>experience</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" {...visualMotion}>
        <div
          className="mockup glass card-tilt"
          onMouseMove={glass.onMouseMove}
          onMouseLeave={glass.onMouseLeave}
        >
          <span className="glass-light" />
          <div className="mockup-bar">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="mockup-url">gosukri.com</span>
          </div>
          <div className="mockup-screen">
            <div className="mockup-wall" />
            <div className="mockup-pill glass-mini">✨ Liquid Glass UI</div>
            <div className="mockup-card glass-mini">
              <b>Immersive storytelling</b>
              <small>Motion-led launches with depth, light, and clarity.</small>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
