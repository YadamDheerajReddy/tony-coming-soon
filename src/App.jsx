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
        transition={{ duration: 1.4 }}
      >
        <motion.div
          className="studioLabel"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          SINCE 2017
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          TONY'S
          <br />
          ANGEL
          <br />
          TATTOOZ
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Precision. Artistry. Permanence.
        </motion.p>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ delay: 0.7 }}
        />

        <motion.p
          className="comingSoon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          COMING SOON
        </motion.p>

        <motion.a
          href="https://www.instagram.com/tonysangeltattooz/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagramButton"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <FaInstagram />

          <span>VISIT INSTAGRAM</span>

          <HiArrowUpRight />
        </motion.a>
      </motion.div>
    </main>
  );
}