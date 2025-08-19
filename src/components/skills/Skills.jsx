"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, GitBranch, Globe } from "lucide-react"

const skills = [
  {
    icon: <Code className="w-10 h-10 text-purple-400" />,
    line: "Languages I speak fluently (apart from English, Hindi, Marathi):",
    desc: "Python, C++, Java.",
  },
  {
    icon: <Globe className="w-10 h-10 text-pink-400" />,
    line: "I don’t just build websites;",
    desc: "I craft with React, Django, and Laravel.",
  },
  {
    icon: <Database className="w-10 h-10 text-green-400" />,
    line: "Databases?",
    desc: "MySQL, MongoDB — I let data flow where it belongs.",
  },
  {
    icon: <Brain className="w-10 h-10 text-yellow-400" />,
    line: "Machine learning isn’t just a buzzword —",
    desc: "I’ve made pandas and numpy dance.",
  },
  {
    icon: <GitBranch className="w-10 h-10 text-blue-400" />,
    line: "Version control?",
    desc: "Git & GitHub — because even superheroes need history.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
        >
          My <span className="text-purple-400">Skills</span> ⚡
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/30 group overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

              {/* Icon */}
              <div className="mb-4">{skill.icon}</div>

              {/* Bold Line */}
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {skill.line}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-lg">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
