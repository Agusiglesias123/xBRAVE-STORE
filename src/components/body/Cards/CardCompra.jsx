import React, { memo } from 'react'
import { useCartContext } from '../../../Context/CartContext'

function CardCompra() {
  const { cart, removeItem } = useCartContext()
  return (
    <div>
      {cart.map((producto, idx) =>(
        <div key={idx} className="row  m-0 py-3 bord">
            <div className="col-md-3 col-4 col-sm-3">
                <img className='foto' src={producto.foto} />
            </div>
            <div className="col-md-9 col-8 col-sm-9 ">
                <div className='col-12'>
                    <h1 className=' pb-1'>{producto.nombre}</h1>
                    <h4 className='cant'>({producto.cantidad})</h4>

                </div>
                <div className='col-12 d-flex justify-content-end align-items-center'>
                    <h4 className='fw-bold pe-1'>${producto.precio.toLocaleString('es-AR')}</h4>
                    <button onClick={()=> removeItem(producto.id)} ><i className="bi bi-trash-fill icon-trash fs-5"></i></button>
                </div>
            </div>
         </div>
      )
      )}
    </div>

  )
}

export default memo(CardCompra)