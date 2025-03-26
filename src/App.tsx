"use client"

// import { Popover, Transition } from "@headlessui/react";
import "./App.css"
import Hero from "./component/Hero"
import AboutMe from "./component/AboutMe"
import Qualification from "./component/Qualification"
import { motion } from "framer-motion"
import { LanguageProvider } from "./context/LanguageContext"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
//import Project from "./component/Project";

function App() {
  return (
    <LanguageProvider>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <AboutMe />
        <Qualification />
        {/* <Project/> */}
        <Contact/>
        <Footer/>
      </motion.div>
    </LanguageProvider>
  )
}

export default App

