import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarDefault from './components/navbar/NavbarDefault'
import Hero from './components/hero/Hero'
import AboutMe from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/Project'
import Contact from './components/contact/Contact'
import HireMe from './components/hire-me/Hire-me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarDefault />
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <HireMe/>
    </>
  )
}

export default App
