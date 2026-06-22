import "./App.css";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function App() {
  return (
    <main className="hero">
      <div className="backgroundText">ANGEL</div>
      <div className="noise" />

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="studioLabel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          SINCE 2017
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1>TONY'S ANGEL TATTOOZ</h1>

        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Precision. Artistry. Permanence.
        </motion.p>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.6 }}
        />

        <motion.p
          className="comingSoon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          COMING SOON
        </motion.p>

        <motion.a
          href="https://www.instagram.com/tonysangeltattooz/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagramButton"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <FaInstagram />
          <span>INSTAGRAM</span>
          <HiArrowUpRight />
        </motion.a>
      </motion.div>
    </main>
  );
}