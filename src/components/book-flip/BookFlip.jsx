"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const AutoBookFlip = () => {
  const navigate = useNavigate();
  const poems = [
    { left: "/poetic1.png", right: "/poetic2.png" },
    { left: "/poetic3.png", right: "/poetic4.png" },
    { left: "/poetic5.png", right: "/poetic1.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true)

      // Update content halfway through the flip animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % poems.length)
      }, 600) // Half of 1200ms animation

      // Reset flipping state after animation completes
      setTimeout(() => {
        setFlipping(false)
      }, 1200)
    }, 4000)

    return () => clearInterval(interval)
  }, [poems.length])

  const nextIndex = (currentIndex + 1) % poems.length

  return (
    <div className="flex flex-col items-center py-6 px-4 sm:py-8 lg:py-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 20px rgba(139,92,246,0.9)",
        }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 tracking-wider drop-shadow-lg mb-6 sm:mb-8 lg:mb-10 cursor-pointer text-center"
      >
        ✦ My Words, My Frames ✦
      </motion.h2>

      {/* Book - Mobile First Design */}
      <div
        className="relative w-full max-w-[320px] h-[220px] sm:max-w-[450px] sm:h-[300px] md:max-w-[550px] md:h-[380px] lg:max-w-[650px] lg:h-[450px] flex mx-auto"
        style={{ perspective: "2000px" }}
      >
        {/* Static Left Page */}
        <div className="relative w-1/2 h-full shadow-md rounded-l-lg sm:rounded-l-xl border-r border-gray-600/30 flex items-center justify-center 
                bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 
                shadow-[0_0_15px_rgba(139,92,246,0.4)] sm:shadow-[0_0_30px_rgba(139,92,246,0.4)] z-10 p-2 sm:p-3">
          <img
            src={poems[currentIndex].left}
            alt="left-page"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Static Right Page */}
        <div className="absolute right-0 w-1/2 h-full rounded-r-lg sm:rounded-r-xl border-l border-gray-600/30 flex items-center justify-center 
               bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 
               shadow-[0_0_20px_rgba(139,92,246,0.3)] sm:shadow-[0_0_40px_rgba(139,92,246,0.3)] z-0 p-2 sm:p-3">
          <img
            src={poems[currentIndex].right}
            alt="right-page"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Flipping Page - only visible during flip */}
        {flipping && (
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              position: "absolute",
              left: "50%",
              width: "50%",
              height: "100%",
              zIndex: 20,
            }}
            className="rounded-r-lg sm:rounded-r-xl"
          >
            {/* Front Face (current right page content) */}
            <div
              className="absolute inset-0 flex items-center justify-center 
                 bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 
                 shadow-[0_0_20px_rgba(139,92,246,0.3)] sm:shadow-[0_0_40px_rgba(139,92,246,0.3)] rounded-r-lg sm:rounded-r-xl border-l border-gray-600/30 p-2 sm:p-3"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src={poems[currentIndex].right}
                alt="flipping-page-front"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Back Face (next left page content, mirrored) */}
            <div
              className="absolute inset-0 flex items-center justify-center 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 
                 shadow-[0_0_20px_rgba(139,92,246,0.4)] sm:shadow-[0_0_40px_rgba(139,92,246,0.4)] rounded-l-lg sm:rounded-l-xl border-r border-gray-600/30 p-2 sm:p-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src={poems[nextIndex].left}
                alt="flipping-page-back"
                className="max-w-full max-h-full object-contain scale-x-[-1]"
              />
            </div>
          </motion.div>
        )}
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
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(236,72,153,0.8)",
          }}
          onClick={() => navigate("/poems")}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold shadow-md transition-transform hover:cursor-pointer"

        >
          ✨ Explore Poems →
        </motion.a>
      </motion.div>

    </div>
  )
}

export default AutoBookFlip