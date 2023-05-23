import { React} from 'react'
import { useCartContext } from '../../../Context/CartContext'
import { motion } from "framer-motion"

function CartWidget() {
  const {cart} =useCartContext()
  const contador = cart.reduce( (acc, item) => acc + item.cantidad, 0
  )
  return (
    
    <div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         className="btn position-relative btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-bag fs-4"></i>
            <span className="position-absolute carrito top-0   badge rounded-pill " >{contador}</span>
        </motion.button>
    </div>
  )
}

export default CartWidget