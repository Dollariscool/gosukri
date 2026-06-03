import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header className="site-header glass" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="brand">
        <span className="logo">Gosukri</span>
        <span className="brand-note">Liquid interfaces</span>
      </div>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  )
}

