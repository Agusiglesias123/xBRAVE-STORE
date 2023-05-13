import { React} from 'react'
import { useCartContext } from '../../../Context/CartContext'

function CartWidget() {
  const {cart} =useCartContext()
  const contador = cart.reduce( (acc, item) => acc + item.cantidad, 0
  )
  return (
    
    <div>
        <button className="btn position-relative btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-bag fs-4"></i>
            <span className="position-absolute carrito top-0   badge rounded-pill " >{contador}</span>
        </button>
    </div>
  )
}

export default CartWidget