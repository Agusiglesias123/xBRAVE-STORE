import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import{ getFirestore, doc, getDoc } from 'firebase/firestore'
// import { mFetch } from '../../../utils/mFetch'
import Loading from '../../Loading/Loading'

function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const {pid} = useParams()

  // useEffect(() => {
  //   mFetch(pid)
  //   .then(res => setProducto(res))
  //   .catch(err => console.log(err))
  //   .finally (() => setLoading(false))
  // }, [])
  useEffect(()=> {
    const dbFireStore = getFirestore()
    const queryDoc = doc(dbFireStore, 'Productos', pid)

    getDoc(queryDoc)
    .then( res => setProducto({ id : res.id, ...res.data() } ) )
    .catch( err => console.log(err) )
    .finally( () => setLoading(false) )
    
    
  }, [])


  
  return (
    <div>
      {loading ? 
        <Loading/>
        : 
        <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer