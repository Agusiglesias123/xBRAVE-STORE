import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const CardCheckOut = () => {
    const { cart, getTotal } = useCartContext()
    const totalFinal = getTotal().toLocaleString('es-AR')
  return (
    <div>
    {cart.map((producto, idx) =>(

    <div key={idx} className="row  m-0 py-3 bord">
        <div className="col-md-3 col-4 col-sm-3">
            <img className='foto' src={producto.foto} />
        </div>
        <div className="col-md-9 col-8 col-sm-9  ">
            <div className=''>
                <h1 className=' pb-1 fs-6'>{producto.nombre}</h1>
                <h4 className='cant'></h4>
                <label className='fs-6'> x{producto.cantidad}</label>
                <h4 className='fw-bold d-flex justify-content-end'>${producto.precio.toLocaleString('es-AR')}</h4>
            </div>
        </div>
    </div>
    )
    )}
    <hr />
    <div className='row'>
        <h1 className='col-6 d-flex justify-content-start fs-4'>Total</h1>
        <h1 className='col-6 d-flex justify-content-end fs-4 fw-bold'>${totalFinal}</h1>
    </div>
    </div>
  )
}

export default CardCheckOut