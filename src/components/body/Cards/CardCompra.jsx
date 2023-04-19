import React from 'react'
import remera from '../../../assets/remera.jpg'
import ItemCount from '../ItemCount/ItemCount'
import { mFetch } from '../../../utils/mFetch'
import { useEffect, useState } from 'react'

function CardCompra() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
  
    useEffect(() => {
      mFetch()
      // .then((res)=>{
      //   res.json()
      // })
      .then((res)=>{
        setProductos(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      .finally(()=>{
        setLoading(false)
      })
    }, [])
  return (
    <div className="col-12 ">
        { loading ? 
        <h2 className='text-center fs-4 py-5'>Cargando..</h2>
      :  productos.map(({id, nombre,precio}) => 
        <div key={id} className="row  m-0 py-3 bord">
            <div className="col-md-3 col-4 col-sm-3">
                <img className='foto' src={remera} />
            </div>
            <div className="col-md-9 col-8 col-sm-9 row m-0 ">
                <div className='col-md-7 col-6 col-sm-5 d-flex  flex-column justify-content-center'>
                    <h1 className=' pb-1'>{nombre}</h1>
                    <h4 className='cant'></h4>
                    <h4 className='   pt-2 pb-1 '>${precio}</h4>
                    <ItemCount/>
                </div>
                <div className='col-md-5 col-6  col-sm-3 d-flex align-items-center justify-content-around'>
                    <h4 className='fw-bold'>${precio}</h4>
                    <button className='' ><i className="bi bi-trash-fill icon-trash fs-5"></i></button>
                </div>
            </div>
         </div>
         )}
    </div>
  )
}

export default CardCompra