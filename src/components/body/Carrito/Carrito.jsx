import React from 'react'
import './Carrito.scss'

function Carrito() {
  return (
    <div className=''>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">CARRITO DE COMPRAS</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3 col-3 col-sm-3">
                            <h4 className='foto'></h4>
                        </div>
                        <div className="col-md-5 col-5 col-sm-5">
                            <h1 className='fw-medium'>Remera</h1>
                            <h4 className='cant'>(1)</h4>
                            <h4 className='d-none d-md-block fw-medium'>$14000</h4>
                        </div>
                        <div className='col-md-2 col-3  col-sm-2'>
                            <h4 className='fw-medium'>$29000</h4>
                        </div>
                        <div className="col-md-2 col-1 col-sm-1">
                        <i className="bi bi-trash-fill"></i>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='row'>
                    <h5 className='pb-4 col-3  fw-medium'>Subtotal</h5> 
                    <p className='sub-title col-4'>(sin envío) :</p>
                    <div className="col-5 valor">
                        <h4 className='fw-bold fs-5'>29.000</h4>
                    </div>
                    <h5 className='pb-1 '><i className="bi bi-truck fs-5 pe-1 "></i>Elegí nuestras opciones de envío </h5>
                    <div className="col-6">
                        <input className='bord-form' type="tel" value="" placeholder='Codigo Postal' />
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
                        <h4 className='fw-bold fs-5'>29.000</h4>
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