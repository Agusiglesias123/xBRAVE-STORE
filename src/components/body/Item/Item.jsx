import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import { useCounter } from '../../../hooks/useCounter'
import './Item.scss'

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
                <div className="row foto px-4 justify-content-center ">
                    <img className="cards-ordenar pb-2 sinStock " src={producto.foto}/>
                    <div className="col-12 fw-normal ">{producto.nombre}</div>
                    <div className="col-12 fw-bold fs-5 font-mobile">${producto.precio.toLocaleString('es-AR')}</div>
                    <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de ${precioDividido}</div>
                    <div className="container center-card row pt-2 ">
                        <button onClick={()=> {onAdd(contador); notify()}} type="button" className=" mostrar-botones me-3 col-6 btn-sm">COMPRAR</button>
                        <Link className='mostrar-botones btn-ver col-6  btn-sm' to={`/detalles/${producto.id}`}>
                        <button type="button" className=" "> <i className="bi pe-1 bi-eye p"></i>VER</button>
                        </Link>
                    </div>
                </div>
          </div>
        </div> 
    </div>
      )
    }
  
  ) 

export default Item