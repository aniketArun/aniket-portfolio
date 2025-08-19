"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

export default function HireMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if(!formData.name || !formData || !formData.message){
        toast.error('All Fields are required!')
        return
      }
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          // optional, helps reply directly from your inbox:
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      // alert("✅ Thanks for reaching out — I’ll get back soon!")
      toast.success('Thanks for reaching out - I will get back soon!')
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      toast.error('something went wrong try again later!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="hire-me" className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-500/30 via-purple-700/20 to-transparent blur-3xl" />
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold text-center mb-8">
        Hire <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-xl">
        I don’t just code, I <span className="font-semibold text-pink-400">engineer solutions</span>. If you’re looking for someone who builds with passion & vision — let’s make it official. ✨
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div className="relative">
          <input
            type="text" name="name" value={formData.name} onChange={handleChange} required
            className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-pink-500 text-white placeholder-transparent outline-none"
            placeholder="Your Name"
          />
          <label className="absolute left-4 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base">
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email" name="email" value={formData.email} onChange={handleChange} required
            className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-pink-500 text-white placeholder-transparent outline-none"
            placeholder="Your Email"
          />
          <label className="absolute left-4 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base">
            Your Email
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message" rows="4" value={formData.message} onChange={handleChange} required
            className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-pink-500 text-white placeholder-transparent outline-none resize-none"
            placeholder="Your Message"
          />
          <label className="absolute left-4 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base">
            Your Message
          </label>
        </div>

        <motion.button
          type="submit" disabled={loading}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/40 transition disabled:opacity-50"
        >
          <Send className="w-5 h-5" /> {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  )
}
