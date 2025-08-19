import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarDefault from "../navbar/NavbarDefault";

export default function Poems() {
  const poems = [
    {
      id: 1,
      title: "प्रेमाची ओढ",
      content: "तुझ्या डोळ्यांमध्ये उमटलेले स्वप्न माझं आयुष्य बनलं आहे.",
    },
    {
      id: 2,
      title: "आठवणींची रात्र",
      content: "तारकांच्या प्रकाशातही तुझ्या हास्याची चमक हरवली नाही.",
    },
    {
      id: 3,
      title: "मनाची दुनिया",
      content: "तुझ्या शब्दांत लपलेला गोडवा माझ्या मनाला शांत करतो.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % poems.length);
  };

  return (
    <>
    <NavbarDefault/>
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
      >
        “Not Poems, But Pieces of Me” ✨
      </motion.h1>

      {/* Poem Card */}
      <div className="relative w-full max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={poems[current].id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              {poems[current].title}
            </h2>
            <p
              className="text-lg leading-relaxed tracking-wide"
              style={{ fontFamily: "DevnagriFont" }}
            >
              {poems[current].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          👉 Read Next
        </button>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform text-center"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
    </>
  );
}
