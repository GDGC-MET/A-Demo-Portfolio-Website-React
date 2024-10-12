import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden bg-black tracking tigher text-gray-299 antialiased">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  )
}

export default App
