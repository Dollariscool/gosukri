import { motion } from 'framer-motion'

export default function Card({ title, body }) {
  return (
    <motion.article className="card glass"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  )
}

