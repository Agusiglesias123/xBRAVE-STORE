import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { mFetch } from "../../../utils/mFetch"
import { Link, useParams } from 'react-router-dom';






const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoria} = useParams()


  useEffect(() => { 
    if(!categoria){
        mFetch()
        .then((res)=>{
          setProductos(res)
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
        })
    }else{
      mFetch()
      .then((res)=>{
          setProductos(res.filter(producto =>producto.categoria === categoria))
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
        })
      }
  }, [categoria])


  console.log(categoria)

  return (
    <div className="Card-father container">
      <div className=' Card row d-flex justify-content-center'>
      { loading ? 
        <h2 className='text-center fs-4 py-5'>Cargando..</h2>
      :  productos.map(({id, nombre,precio}) => 
          <div  key={id} className='col-md-6 col-lg-4  col-12 d-flex justify-content-center'>
              <div className=" row py-4">
                  <div  className=" foto ">
                      <div className=" cards-ordenar"></div>
                      <div className="row foto px-4 justify-content-center">
                          <div className="col-12 fw-normal">{nombre}</div>
                          <div className="col-12 fw-bold fs-5 font-mobile">${precio}</div>
                          <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de $2.416</div>
                          <div className="container center-card row pt-2">
                              <button type="button" className="mostrar-botones me-3 col-6 btn-sm">COMPRAR</button>
                              <Link className='mostrar-botones btn-ver col-6  btn-sm' to={`/detalles/${id}`}>
                              <button type="button" className=" "> <i className="bi pe-1 bi-eye p"></i>VER</button>
                              </Link>
                          </div>
                      </div>
                </div>
              </div> 
          </div>)}
        </div>
     </div>
  )
}


 
export default ItemListContainer

