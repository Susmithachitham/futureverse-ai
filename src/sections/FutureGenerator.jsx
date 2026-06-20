import { useState } from "react";
import { motion } from "framer-motion";

const futureResponses = [
  {
    keywords: ["assignment", "assignments", "homework", "study"],

    year: "2035",

    role: "AI Learning Architect",

    impact: 98,

    quote:
      "Every student gained access to a mentor that never sleeps.",

    response:
      "AI mentors understand every student's learning style and automatically generate personalized study paths. Assignments become adaptive, engaging, and tailored to individual strengths.",

    route: "2026 → 2035",
  },

  {
    keywords: ["wifi", "internet", "network", "connection"],

    year: "2050",

    role: "Global Connectivity Engineer",

    impact: 97,

    quote:
      "Connectivity became as natural as air.",

    response:
      "AI-managed infrastructure eliminates connectivity failures. Information flows instantly across cities, campuses, and devices without interruptions.",

    route: "2026 → 2050",
  },

  {
    keywords: ["information", "confused", "overload"],

    year: "2075",

    role: "Neural Knowledge Explorer",

    impact: 95,

    quote:
      "Knowledge became a thought away.",

    response:
      "Neural interfaces allow students to access information instantly. Learning shifts from memorization to creativity, exploration, and innovation.",

    route: "2026 → 2075",
  },

  {
    keywords: ["placement", "job", "career", "interview"],

    year: "2100",

    role: "Interplanetary Opportunity Creator",

    impact: 99,

    quote:
      "Humans stopped searching for jobs and started creating worlds.",

    response:
      "AI creates entirely new industries and opportunities across Earth and beyond. Careers become driven by passion and imagination rather than scarcity.",

    route: "2026 → 2100",
  },

  {
    keywords: ["pressure", "stress", "mental", "anxiety"],

    year: "2126",

    role: "Humanity Wellness Guardian",

    impact: 100,

    quote:
      "The greatest achievement of AI was helping humanity thrive.",

    response:
      "Predictive wellness systems monitor health, stress, and productivity in real time. Mental wellbeing becomes a fundamental human right.",

    route: "2026 → 2126",
  },
];

function FutureGenerator() {
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const generateFuture = () => {
    if (!question.trim()) return;

    setLoading(true);

    setResult(null);

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

        impact: 95,

        quote:
          "Every challenge becomes the seed of future innovation.",

        response:
          "Humanity continues solving problems through imagination, collaboration, and artificial intelligence.",

        route: "2026 → 2150",
      };
    }

    setTimeout(() => {
      setLoading(false);

      setResult({
        userQuestion: question,

        ...found,
      });

      setQuestion("");
    }, 2200);
  };

  return (
    <section
      id="future"
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
        Future Transmission Terminal
      </p>

      <h2
        className="
        text-4xl
        md:text-7xl
        font-black
        text-center
        mt-4
        "
      >
        Talk To The Future
      </h2>

      <p
        className="
        mt-6
        text-gray-400
        text-center
        max-w-3xl
        "
      >
        Describe a student problem. FutureVerse AI will scan the timeline and
        reveal how humanity solves it.
      </p>

      <div
        className="
        mt-12
        w-full
        max-w-5xl
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >
                {!loading && !result && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">
              Try asking:
            </p>

            <div className="mt-6 space-y-3">
              <p>📚 I have assignment overload.</p>
              <p>📶 Campus WiFi is always failing.</p>
              <p>💼 I am worried about placements.</p>
              <p>⚠ Academic pressure is overwhelming.</p>
            </div>
          </div>
        )}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <h3 className="text-3xl font-black text-cyan-400">
              ⚡ Future Timeline Scan In Progress
            </h3>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>Analyzing Campus Problem...</p>
              <p>Searching Future Timeline...</p>
              <p>Connecting To Future Civilization...</p>
              <p>Generating Solution...</p>
            </div>
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Student Message */}
            <div className="flex justify-end">
              <div
                className="
                max-w-xl
                rounded-3xl
                bg-cyan-500
                text-black
                px-6
                py-4
                font-medium
                "
              >
                {result.userQuestion}
              </div>
            </div>

            {/* AI Terminal */}
            <div
              className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-black/30
              p-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <p className="text-cyan-400 uppercase tracking-[4px]">
                  Connected To Future Timeline
                </p>
              </div>

              <h3 className="text-5xl font-black mt-6">
                Year {result.year}
              </h3>

              <p className="text-cyan-400 text-xl mt-2">
                {result.role}
              </p>

              {/* Route */}
              <div
                className="
                mt-8
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                "
              >
                <p className="text-gray-400 text-sm uppercase">
                  Timeline Route
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  {result.route}
                </h4>
              </div>

              {/* Response */}
              <p
                className="
                mt-8
                text-lg
                text-gray-300
                leading-relaxed
                "
              >
                {result.response}
              </p>

              {/* Quote */}
              <blockquote
                className="
                mt-8
                border-l-4
                border-cyan-400
                pl-5
                italic
                text-cyan-200
                "
              >
                "{result.quote}"
              </blockquote>

              {/* Impact Meter */}
              <div className="mt-10">
                <div className="flex justify-between">
                  <span>Future Impact</span>

                  <span>{result.impact}%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-cyan-400"
                    style={{
                      width: `${result.impact}%`,
                    }}
                  />
                </div>
              </div>

              {/* Confidence Meter */}
              <div className="mt-8">
                <div className="flex justify-between">
                  <span>Prediction Confidence</span>

                  <span>99.8%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-green-400"
                    style={{
                      width: "99.8%",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: I have assignment stress..."
            className="
            w-full
            md:flex-1
            px-5
            py-4
            rounded-2xl
            bg-black/40
            border
            border-white/10
            outline-none
            text-white
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
            w-full
            md:w-auto
            px-8
            py-4
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            text-black
            font-bold
            "
          >
            Scan Timeline
          </button>
        </div>

      </div>
    </section>
  );
}

export default FutureGenerator;