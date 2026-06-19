import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const years = [
  "2026",
  "2035",
  "2050",
  "2075",
  "2100",
  "2126",
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
      "
    >
      <div
        className="
        flex
        justify-between
        items-center
        px-6
        py-4
        rounded-2xl
        backdrop-blur-2xl
        bg-black/30
        border
        border-white/10
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
        "
      >
        <div className="flex items-center gap-3">
          <FaRocket className="text-cyan-400" />

          <span className="font-black tracking-wider">
            FUTUREVERSE AI
          </span>
        </div>

        <div className="hidden lg:flex gap-8">
          {years.map((year) => (
            <a
              key={year}
              href={`#year-${year}`}
              className="
              text-sm
              tracking-wider
              text-gray-300
              hover:text-cyan-400
              transition-all
              "
            >
              {year}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;