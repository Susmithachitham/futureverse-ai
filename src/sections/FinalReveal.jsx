import { motion } from "framer-motion";

function FinalReveal() {
  const phases = [
  "Learn.",
  "Connect.",
  "Create.",
  "Explore.",
  "Evolve."
];
  return (
    <section
      id="final"
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
      py-32
      "
    >
      <div className="max-w-5xl">

        {phases.map((phase, index) => (
          <motion.h2
            key={phase}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.8,
            }}
            className="
            text-2xl
            md:text-5xl
            font-black
            mb-10
            text-white
            "
          >
            {phase}
          </motion.h2>
        ))}

        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="
          mt-24
          text-7xl
          md:text-9xl
          font-black
          text-cyan-400
          "
        >
          YOU.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
          mt-10
          text-xl
          md:text-2xl
          text-gray-300
          max-w-3xl
          mx-auto
          "
        >
          The Next Century Begins With Students
          Who Dare To Imagine It.
        </motion.p>

      </div>
    </section>
  );
}

export default FinalReveal;