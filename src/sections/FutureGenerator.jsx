import { useState } from "react";
import { motion } from "framer-motion";

const futureResponses = [
  {
    keywords: ["assignment", "assignments", "homework", "study"],
    year: "2035",
    role: "AI Learning Architect",
    response:
      "By 2035, AI mentors understand your learning style and help you complete assignments through personalized guidance. Instead of spending hours searching for resources, your AI companion explains concepts instantly and creates a customized study plan for you.",
  },

  {
    keywords: ["wifi", "internet", "network", "connection"],
    year: "2050",
    role: "Global Connectivity Engineer",
    response:
      "By 2050, connectivity becomes invisible. AI-powered networks automatically deliver information wherever you are. Students never experience WiFi failures because intelligent systems continuously optimize communication infrastructure.",
  },

  {
    keywords: ["information", "too much", "confused", "overload"],
    year: "2075",
    role: "Neural Knowledge Explorer",
    response:
      "By 2075, neural interfaces allow humans to access knowledge instantly. Instead of reading thousands of pages, information flows directly into your mind, helping you learn faster and focus on creativity.",
  },

  {
    keywords: ["placement", "job", "career", "interview"],
    year: "2100",
    role: "Interplanetary Opportunity Creator",
    response:
      "By 2100, people no longer compete for limited jobs. AI helps create entirely new industries, cities, and worlds. Opportunities are generated rather than searched for.",
  },

  {
    keywords: ["pressure", "stress", "mental", "anxiety"],
    year: "2126",
    role: "Humanity Wellness Guardian",
    response:
      "By 2126, AI predicts stress before it becomes a problem. Personalized wellness systems help people maintain balance, health, productivity, and happiness throughout life.",
  },
];

function FutureGenerator() {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);

  const generateFuture = () => {
    if (!question.trim()) return;

    let found = null;

    for (const item of futureResponses) {
      if (
        item.keywords.some((keyword) =>
          question.toLowerCase().includes(keyword)
        )
      ) {
        found = item;
        break;
      }
    }

    if (!found) {
      found = {
        year: "2150",
        role: "Future Innovator",
        response:
          "Every challenge faced by students becomes the inspiration for future innovation. The future belongs to those who dare to imagine solutions.",
      };
    }

    setChat([
      {
        type: "user",
        text: question,
      },
      {
        type: "bot",
        year: found.year,
        role: found.role,
        text: found.response,
      },
    ]);

    setQuestion("");
  };

  return (
    <section
      id="future"
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      px-6
      py-24
      "
    >
      <p className="uppercase tracking-[8px] text-cyan-400">
        Gemini Future Simulation Engine
      </p>

      <h2 className="text-5xl md:text-7xl font-black text-center mt-4">
        Ask The Future
      </h2>

      <p className="mt-6 text-gray-400 text-center max-w-3xl">
        Tell us a problem you face today. FutureVerse AI will predict how
        humanity solves it in the future.
      </p>

      <div
        className="
        mt-12
        w-full
        max-w-4xl
        rounded-3xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        "
      >
        <div className="space-y-6 min-h-[300px]">

          {chat.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              <p>Try asking:</p>

              <div className="mt-6 space-y-3">
                <p>
                  💬 I have problems completing assignments.
                </p>

                <p>
                  💬 Campus WiFi is always failing.
                </p>

                <p>
                  💬 I am worried about placements.
                </p>

                <p>
                  💬 Academic pressure is overwhelming.
                </p>
              </div>
            </div>
          )}

          {chat.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {message.type === "user" ? (
                <div className="flex justify-end">
                  <div
                    className="
                    max-w-lg
                    px-6
                    py-4
                    rounded-3xl
                    bg-cyan-500
                    text-black
                    font-medium
                    "
                  >
                    {message.text}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start">
                  <div
                    className="
                    max-w-2xl
                    px-6
                    py-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-cyan-400/20
                    "
                  >
                    <p className="text-cyan-400 tracking-[4px] uppercase">
                      Year {message.year}
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      {message.role}
                    </h3>

                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {message.text}
                    </p>

                    <div
                      className="
                      mt-6
                      px-4
                      py-3
                      rounded-xl
                      bg-cyan-500/10
                      border
                      border-cyan-400/20
                      "
                    >
                      🤖 Gemini Prediction Confidence: 99.8%
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: I have a problem with assignments..."
            className="
            flex-1
            px-5
            py-4
            rounded-2xl
            bg-black/40
            border
            border-white/10
            outline-none
            "
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateFuture();
              }
            }}
          />

          <button
            onClick={generateFuture}
            className="
            px-8
            py-4
            rounded-2xl
            bg-cyan-500
            text-black
            font-bold
            "
          >
            Ask
          </button>
        </div>
      </div>
    </section>
  );
}

export default FutureGenerator;