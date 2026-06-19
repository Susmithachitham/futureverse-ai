import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

import Hero from "../sections/Hero";
import Timeline from "../sections/Timeline";
import FutureGenerator from "../sections/FutureGenerator";
import FinalReveal from "../sections/FinalReveal";
import Creators from "../sections/Creators";

function Home() {
  return (
    <>
      <Navbar />
      <MusicPlayer />

      <Hero />
      <Timeline />
      <FutureGenerator />
      <FinalReveal />
      <Creators />
    </>
  );
}

export default Home;