import { motion } from 'framer-motion'
import BackgroundCanvas from './BackgroundCanvas'

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
}
const child = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-inner glass brand-font"
        variants={container}
        initial="hidden"
        animate="show">
        <motion.div className="lead" variants={child}>Hi, I'm Gosukri — product designer & developer.</motion.div>
        <motion.h1 className="hero-title" variants={child}>Designing modern interfaces with a liquid-glass aesthetic.</motion.h1>
        <motion.p className="hero-sub ui-font" variants={child}>I build delightful UI experiences — animations, interactions, and components that feel alive. Scroll down to see selected projects and case studies.</motion.p>
        <motion.div className="hero-cta" variants={child}>
          <a className="btn" href="#">See my work</a>
        </motion.div>
      </motion.div>
      <div className="hero-visual">
        <div className="glass" style={{ padding: 12 }}>
          <BackgroundCanvas />
        </div>
      </div>
    </section>
  )
}
