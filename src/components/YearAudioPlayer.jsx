import { useRef, useState } from "react";
import { FaPlay, FaPause, FaWaveSquare } from "react-icons/fa";
import { useMusic } from "../context/MusicContext";

function YearAudioPlayer({ src, track, color = "cyan" }) {
  const audioRef = useRef(null);

  const { pauseIntro, playIntro } = useMusic();

  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!playing) {
      pauseIntro();

      audioRef.current.play();

      setPlaying(true);
    } else {
      audioRef.current.pause();

      playIntro();

      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
      </audio>

      <div
        className="
        mt-8
        inline-flex
        items-center
        gap-4
        px-5
        py-3
        rounded-2xl
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        "
      >
        <FaWaveSquare className="text-cyan-400" />

        <div>
          <p className="text-xs uppercase tracking-[4px] text-gray-400">
            Lyria Soundtrack
          </p>

          <p className="font-semibold">
            {track}
          </p>
        </div>

        <button
          onClick={toggleAudio}
          className="
          ml-2
          p-3
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-400/20
          hover:scale-105
          transition-all
          "
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
}

export default YearAudioPlayer;