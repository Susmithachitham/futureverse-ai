import { FaGithub, FaLinkedin } from "react-icons/fa";

function Creators() {
  return (
    <section
      id="creators"
      className="
      min-h-screen
      px-6
      py-24
      flex
      flex-col
      items-center
      justify-center
      "
    >
      <p className="uppercase tracking-[8px] text-cyan-400">
        Meet The Creators
      </p>

      <h2 className="text-5xl md:text-7xl font-black text-center mt-4">
        Built By Students
      </h2>

      <p className="mt-8 text-gray-400 text-center max-w-4xl">
        FutureVerse AI is an interactive documentary experience exploring
        how student challenges such as assignment overload, connectivity
        issues, placement stress, and academic pressure inspire the next
        century of innovation.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">

        {/* Susmitha */}
        <div
          className="
          p-8
          rounded-3xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          hover:border-cyan-400/30
          transition-all
          "
        >
          <p className="text-cyan-400 uppercase tracking-[4px]">
            Developer
          </p>

          <h3 className="text-3xl font-black mt-3">
            Susmitha
          </h3>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>

          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/Susmithachitham"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/susmithachitham"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Thathroopa */}
        <div
          className="
          p-8
          rounded-3xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          hover:border-cyan-400/30
          transition-all
          "
        >
          <p className="text-cyan-400 uppercase tracking-[4px]">
            Developer
          </p>

          <h3 className="text-3xl font-black mt-3">
            Thathroopa
          </h3>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>

          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/Thathrooparoopa"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/thathroopa"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Project Details */}
      <div
        className="
        mt-16
        w-full
        max-w-5xl
        p-8
        rounded-3xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        "
      >
        <h3 className="text-3xl font-black">
          Project Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <p className="text-gray-400">Team Name</p>
            <h4 className="text-xl font-semibold">
              NovaVerse
            </h4>
          </div>

          <div>
            <p className="text-gray-400">Project</p>
            <h4 className="text-xl font-semibold">
              FutureVerse AI
            </h4>
          </div>

          <div>
            <p className="text-gray-400">College</p>
            <h4 className="text-xl font-semibold">
              Saranathan College of Engineering
            </h4>
          </div>

          <div>
            <p className="text-gray-400">Hackathon</p>
            <h4 className="text-xl font-semibold">
              Gemini WebVerse Challenge 2026
            </h4>
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div
        className="
        mt-16
        w-full
        max-w-5xl
        "
      >
        <h3 className="text-3xl font-black text-center">
          Tech Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            "React",
            "Vite",
            "Framer Motion",
            "Tailwind CSS",
            "Gemini AI",
            "Lyria Music",
          ].map((tech) => (
            <div
              key={tech}
              className="
              px-5
              py-3
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black">
          FUTUREVERSE AI
        </h2>

        <p className="mt-4 text-gray-400">
          From Campus Chaos To Humanity's Future
        </p>

        <p className="mt-8 text-cyan-400">
          Built with ❤️ by Team NovaVerse
        </p>
      </div>

    </section>
  );
}

export default Creators;