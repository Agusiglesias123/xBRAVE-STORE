import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import { useCounter } from '../../../hooks/useCounter'
import './Item.scss'
import { motion } from "framer-motion"

export const Item = memo(
    ({producto, initial=1}) => {
        const {addToCart, notify} = useCartContext()
        const onAdd = (cantidad) => {
            addToCart( { ...producto, cantidad} )
      }
      const {contador} = useCounter(initial)
      const precioDividido = (producto.precio / 6).toFixed(0)
      return (
        <div   className='col-md-6 col-lg-4  col-12 d-flex justify-content-center '>
        <div className=" row py-4 ">
            <div  className=" foto "> 
                <motion.div
                   animate={{ scale: [0.8, 1.1, 1] }}
                   transition={{ ease: "easeOut", duration: 1.2 }}
                 className="row foto px-4 justify-content-center ">
                    <img className="cards-ordenar pb-2 sinStock " src={producto.foto}/>
                    <div className="col-12 fw-normal ">{producto.nombre}</div>
                    <div className="col-12 fw-bold fs-5 font-mobile">${producto.precio.toLocaleString('es-AR')}</div>
                    <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de ${precioDividido}</div>
                    <div className="container center-card row pt-2 ">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={()=> {onAdd(contador); notify()}} type="button" className=" mostrar-botones me-3 col-6 btn-sm">COMPRAR</motion.button>
                        <Link className='mostrar-botones btn-ver   btn-sm' to={`/detalles/${producto.id}`}>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        type="button" className=" ">
                                <i className="bi pe-1 bi-eye p"></i>
                                VER
                        </motion.button>
                          </Link>
                    </div>
                </motion.div>
          </div>
        </div> 
    </div>
      )
    }
  
  ) 

export default Item