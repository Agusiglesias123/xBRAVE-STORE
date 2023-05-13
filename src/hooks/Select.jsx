import React from 'react'

export default function Select({ options, optionSelected, option=1}){
    return(
        <>
            {option === 1 ?
                <img src="" alt="" />
                :
                <img src="" alt="" />
            }
            <select onChange={(e)=> optionSelected(Number(e.target.value))}>
                {
                    options.map(producto => <option key={producto.id} value={producto.id}>{producto.name}</option>)
                }
            </select>
        
        
        </>
    )
}