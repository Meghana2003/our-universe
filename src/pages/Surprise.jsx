import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Surprise() {
  return (
    <main className="romantic-page surprise-page">

      <motion.div
        className="surprise-header"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >

        <Sparkles size={22} />

        <p className="small-romantic-text">
          MY LOVE FOR YOU CAN'T BE EXPRESSED
        </p>

        <h1>
          A Letter
          <span>For You </span>
        </h1>

      </motion.div>

      <motion.div
        className="love-letter"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <div className="letter-decoration">
          <Heart
            size={25}
            fill="currentColor"
          />
        </div>

        <div className="letter-top">
          <Mail size={20} />

          <span>
            A LITTLE LETTER FROM MY HEART
          </span>
        </div>

        <h2>
          My Love,
        </h2>

        <div className="letter-content">

          <p>
            If you are reading this, then you have
            made it all the way through our little
            story. I made this just to say: 
             <br /><strong className="anniversary-text">
    💕 HAPPY ANNIVERSARY 💕
  </strong>
          </p>

          <p>
            I wanted to create this little corner
            of the internet just for us. A place
            where our memories can live, where our
            story can be remembered, and where I can
            remind you of how special you are to me.
          </p>

          <p>
            Thank you for every laugh, every
            conversation, every adventure, every
            silly moment and every beautiful memory
            we've created together.
          </p>

          <p>
            There will always be more memories to
            make, more places to see and more
            chapters to write.
          </p>

          <p>
            And if I could choose one person to
            write all those chapters with...
          </p>

          <p className="letter-special">
            I would choose you Roshan
          </p>
         
          <p>
  Today, tomorrow, and in every little moment that comes after...,
  
</p>

        </div>

        <div className="letter-signature">

          <span>
            With all my love,
          </span>

          <strong>
            Forever & Always,  
          </strong>

          <strong>
           your bae ♥
          </strong>
        </div>

      </motion.div>

     <div className="letter-actions">

  <Link
    to="/final-surprise"
    className="surprise-button"
  >
    <Sparkles size={18} />

    <span>
      One Last Surprise
    </span>

    <Heart
      size={17}
      fill="currentColor"
    />
  </Link>

  <Link
    to="/"
    className="back-home-button"
  >
    <ArrowLeft size={17} />

    <span>
      Back to the beginning
    </span>
  </Link>

</div>

    </main>
  );
}