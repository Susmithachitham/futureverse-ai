import { motion } from "framer-motion";

function SectionTitle({ year, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <p className="text-cyan-400 tracking-[8px] uppercase mb-4">
        Year {year}
      </p>

      <h2 className="text-5xl md:text-7xl font-black">
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;