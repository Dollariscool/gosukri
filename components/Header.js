import { motion } from "framer-motion";

const headerMotion = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Header() {
  return (
    <motion.header className="site-header glass" {...headerMotion}>
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
  );
}
