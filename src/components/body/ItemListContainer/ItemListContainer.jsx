import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { useCounter } from '../../../hooks/useCounter';
import ItemList from '../ItemList/ItemList';
import Loading from '../../Loading/Loading';







const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoria} = useParams()
  const {contador} = useCounter()



  useEffect(() => { 
    if(!categoria){
        const dbFireStore = getFirestore()
        const queryCollection = collection(dbFireStore, 'Productos')
    
        getDocs(queryCollection)
        .then( res => setProductos( res.docs.map( producto => ({ id : producto.id, ...producto.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally( () => setLoading(false) )
    }else{
      const dbFireStore = getFirestore()
      const queryCollection = collection(dbFireStore, 'Productos')
      const queryCollectionCategoria = query(queryCollection, where('categoria', '==', categoria))
  
      getDocs(queryCollectionCategoria)
      .then( res => setProductos( res.docs.map( producto => ({ id : producto.id, ...producto.data() }) ) ) )
      .catch( err => console.log(err) )
      .finally( () => setLoading(false) )
    }
  }, [categoria])



  return (
    <div className="Card-father container">
      <div className=' Card row d-flex justify-content-center'>
      { loading ? 
              <Loading/>
      : <ItemList productos={productos} contador={contador}   /> }
        </div>
     </div>
  )
}


 
export default ItemListContainer



