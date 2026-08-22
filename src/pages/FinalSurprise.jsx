import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function FinalSurprise() {
  return (
    <main className="romantic-page final-page">

      <motion.div
        className="final-content"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >

        <motion.div
          className="final-heart"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          <Heart
            size={55}
            fill="currentColor"
          />
        </motion.div>

        <div className="final-sparkles">
          <Sparkles size={22} />
        </div>

        <p className="small-romantic-text">
          AND ONE LAST THING...
        </p>

        <h1>
          Will You
          <span>Keep Choosing Me?</span>
        </h1>

        <p className="final-message">
          Through every silly moment,
          <br />
          every adventure,
          <br />
          every ordinary day...
        </p>

        <p className="final-question">
          I want to keep writing
          our story with you. ❤️
        </p>

        <motion.div
          className="final-buttons"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
        >

          <Link
            to="/"
            className="final-yes-button"
          >
            <Heart
              size={18}
              fill="currentColor"
            />

            Yes, Always ❤️
          </Link>

        </motion.div>
       
         <p className="final-message">I know you can't say NO to your cute little girl friend.</p>

        <p className="final-signature">
          Forever starts with little moments.
        </p>

        <Link
          to="/surprise"
          className="final-back-button"
        >
          <ArrowLeft size={16} />

          Back to my letter
        </Link>

      </motion.div>

    </main>
  );
}