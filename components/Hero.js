import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-inner glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <motion.h1 className="hero-title" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>Design with Liquid Glass</motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{"A minimal personal site inspired by Apple's liquid glass UI — frosted, glossy, and elegant."}</motion.p>
        <div className="hero-cta">
          <motion.a className="btn" href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>See my work</motion.a>
        </div>
      </motion.div>
    </section>
  )
}
