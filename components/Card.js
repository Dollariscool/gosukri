import { motion } from "framer-motion";

const cardMotion = {
  whileHover: { y: -6, scale: 1.015 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export default function Card({ title, body }) {
  return (
    <motion.article className="card glass" {...cardMotion}>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}
