import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/body/Hero/Hero'
import Cards from './components/body/Cards/Card'
import Footer from './components/Footer/Footer'
import Marquee from './components/body/Marquee/Marquee'
import Band from './components/body/Bands/Band'
// import ItemListContainer from './components/body/ItemListContainer/ItemListContainer'
import Carrito from './components/body/Carrito/Carrito'



function App() {

  return (
    <div className="App">
      <Marquee/>
      <NavBar/>
      <Carrito/>
      {/* <ItemListContainer greeting="Bienvenido a xBRAVE"/> */}
      <Hero/>
      <Band/>
      <Cards/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
