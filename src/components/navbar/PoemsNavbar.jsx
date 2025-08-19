import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PoemsNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full px-6 md:px-12 py-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg flex justify-between items-center"
    >
      {/* Left: Name / Logo */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
      >
        Aniket Pendhari
      </motion.h1>

      {/* Right: Home Button */}
      <Link to="/" className="group">
        <motion.button
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 sm:px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 shadow-md group-hover:shadow-xl transition text-sm sm:text-base"
        >
          🏠 Home
        </motion.button>
      </Link>
    </motion.nav>
  );
}
