import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import GlassFilters from "../components/GlassFilters";

const pageMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlassFilters />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} {...pageMotion}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
