import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const moments = [
  {
    number: "01",
    title: "The Beginning",
    text: "Every beautiful story has a beginning. Ours started with a simple moment that slowly became something much more beautiful. The day when I saw you in the lab that moment made me fall in love at first sight.",
  },
  {
    number: "02",
    title: "Getting Closer",
    text: "Little conversations became long conversations. Ordinary days started feeling a little more exciting. We laughed together, cried together, supported each other, made countless memories, and discovered how beautiful it is to grow together.",
  },
  {
    number: "03",
    title: "Our Memories",
    text: "Then came the moments we never wanted to forget the laughs, the adventures and all the little things that became ours. From the first conversations to the little moments we shared, every memory became a special part of our story.",
  },
  {
    number: "04",
    title: "Still Choosing You",
    text: "And here we are, continuing to write our story one beautiful chapter at a time.",
  },
];

export default function LoveStory() {
  return (
    <main className="romantic-page story-page">

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Heart
          className="page-header-heart"
          size={25}
          fill="currentColor"
        />

        <p className="small-romantic-text">
          CHAPTER ONE
        </p>

        <h1>
          How Our
          <span>Story Began</span>
        </h1>

        <p>
          Some moments become memories.
          <br />
          Some memories become forever.
        </p>
      </motion.div>

      <div className="story-timeline">

        {moments.map((moment, index) => (
          <motion.div
            className="story-card"
            key={moment.number}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
          >
            <div className="story-number">
              {moment.number}
            </div>

            <div>
              <h2>{moment.title}</h2>

              <p>{moment.text}</p>
            </div>
          </motion.div>
        ))}

      </div>

      <motion.div
        className="page-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Sparkles size={18} />

        <Link
          to="/memories"
          className="romantic-button"
        >
          <span>Open Our Memories</span>

          <ArrowRight size={18} />
        </Link>

        <Sparkles size={18} />
      </motion.div>

    </main>
  );
}