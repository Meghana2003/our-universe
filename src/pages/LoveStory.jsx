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
    text: "Every beautiful story has a beginning. Ours started with a simple moment that slowly became something much more beautiful. Cheppalante mana story ekkadi nunchi start cheyyalo nak kuda ardham avvatledhu kani lab lo ninnu chusina roje niku padipoya Roshan. Ni innocent eyes nannu baga attract chesayi maybe love at first sight anukunta.",
  },
  {
    number: "02",
    title: "Getting Closer",
    text: "Little conversations became long conversations. Ordinary days started feeling a little more exciting. Nuv naku first msg cheyyatam, mana long conversations, nen niku stories cheppatam antha chala fast ga aipoyayi kani the best moments. We laughed together, cried together, supported each other, made countless memories, and discovered how beautiful it is to grow together. ",
  },
  {
    number: "03",
    title: "Our Memories",
    text: "Kalisi navvukunna memories, edchina memories, koppadina memories nitho unna moments anni naku sweet memories. Then came the moments we never wanted to forget the laughs, the adventures and all the little things that became ours. From the first conversations to the little moments we shared, every memory became a special part of our story. Ilane life long kalisi undi inka chaala memories ni cheskovali. Ipudu deggara levu kani ee gap antha future lo kalisi unnappudu cover cheyyali. Ninnu chala miss avthunna Roshan.",
  },
  {
    number: "04",
    title: "Still Choosing You",
    text: "Em jargina, enni jargina malli malli ninne choose cheskunta Roshan. Na beautiful decision vi nuvvu. Life lo the best jargindhi ante adhi nuvve My bujji kuka pilla. Enduku antha cute ga unta...ah magnetic eyes thone padesav. And here we are, continuing to write our story one beautiful chapter at a time.",
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