import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/body/Hero/Hero'
import Footer from './components/Footer/Footer'
import Marquee from './components/body/Marquee/Marquee'
import Band from './components/body/Bands/Band'
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer'
import Carrito from './components/body/Carrito/Carrito'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
// import Compra from './Routes/Compra'
// import Formulario from './components/body/Formulario/Formulario'
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer'
import { ToastContainer} from 'react-toastify';
import Notfound404 from './components/404notfound/Notfound404'
import { CartContextProvider } from './Context/CartContext'

function HomePage() {
  return (
    <>
      <Hero/>
      <Band/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}



function App() {

  return (
  <CartContextProvider>
              <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
           />  
    <Router className="App">
      <Marquee/>
      <NavBar/>
      <Carrito/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categoria/:categoria' element={<HomePage/>}/>
        <Route path='/detalles/:pid' element={<ItemDetailContainer/>}/>


        <Route path='/notfound' element={<Notfound404/>}/>
        <Route path='*' element={<Navigate to='/notfound'/> }/>
      </Routes>
    </Router>
  </CartContextProvider> 
  )
}

export default App
