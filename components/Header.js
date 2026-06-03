import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header className="site-header glass" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="logo">Gosukri</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </nav>
    </motion.header>
  )
}

