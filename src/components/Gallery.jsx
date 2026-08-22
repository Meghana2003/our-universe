import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ZoomIn,
} from "lucide-react";

const memories = [
  {
    id: 1,
    image: "/images/memory1.jpeg",
    title: "Beautiful Memory",
    date: "A beautiful story",
    description:
      "The very first photo of you that instantly became one of my favorite memories.",
  },
  {
    id: 2,
    image: "/images/memory2.jpeg",
    title: "Together",
    date: "Side by side",
    description:
      "Every moment feels a little more special when we're together.",
  },
  {
    id: 3,
    image: "/images/memory3.jpeg",
    title: "Beautiful Days",
    date: "Making memories",
    description:
      "The kind of memories we will look back on and smile about.",
  },
  {
    id: 4,
    image: "/images/memory4.jpeg",
    title: "The Real Stuff",
    date: "Another chapter",
    description:
      "Another little adventure added to our forever story.",
  },
  {
    id: 5,
    image: "/images/memory5.jpeg",
    title: "Just Us",
    date: "My favorite place",
    description:
      "Sometimes the simplest moments become our favorite ones.",
  },
  {
    id: 6,
    image: "/images/memory6.jpeg",
    title: "Forever",
    date: "And counting...",
    description:
      "Here's to all the memories we've made and all the ones still waiting for us.",
  },
];

function MemoryCard({ memory, index, onOpen }) {
  return (
    <motion.article
      className="memory-card"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
    >
      <button
        className="memory-image-button"
        onClick={() => onOpen(index)}
        aria-label={`Open ${memory.title}`}
      >
        <img
          src={memory.image}
          alt={memory.title}
          className="memory-image"
        />

        <div className="memory-overlay">
          <div className="zoom-icon">
            <ZoomIn size={22} />
          </div>
        </div>
      </button>

      <div className="memory-info">
        <div className="memory-date">
          <Heart size={12} fill="currentColor" />
          <span>{memory.date}</span>
        </div>

        <h3>{memory.title}</h3>

        <p>{memory.description}</p>
      </div>
    </motion.article>
  );
}

function Lightbox({
  memories,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const memory = memories[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image"
      >
        <X size={26} />
      </button>

      <button
        className="lightbox-navigation lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <motion.div
        className="lightbox-content"
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
        transition={{
          duration: 0.3,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={memory.image}
          alt={memory.title}
          className="lightbox-image"
        />

        <div className="lightbox-caption">
          <span>
            {selectedIndex + 1} / {memories.length}
          </span>

          <h3>{memory.title}</h3>

          <p>{memory.description}</p>
        </div>
      </motion.div>

      <button
        className="lightbox-navigation lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? memories.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === memories.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <section id="memories" className="gallery-section">
        <div className="gallery-background-heart gallery-heart-1">
          ♥
        </div>

        <div className="gallery-background-heart gallery-heart-2">
          ♡
        </div>

        <motion.div
          className="gallery-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="gallery-heading-heart">
            <Heart size={20} fill="currentColor" />
          </div>

          <p className="section-label">
            LITTLE MOMENTS, BIG MEMORIES
          </p>

          <h2>
            Our <span>Memories</span>
          </h2>

          <p className="gallery-intro">
            A collection of moments that made
            <br />
            our story a little more beautiful.
          </p>
        </motion.div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>

        <motion.div
          className="gallery-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <Heart size={18} fill="currentColor" />

          <span>Every picture tells a story.</span>

          <Heart size={18} fill="currentColor" />
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            memories={memories}
            selectedIndex={selectedIndex}
            onClose={closeLightbox}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}