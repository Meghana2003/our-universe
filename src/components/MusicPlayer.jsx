import { useEffect, useRef, useState } from "react";
import {
  Music,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SONG = {
  title: "Our Song",
  artist: "Forever & Always",
  source: "/music/our-song.mp3",
};

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem("love-song-volume");
    return savedVolume ? Number(savedVolume) : 0.65;
  });

  const [showPlayer, setShowPlayer] = useState(false);

  /*
   * Try to start the music as soon as the website opens.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const startMusic = async () => {
      try {
        await audio.play();

        hasStartedRef.current = true;
        setIsPlaying(true);
      } catch {
        /*
         * Browser blocked autoplay.
         * We'll wait for the user's first interaction.
         */
        console.log("Autoplay blocked by browser.");
      }
    };

    startMusic();

    /*
     * If autoplay is blocked, start music on the
     * first click/touch/keyboard interaction.
     */
    const startAfterInteraction = async () => {
      if (hasStartedRef.current) return;

      try {
        await audio.play();

        hasStartedRef.current = true;
        setIsPlaying(true);

        removeInteractionListeners();
      } catch (error) {
        console.log("Music could not start:", error);
      }
    };

    const removeInteractionListeners = () => {
      window.removeEventListener(
        "click",
        startAfterInteraction
      );

      window.removeEventListener(
        "touchstart",
        startAfterInteraction
      );

      window.removeEventListener(
        "keydown",
        startAfterInteraction
      );
    };

    window.addEventListener(
      "click",
      startAfterInteraction,
      { once: true }
    );

    window.addEventListener(
      "touchstart",
      startAfterInteraction,
      { once: true }
    );

    window.addEventListener(
      "keydown",
      startAfterInteraction,
      { once: true }
    );

    return () => {
      removeInteractionListeners();
    };
  }, []);

  /*
   * Keep volume synchronized.
   */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    localStorage.setItem(
      "love-song-volume",
      String(volume)
    );
  }, [volume]);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();

      hasStartedRef.current = true;
      setIsPlaying(true);
    } catch (error) {
      console.log("Unable to play music:", error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    setIsPlaying(false);
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      await playMusic();
    }

    setShowPlayer(true);
  };

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
    } else {
      setVolume(0.65);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={SONG.source}
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={(event) => {
          /*
           * Extra protection in case loop is disabled
           * or the browser reaches the end.
           */
          event.currentTarget.currentTime = 0;
          event.currentTarget.play().catch(() => {});
        }}
      />

      {/* Floating music button */}
      <motion.button
        className={`music-floating-button ${
          isPlaying ? "music-playing" : ""
        }`}
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Pause music"
            : "Play music"
        }
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <span className="music-button-ring">
          {isPlaying ? (
            <Music size={21} />
          ) : (
            <Play
              size={21}
              fill="currentColor"
            />
          )}
        </span>

        {isPlaying && (
          <span className="music-waves">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        )}
      </motion.button>

      {/* Expanded music player */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className="music-player"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
          >
            <div className="music-player-icon">
              <motion.div
                animate={
                  isPlaying
                    ? { rotate: 360 }
                    : { rotate: 0 }
                }
                transition={{
                  duration: 6,
                  repeat: isPlaying
                    ? Infinity
                    : 0,
                  ease: "linear",
                }}
              >
                <Music size={22} />
              </motion.div>
            </div>

            <div className="music-player-info">
              <span className="music-player-label">
                NOW PLAYING
              </span>

              <strong>{SONG.title}</strong>

              <small>{SONG.artist}</small>

              <div className="music-controls">
                <button
                  onClick={toggleMusic}
                  aria-label={
                    isPlaying
                      ? "Pause music"
                      : "Play music"
                  }
                >
                  {isPlaying ? (
                    <Pause
                      size={16}
                      fill="currentColor"
                    />
                  ) : (
                    <Play
                      size={16}
                      fill="currentColor"
                    />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={
                    volume > 0
                      ? "Mute music"
                      : "Unmute music"
                  }
                >
                  {volume > 0 ? (
                    <Volume2 size={16} />
                  ) : (
                    <VolumeX size={16} />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume"
                />
              </div>
            </div>

            <button
              className="music-player-close"
              onClick={() =>
                setShowPlayer(false)
              }
              aria-label="Close music player"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}