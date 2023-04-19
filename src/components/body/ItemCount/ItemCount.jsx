import React from 'react'
import './ItemCount.scss'
import { useCounter } from '../../../hooks/useCounter'




function ItemCount({ initial=1, stock=7}) {
    const {contador, incrementar, decrementar} = useCounter(initial, 1 , stock)

    return(
    <div className='col-12 d-flex '>
        <button className='Button ' onClick={decrementar} >-</button>
        <h4 className='Number '>{contador} </h4>
        <button className='Button' onClick={incrementar} >+</button>
    </div>
  )
}

export default ItemCount
