import React from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/body/Hero/Hero'
import Cards from './components/body/Cards/Card'
import Footer from './components/Footer/Footer'
import Marquee from './components/body/Marquee/Marquee'
import Band from './components/body/Bands/Band'
function App() {

  return (
    <div className="App">
      <Marquee/>
      <NavBar/>
      <Hero/>
      <Band/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
