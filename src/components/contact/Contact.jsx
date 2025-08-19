"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Coffee } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
      
      {/* Glowing background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-700/30 via-pink-500/20 to-transparent blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-8"
      >
        Let’s Build Something <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Extraordinary</span>
      </motion.h2>

      {/* Punchy one-liners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-center max-w-2xl text-lg md:text-xl text-gray-300 mb-12"
      >
        <p>💡 Let’s talk code, design, or big ideas — no small talk required.</p>
        <p>🚀 If you’re looking for someone who codes like an engineer and thinks like an entrepreneur — I’m just one click away.</p>
        <p>☕ Coffee + Code + Conversation = Collaboration. Let’s connect.</p>
      </motion.div>

      {/* Interactive Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="mailto:youremail@example.com"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 
          text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          <Mail className="w-5 h-5" /> Email Me
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 
          text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>

        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-600 
          text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 
          text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          <Coffee className="w-5 h-5" /> Coffee Chat
        </a>
      </div>
    </section>
  )
}
