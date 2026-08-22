import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Image,
  Sparkles,
  
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const memories = [
  {
    id: 1,
    icon: "💕",
    title: "A Beautiful Memory",
    subtitle: "Where everything started",
    image: "/images/memory1.jpeg",
    message:
      "This is the first photo of you which became one of my best memories. My pookie love.",
  },

  {
    id: 2,
    icon: "🌸",
    title: "A Beautiful Day",
    subtitle: "One of my favorites",
    image: "/images/memory2.jpeg",
    message:
      "A simple day that became a beautiful memory because I had you.",
  },

  {
    id: 3,
    icon: "🥰",
    title: "Just Us",
    subtitle: "My favorite kind of moment",
    image: "/images/memory3.jpeg",
    message:
      "Nothing fancy. Just you and me. And somehow that was everything.",
  },

  {
    id: 4,
    icon: "✨",
    title: "The Real Stuff",
    subtitle: "Another chapter",
    image: "/images/memory4.jpeg",
    message:
      "Every fight ended up bringing us closer together.",
  },

  {
    id: 5,
    icon: "🌷",
    title: "A Moment To Remember",
    subtitle: "Forever in my heart",
    image: "/images/memory5.jpeg",
    message:
      "Some moments are too beautiful to ever forget.",
  },

  {
    id: 6,
    icon: "❤️",
    title: "Forever",
    subtitle: "And counting...",
    image: "/images/memory6.jpeg",
    message:
      "Here's to everything we've shared and everything still waiting for us.",
  },
];

export default function Memories() {
  const [selectedMemory, setSelectedMemory] =
    useState(null);

  return (
    <main className="romantic-page memories-page">

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <div className="memory-title-icon">
          <Image size={25} />
        </div>

        <p className="small-romantic-text">
          CHAPTER TWO
        </p>

        <h1>
          Our
          <span>Memories</span>
        </h1>

        <p>
          Some moments deserve to be opened one at a time.
          <br />
           Click on each heart and enjoy our memories.
        </p>

      </motion.div>

      <div className="memory-buttons">

        {memories.map((memory, index) => (
          <motion.button
            key={memory.id}
            className="memory-open-button"
            onClick={() =>
              setSelectedMemory(memory)
            }
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.02,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >

            <span className="memory-button-icon">
              {memory.icon}
            </span>

            <span className="memory-button-text">
              <strong>{memory.title}</strong>

              <small>{memory.subtitle}</small>
            </span>

            <span className="click-heart">♥</span>
            

          </motion.button>
        ))}

      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="memory-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedMemory(null)
            }
          >

            <motion.div
              className="memory-modal-content"
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="memory-modal-close"
                onClick={() =>
                  setSelectedMemory(null)
                }
              >
                <X size={20} />
              </button>

              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
              />

              <div className="memory-modal-text">

                <span>
                  {selectedMemory.icon}
                </span>

                <h2>
                  {selectedMemory.title}
                </h2>

                <p>
                  {selectedMemory.message}
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="surprise-section"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
      >

        <Heart
          size={20}
          fill="currentColor"
        />

        <p>
          I saved one more little surprise
          for you...
        </p>

        <Link
          to="/surprise"
          className="surprise-button"
        >
          <Sparkles size={18} />

          <span>Open My Surprise</span>

          <Sparkles size={18} />
        </Link>

      </motion.div>

    </main>
  );
}