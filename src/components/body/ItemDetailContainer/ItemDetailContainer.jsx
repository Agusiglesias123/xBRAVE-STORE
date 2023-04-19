import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const {pid} = useParams()
  console.log(pid)

  
  return (
    <div>
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer