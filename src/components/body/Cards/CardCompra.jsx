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
            <div className="col-md-9 col-8 col-sm-9 row m-0 ">
                <div className='col-md-7 col-6 col-sm-5 d-flex  flex-column justify-content-center'>
                    <h1 className=' pb-1'>{producto.nombre}</h1>
                    <h4 className='cant'></h4>
                    <h4 className='   pt-2 pb-1 '>${producto.precio}</h4>
                    <label className='fs-6'> ({producto.cantidad})</label>
                </div>
                <div className='col-md-5 col-6  col-sm-3 d-flex align-items-center justify-content-around'>
                    <h4 className='fw-bold'>${producto.precio}</h4>
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