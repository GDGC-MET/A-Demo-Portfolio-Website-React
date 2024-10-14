import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Awards from './components/Awards.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden bg-black tracking tigher text-gray-299 antialiased">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Projects/>
        <Skills/>
        <Awards/>
        <Testimonials/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
