import { motion } from "framer-motion";
import YearAudioPlayer from "./YearAudioPlayer";
import VideoBackground from "./VideoBackground";

function TimelineCard({
  year,
  title,
  description,
  image,
  video,
  audio,
  track,
  subtitle,
  quote,
  features,
  color,
  reverse = false,
}) {
  return (
    <section
      id={`year-${year}`}
      className={`
      relative
      min-h-screen
      flex
      flex-col
      ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      items-center
      justify-center
      gap-16
      px-6
      md:px-20
      overflow-hidden
      `}
    >
      {video && <VideoBackground src={video} />}

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-black/20
        to-black/60
        z-0
        "
      />

      {/* Poster */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <img
          src={image}
          alt={title}
          className="
          w-full
          md:w-[600px]
          rounded-3xl
          opacity-90
          shadow-[0_0_50px_rgba(255,255,255,0.08)]
          "
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
        relative
        z-10
        max-w-xl
        "
      >
        <p className="uppercase tracking-[8px] text-cyan-400">
          Year {year}
        </p>

        <h2
          className={`
          text-5xl
          md:text-6xl
          font-black
          mt-4
          ${color}
          `}
        >
          {title}
        </h2>

        {/* Lyria Track */}
        <div
          className="
          mt-6
          inline-flex
          items-center
          gap-3
          px-4
          py-2
          rounded-full
          bg-white/5
          border
          border-white/10
          "
        >
          🎵 Lyria Track: {track}
        </div>

        {/* Subtitle */}
        <p
          className="
          mt-8
          text-2xl
          text-white
          font-medium
          "
        >
          {subtitle}
        </p>

        {/* Story */}
        <p
          className="
          mt-6
          text-gray-300
          text-lg
          leading-relaxed
          "
        >
          {description}
        </p>

        {/* Quote */}
        <blockquote
          className="
          mt-8
          italic
          text-xl
          text-cyan-200
          border-l-4
          border-cyan-400
          pl-4
          "
        >
          "{quote}"
        </blockquote>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {features?.map((item) => (
            <div
              key={item}
              className="
              p-4
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              text-center
              text-sm
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* Audio */}
        <YearAudioPlayer
          src={audio}
          track={track}
        />
      </motion.div>
    </section>
  );
}

export default TimelineCard;