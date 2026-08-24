import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heartSymbols = [
  "♥",
  "♡",
  "💕",
  "💗",
  "💖",
  "❤",
];

function createHeart(id) {
  return {
    id,
    left: Math.random() * 100,
    top: 20 + Math.random() * 80,
    size: 10 + Math.random() * 18,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 1.5,
    drift: -40 + Math.random() * 80,
    rotation: -30 + Math.random() * 60,
    symbol:
      heartSymbols[
        Math.floor(Math.random() * heartSymbols.length)
      ],
  };
}

export default function FloatingHearts() {
  // Create the first hearts when the state is initialized.
  // This avoids calling setState directly inside useEffect.
  const [hearts, setHearts] = useState(() =>
    Array.from({ length: 20 }, (_, index) =>
      createHeart(index)
    )
  );

  useEffect(() => {
    let id = 20;

    const interval = setInterval(() => {
      setHearts((current) => [
        ...current.slice(-19),
        createHeart(id++),
      ]);
    }, 900);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="floating-hearts-container"
      aria-hidden="true"
    >
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="floating-heart-particle"
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
              scale: 0.3,
              rotate: heart.rotation,
            }}
            animate={{
              opacity: [0, 0.8, 0.75, 0],
              y: "-30vh",
              x: heart.drift,
              scale: [0.3, 1, 0.9],
              rotate: heart.rotation + 25,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeOut",
            }}
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            {heart.symbol}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}