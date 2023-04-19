import { React} from 'react'
import { useCounter } from '../../../hooks/useCounter'

function CartWidget() {
    const {contador} = useCounter()
  return (
    <div>
        <button className="btn position-relative btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-bag fs-4"></i>
            <span className="position-absolute carrito top-0   badge rounded-pill " >{contador}</span>
        </button>
    </div>
  )
}

export default CartWidget