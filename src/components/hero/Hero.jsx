"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const poems = [1, 2, 3, 4, 5]

export default function Hero() {
  const [index, setIndex] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % poems.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-[100vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Text */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 20px rgba(255, 0, 150, 0.8)",
            color: "#ff3cac",
          }}
          className="text-3xl md:text-5xl font-extrabold leading-snug tracking-tight cursor-pointer"
        >
          Engineer by degree, <br />
          Creator by passion, <br />
          Communicator by nature.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{
            scale: 1.03,
            color: "#a78bfa",
            textShadow: "0px 0px 15px rgba(167,139,250,0.7)",
          }}
          className="mt-6 text-base md:text-lg max-w-xl text-gray-300 cursor-pointer"
        >
          I design digital stories that blend{" "}
          <span className="text-pink-400">logic</span> with{" "}
          <span className="text-purple-400">emotion</span>.
          Sometimes in <span className="italic">code</span>, sometimes in{" "}
          <span className="italic">poems</span>.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 25px rgba(255,0,128,0.8)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-110 transition-transform shadow-lg text-sm md:text-base"
        >
          Let’s Create Together
        </motion.button>
      </div>

      {/* Poem Carousel */}
      <div className="relative w-full py-16 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 25px rgba(255,105,180,0.8)",
          }}
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 tracking-wider drop-shadow-lg mb-10 cursor-pointer"
        >
          ✦ My Words, My Frames ✦
        </motion.h2>

        {/* Carousel Box */}
        <div className="relative w-[90%] max-w-2xl h-72 md:h-[28rem] overflow-hidden rounded-3xl shadow-[0_0_30px_rgba(255,0,128,0.5)] border border-pink-500/30">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={`/poetic${poems[index]}.png`}
              alt={`poem-${poems[index]}`}
              initial={{ opacity: 0, x: 200, rotate: 15 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -200, rotate: -15 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </AnimatePresence>
        </div>

        {/* Futuristic Dots */}
        <div className="flex gap-3 mt-6">
          {poems.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.3 }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg scale-125"
                  : "bg-gray-600"
                }`}
            />
          ))}
        </div>
      {/* Text Below Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-4"
        >
        <motion.p
          className="text-lg md:text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 cursor-pointer"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 20px rgba(255,105,180,0.8)",
          }}
          >
          💖 Love my words, want to read more poems?
        </motion.p>

        {/* Button */}
        <motion.a
          href="/poems" // 👉 yaha tumhari Poems page ka route
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(236,72,153,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold shadow-md transition-transform"
          >
          ✨ Explore Poems →
        </motion.a>
      </motion.div>

          </div>
    </section>
  )
}
