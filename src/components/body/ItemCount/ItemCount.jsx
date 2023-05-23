import React from 'react'
import './ItemCount.scss'
import { useCounter } from '../../../hooks/useCounter'
import { useCartContext } from '../../../Context/CartContext';
import { motion } from "framer-motion"




function ItemCount({ initial=1, stock=7, onAdd}) {
    const {contador, incrementar, decrementar} = useCounter(initial, 1 , stock)
    const {notify} = useCartContext()
    

    ''
    return(
      
    <div className='row py-2'>
      <div className='col-12 d-flex justify-content-center align-content-center'>
        <button className='Button ' onClick={decrementar} >-</button>
        <h4 className='Number '>{contador} </h4>
        <button className='Button' onClick={incrementar} >+</button>
      </div>
      <div className='col-12 d-flex justify-content-center align-content-center pt-2'>
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=> {onAdd(contador); notify()}} type="button" className="mostrar-botones-det  btn-sm">AGREGAR AL CARRITO</motion.button>
      </div>
    </div>
  )
}

export default ItemCount
