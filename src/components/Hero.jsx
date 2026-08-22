import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      {/* Background decorations */}
      <div className="floating-heart heart-1">♥</div>
      <div className="floating-heart heart-2">♥</div>
      <div className="floating-heart heart-3">♥</div>
      <div className="floating-heart heart-4">♥</div>
      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✧</div>
      <div className="sparkle sparkle-3">✦</div>

      <div className="hero-content">
        <motion.div
          className="small-heart"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Heart size={30} fill="currentColor" />
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OUR LOVE STORY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Forever
          <span> & </span>
          Always
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Two hearts, one beautiful story,
          <br />
          and a lifetime of memories waiting to be made.
        </motion.p>

        <motion.button
          className="story-button"
          onClick={scrollToStory}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart size={18} fill="currentColor" />
          Our Story
        </motion.button>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        onClick={scrollToStory}
      >
        <span>Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}