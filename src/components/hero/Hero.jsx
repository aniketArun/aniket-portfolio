"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Horizontal movement with vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[100vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Hero Text */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Engineer by degree, <br />
          Creator by passion, <br />
          Communicator by nature.
        </h1>
        <p className="mt-6 text-base md:text-lg max-w-xl text-gray-300">
          I craft digital experiences that don’t just work — they connect.  
          And sometimes, I write poems — because not every story deserves code, some deserve rhythm.
        </p>
        <button className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform shadow-lg text-sm md:text-base">
          Let’s Create Together
        </button>
      </div>

      {/* Poem Section */}
      <div className="relative w-full py-12">
        <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6">
          My Words in Frames 🎞️
        </h2>

        {/* Scrollable horizontal strip */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <motion.div
            style={{ x }}
            className="flex gap-4 px-4 md:px-12"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/src/assets/poetic${i}.png`}
                alt={`poem-${i}`}
                className="h-48 w-72 md:h-64 md:w-96 object-cover rounded-xl shadow-lg flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
