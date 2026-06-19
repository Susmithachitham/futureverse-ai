import { motion } from "framer-motion";

function GlassCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="
      p-6
      rounded-3xl
      backdrop-blur-xl
      bg-white/5
      border
      border-white/10
      shadow-[0_0_30px_rgba(0,255,255,0.15)]
      "
    >
      <div className="text-3xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

export default GlassCard;