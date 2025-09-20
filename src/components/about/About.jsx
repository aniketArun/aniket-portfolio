"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        {/* Profile / Avatar */}
        <motion.img
          src="/favicon.jpg" // apna photo ya avatar
          alt="Aniket"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          whileHover={{ scale: 1.05 }}
        />

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me ✨
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            I’m <span className="text-purple-400 font-semibold">Aniket</span>, an Engineer by degree, 
            a Creator by passion, and a Communicator by nature.  
            I craft experiences that don’t just work — they connect.  
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Beyond code, I’m a <span className="font-semibold text-pink-400">part-time poet</span> 🎭,  
            shaping thoughts into verses — because sometimes,  
            emotions deserve rhythm, not logic.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg text-white font-medium"
            href="#contact"
          >
            Let’s Connect 🚀
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
