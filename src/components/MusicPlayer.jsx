import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import { useMusic } from "../context/MusicContext";

function MusicPlayer() {
  const { introRef } = useMusic();

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await introRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked");
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    if (playing) {
      introRef.current.pause();
    } else {
      introRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={introRef} loop>
        <source src="/music/intro.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-full
        bg-cyan-500/20
        backdrop-blur-xl
        border
        border-cyan-400/30
        "
      >
        <FaVolumeUp />
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </>
  );
}

export default MusicPlayer;