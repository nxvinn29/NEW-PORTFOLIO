import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './App.css'

function App() {
  return (
    <div className="bg-white text-gray-900 scroll-smooth font-sans">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
