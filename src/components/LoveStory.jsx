import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const storyItems = [
  {
    year: "The Beginning",
    title: "Where It All Started",
    description:
      "Every beautiful story has a beginning. Ours started with a simple moment that slowly became something much more beautiful. Cheppalante mana story ekkadi nunchi start cheyyalo nak kuda ardham avvatledhu kani lab lo ninnu chusina roje niku padipoya Roshan. Ni innocent eyes nannu baga attract chesayi maybe love at first sight anukunta. Nuv naku first msg cheyyatam, mana long converssations, nen niku stories cheppatam antha chala fast ga aipoyayi kani the best moments.",
    icon: "♡",
  },
  {
    year: "Our First Memory",
    title: "A Moment to Remember",
    description:
      "First memory ante em cheppali nitho unna anni days naku manchi memories. Kalisi navvukunna memories, edchina memories, koppadina memories nitho unna moments anni naku sweet memories. From the first conversations to the little moments we shared, every memory became a special part of our story.",
    icon: "✦",
  },
  {
    year: "Growing Together",
    title: "Two Hearts, One Journey",
    description:
      "We laughed together, cried together, supported each other, made countless memories, and discovered how beautiful it is to grow together. Ilane life long kalisi undi inka chaala memories ni cheskovali. Ipudu deggara levu kani ee gap antha future lo kalisi unnappudu cover cheyyali. Ninnu chala miss avthunna Roshan.",
    icon: "♥",
  },
  {
    year: "Today",
    title: "Still Choosing You",
    description:
      "Em jargina, enni jargina malli malli ninne choose cheskunta Roshan. Na beautiful decision vi nuvvu. Life lo the best jargindhi ante adhi nuvve My bujji kuka pilla. Enduku antha cute ga unta...ah magnetic eyes thone padesav.",
    icon: "♡",
  },
  {
    year: "Forever",
    title: "And Our Story Continues...",
    description:
      "This isn't the end of our story. It's just another beautiful chapter in a lifetime of memories we're still going to create.",
    icon: "∞",
  },
];

function StoryCard({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`story-item ${isLeft ? "story-left" : "story-right"}`}
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: 0.1,
      }}
    >
      <div className="story-card">
        <div className="story-card-icon">{item.icon}</div>

        <p className="story-year">{item.year}</p>

        <h3>{item.title}</h3>

        <p className="story-description">{item.description}</p>

        <div className="story-card-heart">
          <Heart size={14} fill="currentColor" />
        </div>
      </div>
    </motion.div>
  );
}

export default function LoveStory() {
  return (
    <section id="story" className="love-story">
      <div className="story-background-heart heart-bg-1">♥</div>
      <div className="story-background-heart heart-bg-2">♥</div>
      <div className="story-background-heart heart-bg-3">♡</div>

      <motion.div
        className="story-heading"
        initial={{ opacity: 0, y: 40 }}
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
        <div className="story-heading-icon">
          <Sparkles size={18} />
        </div>

        <p className="section-label">A JOURNEY OF LOVE</p>

        <h2>
          Our <span>Story</span>
        </h2>

        <p className="story-intro">
          Every moment with you became a memory,
          <br />
          and every memory became a part of us.
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line">
          <motion.div
            className="timeline-progress"
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>

        {storyItems.map((item, index) => (
          <div className="timeline-row" key={item.year}>
            <StoryCard item={item} index={index} />

            <motion.div
              className="timeline-dot"
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
            >
              <span>{item.icon}</span>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className="story-ending"
        initial={{
          opacity: 0,
          y: 30,
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
        <Heart
          className="ending-heart"
          size={28}
          fill="currentColor"
        />

        <p>And this is only the beginning...</p>

        <span>∞</span>
      </motion.div>
    </section>
  );
}