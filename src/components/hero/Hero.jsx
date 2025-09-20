"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import BookFlip from "../book-flip/BookFlip";

export default function Hero() {
  const navigate = useNavigate();
  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % poems.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-[100vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
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

        <motion.a
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 25px rgba(255,0,128,0.8)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-110 transition-transform shadow-lg text-sm md:text-base cursor-pointer"
          href="#contact"
        >
          Let’s Create Together
        </motion.a>

      </div>

      <BookFlip />
    </section>
  )
}
