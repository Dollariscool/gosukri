import { motion } from "framer-motion";

const viewportOpts = { once: true, margin: "-80px" };
const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Reveal({ children, className, delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={reveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewportOpts}
    >
      {children}
    </MotionTag>
  );
}
