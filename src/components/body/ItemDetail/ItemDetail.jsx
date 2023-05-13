import React, { useState } from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext';

export const ItemDetail = ({producto}) => {


  const [isCantidad, setIsCantidad] = useState(false)
  
  const {addToCart, cart} = useCartContext()


  const onAdd = (cantidad) => {
    addToCart( { ... producto, cantidad} )
    setIsCantidad(true)
  
  }
  console.log(cart)


  return (
    
    <div className="container mb-5">
        <div  className="row ">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex align-content-center justify-content-center p-5">
                  <img src={producto.foto} alt="" />
              </div>
              <div  className="col-6  p-5">
                <div>
                  <div className="col-12 py-4">
                    <h1 className='fs-5 fw-bold d-flex align-content-center justify-content-center text-uppercase '>{producto.nombre}</h1>
                  </div>
                  <div className="col-12 ">
                    <h1 className='fs-5 py-2 d-flex align-content-center justify-content-center'>${producto.precio}</h1>
                  </div>
                  <div className="col-12">
                    <div  className='font d-flex  justify-content-center py-5'>
                      <div className='font-padd'>HASTA 6 CUOTAS</div>
                      <div>
                        <a className='font text-decoration-underline ' href="">VER MEDIOS DE PAGO</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 ">
                    {
                      !isCantidad ?
                      <ItemCount  onAdd={onAdd}/>
                      :
                      <div className='d-flex justify-content-center align-content-center py-2'>
                        <Link className='mostrar-botones ' to={"/"}>SEGUIR COMPRANDO</Link>
                      </div>
                    }
                  </div>
                  <div className="col-12  justify-content-center d-flex pb-2">
                    <a className='font text-decoration-underline ' href="">TALLES</a>
                  </div>
                  <div className='col-12  justify-content-center d-flex py-2'>
                      <a className='font text-decoration-underline ' href="">VER GUIA DE TALLES</a>
                  </div>
                  <div className='col-12  justify-content-center d-flex py-5'>
                    {producto.descripcion}
                  </div>
                  <div className="col-12  py-4">
                    <div className="accordion w-100 " id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            descripcion
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            descripcion
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            descripcion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail