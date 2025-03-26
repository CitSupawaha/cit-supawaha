"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`px-2 py-1 rounded-md text-sm font-medium font-en ${
          language === "en"
            ? "bg-gradient-to-r from-purple-700 to-pink-800 text-white"
            : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setLanguage("en")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <motion.button
        className={`px-2 py-1 rounded-md text-sm font-medium font-th ${
          language === "th"
            ? "bg-gradient-to-r from-purple-700 to-pink-800 text-white"
            : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setLanguage("th")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        TH
      </motion.button>
    </motion.div>
  )
}

export default LanguageSwitcher

