import { Routes, Route } from "react-router-dom"
import NavbarDefault from './components/navbar/NavbarDefault'
import Hero from './components/hero/Hero'
import AboutMe from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/Project'
import Contact from './components/contact/Contact'
import HireMe from './components/hire-me/Hire-me'
import Poems from "./components/poems/Poems"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <NavbarDefault />
              <Hero />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
              <HireMe />
            </>
          }
        />

        {/* Poems Page */}
        <Route path="/poems" element={<Poems />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
