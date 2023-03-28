import React from 'react'
import './Band.scss'

function Band() {
  return (
    <div className="container">
        <div className="row father-container">
            <div className="col-lg-4 row col-12">
                <div className='col-lg-3 col-3 col-md-3 justify-content-md-center align-items-center d-flex'>
                    <i className="bi bi-truck"></i>
                </div>
                <div className="col-lg-9 col-9 chld-1 col-md-9 ">
                    <h3>Envios Gratis</h3>
                    <p>En compras superiores a $25.000</p>
                </div>
            </div>
            <div className="col-lg-4 row col-12">
                <div className='col-lg-3 col-3 col-md-3 justify-content-md-center align-items-center d-flex'>
                    <i className="bi bi-credit-card"></i>
                </div>
                <div className="col-lg-9 col-9 chld-2 col-md-9 ">
                    <h3>6 cuotas sin interes</h3>
                    <p>Con tarjetas de crédito bancarias</p>
                </div>
            </div>
            <div className="col-lg-4 row col-12">
                <div className='col-lg-3 col-3 col-md-3 justify-content-md-center align-items-center d-flex'>
                    <i className="bi bi-shield-check"></i>
                </div>
                <div className="col-lg-9 col-9 chld-3 col-md-9 ">
                    <h3>Compra de manera segura</h3>
                    <p>Protegemos tus datos</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Band