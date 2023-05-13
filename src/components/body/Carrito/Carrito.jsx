import React, { useEffect, useState } from 'react'
import './Carrito.scss'
// import ItemCount from '../ItemCount/ItemCount'
import logo from '../../../assets/FONDOBLANCO.png'
import CardCompra from '../Cards/CardCompra'
import { useCartContext } from '../../../Context/CartContext'

function Carrito() {
    const {getTotal} = useCartContext()
    const [showMessage, setShowMessage] = useState(false);
  
    useEffect(() => {
      if (getTotal() >= 25000) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    }, [getTotal])
  return (
    <div className=''>
        <div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">CARRITO DE COMPRAS</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="row py-2">
                <div className="col-6 d-flex px-4 pb-1">
                    <h5>
                        Producto
                    </h5>
                </div>
                <div className="col-6 d-flex justify-content-end px-4 ">
                    <h5>
                        Subtotal
                    </h5>
                </div>
            </div>

            <div className="offcanvas-body">
            <CardCompra />      
                {showMessage && 
                <div className="row pb-4 ">
                    <div className="col-8 col-sm-9 d-flex text-light p-3 align-items-center fw-bold bg-env">
                        <h5 className='fw-bold  title-envio'>
                        TENÉS ENVÍO GRATIS!
                        </h5>
                    </div>
                    <div className="col-4 col-sm-3 bg-env align-items-center d-flex">
                        <img src={logo} alt="" />
                    </div>
                </div>
                }
                <div className='row py-3'>
                    <h5 className='pb-4 col-3  fw-medium'>Subtotal</h5> 
                    <p className='sub-title col-4'>(sin envío) :</p>
                    <div className="col-5 valor">
                        <h4 className='fw-bold fs-5'>${getTotal()}</h4>
                    </div>
                    <h5 className='pb-1 '><i className="bi bi-truck fs-5 pe-1 "></i>Elegí nuestras opciones de envío </h5>
                    <div className="col-6">
                        <input className='bord-form' type="tel"  placeholder='Codigo Postal' />
                    </div>
                    <div className="col-6">
                        <button className='btn-form-enviar sub-title' type="submit">CALCULAR ENVIO</button>
                    </div>
                </div>
                <hr />
                <div className="row pb-5">
                    <div className="col-6">
                        <h1 className='fs-4 fw-bold'>Total:</h1>
                    </div>
                    <div className="col-6 valor">
                        <h4 className='fw-bold fs-5'>${getTotal()}</h4>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6 d-flex ">
                        <button className='btn-form-comprar sub-title' type="submit">INICIAR COMPRA</button>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center ">
                        <button className='sub-title pad-btn text-decoration-underline'>SEGUIR COMPRANDO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carrito