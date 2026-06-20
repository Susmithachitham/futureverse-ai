import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import VideoBackground from "../components/VideoBackground";

function Hero() {
  return (
    <section
      id="year-2026"
      className="relative h-screen overflow-hidden"
    >
      <VideoBackground src="/videos/hero.mp4" />

      {/* Background Year */}
      <div
        className="
        absolute
        left-4
        md:left-8
        top-1/2
        -translate-y-1/2
        text-[120px]
        sm:text-[180px]
        md:text-[320px]
        font-black
        text-white/[0.03]
        select-none
        z-10
        "
      >
        2026
      </div>

      {/* Crystal Glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[280px]
        h-[280px]
        sm:w-[350px]
        sm:h-[350px]
        md:w-[450px]
        md:h-[450px]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
        z-10
        "
      />

      {/* Floating Problems - Desktop Only */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">

        <div className="absolute top-48 left-24 text-white/60 text-xl">
          📚 Assignment Overload
        </div>

        <div className="absolute top-80 right-24 text-white/60 text-xl">
          📶 WiFi Failure
        </div>

        <div className="absolute bottom-72 left-48 text-white/60 text-xl">
          💼 Placement Stress
        </div>

        <div className="absolute bottom-48 right-32 text-white/60 text-xl">
          ⚠ Academic Pressure
        </div>

      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-10">

        <div className="absolute top-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

        <div className="absolute top-56 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse" />

        <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />

        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" />

      </div>

      {/* Main Content */}
      <div
        className="
        relative
        z-20
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        "
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
          tracking-[8px]
          md:tracking-[10px]
          text-cyan-400
          uppercase
          text-xs
          sm:text-sm
          md:text-lg
          "
        >
          YEAR 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-5xl
          sm:text-6xl
          md:text-8xl
          font-black
          mt-4
          md:mt-6
          leading-tight
          "
        >
          FUTUREVERSE
          <span className="block text-white">
            AI
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
          mt-6
          md:mt-8
          text-xl
          sm:text-2xl
          md:text-4xl
          font-light
          text-white/90
          "
        >
          From Campus Chaos
          <br />
          To Humanity's Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
          mt-8
          text-base
          sm:text-lg
          md:text-2xl
          text-gray-300
          max-w-4xl
          px-4
          "
        >
          An Interactive AI Documentary About How Student Problems Inspired
          The Next Century Of Innovation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
          mt-10
          md:mt-12
          px-8
          md:px-10
          py-4
          md:py-5
          rounded-full
          border
          border-cyan-400/40
          bg-cyan-500/10
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(0,255,255,0.3)]
          "
        >
          Begin The Journey →
        </motion.button>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
        absolute
        bottom-8
        md:bottom-10
        left-1/2
        -translate-x-1/2
        z-20
        "
      >
        <FaArrowDown
          size={30}
          className="text-cyan-400"
        />
      </motion.div>

    </section>
  );
}

export default Hero;