import React from 'react'

function CartWidget() {
  return (
    <div>
        <button className="btn position-relative btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-bag fs-4"></i>
            <span className="position-absolute carrito top-0   badge rounded-pill ">
                            2
            </span>
        </button>
    </div>
  )
}

export default CartWidget