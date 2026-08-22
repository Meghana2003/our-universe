import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Mail,
  
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="romantic-page home-page">

      <div className="soft-glow glow-one"></div>
      <div className="soft-glow glow-two"></div>

      <AnimatePresence mode="wait">

        {!opened ? (

          /* =========================
             OPENING SCREEN
          ========================== */

          <motion.div
            key="opening"
            className="opening-screen"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.15,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <motion.div
              className="envelope"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >

              <div className="envelope-flap">
                💌
              </div>

              <div className="envelope-body">
                <Heart
                  size={30}
                  fill="currentColor"
                />
              </div>

            </motion.div>

            <p className="small-romantic-text">
              I MADE SOMETHING FOR YOU
            </p>

            <h1 className="opening-title">
              A Little
              <span>Surprise</span>
            </h1>

            <p className="opening-message">
              There is a little story waiting
              <br />
              for you inside...
            </p>

            <motion.button
              className="open-story-button"
              onClick={() => setOpened(true)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >

              <Mail size={19} />

              <span>
                Open Me
              </span>

              <Heart
                size={17}
                fill="currentColor"
              />

            </motion.button>

            <p className="opening-hint">
              tap to begin our little journey ♡
            </p>

          </motion.div>

        ) : (

          /* =========================
             MAIN HOME PAGE
          ========================== */

          <motion.div
            key="home"
            className="home-content"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.div
              className="main-heart"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Heart
                size={35}
                fill="currentColor"
              />
            </motion.div>

            <p className="small-romantic-text">
               ROSHAN ♡ MEGHANA
            </p>

            <h1>
              Our
              <span>Love Story</span>
            </h1>

            <p className="home-description">
              Every love story is beautiful,
              <br />
              but ours is my favorite.
            </p>

            <p className="home-date">
              ♡ Written with love, just for us ♡
            </p>

            <Link
              to="/story"
              className="romantic-button"
            >
              <span>
                Begin Our Story
              </span>

              <ArrowRight size={18} />
            </Link>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}